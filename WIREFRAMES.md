# 🎨 Wireframes & User Flows - World Explorer Game

## Table of Contents
1. [User Flows](#user-flows)
2. [Screen Wireframes](#screen-wireframes)
3. [Information Architecture](#information-architecture)
4. [User Journey Maps](#user-journey-maps)

---

## User Flows

### Flow 1: Complete Game Flow

```
START
  │
  ├─→ [Main Menu]
  │     │
  │     └─→ Click "Start Game"
  │
  ├─→ [Passport Book]
  │     │
  │     ├─→ Click Country Card
  │     │     │
  │     │     ├─→ [Learning Module]
  │     │     │     │
  │     │     │     ├─→ Slide 1: Intro
  │     │     │     ├─→ Slide 2-4: Places
  │     │     │     ├─→ Slide 5: Animal
  │     │     │     │
  │     │     │     └─→ Click "Start Quiz"
  │     │     │
  │     │     ├─→ [Quiz]
  │     │     │     │
  │     │     │     ├─→ Q1: Select Answer
  │     │     │     ├─→ Q2: Select Answer
  │     │     │     ├─→ Q3: Select Answer
  │     │     │     ├─→ Q4: Select Answer
  │     │     │     │
  │     │     │     └─→ Click "Get Stamp!"
  │     │     │
  │     │     └─→ Back to Passport (with stamp)
  │     │
  │     ├─→ Click "Replay" (completed country)
  │     │     └─→ Repeat Learning → Quiz
  │     │
  │     └─→ Click "Back to Menu"
  │
  └─→ [Main Menu]
      │
      └─→ Continue or Exit
```

### Flow 2: Learning Module Navigation

```
Learning Module Start
  │
  ├─→ Slide 1 (Intro)
  │     │
  │     ├─→ [Next] → Slide 2
  │     └─→ [Exit]
  │
  ├─→ Slide 2 (Place 1)
  │     │
  │     ├─→ [Back] → Slide 1
  │     ├─→ [Next] → Slide 3
  │     └─→ [Exit]
  │
  ├─→ Slide 3 (Place 2)
  │     │
  │     ├─→ [Back] → Slide 2
  │     ├─→ [Next] → Slide 4
  │     └─→ [Exit]
  │
  ├─→ Slide 4 (Place 3)
  │     │
  │     ├─→ [Back] → Slide 3
  │     ├─→ [Next] → Slide 5
  │     └─→ [Exit]
  │
  ├─→ Slide 5 (Animal)
  │     │
  │     ├─→ [Back] → Slide 4
  │     ├─→ [Start Quiz] → Quiz
  │     └─→ [Exit]
  │
  └─→ Exit: Back to Passport
```

### Flow 3: Quiz Navigation

```
Quiz Start (Q1)
  │
  ├─→ Question displays with 4 options
  │
  ├─→ User selects answer
  │     │
  │     ├─→ Correct Answer
  │     │     │
  │     │     ├─→ Green highlight + "Correct!"
  │     │     ├─→ Show correct answer ring
  │     │     └─→ Score +1
  │     │
  │     └─→ Wrong Answer
  │           │
  │           ├─→ Red highlight + "Try again!"
  │           ├─→ Show correct answer (green ring)
  │           └─→ Score unchanged
  │
  ├─→ User clicks Next/Continue
  │
  ├─→ Q2, Q3, Q4 (same as Q1)
  │
  └─→ Quiz Complete
      │
      ├─→ Show Final Score (e.g., 3/4)
      ├─→ Award Stamp ✅
      └─→ Back to Passport Book
```

### Flow 4: Error Handling

```
Invalid Action
  │
  ├─→ Multiple Answer Selections
  │     └─→ Lock buttons after first selection
  │
  ├─→ Back on First Slide
  │     └─→ Disable [Back] button
  │
  ├─→ Missing Data
  │     └─→ Show friendly error message
  │
  └─→ Network Error (future)
        └─→ Show retry option
```

---

## Screen Wireframes

### Screen 1: Main Menu

```
╔════════════════════════════════════╗
║                                    ║
║    🌍 World Explorer 🌍            ║
║   Learn about the world!           ║
║                                    ║
║  ┌──────────────────────────────┐ ║
║  │  [✨ Start Game ✨]          │ ║
║  └──────────────────────────────┘ ║
║                                    ║
║  ╔══════════════════════════════╗ ║
║  ║ 📝 Description Box:          ║ ║
║  ║ 🗺️ Discover famous places   ║ ║
║  ║ 📚 Learn fun facts           ║ ║
║  ║ 🎖️ Collect passport stamps  ║ ║
║  ╚══════════════════════════════╝ ║
║                                    ║
║  ╔══════════════════════════════╗ ║
║  ║ 🎮 How to Play:              ║ ║
║  ║ 1️⃣ Choose a country         ║ ║
║  ║ 2️⃣ Learn about it           ║ ║
║  ║ 3️⃣ Answer quiz questions    ║ ║
║  ║ 4️⃣ Collect your stamp!      ║ ║
║  ╚══════════════════════════════╝ ║
║                                    ║
╚════════════════════════════════════╝

Element Breakdown:
├─ Header (Title + Subtitle)
│  └─ 🌍 World Explorer 🌍
│     └─ "Learn about the world!"
│
├─ Main CTA Button
│  └─ ✨ Start Game ✨ (Primary Red, Large)
│
├─ Description Card
│  └─ Features with emojis (White bg, rounded)
│
└─ Instructions Card
   └─ 4 numbered steps (Accent yellow bg)
```

**Component Specs:**
- Hero Title: H1 (56px-72px)
- Subtitle: P (24px)
- Button: Large primary red
- Cards: White with shadows
- Background: Gradient cream→peach→blue

---

### Screen 2: Passport Book

```
╔════════════════════════════════════╗
║     📖 My Passport 📖              ║
║   Stamps Collected: 3/10           ║
╠════════════════════════════════════╣
║                                    ║
║  ┌─────────┐  ┌─────────┐         ║
║  │   🇦🇺   │  │   🇧🇷   │         ║
║  │Australia│  │ Brazil  │         ║
║  │   🦘    │  │   🦜    │         ║
║  │  ✅(C)  │  │  ✅(C)  │         ║
║  │ [Replay]│  │ [Replay]│         ║
║  └─────────┘  └─────────┘         ║
║                                    ║
║  ┌─────────┐  ┌─────────┐         ║
║  │   🇨🇦   │  │   🇫🇷   │         ║
║  │ Canada  │  │ France  │         ║
║  │   🫎    │  │   🐾    │         ║
║  │  ⭕(N)  │  │  ⭕(N)  │         ║
║  │ [Play]  │  │ [Play]  │         ║
║  └─────────┘  └─────────┘         ║
║                                    ║
║           ... more cards           ║
║                                    ║
║    ┌──────────────────────────┐   ║
║    │  [← Back to Menu]        │   ║
║    └──────────────────────────┘   ║
║                                    ║
╚════════════════════════════════════╝

Card Layout (Individual):
┌───────────┐
│    🇦🇺    │  (Flag - 48px)
│ Australia │  (Name - 24px)
│    🦘     │  (Animal - 36px)
│ Kangaroo  │  (Animal name - 14px)
│    ✅     │  (Stamp - 80px)
│ [Replay]  │  (Button)
└───────────┘

Responsive:
Mobile:   1 column, 100% width
Tablet:   2 columns, gap 16px
Desktop:  3 columns, gap 24px
```

**Element Specs:**
- Header Progress: "3/10" (Large, Primary Color)
- Country Cards: 160px x 220px (responsive)
- Flag: 48px emoji
- Stamp: 80px, animated bounce
- Button: Medium primary/success variant

---

### Screen 3: Learning Module

```
╔════════════════════════════════════╗
║ Progress: [████████░░░░░░░] 60%   ║
║      Slide 3 of 7                  ║
╠════════════════════════════════════╣
║                                    ║
║   ┌──────────────────────────────┐ ║
║   │ Sydney Opera House           │ ║
║   │           🏢                 │ ║
║   │                              │ ║
║   │ A beautiful white building   │ ║
║   │ by the sea                   │ ║
║   │                              │ ║
║   │ ╔════════════════════════╗  │ ║
║   │ ║ 💡 Fun Fact:          ║  │ ║
║   │ ║ It looks like giant    ║  │ ║
║   │ ║ shells or sails!       ║  │ ║
║   │ ╚════════════════════════╝  │ ║
║   └──────────────────────────────┘ ║
║                                    ║
║    [← Back] [Exit] [Next →]        ║
║                                    ║
╚════════════════════════════════════╝

Content Card:
┌────────────────────────────────┐
│ Title (36px, Bold)             │
│                                │
│ Emoji (128px, float animation) │
│                                │
│ Description (24px, gray)       │
│                                │
│ ╔════════════════════════════╗ │
│ ║ 💡 Fun Fact: (20px)        ║ │
│ ║ [Fact text] (20px)         ║ │
│ ╚════════════════════════════╝ │
└────────────────────────────────┘

Navigation:
- [← Back]: Secondary, disabled on slide 1
- [Exit]: Secondary (always available)
- [Next →]: Primary (changes to "Start Quiz" on last slide)
```

**Specifications:**
- Progress Bar: Full width, smooth animation
- Main Card: Max-width 600px, centered
- Emoji: Animated float effect
- Fun Fact Box: Accent yellow background, 4px border
- Button Gap: 12px between buttons

---

### Screen 4: Quiz

```
╔════════════════════════════════════╗
║   🧩 Quiz Time! 🧩                 ║
║   Australia 🇦🇺                    ║
║                                    ║
║ Progress: [████░░░░░░] 40%        ║
║ Question 2 of 5                    ║
║ Score: 1/5                         ║
╠════════════════════════════════════╣
║                                    ║
║ Which animal lives in Australia?  ║
║                                    ║
║  ┌──────┐  ┌──────┐               ║
║  │Kangaro│  │Pengui│               ║
║  │ o ✅  │  │ n    │               ║
║  └──────┘  └──────┘               ║
║  ┌──────┐  ┌──────┐               ║
║  │Moose │  │ Lion │               ║
║  │      │  │      │               ║
║  └──────┘  └──────┘               ║
║                                    ║
║ ╔════════════════════════════════╗ ║
║ ║ ✅ Correct! Great job!        ║ ║
║ ╚════════════════════════════════╝ ║
║                                    ║
║ [Exit Quiz]  [✅ Next Question]   ║
║                                    ║
╚════════════════════════════════════╝

Answer Button (Before Selection):
┌──────────┐
│ Kangaroo │  (bg: blue-100)
│          │  (hover: darker blue)
└──────────┘

Answer Button (After Selection):
Correct:
┌──────────┐
│ Kangaroo │  (bg: green)
│    ✅    │  (ring: green)
└──────────┘

Incorrect:
┌──────────┐
│ Moose    │  (bg: red-500)
│    ❌    │  (ring: red)
└──────────┘

With Correct Answer Shown:
┌──────────┐
│ Kangaroo │  (bg: green, ring-4)
│    ✅    │  (Correct answer highlight)
└──────────┘
```

**Grid Layout:**
```
Mobile:   2x2 grid (2 columns)
Tablet:   4 columns
Desktop:  4 columns
Gap:      12px-20px
Min Size: 60px x 60px
```

**Answer Button States:**
- Default: Light blue, uppercase text
- Hover: Darker blue, scale 105%
- Selected Correct: Green background, checkmark, ring shadow
- Selected Wrong: Red background, scale 105%
- Show Answer: Green ring on correct (even if wrong selected)
- Disabled: All buttons disabled after selection

---

## Information Architecture

### Sitemap

```
World Explorer Game
│
├── Main Menu
│   └── Start Game
│
├── Passport Book
│   ├── Country 1 (Australia)
│   │   ├── Learning Module
│   │   │   ├── Slide 1: Intro
│   │   │   ├── Slide 2: Place 1
│   │   │   ├── Slide 3: Place 2
│   │   │   ├── Slide 4: Place 3
│   │   │   └── Slide 5: Animal
│   │   │
│   │   └── Quiz
│   │       ├── Question 1
│   │       ├── Question 2
│   │       ├── Question 3
│   │       └── Question 4
│   │
│   ├── Country 2 (Brazil)
│   │   ├── Learning Module
│   │   └── Quiz
│   │
│   └── ... Countries 3-10
│
└── Screens
    ├── Main Menu (Root)
    ├── Passport Book (Main Hub)
    ├── Learning Module (Education)
    └── Quiz (Assessment)
```

### Content Hierarchy

```
Screen Level (Highest)
├─ Page Title (H1 - 56-72px)
├─ Page Subtitle (P - 24px)
│
├─ Section Level
│  ├─ Section Title (H2 - 36-48px)
│  ├─ Section Subtitle (H3 - 28-36px)
│  │
│  └─ Content Level
│     ├─ Main Text (Body - 18-20px)
│     ├─ Secondary Text (Body - 16px)
│     └─ Tertiary Text (Small - 14px)
│
└─ UI Elements
   ├─ Button Text (14-18px, bold)
   ├─ Label Text (14px)
   └─ Helper Text (12-14px)
```

---

## User Journey Maps

### Journey 1: First Time Player (Age 5)

```
Stage:     AWARENESS  →  ONBOARDING  →  ENGAGEMENT  →  SUCCESS  →  RETENTION

Action:    See Game      Read Menu      Play Country  Complete  Replay
           Title         Instructions   Learning      Quiz      Countries

Emotion:   😊 Curious    😊 Interested  😄 Engaged    🎉 Proud  😊 Happy

Pain       Doesn't       Confused by    Learning      Fails     Wants
Points:    know what     instructions   too long      questions more

Solution:  Clear game    Simple steps   Bite-sized    Multiple  Easy
           title         with emojis    slides        attempts  replay

Design     Large         Numbered       Progress      Show      Stamp
Elements:  emoji title   list with      bar           correct   collection
           icons         Simple text    answer

Duration:  < 30 sec      < 1 min        5-10 min      2-3 min   Immediate
```

### Journey 2: Repeat Player (Age 6)

```
Stage:     RETURN    →  SELECTION  →  FAST REPLAY  →  COMPLETION  →  MASTERY

Action:    Enter        Choose New   Quick         All Quiz      All
           Game         Country      Learning      Questions     Countries

Emotion:   😊 Familiar  😊 Eager    😄 Excited    🎉 Victory    👑 Master

Pain       Bored by      Hard to      Wants speed  One          No
Points:    tutorial      remember     not depth    mistake      challenges
           steps         all places                fails them   left

Solution:  Skip option   Bold cards   Option to    Flexible     Harder
           for           flags        skip to      attempts     modes
           experienced   animals      quiz

Design     Menu toggle   Cards        "Skip to     Retakes      "Levels"
Elements:  "Skip"        stand out    Quiz"        available    section

Duration:  5 sec         10 sec       3-5 min      1-2 min      30 sec
```

### Journey 3: Parent Perspective

```
Stage:     DISCOVERY   →  TRUST    →  MONITORING  →  CONFIDENCE

Need:      Child-safe    Educational  Screen time  Learning
           game          value        limits       progress

Fear:      Inappropriate Wastes time  Too addictive Ineffective
           content       mindlessly   

Solution:  Age-rated     Real facts   Natural      Quiz
           review        about        progression  feedback
                         countries

Features:  Content       Content      Easy exit    Progress
           review        sourced      any time     tracking

Design:    Clear rating  "Learn"      Home button  Stamp
           badge         emphasis     visible      display
```

---

## Accessibility Wireframes

### High Contrast Mode

```
Colors: High contrast ratios (7:1 minimum)
├─ Primary: #FF6B6B → #CC0000 (darker red)
├─ Secondary: #4ECDC4 → #008080 (darker teal)
├─ Background: #FFF8F3 → #FFFFFF (pure white)
└─ Text: #2C3E50 → #000000 (pure black)

Typography:
├─ Increased font sizes (18px minimum)
├─ Increased line height (1.8)
└─ Bolder font weights
```

### Screen Reader Structure

```
Main Menu Page
├─ Heading 1: "World Explorer Game"
├─ Paragraph: "Learn about the world"
├─ Button: "Start Game" (aria-label: "Start the game adventure")
├─ Region: "Game Description"
│  ├─ List (unordered)
│  │  ├─ Item: "Discover famous places"
│  │  ├─ Item: "Learn fun facts"
│  │  └─ Item: "Collect passport stamps"
└─ Region: "How to Play"
   └─ Ordered List
      ├─ Item: "Choose a country"
      ├─ Item: "Learn about it"
      ├─ Item: "Answer quiz questions"
      └─ Item: "Collect your stamp"
```

### Keyboard Navigation

```
Main Menu:
TAB     → Cycles through [Start Game] button
ENTER   → Activates [Start Game]
ESC     → Exit (if available)

Passport Book:
TAB     → Cycles through country cards
ENTER   → Select country card
← / →   → Navigate between cards (optional)
ESC     → Back to menu

Learning Module:
TAB     → Cycles through buttons
ENTER   → Activate focused button
← ARROW → Previous slide
→ ARROW → Next slide
ESC     → Exit module

Quiz:
TAB     → Cycles through answer options
ENTER   → Select focused answer
ESC     → Exit quiz
```

---

## Mobile-Specific Wireframes

### Responsive Breakpoints

```
Mobile (320px - 640px):
├─ Single column layout
├─ Full-width cards
├─ Stacked buttons
├─ Touch targets: 48px minimum
└─ Font: 16px minimum

Tablet (641px - 1024px):
├─ 2 column grid
├─ Optimized spacing
├─ Side-by-side buttons
└─ Font: 18px minimum

Desktop (1025px+):
├─ 3+ column grid
├─ Max-width containers (1200px)
├─ Hover states active
└─ Font: 20px
```

### Touch Interactions

```
Mobile Buttons:
├─ Minimum 44x44px (recommended 48x48px)
├─ Padding: 16px horizontal, 12px vertical
├─ Spacing: 12px between buttons
└─ Feedback: Visual scale + color change

Swipe Gestures (Future):
├─ Swipe left: Next slide
├─ Swipe right: Previous slide
└─ Swipe down: Exit (on some screens)
```

---

## Future Enhancements Wireframes

### Social Features (v2.0)

```
Shared Passport:
┌──────────────────────┐
│  Share Your Progress │
│                      │
│  [📱 Share]          │
│  [📧 Email]          │
│  [🔗 Copy Link]      │
└──────────────────────┘

Leaderboard:
┌──────────────────────┐
│   🏆 Top Players     │
│                      │
│ 1. Emma - 10/10 ✅  │
│ 2. Liam - 8/10  ✅  │
│ 3. Sofia - 6/10 ✅  │
└──────────────────────┘
```

### Achievement Badges (v2.0)

```
Badges Earned:
├─ 🌍 World Explorer (Complete 1 country)
├─ 🧠 Quick Learner (Complete in < 5 min)
├─ 🎯 Perfect Score (Quiz 100%)
├─ 🔥 On Fire (Complete 3 in a row)
└─ 👑 Master Explorer (Complete all 10)
```

### Daily Challenges (v3.0)

```
┌──────────────────────────┐
│ ⭐ Daily Challenge ⭐  │
│                          │
│ Today: Australia Quiz    │
│ Get 4/4 for bonus stamp │
│                          │
│ ⏰ Time: 5 min          │
│ Attempts: 3             │
│                          │
│ [Start Challenge]        │
└──────────────────────────┘
```

---

**Version:** 1.0  
**Created:** August 18, 2026  
**Status:** Ready for Review
