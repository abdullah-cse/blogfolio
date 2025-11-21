# BlogFolio - Hugo Theme

A modern, SEO-optimized, mobile-first Hugo theme designed for developers and designers to showcase their personal brand, skills, projects, and blog content.

**Created by:** MD ABDULLAH  
**Website:** [abdulah.com.bd](https://abdullah.bd)

![Theme Preview](screenshot.png)

## ✨ Features

### Portfolio Sections
- **Hero Section** - Eye-catching introduction with avatar, tagline, and CTA buttons
- **Skills Showcase** - Display your expertise organized by categories
- **Tech Stack** - Visual representation of your technologies and tools
- **Featured Projects** - Highlight your best work with links and technologies
- **Blog Integration** - Share your thoughts and tutorials

### Technical Features
- 🚀 **Performance**: Minimal CSS, optimized assets, fast loading
- 📱 **Mobile-First**: Fully responsive on all devices
- 🎨 **Modern Design**: Clean, professional aesthetics with smooth animations
- ♿ **Accessible**: WCAG compliant, semantic HTML, keyboard navigation
- 🔍 **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, JSON-LD
- 🌙 **Dark Mode**: Automatic dark mode support
- 📋 **Copy Code**: One-click code copying in blog posts
- 📑 **Table of Contents**: Sticky sidebar on desktop, collapsible on mobile
- 💬 **Giscus Comments**: GitHub Discussions-powered comments
- 📊 **Analytics Ready**: Easy Google Analytics integration

## 🚀 Quick Start

### Prerequisites
- Hugo Extended v0.112.0 or higher
- Git (optional, for version control)

### Installation

1. **Create a new Hugo site:**
```bash
hugo new site my-portfolio
cd my-portfolio
```

2. **Add the theme:**
```bash
# Option 1: Clone as git submodule (recommended)
git init
git submodule add https://github.com/abdullah-cse/blogfolio.git themes/blogfolio

# Option 2: Clone directly
git clone https://github.com/abdullah-cse/blogfolio.git themes/blogfolio

# Option 3: Download and extract the theme manually
```

3. **Copy example config:**
```bash
cp themes/blogfolio/exampleSite/config.toml config.toml
```

4. **Add your content:**
```bash
# Create about page
hugo new about.md

# Create first blog post
hugo new blog/hello-world.md

# Create a project
hugo new projects/my-project.md
```

5. **Start the server:**
```bash
hugo server -D
```

Visit `http://localhost:1313` to see your site!

## 📝 Configuration

### Basic Setup

Edit `config.toml` to customize your site:

```toml
baseURL = "https://yoursite.com"
title = "Your Name - Developer & Designer"
theme = "blogfolio"

[params]
  author = "Your Name"
  description = "Your professional tagline"
  avatar = "/images/avatar.jpg"
  twitter = "@yourhandle"
  
  # Table of Contents
  showTOC = true  # Set to false to disable TOC globally
```

### Hero Section

```toml
[params]
  hero_title = "Hi, I'm Your Name"
  hero_subtitle = "Full-Stack Developer crafting digital experiences"
  
  [params.hero_cta]
    primary_text = "View My Work"
    primary_url = "#projects"
    secondary_text = "Get In Touch"
    secondary_url = "/contact/"
```

### Skills

```toml
[[params.skills]]
  name = "Frontend Development"
  icon = "💻"
  description = "Building responsive and performant UIs"
  items = ["React", "Vue.js", "TypeScript", "Tailwind CSS"]

[[params.skills]]
  name = "Backend Development"
  icon = "⚙️"
  description = "Creating scalable server applications"
  items = ["Node.js", "Python", "PostgreSQL", "MongoDB"]
```

### Tech Stack

```toml
[[params.tech_stack]]
  category = "Languages"
  technologies = ["JavaScript", "TypeScript", "Python", "Go"]

[[params.tech_stack]]
  category = "Frameworks"
  technologies = ["React", "Next.js", "Vue.js", "Node.js"]
```

### Featured Projects

```toml
[[params.featured_projects]]
  name = "E-Commerce Platform"
  description = "A full-stack e-commerce solution"
  image = "/images/projects/ecommerce.jpg"
  technologies = ["React", "Node.js", "PostgreSQL"]
  demo_url = "https://demo.yoursite.com"
  github_url = "https://github.com/yourusername/project"
```

## 📁 Content Structure

```
content/
├── _index.md          # Homepage content (optional)
├── about.md           # About page
├── contact.md         # Contact page
├── blog/              # Blog posts
│   ├── post-1.md
│   └── post-2.md
└── projects/          # Projects
    ├── _index.md      # Projects page
    ├── project-1.md
    └── project-2.md
```

## ✍️ Writing Content

### Blog Posts

Create a new post:
```bash
hugo new blog/my-post-title.md
```

Frontmatter example:
```yaml
---
title: "My Blog Post"
date: 2024-01-15
description: "SEO-friendly description"
tags: ["javascript", "web-development"]
image: "/images/posts/my-post.jpg"
disable_toc: false       # Show/hide TOC for this post
disable_comments: false  # Show/hide comments for this post
---
```

**Table of Contents:**

The TOC is automatically generated from your headings (H2-H3). Features:
- **Desktop**: Sticky sidebar on the right with active section highlighting
- **Mobile**: Collapsible section at the top (hidden by default, tap to expand)
- **Control globally**: Set `showTOC = false` in config.toml
- **Control per-post**: Add `disable_toc: true` in frontmatter

**Code Snippets:**

The theme automatically adds a "Copy" button to all code blocks. Simply write your code in markdown:

```javascript
function hello() {
  console.log("Hello, World!");
}
```

Features:
- Button appears on hover (always visible on mobile)
- One-click copying to clipboard
- Visual feedback (checkmark on success)
- Works with all programming languages

**Alert Boxes:**

Use shortcodes to add styled alert boxes in your posts:

```markdown
{{</* info */>}}
**Tip:** This is an informational alert with a blue accent.
{{</* /info */>}}

{{</* warning */>}}
**Caution:** This is a warning alert with a yellow accent.
{{</* /warning */>}}

{{</* success */>}}
**Success:** This is a success alert with a green accent.
{{</* /success */>}}

{{</* error */>}}
**Error:** This is an error alert with a red accent.
{{</* /error */>}}
```

Features:
- Four types: info (blue), warning (yellow), success (green), error (red)
- Deep colored left border (4px) with lighter background
- Icon support for visual distinction
- Supports full markdown inside alerts
- Dark mode compatible
- Responsive design

### Projects

Create a new project:
```bash
hugo new projects/my-project.md
```

Frontmatter example:
```yaml
---
title: "My Project"
description: "Project description"
technologies: ["React", "Node.js", "MongoDB"]
demo_url: "https://demo.example.com"
github_url: "https://github.com/user/repo"
image: "/images/projects/my-project.jpg"
---
```

## 🎨 Customization

### Colors

Edit `assets/css/main.css`:
```css
:root {
  --color-primary: #2563eb;     /* Your brand color */
  --color-text: #1f2937;         /* Text color */
  --color-bg: #ffffff;           /* Background */
}
```

### Table of Contents

Customize TOC appearance in `assets/css/main.css`:
```css
.toc-wrapper {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
}

.toc-content a.active {
  color: var(--color-primary);
  border-left: 3px solid var(--color-primary);
}
```

### Layouts

Modify templates in `layouts/`:
- `layouts/index.html` - Homepage
- `layouts/_default/single.html` - Blog post/project page
- `layouts/_default/list.html` - Archive pages
- `layouts/partials/` - Reusable components

### Fonts

Add Google Fonts in `layouts/partials/head.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

Update CSS:
```css
:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

## 📊 Analytics

### Google Analytics

Add to `config.toml`:
```toml
googleAnalytics = "G-XXXXXXXXXX"
```

Add to `layouts/partials/head.html`:
```html
{{ template "_internal/google_analytics.html" . }}
```

## 💬 Comments (Giscus)

### Quick Setup

1. **Enable GitHub Discussions** on your repository
2. **Install Giscus app**: [github.com/apps/giscus](https://github.com/apps/giscus)
3. **Configure**: Visit [giscus.app](https://giscus.app/) and get your settings
4. **Update config.toml**:

```toml
[params.giscus]
  enabled = true
  repo = "yourusername/your-repo"
  repo_id = "R_xxxxxxxxxxxxx"
  category = "General"
  category_id = "DIC_xxxxxxxxxxxxx"
  mapping = "pathname"
  reactions_enabled = "1"
  theme = "preferred_color_scheme"
  lang = "en"
```

### Features

- ✅ Free and open-source
- ✅ Privacy-friendly (no tracking)
- ✅ Automatic dark/light theme
- ✅ Markdown support in comments
- ✅ Reactions and threading
- ✅ Full moderation control via GitHub

### Disable Comments on Specific Posts

Add to post frontmatter:
```yaml
disable_comments: true
```

**See [GISCUS_SETUP.md](GISCUS_SETUP.md) for detailed instructions.**

## 🚀 Deployment

### Build for Production

```bash
hugo --minify
```

This generates optimized files in `public/`.

### Deployment Options

**Netlify:**
1. Push to GitHub
2. Connect repository in Netlify
3. Build command: `hugo --minify`
4. Publish directory: `public`

**Vercel:**
1. Import Git repository
2. Framework preset: Hugo
3. Build command: `hugo --minify`
4. Output directory: `public`

**GitHub Pages:**
```yaml
# .github/workflows/hugo.yml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: recursive
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          extended: true
      - name: Build
        run: hugo --minify
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

## 📸 Images

Place images in `static/images/`:
```
static/images/
├── avatar.jpg           # Your profile photo (120x120px recommended)
├── og-image.jpg         # Social media preview (1200x630px)
├── projects/            # Project screenshots
│   ├── project1.jpg
│   └── project2.jpg
└── posts/               # Blog post images
    ├── post1.jpg
    └── post2.jpg
```

## 🔧 Troubleshooting

**CSS not loading:**
- Ensure Hugo Extended version is installed
- Clear browser cache
- Check `assets/css/main.css` exists

**Images not displaying:**
- Verify images are in `static/images/`
- Check file paths in config.toml
- Use relative paths starting with `/`

**TOC not showing:**
- Ensure `showTOC = true` in config.toml
- Check post has headings (H2, H3)
- Verify `disable_toc: false` in post frontmatter
- TOC requires at least 100 characters of content

**Build errors:**
- Update Hugo: `hugo version` (need 0.112.0+)
- Check config.toml syntax
- Verify all frontmatter is valid YAML

## 📚 Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Markdown Guide](https://www.markdownguide.org/)
- [SEO Best Practices](https://developers.google.com/search/docs)
- [Giscus Documentation](https://giscus.app/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## 📄 License

MIT License - feel free to use this theme for your personal or commercial projects.

## 💬 Support

- **Issues**: [GitHub Issues](https://github.com/abdullah-cse/blogfolio/issues)
- **Discussions**: [GitHub Discussions](https://github.com/abdullah-cse/blogfolio/discussions)
- **Website**: [abdullah.com.bd](https://abdullah.com.bd)

---

Made with ❤️ by [MD ABDULLAH](https://abdullah.com.bd)