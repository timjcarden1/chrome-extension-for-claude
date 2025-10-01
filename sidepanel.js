// Side panel script
let feedbackItems = [];

// Load feedback items from storage
function loadFeedback() {
    chrome.storage.local.get(['feedbackItems'], (result) => {
        feedbackItems = result.feedbackItems || [];
        renderFeedback();
    });
}

// Format timestamp
function formatTimestamp(isoString) {
    const date = new Date(isoString);
    const now = new Date();
    const diff = now - date;

    // Less than 1 minute
    if (diff < 60000) {
        return 'Just now';
    }

    // Less than 1 hour
    if (diff < 3600000) {
        const minutes = Math.floor(diff / 60000);
        return `${minutes} min ago`;
    }

    // Less than 24 hours
    if (diff < 86400000) {
        const hours = Math.floor(diff / 3600000);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }

    // Show date
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}

// Render feedback items
function renderFeedback() {
    const list = document.getElementById('feedback-list');
    const emptyState = document.getElementById('empty-state');
    const copyBtn = document.getElementById('copy-all-btn');
    const clearBtn = document.getElementById('clear-all-btn');
    const countBadge = document.getElementById('count-badge');

    // Update count
    countBadge.textContent = feedbackItems.length;

    if (feedbackItems.length === 0) {
        emptyState.style.display = 'block';
        list.innerHTML = '';
        copyBtn.disabled = true;
        clearBtn.disabled = true;
        return;
    }

    emptyState.style.display = 'none';
    copyBtn.disabled = false;
    clearBtn.disabled = false;

    // Render items (newest first)
    list.innerHTML = feedbackItems.slice().reverse().map((item, index) => `
    <div class="feedback-item" data-id="${item.id}">
      <div class="feedback-header">
        <span class="feedback-timestamp">${formatTimestamp(item.timestamp)}</span>
        <button class="delete-btn" data-id="${item.id}" title="Delete">×</button>
      </div>
      <div class="feedback-label">Highlighted Text</div>
      <div class="highlighted-text">${escapeHtml(item.text)}</div>
      <div class="feedback-label">Your Feedback</div>
      <div class="feedback-text">${escapeHtml(item.feedback)}</div>
    </div>
  `).join('');

    // Add delete button listeners
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            deleteFeedback(id);
        });
    });
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Delete a feedback item
function deleteFeedback(id) {
    feedbackItems = feedbackItems.filter(item => item.id !== id);
    chrome.storage.local.set({ feedbackItems }, () => {
        renderFeedback();
    });
}

// Copy all feedback to clipboard
function copyAllFeedback() {
    if (feedbackItems.length === 0) return;

    // Format feedback
    const sections = feedbackItems.map((item, index) => {
        return `Section ${index + 1}:\n\n${item.text}\n\nFeedback ${index + 1}:\n\n${item.feedback}`;
    }).join('\n\n');

    const formatted = `FEEDBACK:\n\n${sections}`;

    navigator.clipboard.writeText(formatted).then(() => {
        showToast('✓ Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
        showToast('Failed to copy', 'error');
    });
}

// Clear all feedback
function clearAllFeedback() {
    feedbackItems = [];
    chrome.storage.local.set({ feedbackItems: [] }, () => {
        renderFeedback();
        showToast('All feedback cleared');
    });
}

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    if (type === 'error') {
        toast.style.background = '#ef4444';
    }

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}

// Event listeners
document.getElementById('copy-all-btn').addEventListener('click', copyAllFeedback);
document.getElementById('clear-all-btn').addEventListener('click', clearAllFeedback);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Cmd+E (Mac) or Ctrl+E (Windows/Linux) to copy all
    if ((e.metaKey || e.ctrlKey) && !e.shiftKey && !e.altKey && e.key === 'e') {
        e.preventDefault();
        copyAllFeedback();
    }

    // Cmd+Backspace (Mac) or Ctrl+Backspace (Windows/Linux) to clear all
    if ((e.metaKey || e.ctrlKey) && !e.shiftKey && !e.altKey && e.key === 'Backspace') {
        e.preventDefault();
        clearAllFeedback();
    }

    // Escape to close the side panel
    if (e.key === 'Escape') {
        e.preventDefault();
        // Send message to background to close side panel
        chrome.runtime.sendMessage({ type: 'CLOSE_SIDE_PANEL' });
    }
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'FEEDBACK_ADDED') {
        loadFeedback();
    }
});

// Initial load
loadFeedback();
