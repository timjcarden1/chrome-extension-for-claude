// Content script that runs on claude.ai
let feedbackPopup = null;
let currentSelection = null;

// Create the feedback popup element
function createFeedbackPopup() {
    const popup = document.createElement('div');
    popup.id = 'claude-feedback-popup';
    popup.innerHTML = `
    <input 
      type="text" 
      id="claude-feedback-input" 
      placeholder="Type your feedback and press Enter..."
      autocomplete="off"
    />
    <div class="feedback-popup-hint">Press Enter to save • Esc to cancel</div>
  `;
    document.body.appendChild(popup);
    return popup;
}

// Position the popup near the selected text
function positionPopup(popup, selection) {
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    // Position below the selection
    let top = rect.bottom + window.scrollY + 10;
    let left = rect.left + window.scrollX;

    // Adjust if popup would go off-screen
    popup.style.top = `${top}px`;
    popup.style.left = `${left}px`;
    popup.style.display = 'block';

    // Focus the input
    const input = popup.querySelector('#claude-feedback-input');
    setTimeout(() => input.focus(), 10);
}

// Show the feedback popup
function showFeedbackPopup(selection) {
    const selectedText = selection.toString().trim();
    if (!selectedText) return;

    currentSelection = selectedText;

    if (!feedbackPopup) {
        feedbackPopup = createFeedbackPopup();
    }

    positionPopup(feedbackPopup, selection);
}

// Hide the feedback popup
function hideFeedbackPopup() {
    if (feedbackPopup) {
        feedbackPopup.style.display = 'none';
        const input = feedbackPopup.querySelector('#claude-feedback-input');
        input.value = '';
    }
    currentSelection = null;
}

// Save feedback to storage
function saveFeedback(feedback) {
    if (!feedback || !currentSelection) return;

    const feedbackItem = {
        id: Date.now(),
        text: currentSelection,
        feedback: feedback,
        timestamp: new Date().toISOString()
    };

    chrome.storage.local.get(['feedbackItems'], (result) => {
        const items = result.feedbackItems || [];
        items.push(feedbackItem);
        chrome.storage.local.set({ feedbackItems: items }, () => {
            // Notify side panel to update
            chrome.runtime.sendMessage({
                type: 'FEEDBACK_ADDED',
                item: feedbackItem
            });

            // Automatically open the side panel
            chrome.runtime.sendMessage({
                type: 'OPEN_SIDE_PANEL'
            });
        });
    });

    hideFeedbackPopup();
}

// Listen for keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Command+I (Mac) or Ctrl+I (Windows/Linux)
    if ((e.metaKey || e.ctrlKey) && e.key === 'i') {
        const selection = window.getSelection();
        if (selection && selection.toString().trim()) {
            e.preventDefault();
            showFeedbackPopup(selection);
        }
    }

    // Escape to close popup
    if (e.key === 'Escape' && feedbackPopup && feedbackPopup.style.display === 'block') {
        hideFeedbackPopup();
    }
});

// Handle input in the popup
document.addEventListener('keydown', (e) => {
    const input = document.querySelector('#claude-feedback-input');
    if (!input || document.activeElement !== input) return;

    if (e.key === 'Enter') {
        e.preventDefault();
        const feedback = input.value.trim();
        if (feedback) {
            saveFeedback(feedback);
        }
    }
});

// Close popup when clicking outside
document.addEventListener('mousedown', (e) => {
    if (feedbackPopup &&
        feedbackPopup.style.display === 'block' &&
        !feedbackPopup.contains(e.target)) {
        hideFeedbackPopup();
    }
});

console.log('Claude Feedback Collector: Content script loaded');
