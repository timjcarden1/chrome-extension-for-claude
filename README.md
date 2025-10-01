# AI Chat Feedback Collector

A Chrome extension that streamlines collecting feedback on text in AI conversations. Works with **Claude**, **ChatGPT**, and **Grok**. Highlight text, press a keyboard shortcut, add your feedback, and copy everything at once when you're ready.

## ✨ Features

- 🎯 **Quick Feedback**: Highlight text and press `⌘I` (Mac) or `Ctrl+I` (Windows/Linux)
- 💬 **Inline Input**: Add feedback in an elegant popup right next to your selection
- 📋 **Auto-Open Panel**: Side panel opens automatically when you save feedback
- 📝 **Keyboard Shortcuts**: Copy (`⌘E`), Clear (`⌘⌫`), Close panel (`Esc`)
- 🗑️ **Easy Management**: Delete individual items or clear all at once
- ⚡ **Zero Friction**: No more copy-pasting text back and forth

## 🚀 Installation

### Option 1: Load Unpacked (Developer Mode)

1. **Download this extension**
   - Clone or download this repository to your computer

2. **Open Chrome Extensions**
   - Navigate to `chrome://extensions/` in your Chrome browser
   - Or click the puzzle icon → "Manage Extensions"

3. **Enable Developer Mode**
   - Toggle "Developer mode" in the top-right corner

4. **Load the Extension**
   - Click "Load unpacked"
   - Select the `chrome-extension-for-claude` folder
   - The extension icon should appear in your toolbar

### Option 2: Chrome Web Store (Coming Soon)
This extension will be published to the Chrome Web Store soon for easier installation.

## 📖 How to Use

### Step 1: Open the Side Panel
1. Go to any supported AI chat platform:
   - [Claude](https://claude.ai)
   - [ChatGPT](https://chatgpt.com)
   - [Grok](https://grok.com)
2. Click the extension icon in your Chrome toolbar
3. The feedback collector side panel will open on the right

### Step 2: Add Feedback
1. In your AI conversation, highlight any text you want to give feedback on
2. Press `⌘I` (Mac) or `Ctrl+I` (Windows/Linux)
3. A small input box will appear near your selection
4. Type your feedback and press `Enter`
5. The side panel will automatically open and your feedback is saved!

### Step 3: Copy & Paste
1. Continue adding feedback for all the text you want to comment on
2. When done, use the side panel shortcuts:
   - **Copy All**: `⌘E` (Mac) / `Ctrl+E` (Windows/Linux) or click "📋 Copy All"
   - **Clear All**: `⌘⌫` (Mac) / `Ctrl+Backspace` (Windows/Linux) or click "🗑️ Clear All"
   - **Close Panel**: Press `Esc`
3. Paste the feedback into the AI's reply box
4. Clear all to start fresh for the next round

## 🎨 What It Looks Like

**Feedback Popup:**
- Appears right below your highlighted text
- Clean, non-intrusive design
- Quick keyboard navigation (Enter to save, Esc to cancel)

**Side Panel:**
- Shows all your feedback items with timestamps
- Highlighted text in yellow, your feedback in purple
- Easy-to-read formatting optimized for reviewing

**Copied Format:**
```
[1] HIGHLIGHTED TEXT:
The original text you highlighted...

FEEDBACK:
Your feedback comment here...

---

[2] HIGHLIGHTED TEXT:
Another piece of text...

FEEDBACK:
Another feedback comment...
```

## 🔧 Troubleshooting

### Extension not working?
- Make sure you're on a supported site: `claude.ai`, `chatgpt.com`, or `grok.com`
- Refresh the page after installing the extension
- Check that the extension is enabled in `chrome://extensions/`

### Keyboard shortcut not working?
- Make sure you've highlighted text first
- Check if another extension is using the same shortcut
- Go to `chrome://extensions/shortcuts` to customize

### Side panel not showing?
- Click the extension icon in your toolbar
- Make sure you've granted necessary permissions
- Try reloading the extension

## 🛠️ Technical Details

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Permissions**: Storage (to save feedback), Side Panel, Active Tab
- **Storage**: Uses Chrome's local storage (data stays on your device)
- **Privacy**: No data is sent anywhere; everything stays local

## 📝 Development

Want to modify this extension?

1. Edit the files:
   - `manifest.json` - Extension configuration
   - `content.js` - Handles text selection and popup
   - `sidepanel.html/js` - Side panel interface
   - `styles.css` - Popup styling

2. Reload the extension:
   - Go to `chrome://extensions/`
   - Click the refresh icon on the extension card

## 🤝 Contributing

Found a bug or have a feature request? Feel free to:
- Open an issue
- Submit a pull request
- Share your feedback

## 📄 License

MIT License - feel free to use and modify as needed!

## 🎯 Tips for Best Results

- **Keep feedback concise**: Short, actionable feedback works best
- **Use numbering**: The extension automatically numbers items when copying
- **Review before copying**: Check the side panel to make sure you got everything
- **Clear regularly**: Start each feedback session with a clean slate
- **Note**: Using `⌘I` (or `Ctrl+I`) may conflict with italic formatting in some contexts, but works great for AI chats!
- **Side Panel Shortcuts**:
  - `⌘E` (Mac) or `Ctrl+E` (Windows) - Copy all feedback
  - `⌘⌫` (Mac) or `Ctrl+Backspace` (Windows) - Clear all feedback
  - `Esc` - Close the side panel

---

Made with 💜 for better AI chat workflows
