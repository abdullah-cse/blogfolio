---
title: "How to Use Alert Shortcodes"
date: 2025-01-20
description: "Learn how to use info, warning, success, and error alert boxes in your blog posts"
tags: ["tutorial", "hugo", "shortcodes"]
---

# Using Alert Shortcodes

This theme includes four types of alert boxes that you can use in your blog posts to highlight important information.

## Info Alert

Use the `info` shortcode for general information or tips:

{{< info >}}
**Did you know?** This is an informational alert box. Perfect for sharing tips, additional context, or helpful notes.
{{< /info >}}

### Markdown Syntax:
```
{{</* info */>}}
**Did you know?** This is an informational alert box.
{{</* /info */>}}
```

## Warning Alert

Use the `warning` shortcode for cautionary notes:

{{< warning >}}
**Important:** Make sure to backup your data before proceeding with this operation. This action cannot be undone.
{{< /warning >}}

### Markdown Syntax:
```
{{</* warning */>}}
**Important:** Make sure to backup your data before proceeding.
{{</* /warning */>}}
```

## Success Alert

Use the `success` shortcode for positive confirmations or completions:

{{< success >}}
**Great job!** You've successfully completed the tutorial. Your application is now running on port 3000.
{{< /success >}}

### Markdown Syntax:
```
{{</* success */>}}
**Great job!** You've successfully completed the tutorial.
{{</* /success */>}}
```

## Error Alert

Use the `error` shortcode for errors, critical warnings, or things to avoid:

{{< error >}}
**Error:** The API key is invalid. Please check your configuration file and ensure you're using the correct credentials.
{{< /error >}}

### Markdown Syntax:
```
{{</* error */>}}
**Error:** The API key is invalid. Please check your configuration.
{{</* /error */>}}
```

## Features

All alert boxes support:
- **Markdown formatting** inside the alert
- **Links** styled appropriately for each type
- **Lists** and other markdown elements
- **Dark mode** with appropriate color adjustments
- **Responsive design** that works on all devices

## Advanced Usage

You can include multiple paragraphs and markdown elements:

{{< info >}}
### Multiple Elements

You can include:
- Lists
- **Bold text**
- *Italic text*
- [Links](https://example.com)
- And more!

Just write markdown as usual inside the shortcode.
{{< /info >}}

### Markdown Syntax:
```
{{</* info */>}}
### Multiple Elements

You can include:
- Lists
- **Bold text**

And more!
{{</* /info */>}}
```

## Tips

1. Use alerts sparingly to maintain their impact
2. Choose the right type for your message
3. Keep the content concise and focused
4. Use bold text for the key message
5. Add context or explanations as needed

That's it! These alert boxes will help you create more engaging and informative blog posts.