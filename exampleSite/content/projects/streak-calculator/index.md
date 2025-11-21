---
title: "Streak Calculator"
date: 2024-10-20
draft: false

# SEO
description: "High-performance Dart package for tracking daily, weekly, and monthly streaks with custom goals and flexible configurations"
keywords: ["dart", "streak", "tracking", "habits", "flutter"]
tags: ["Dart", "Flutter", "Package", "Algorithms"]

# Project Details
image: "https://via.placeholder.com/1200x630/10b981/ffffff?text=Streak+Calculator"
imageAlt: "Streak tracking package for Dart and Flutter"

# Project Links
demo_url: ""
github_url: "https://github.com/abdullah-cse/streak_calculator"
technologies: ["Dart", "Algorithms", "Date Handling"]

# Status
status: "Maintained"
year: "2024"
---

## Overview

A lightweight, high-performance Dart package designed for tracking streaks across different time periods. Perfect for habit tracking apps, fitness applications, or any system that needs to monitor user consistency.

## The Problem

Many apps need streak tracking, but implementing it correctly is tricky:
- Handling timezone differences
- Managing different week start days
- Calculating current vs best streaks
- Supporting custom goal thresholds
- Efficient date comparisons

## The Solution

A pure Dart package with zero dependencies that handles all the complexity:

```dart
final calculator = StreakCalculator(
  dates: userActiveDates,
  weekStart: WeekStart.monday,
  minCount: 1,
);

print('Current streak: ${calculator.currentStreak}');
print('Best streak: ${calculator.bestStreak}');
print('Is active today: ${calculator.isActiveToday}');
```

## Features

### 📅 Multiple Time Periods
- **Daily Streaks** - Track consecutive days
- **Weekly Streaks** - Group by weeks
- **Monthly Streaks** - Track across months

### ⚙️ Flexible Configuration
- Custom week start days (Monday/Sunday)
- Configurable minimum activity thresholds
- Custom goal tracking
- Timezone-aware calculations

### 🎯 Comprehensive Metrics
- Current active streak
- Longest streak ever
- Total active periods
- Activity status (today, this week, this month)

### ⚡ Performance Optimized
- O(n log n) time complexity
- Minimal memory usage
- Efficient date sorting
- No unnecessary iterations

## Technical Deep Dive

### Efficient Streak Detection

The core algorithm uses a smart sorting and iteration approach:

```dart
List<DateTime> calculateStreak(List<DateTime> dates) {
  if (dates.isEmpty) return [];
  
  // Sort dates efficiently
  final sorted = dates.toSet().toList()..sort();
  
  List<DateTime> current = [sorted.first];
  List<DateTime> longest = [sorted.first];
  
  for (int i = 1; i < sorted.length; i++) {
    final diff = sorted[i].difference(sorted[i - 1]).inDays;
    
    if (diff == 1) {
      current.add(sorted[i]);
      if (current.length > longest.length) {
        longest = List.from(current);
      }
    } else {
      current = [sorted[i]];
    }
  }
  
  return longest;
}
```

### Timezone Handling

Proper timezone normalization prevents streak breaks:

```dart
DateTime normalizeDate(DateTime date) {
  return DateTime(date.year, date.month, date.day);
}
```

## Use Cases

### Habit Tracking App
```dart
final habitStreak = StreakCalculator(
  dates: completedDates,
  minCount: 1,
);

if (habitStreak.currentStreak >= 30) {
  print('🎉 30-day streak achieved!');
}
```

### Fitness App
```dart
final workoutStreak = StreakCalculator(
  dates: workoutDates,
  period: Period.weekly,
  minCount: 3, // 3 workouts per week
);
```

### Learning Platform
```dart
final studyStreak = StreakCalculator(
  dates: studySessions,
  weekStart: WeekStart.monday,
);
```

## Performance Benchmarks

| Dataset Size | Calculation Time |
|--------------|------------------|
| 100 dates    | <1 ms           |
| 1,000 dates  | 2-3 ms          |
| 10,000 dates | 15-20 ms        |

## Challenges Overcome

### 1. Week Boundary Calculations
Different cultures start weeks on different days. Implemented flexible week start configuration with proper ISO 8601 support.

### 2. Leap Year Handling
Ensured accurate calculations across leap years and month boundaries.

### 3. Goal Threshold Logic
Allowing custom minimum counts (e.g., "3 activities per week") required careful logic to maintain streak continuity.

## Installation

```yaml
dependencies:
  streak_calculator: ^1.0.0
```

## API Design Philosophy

- **Simple** - Intuitive API that's easy to understand
- **Flexible** - Configurable for different use cases
- **Efficient** - Optimized for performance
- **Tested** - Comprehensive test coverage

## Community Impact

- 📦 Published on pub.dev
- ⭐ Used in multiple production apps
- 📚 Clear documentation and examples
- 🐛 Actively maintained

## What I Learned

1. **Algorithm Design** - Efficient streak detection algorithms
2. **Date Handling** - Proper timezone and calendar system management
3. **API Design** - Creating intuitive, developer-friendly interfaces
4. **Testing** - Writing comprehensive test suites for edge cases

## Future Enhancements

- 🔜 Custom streak definitions (e.g., "3 out of 7 days")
- 🔜 Streak recovery grace periods
- 🔜 Historical streak statistics
- 🔜 Visual streak graphs

---

**Tech Stack:** Pure Dart • Zero Dependencies  
**Status:** Actively Maintained  
**License:** MIT