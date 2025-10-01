// Background service worker to handle side panel opening
chrome.action.onClicked.addListener((tab) => {
    // Open the side panel when extension icon is clicked
    chrome.sidePanel.open({ windowId: tab.windowId });
});

// Also allow opening side panel from any supported AI chat tab automatically
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        const supportedSites = ['claude.ai', 'chat.openai.com', 'chatgpt.com', 'grok.com'];
        const isSupported = supportedSites.some(site => tab.url.includes(site));

        if (isSupported) {
            // Enable the side panel for supported AI chat tabs
            await chrome.sidePanel.setOptions({
                tabId,
                path: 'sidepanel.html',
                enabled: true
            });
        }
    }
});

// Listen for messages to open or close side panel
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'OPEN_SIDE_PANEL') {
        // Get the current window and open side panel
        chrome.windows.getCurrent((window) => {
            chrome.sidePanel.open({ windowId: window.id });
        });
    }

    if (message.type === 'CLOSE_SIDE_PANEL') {
        // Close the side panel by disabling it temporarily
        chrome.windows.getCurrent(async (window) => {
            chrome.tabs.query({ active: true, windowId: window.id }, async (tabs) => {
                if (tabs[0]) {
                    await chrome.sidePanel.setOptions({
                        tabId: tabs[0].id,
                        enabled: false
                    });
                    // Re-enable it immediately so it can be opened again
                    setTimeout(async () => {
                        await chrome.sidePanel.setOptions({
                            tabId: tabs[0].id,
                            enabled: true
                        });
                    }, 100);
                }
            });
        });
    }
});

console.log('Claude Feedback Collector: Background script loaded');
