# Giscus Comments Setup Guide

Giscus is a comments system powered by GitHub Discussions. It's free, open-source, and doesn't track users.

## Why Giscus?

✅ **Free & Open Source** - No costs, completely transparent
✅ **Privacy-Friendly** - No tracking, no ads
✅ **GitHub Integration** - Readers use their GitHub accounts
✅ **Markdown Support** - Full markdown in comments
✅ **Reactions** - Like/dislike with emoji reactions
✅ **Threaded Discussions** - Nested comment threads
✅ **Dark Mode** - Automatic theme switching

## Prerequisites

1. A **public** GitHub repository (your Hugo site repo)
2. GitHub Discussions enabled on the repository
3. [Giscus app](https://github.com/apps/giscus) installed on the repository

## Setup Instructions

### Step 1: Enable GitHub Discussions

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Features** section
4. Check the box for **Discussions**

### Step 2: Install Giscus App

1. Visit [github.com/apps/giscus](https://github.com/apps/giscus)
2. Click **Install**
3. Select **Only select repositories**
4. Choose your Hugo site repository
5. Click **Install**

### Step 3: Configure Giscus

1. Visit [giscus.app](https://giscus.app/)
2. Fill in the configuration:

   **Repository:**
   ```
   yourusername/your-repo
   ```
   
   **Page ↔️ Discussions Mapping:**
   - Choose `pathname` (recommended)
   - This maps each page URL to a discussion
   
   **Discussion Category:**
   - Choose a category (create one called "Comments" if needed)
   - Recommended: Use **Announcements** format
   
   **Features:**
   - ✅ Enable reactions
   - Choose comment box position (bottom recommended)
   
   **Theme:**
   - Choose `preferred_color_scheme` for automatic dark/light mode

3. Scroll down to see the generated script

4. Copy the values from the script attributes:
   - `data-repo-id`
   - `data-category-id`

### Step 4: Update Your Hugo Config

Edit your `config.toml` and add the Giscus configuration:

```toml
[params.giscus]
  enabled = true
  repo = "yourusername/your-repo"              # Your GitHub repository
  repo_id = "R_xxxxxxxxxxxxx"                   # From giscus.app
  category = "General"                          # Discussion category name
  category_id = "DIC_xxxxxxxxxxxxx"             # From giscus.app
  mapping = "pathname"
  strict = "0"
  reactions_enabled = "1"
  emit_metadata = "0"
  input_position = "bottom"
  theme = "preferred_color_scheme"              # Auto light/dark mode
  lang = "en"
  loading = "lazy"
```

### Step 5: Build and Deploy

```bash
hugo server -D
```

Visit a blog post and you should see the comments section at the bottom!

## Configuration Options

### Mapping Options

| Option | Description |
|--------|-------------|
| `pathname` | Use page URL path (recommended) |
| `url` | Use full page URL |
| `title` | Use page title |
| `og:title` | Use Open Graph title |
| `specific` | Manual mapping |

### Theme Options

| Theme | Description |
|-------|-------------|
| `preferred_color_scheme` | Auto light/dark (recommended) |
| `light` | Always light theme |
| `dark` | Always dark theme |
| `dark_dimmed` | GitHub dark dimmed |
| `transparent_dark` | Transparent dark |
| `noborder_light` | Light without borders |

### Input Position

- `bottom` - Comment box at bottom (recommended)
- `top` - Comment box at top

## Disabling Comments on Specific Posts

To disable comments on a specific post, add to the frontmatter:

```yaml
---
title: "My Post"
disable_comments: true
---
```

## Disabling Comments Globally

To disable all comments, set in `config.toml`:

```toml
[params.giscus]
  enabled = false
```

## Customizing Appearance

The theme includes default styling for the comments section. To customize further, edit `assets/css/main.css`:

```css
.comments-section {
  margin-top: 4rem;
  padding-top: 3rem;
}

.comments-title {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
```

## Managing Comments

### As Site Owner

1. Go to your GitHub repository
2. Click on **Discussions** tab
3. You can:
   - Reply to comments
   - Delete inappropriate comments
   - Lock/unlock discussions
   - Pin important discussions
   - Mark comments as answers

### Moderation

- Comments are posted directly to GitHub Discussions
- You have full control via GitHub's moderation tools
- You can block users at the GitHub level
- Set up GitHub Actions for automated moderation

## Troubleshooting

### Comments not showing?

1. **Check repository is public**
   - Giscus only works with public repos

2. **Verify Discussions are enabled**
   - Go to repo Settings → Features → Discussions

3. **Confirm Giscus app is installed**
   - Visit Settings → Integrations → Applications

4. **Check configuration values**
   - repo, repo_id, category, category_id must be correct
   - Get fresh values from giscus.app if needed

5. **Check browser console**
   - Look for any JavaScript errors
   - Ensure no ad blockers are interfering

### Wrong theme showing?

- Set `theme = "preferred_color_scheme"` for auto-switching
- Or manually set `theme = "light"` or `theme = "dark"`

### Comments on wrong discussions?

- Check your `mapping` setting
- `pathname` is most reliable
- Clear existing discussions if needed

## Privacy Considerations

- Giscus uses GitHub for authentication
- No external tracking or analytics
- Comments are stored in your GitHub repository
- Readers need a GitHub account to comment
- You control all data via GitHub

## Best Practices

1. **Create a dedicated category** for comments in GitHub Discussions
2. **Use pathname mapping** for consistency
3. **Enable reactions** for better engagement
4. **Set loading to lazy** for better performance
5. **Monitor discussions** regularly for spam
6. **Add community guidelines** in your repo's CONTRIBUTING.md

## Advanced: Custom Theme

To create a custom Giscus theme:

1. Fork the [giscus/giscus](https://github.com/giscus/giscus) repo
2. Create a custom theme CSS file
3. Reference it in your config:
   ```toml
   theme = "https://yourdomain.com/giscus-custom.css"
   ```

## Support

- **Giscus Documentation**: [giscus.app](https://giscus.app/)
- **GitHub Discussions**: [github.com/giscus/giscus/discussions](https://github.com/giscus/giscus/discussions)
- **Issues**: [github.com/giscus/giscus/issues](https://github.com/giscus/giscus/issues)

---

**Note**: Giscus is completely free and doesn't require any API keys or authentication tokens. It uses GitHub's public API and OAuth for user authentication.