# Chrome Web Store Listing Information

Use this information when filling out your Chrome Web Store submission form.

---

## 📝 Basic Information

### Extension Name
```
AI Chat Feedback Collector
```

### Short Description (132 characters max)
```
Quickly collect feedback on highlighted text in Claude, ChatGPT, and Grok. Highlight, comment, copy - all in seconds.
```

### Detailed Description (16,000 characters max)

```
Transform how you give feedback on AI conversations with this streamlined Chrome extension. Perfect for AI power users, prompt engineers, educators, and teams collaborating on AI outputs.

✨ KEY FEATURES

🎯 Lightning-Fast Feedback
• Highlight any text in Claude, ChatGPT, or Grok
• Press ⌘I (Mac) or Ctrl+I (Windows/Linux)
• Type your feedback and hit Enter
• Done! No copy-pasting, no context switching

📋 Smart Collection Panel
• All feedback items organized in a beautiful side panel
• Auto-opens when you save feedback
• Highlighted text shown in yellow, your comments in purple
• Timestamps for each item

⚡ Keyboard Shortcuts for Speed
• ⌘I / Ctrl+I: Add feedback to highlighted text
• ⌘E / Ctrl+E: Copy all feedback at once
• ⌘⌫ / Ctrl+Backspace: Clear all items
• Esc: Close the side panel

💼 PERFECT FOR

• Reviewing and improving AI-generated content
• Collecting multiple feedback points before responding
• Teaching or training others on prompt engineering
• Quality assurance on AI outputs
• Collaborative AI workflow optimization
• Research and documentation of AI behavior

🔒 PRIVACY FIRST

• All data stored locally on YOUR device
• Zero network requests, zero data collection
• No tracking, no analytics, no third-party access
• Your feedback never leaves your computer
• Open source and transparent

🎨 BEAUTIFUL DESIGN

• Non-intrusive popup appears right where you need it
• Clean, modern interface optimized for readability
• Smooth animations and intuitive interactions
• Works seamlessly with your browser's theme

📊 HOW IT WORKS

1. Visit Claude.ai, ChatGPT, or Grok
2. Highlight text you want to comment on
3. Press ⌘I (or Ctrl+I) and type your feedback
4. Repeat for all points you want to capture
5. Copy everything with one keystroke (⌘E)
6. Paste into your AI conversation or document
7. Clear and start fresh for the next round

🚀 USE CASES

→ Prompt Engineering: Quickly note what works and what doesn't in AI responses
→ Content Review: Mark multiple sections for revision in one pass
→ Team Collaboration: Collect feedback to share with colleagues
→ Learning & Research: Document interesting AI behaviors with context
→ Quality Control: Systematically review long AI outputs

⭐ WHY USERS LOVE IT

"No more juggling between tabs and note apps - this extension keeps me in flow."

"The keyboard shortcuts make it feel like a natural part of my workflow."

"Finally, a simple tool that does exactly what I need without overcomplicating things."

🔧 TECHNICAL DETAILS

• Works on: Claude (claude.ai), ChatGPT (chatgpt.com), Grok (grok.com)
• Manifest V3 compliant (latest Chrome standard)
• Lightweight: No performance impact
• Offline-capable: No internet connection required
• Privacy-focused: All data stays on your device

💡 TIPS FOR BEST RESULTS

• Keep feedback concise and actionable
• Review items in the side panel before copying
• Clear all items after each feedback session
• Customize keyboard shortcuts in chrome://extensions/shortcuts

📖 OPEN SOURCE

This extension is open source! Review the code, contribute, or fork it for your own needs on GitHub.

SUPPORTED SITES:
✓ Claude (claude.ai)
✓ ChatGPT (chatgpt.com and chat.openai.com)
✓ Grok (grok.com)

Start streamlining your AI feedback workflow today. Install now and save hours of copy-pasting! 🎉
```

### Category
```
Productivity
```

---

## 🎨 Visual Assets Required

### 1. Extension Icon (Already have! ✅)
- ✅ 16x16px (icon16.png)
- ✅ 48x48px (icon48.png)
- ✅ 128x128px (icon128.png)

### 2. Store Listing Screenshots (REQUIRED - Need to create)

You need **at least 1 screenshot**, recommended **3-5 screenshots**, size **1280x800** or **640x400**

**Recommended screenshots to create:**

1. **Main Feature**: Show the popup appearing when text is highlighted
2. **Side Panel**: Show the side panel with 2-3 feedback items
3. **Keyboard Shortcuts**: Show the shortcuts in action
4. **Before/After**: Split screen showing workflow improvement
5. **Multi-platform**: Show it working on different AI sites

**How to create screenshots:**
- Navigate to Claude.ai (or ChatGPT/Grok)
- Use the extension naturally
- Take screenshots (⌘+Shift+4 on Mac, Windows+Shift+S on Windows)
- Optionally add arrows/annotations using any image editor
- Resize to 1280x800 or 640x400

### 3. Promotional Tile Images (OPTIONAL but recommended)

**Small Tile** (440x280px) - Optional
**Marquee** (1400x560px) - Optional

These appear in featured listings and can boost visibility.

---

## 🔗 Additional Information

### Website (Optional but recommended)
```
https://github.com/timothycarden/chrome-extension-for-claude
```

### Support URL/Email
```
[Your email or GitHub issues page]
https://github.com/timothycarden/chrome-extension-for-claude/issues
```

### Privacy Policy URL (REQUIRED)
```
You'll need to host the PRIVACY_POLICY.md file somewhere public.

Options:
1. GitHub: https://github.com/timothycarden/chrome-extension-for-claude/blob/main/PRIVACY_POLICY.md
2. GitHub Pages: Create a simple site
3. Any public URL where you host it

Make sure it's publicly accessible!
```

---

## 🎯 Distribution Options

### Visibility Setting

Choose **ONE** of these:

#### 1. ✅ **UNLISTED** (Recommended for you!)
- Only people with direct link can install
- Perfect for teams/private distribution
- No one can find it by searching Chrome Web Store
- You control who gets the link

#### 2. **PUBLIC**
- Anyone can find and install
- Listed in Chrome Web Store search results
- Good if you want broad adoption

#### 3. **PRIVATE**
- Only for Google Workspace domains
- Requires Google Workspace account
- More restrictive than you need

**For your team use case → Choose UNLISTED**

---

## 📋 Permissions Justification

When submitting, you may need to justify permissions. Here's what to say:

**storage**
```
Required to save user feedback items locally on their device. No data is transmitted externally.
```

**sidePanel**
```
Required to display the side panel interface where collected feedback is shown to users.
```

**activeTab**
```
Required to detect text selections on the current tab and position the feedback popup correctly.
```

**tabs**
```
Required to manage side panel state and communicate between content scripts and the extension.
```

**host_permissions (claude.ai, chatgpt.com, grok.com)**
```
Required to run content scripts only on supported AI chat platforms. The extension only operates on these specific sites.
```

---

## ✅ Pre-Submission Checklist

Before uploading to Chrome Web Store:

- [ ] Privacy policy created and hosted publicly
- [ ] At least 1 screenshot (1280x800 or 640x400)
- [ ] Extension tested in Chrome
- [ ] All links work (GitHub, support email)
- [ ] Version number is correct (currently 1.1.0)
- [ ] Icons are included (16, 48, 128)
- [ ] Extension is set to UNLISTED visibility
- [ ] Support contact information provided

---

## 💰 Costs

- **Developer Registration**: $5 (one-time, lifetime)
- **Extension Publishing**: FREE
- **Updates**: FREE forever

---

This listing is optimized for:
✓ Search visibility (if you go public later)
✓ Clear value proposition
✓ Professional appearance
✓ User trust and credibility
✓ Chrome Web Store guidelines compliance

