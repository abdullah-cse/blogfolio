---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true

# Pin this project on homepage (true/false)
pinProject: false

# SEO
description: "A brief description of your project (150-160 characters)"
keywords: ["project", "keyword1", "keyword2"]
tags: ["Theme", "Hugo", "Flutter", "JavaScript"]

# Project Details
image: "/images/projects/{{ .Name }}.jpg"
imageAlt: "Screenshot or preview of {{ replace .Name "-" " " | title }}"

# Project Links (optional)
demo_url: ""
github_url: ""
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