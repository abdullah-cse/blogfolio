---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true

# Pin this project on homepage (true/false)
pinProject: false

# SEO
description: "A brief description of your project (150-160 characters)"
keywords: ["project", "keyword1", "keyword2"]
tags: ["Flutter", "Dart", "Hugo", "JavaScript"]

# Project Details
# For folder-based projects, use relative path like "featured.jpg"
# For absolute paths, use "/images/projects/project-name.jpg"
image: "featured.jpg"
imageAlt: "Screenshot or preview of {{ replace .Name "-" " " | title }}"

# Project Links (optional - leave empty string if not applicable)
demo_url: ""
github_url: "https://github.com/username/repo"
technologies: ["Flutter", "Dart", "Firebase"]

# Options: Active, Maintained, Archived, Deprecated
status: "Active"
# Year when project started being maintained
maintainedSince: "{{ .Date | dateFormat "2006" }}"
---

## Overview

Brief overview of the project and what problem it solves.

## Features

- Feature 1: Description
- Feature 2: Description
- Feature 3: Description

## Technologies Used

- **Frontend:** Flutter, Dart
- **Backend:** Firebase
- **Tools:** VS Code, Git
- **Deployment:** Play Store, App Store

## Challenges & Solutions

Describe key challenges you faced and how you solved them.

## Results

What was the outcome? User feedback? Downloads? Performance metrics?

## Screenshots

![Project Screenshot](screenshot-1.jpg)
![Another Screenshot](screenshot-2.jpg)

## Lessons Learned

What did you learn from this project? What would you do differently next time?

## Future Plans

What improvements or features are you planning to add?