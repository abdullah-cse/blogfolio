---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true

# SEO
description: "A brief description of your project (150-160 characters)"
keywords: ["project", "keyword1", "keyword2"]
tags: ["tag1", "tag2"]

# Project Details
image: "/images/projects/{{ .Name }}.jpg"
imageAlt: "Screenshot or preview of {{ replace .Name "-" " " | title }}"

# Project Links
demo_url: "https://demo.example.com"
github_url: "https://github.com/username/repo"
technologies: ["Tech1", "Tech2", "Tech3"]

# Status (optional)
status: "Completed" # Completed, In Progress, Maintained
year: "2024"
---

## Overview

Brief overview of the project and what problem it solves.

## Features

- Feature 1
- Feature 2
- Feature 3

## Technologies Used

- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Deployment:** Vercel

## Challenges & Solutions

Describe key challenges faced and how you solved them.

## Results

What was the outcome? User feedback? Performance metrics?

## Screenshots

![Project Screenshot](/images/projects/{{ .Name }}-screenshot.jpg)

## Lessons Learned

What did you learn from this project?