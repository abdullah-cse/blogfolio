---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
# Used in SEO
description: "A compelling description of your post (150-160 characters optimal)"
keywords: ["keyword1", "keyword2"]
tags: ["tag1", "tag2"]
categories: ["category"]

# Social Media
image: "featured.jpg" # Just the filename - image should be in the same folder
imageAlt: "Descriptive alt text"

author: "Your Name" # Author (optional, falls back to site params)

# Advanced SEO (optional)
canonical: ""  # Leave empty to use default
noindex: false # Set to true to prevent indexing

# Features (optional)
disable_comments: false  # Set to true to disable comments on this post
disable_toc: false       # Set to true to disable table of contents on this post
---

Your blog post content starts here. Write in Markdown format.

## Example Heading

This archetype provides all the frontmatter needed for excellent SEO and social media sharing.

## Another Section

Use headings to create a table of contents automatically.

## Add Images

![Image Description](image-name.jpg)