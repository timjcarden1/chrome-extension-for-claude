// Background service worker to handle side panel opening
chrome.action.onClicked.addListener((tab) => {
    // Open the side panel when extension icon is clicked
    chrome.sidePanel.open({ windowId: tab.windowId });
});

// Also allow opening side panel from any claude.ai tab automatically
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url && tab.url.includes('claude.ai')) {
        // Enable the side panel for claude.ai tabs
        await chrome.sidePanel.setOptions({
            tabId,
            path: 'sidepanel.html',
            enabled: true
        });
    }
});

console.log('Claude Feedback Collector: Background script loaded');
