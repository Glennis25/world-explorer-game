# 🎨 World Explorer Game - UI/UX Design Document

## Table of Contents
1. [Design Philosophy](#design-philosophy)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Component Library](#component-library)
5. [Screens & Flows](#screens--flows)
6. [Animations & Interactions](#animations--interactions)
7. [Accessibility](#accessibility)
8. [Responsive Design](#responsive-design)

---

## Design Philosophy

**Target Audience:** Children aged 3-6 years old

### Key Principles:
- 🎨 **Colorful & Playful** - Bright, engaging colors to capture attention
- 👆 **Touch-Friendly** - Large buttons (min 44x44px) for small fingers
- 📱 **Simple Navigation** - Intuitive, one-step back navigation
- 🎯 **Clear Feedback** - Immediate visual/audio feedback for all interactions
- ♿ **Inclusive Design** - High contrast, readable text, keyboard accessible
- 🎮 **Gamified** - Progress bars, stamps, achievements, rewards

---

## Color Palette

```
Primary Colors:
  - Primary Red:      #FF6B6B (buttons, highlights, CTAs)
  - Secondary Teal:   #4ECDC4 (secondary buttons, accents)
  - Accent Yellow:    #FFE66D (highlights, info boxes, fun facts)
  - Success Green:    #95E1D3 (correct answers, completed states)

Background Colors:
  - Soft Cream:       #FFF8F3 (main background)
  - Light Peach:      #FFE8DC (secondary background)
  - Light Blue:       #E8F4F8 (gradient accent)

Text Colors:
  - Dark Blue:        #2C3E50 (headings, primary text)
  - Gray:             #555555 (body text, secondary info)
  - White:            #FFFFFF (on colored backgrounds)

Semantic Colors:
  - Success:          #95E1D3 (correct, positive feedback)
  - Error:            #FF6B6B (incorrect, negative feedback)
  - Warning:          #FFE66D (info, fun facts)
```

### Color Usage:
- **Buttons:** Primary (red) for main actions, Secondary (teal) for back/exit
- **Cards:** White with subtle shadows, hover effects lift them
- **Progress:** Gradient from primary red to accent yellow
- **Feedback:** Green for correct, red for incorrect answers

---

## Typography

```
Font Families:
  - Headings:  'Fredoka' (sans-serif, friendly and rounded)
  - Body:      'Fredoka' or 'Rounded Mplus 1c' (child-friendly)
  - Fallback:  -apple-system, BlinkMacSystemFont, 'Segoe UI'

Font Sizes:
  - H1 (Main Title):     48px - 72px (responsive)
  - H2 (Section Title):  36px - 48px
  - H3 (Subsection):     28px - 36px
  - Body Large:          20px - 24px
  - Body Regular:        16px - 18px
  - Body Small:          14px - 16px

Font Weights:
  - Regular:  400
  - Semibold: 600
  - Bold:     700
  - Extra Bold: 800 (for emphasis)

Line Heights:
  - Headings: 1.2
  - Body:     1.6
  - Large Text: 1.8
```

### Typography Rules:
- ✅ All text >= 16px on mobile for readability
- ✅ High contrast (WCAG AA minimum)
- ✅ Emoji used as visual aids, not replacements
- ✅ Uppercase for buttons and CTAs
- ❌ Avoid italics (harder to read for children)

---

## Component Library

### 1. **Button Component**

```jsx
<Button 
  variant="primary|secondary|accent|success"
  size="small|medium|large"
  onClick={() => {}}
>
  Button Text
</Button>
```

**Variants:**
- **Primary (Red):** Main actions (Start Game, Play Country, Next Question)
- **Secondary (Teal):** Back/Exit actions
- **Accent (Yellow):** Special actions, info buttons
- **Success (Green):** Correct answers, completed states

**Sizes:**
- **Small:** 12px padding, 16px font (secondary buttons)
- **Medium:** 16px padding, 18px font (standard buttons)
- **Large:** 20px padding, 24px font (main CTAs)

**Interactions:**
```css
Hover:    Scale 105%, enhanced shadow
Active:   Scale 98%, pressed effect
Disabled: 50% opacity, not clickable
Focus:    Ring outline for keyboard accessibility
```

---

### 2. **Card Component**

```jsx
<Card className="optional-classes">
  Card Content
</Card>
```

**Styling:**
- White background with rounded corners (20px)
- Subtle shadow (0 4px 15px rgba(0,0,0,0.1))
- Hover: Lift effect (-5px transform, enhanced shadow)
- Padding: 20px-32px (responsive)

**Usage:**
- Country selection cards
- Learning module slides
- Quiz question cards
- Info boxes

---

### 3. **Progress Bar**

```jsx
<div className="progress-bar">
  <div style={{ width: `${progress}%` }} />
</div>
```

**Features:**
- Smooth animated transition
- Gradient fill: red → yellow
- Height: 16px for visibility
- Rounded ends

---

### 4. **Stamp Component**

```jsx
✅ = Completed (animated scale)
⭕ = Not Completed (grayed out)
```

**Animation:**
- Completed stamps: continuous gentle bounce
- Size: 80px for visibility
- Positioned in country cards

---

## Screens & Flows

### **Screen 1: Main Menu** 🏠

**Layout:**
```
┌──────────────────────���──────────┐
│     🌍 World Explorer 🌍        │
│   Learn about the world!        │
├─────────────────────────────────┤
│   [✨ Start Game ✨] (Large)    │
├─────────────────────────────────┤
│  Description Box:               │
│  🗺️ Discover famous places      │
│  📚 Learn fun facts             │
│  🎖️ Collect passport stamps    │
│                                 │
│  Instructions:                  │
│  1️⃣ Choose a country           │
│  2️⃣ Learn about it             │
│  3️⃣ Answer quiz questions      │
│  4️⃣ Collect your stamp!        │
└─────────────────────────────────┘
```

**Design Elements:**
- Title: Large, bold, animated float effect
- Buttons: Centered, large padding
- Description: Descriptive card with emoji bullets
- Instructions: Numbered list in highlighted box
- Background: Gradient (cream → peach → light blue)

---

### **Screen 2: Passport Book** 📖

**Layout:**
```
┌─────────────────────────────────┐
│     📖 My Passport 📖           │
│ Stamps: 3/10                    │
├─────────────────────────────────┤
│  ┌──────┐  ┌──────┐  ┌──────┐  │
│  │ 🇦🇺   │  │ 🇧🇷   │  │ 🇨🇦   │  │
│  │Austr │  │Brazil│  │Canada│  │
│  │ 🦘   │  │ 🦜   │  │ 🫎   │  │
│  │✅(C) │  │✅(C) │  │⭕(N) │  │
│  │Replay│  │Replay│  │▶ Play│  │
│  └──────┘  └──────┘  └──────┘  │
│                                 │
│  [← Back to Menu]               │
└─────────────────────────────────┘
```

**Grid Layout:**
- 1 column (mobile)
- 2 columns (tablet)
- 3 columns (desktop)
- Card gap: 24px

**Card Elements:**
1. Country flag emoji (large, 48px)
2. Country name (bold, 24px)
3. Animal emoji (36px)
4. Animal name (14px, gray)
5. Stamp indicator (✅ or ⭕, 80px)
6. Button (Play or Replay)

---

### **Screen 3: Learning Module** 📚

**Layout:**
```
┌─────────────────────────────────┐
│    Progress: [████░░░░░] 40%    │
│           3 of 7                │
├─────────────────────────────────┤
│                                 │
│   ┌─────────────────────────┐  │
│   │  Sydney Opera House     │  │
│   │         🏢              │  │
│   │  A beautiful white      │  │
│   │  building by the sea    │  │
│   │  🎁 It looks like       │  │
│   │     giant shells!       │  │
│   └─────────────────────────┘  │
│                                 │
│  [← Back] [Exit] [Next →]      │
└─────────────────────────────────┘
```

**Slide Components:**
1. **Intro Slide:**
   - Title: "Welcome to [Country]! [Flag]"
   - Message: "Let's learn about this amazing country!"

2. **Place/Animal Slides:**
   - Title: Place/Animal name
   - Emoji: Large, animated float
   - Description: 2-3 sentences
   - Fun Fact: In highlighted box with 💡 icon

**Navigation:**
- Previous: Disabled on first slide
- Exit: Always available
- Next/Start Quiz: Changes on last slide

---

### **Screen 4: Quiz** 🧩

**Layout:**
```
┌─────────────────────────────────┐
│    🧩 Quiz Time! 🧩             │
│   Australia 🇦🇺                │
│    Progress: [████░░] 60%      │
│    Question 3 of 5              │
│    Score: 2/5                   │
├─────────────────────────────────┤
│   Which animal lives in         │
│       Australia?                │
│                                 │
│  ┌────┐  ┌────┐  ┌────┐ ┌────┐│
│  │Kang│  │Peng│  │Moos│ │Lion││
│  │aroo│  │uin │  │    │ │    ││
│  └────┘  └────┘  └────┘ └────┘│
│                                 │
│  ✅ Correct! Great job!        │
│                                 │
│  [Exit Quiz] [✅ Get Stamp!]   │
└─────────────────────────────────┘
```

**Question Card Elements:**
1. Question text (large, 32px)
2. Answer options (2x2 or 4 columns grid)
3. Option styling:
   - Normal: Light blue background
   - Hover: Darker blue, scale 105%
   - Selected Correct: Green, ring shadow
   - Selected Wrong: Red, ring shadow
   - Show Answer: Green ring on correct option

**Answer Buttons:**
- Display: 4 options in responsive grid
- Size: Min 60px x 60px for touch
- Feedback: Immediate color change
- Disabled: After first selection

**Feedback Box:**
- Success: Green background, "✅ Correct! Great job!"
- Failure: Red background, "💪 Not quite, try again!"
- Display: After selection

---

## Animations & Interactions

### **1. Page Transitions**
```css
@keyframes fadeIn {
  from: opacity 0, translateY(10px)
  to: opacity 1, translateY(0)
  duration: 500ms
}
```

### **2. Button Interactions**
```css
Hover:    scale(1.05) + box-shadow
Active:   scale(0.98)
Focus:    outline ring (accessibility)
```

### **3. Card Lift Effect**
```css
Hover:    translateY(-5px) + shadow increase
Duration: 300ms cubic-bezier
```

### **4. Float Animation**
```css
@keyframes float {
  0%, 100%: translateY(0)
  50%:      translateY(-10px)
  duration: 3s ease-in-out infinite
}
```
Used for: Titles, emoji, stamps

### **5. Wiggle Animation**
```css
@keyframes wiggle {
  0%, 100%: rotate(-1deg)
  50%:      rotate(1deg)
  duration: 500ms
}
```
Used for: Attention-grabbing elements

### **6. Progress Bar Animation**
```css
width: smooth transition 500ms
gradient: animated flow
```

### **7. Stamp Bounce**
```css
@keyframes bounce-slow {
  0%, 100%: translateY(0)
  50%:      translateY(-15px)
  duration: 1.5s
}
```

### **8. Pulse Glow**
```css
@keyframes pulse-glow {
  0%, 100%: opacity 1
  50%:      opacity 0.7
  duration: 2s
}
```
Used for: Correct answer highlight

---

## Accessibility

### **Visual Accessibility:**
- ✅ Minimum color contrast ratio 7:1 (WCAG AAA)
- ✅ Large text (≥16px on mobile)
- ✅ Text not conveyed by color alone (emoji + text)
- ✅ Sufficient button size (44x44px minimum)

### **Motor Accessibility:**
- ✅ Large touch targets (min 48px on mobile)
- ✅ Adequate spacing between buttons
- ✅ No hover-only information
- ✅ Keyboard navigation support
- ✅ Focus indicators visible

### **Cognitive Accessibility:**
- ✅ Simple, clear language
- ✅ Consistent navigation patterns
- ✅ Clear visual hierarchy
- ✅ Emoji for visual support
- ✅ One action per screen
- ✅ Progress indicators (progress bars, "X of Y")
- ✅ Immediate feedback for all actions

### **Semantic HTML:**
```html
<button>  (instead of <div onclick>)
<img alt=""> (descriptive alt text)
<h1>, <h2>, <h3> (proper heading hierarchy)
<label>  (for form elements)
aria-label (for icon-only buttons)
```

### **Screen Reader Support:**
- All buttons have descriptive labels
- Progress bars announce percentages
- Feedback messages are clear and announced
- Navigation landmarks properly labeled

---

## Responsive Design

### **Breakpoints:**

```css
Mobile:     320px - 640px
Tablet:     641px - 1024px
Desktop:    1025px+
```

### **Responsive Grid:**

```css
Countries Grid:
  Mobile:   1 column (100% width, -8px margin)
  Tablet:   2 columns (gap: 16px)
  Desktop:  3 columns (gap: 24px)

Quiz Options:
  Mobile:   2x2 grid (gap: 12px)
  Tablet:   4 columns (gap: 16px)
  Desktop:  4 columns (gap: 20px)
```

### **Font Scaling:**

```css
H1:
  Mobile:   36px
  Tablet:   48px
  Desktop:  64px

H2:
  Mobile:   28px
  Tablet:   36px
  Desktop:  48px

Body:
  Mobile:   16px
  Tablet:   18px
  Desktop:  20px
```

### **Spacing Scaling:**

```css
Mobile:   8px base unit
Tablet:   12px base unit
Desktop:  16px base unit

Padding:
  Cards:    Mobile 16px, Tablet 24px, Desktop 32px
  Buttons:  Mobile 12px, Tablet 16px, Desktop 20px
```

### **Touch vs Desktop:**

```css
Touch (Mobile/Tablet):
  - Button min size: 48x48px
  - Spacing: 12px minimum between touch targets
  - No hover states (use active/focus)
  - Larger text for readability

Desktop:
  - Button min size: 44x44px
  - Can use hover states for feedback
  - Tooltips supported
  - Smaller text acceptable
```

---

## Design System Tokens

### **Spacing Scale**
```
xs: 4px
sm: 8px
md: 12px
lg: 16px
xl: 24px
2xl: 32px
3xl: 48px
```

### **Border Radius**
```
sm: 8px
md: 12px
lg: 16px
xl: 20px
2xl: 24px
full: 9999px (pills)
```

### **Shadow System**
```
sm: 0 2px 4px rgba(0,0,0,0.1)
md: 0 4px 15px rgba(0,0,0,0.1)
lg: 0 8px 25px rgba(0,0,0,0.15)
xl: 0 12px 30px rgba(0,0,0,0.2)
```

### **Opacity**
```
0:   0%
20:  20%
50:  50%
70:  70%
100: 100%
```

---

## Interactive Feedback

### **Success Feedback:**
- Color change to green ✅
- Checkmark icon
- "Correct! Great job!" message
- Celebratory animation
- Audio: positive ding sound (optional)

### **Error Feedback:**
- Color change to red ❌
- "Try again!" message
- Show correct answer highlighted
- Audio: gentle buzz (optional)

### **Loading State:**
- Progress bar advancement
- Smooth transitions
- No spinner (less suitable for children)

### **Empty State:**
- Friendly message
- Clear call-to-action
- Encouraging emoji

---

## Implementation Checklist

- [ ] Tailwind CSS for utility-first styling
- [ ] React components for reusability
- [ ] Framer Motion for animations
- [ ] Responsive mobile-first approach
- [ ] Accessibility testing with axe/WAVE
- [ ] Color contrast verification (7:1 ratio)
- [ ] Button size testing on actual devices
- [ ] Touch interaction testing
- [ ] Keyboard navigation testing
- [ ] Screen reader testing
- [ ] Performance optimization (lazy loading)
- [ ] Offline capability (PWA)

---

## Future Enhancements

🎨 **Visual Improvements:**
- Custom illustrations for places/animals
- Animated character mascot
- Particle effects for celebrations
- Themed backgrounds per country

🎵 **Audio Enhancements:**
- Background music
- Country-specific sounds (animal sounds, music)
- Voice narration for learning module
- Sound effects for interactions

🎮 **Gamification:**
- Achievement badges
- Daily streaks
- Difficulty levels
- Leaderboard (local storage)
- Custom avatar with rewards

📱 **Mobile Optimization:**
- App wrapper (React Native)
- Offline mode
- Push notifications for daily challenges
- Haptic feedback

🌍 **Content Expansion:**
- Additional countries
- Mini-games between quizzes
- User-generated content
- Multiplayer challenges

---

**Version:** 1.0  
**Last Updated:** August 18, 2026  
**Status:** Ready for Implementation
