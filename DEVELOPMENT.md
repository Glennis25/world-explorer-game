# 🚀 World Explorer Game - Development Guide

## Quick Start

### Prerequisites
- Node.js 16+ and npm 7+
- Git
- Code editor (VS Code recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/Glennis25/world-explorer-game.git
cd world-explorer-game

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:5173
```

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview

# Deploy to Vercel (recommended for Next.js-like deployment)
npm run build && vercel deploy --prod
```

---

## Project Structure

```
world-explorer-game/
├── public/                      # Static assets
│   ├── images/
│   │   ├── countries/          # Country-specific images
│   │   ├── animals/            # Animal illustrations
│   │   ├── places/             # Place/landmark images
│   │   └── ui/                 # UI graphics, buttons
│   └── audio/                  # Sound effects, music
│
├── src/
│   ├── components/             # Reusable UI components
│   │   └── common/
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── ProgressBar.jsx
│   │       └── Modal.jsx
│   │
│   ├── pages/                  # Full page components
│   │   ├── MainMenu.jsx
│   │   ├── PassportBook.jsx
│   │   ├── LearningModule.jsx
│   │   └── Quiz.jsx
│   │
│   ├── context/                # React Context API
│   │   ├── GameContext.jsx
│   │   └── GameProvider.jsx
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useSound.js
│   │   ├── useLocalStorage.js
│   │   └── useGameState.js
│   │
│   ├── utils/                  # Utility functions
│   │   ├── helpers.js
│   │   ├── validators.js
│   │   └── constants.js
│   │
│   ├── data/                   # Static data
│   │   ├── countries.js        # All country data
│   │   └── achievements.js
│   │
│   ├── styles/                 # CSS files
│   │   ├── index.css           # Global styles
│   │   ├── animations.css
│   │   └── responsive.css
│   │
│   ├── App.jsx                 # Root component
│   ├── App.css                 # App styles
│   └── main.jsx                # Entry point
│
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules
├── index.html                  # HTML template
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
├── postcss.config.js           # PostCSS config
├── DESIGN.md                   # UI/UX design document
├── DEVELOPMENT.md              # This file
└── README.md                   # Project overview
```

---

## Core Concepts

### State Management

The app uses **React Context API** to manage global state:

```javascript
// GameContext.jsx
export const GameContext = createContext()

// App.jsx - Provides state to entire app
<GameContext.Provider value={contextValue}>
  <MainPage />
</GameContext.Provider>

// Components - Access state
const { gameState, selectedCountry } = useContext(GameContext)
```

### Game Flow

```
Menu → Passport Book → Learning Module → Quiz → Back to Passport
                ↓
            Select Country
```

**State Variables:**
- `gameState`: Current screen (menu, passport, learning, quiz)
- `selectedCountry`: Currently selected country object
- `passportStamps`: Object tracking completed countries
- `currentQuestion`: Index of current quiz question
- `score`: Quiz score for current country

---

## Component Architecture

### Page Components

#### **MainMenu.jsx**
```javascript
Purpose: Welcome screen with game instructions
Props: None (uses GameContext)
State: None (managed by parent)
Events: onClick → setGameState('passport')
```

#### **PassportBook.jsx**
```javascript
Purpose: Country selection and progress tracking
Props: None (uses GameContext)
State: None
Events: 
  - onClick country → handleSelectCountry()
  - onClick back → handleBackToMenu()
```

#### **LearningModule.jsx**
```javascript
Purpose: Educational content slides
Props: None (uses GameContext)
State: 
  - currentSlide: number
Events:
  - onClick next → setCurrentSlide(+1)
  - onClick complete → handleLearningComplete()
```

#### **Quiz.jsx**
```javascript
Purpose: Quiz questions and feedback
Props: None (uses GameContext)
State:
  - currentQuestion: number
  - score: number
  - selectedAnswer: string | null
  - showFeedback: boolean
Events:
  - onClick answer → handleAnswerSelect()
  - onClick next → handleNextQuestion()
```

### Common Components

#### **Button.jsx**
```javascript
Props:
  - children: React.ReactNode
  - onClick: function
  - variant: 'primary' | 'secondary' | 'accent' | 'success'
  - size: 'small' | 'medium' | 'large'
  - className?: string
  - disabled?: boolean
```

#### **Card.jsx**
```javascript
Props:
  - children: React.ReactNode
  - className?: string
  - onClick?: function
  - id?: string
```

---

## Styling with Tailwind CSS

### Color Tokens

```javascript
// tailwind.config.js
colors: {
  primary: '#FF6B6B',      // Red
  secondary: '#4ECDC4',    // Teal
  accent: '#FFE66D',       // Yellow
  success: '#95E1D3',      // Green
  background: '#FFF8F3',   // Cream
}
```

### Usage Examples

```jsx
// Primary button (red)
<button className="bg-primary text-white">Primary</button>

// Secondary button (teal)
<button className="bg-secondary text-white">Secondary</button>

// Responsive padding
<div className="p-4 md:p-6 lg:p-8">Responsive</div>

// Flex layout
<div className="flex flex-col md:flex-row gap-4">Flex</div>

// Animations
<div className="animate-float">Floats</div>
<div className="animate-wiggle">Wiggles</div>
```

### Custom Animations

```css
/* Defined in tailwind.config.js */
- animate-bounce-slow   /* Gentle bounce */
- animate-pulse-glow    /* Pulsing effect */
- animate-wiggle        /* Wiggle side-to-side */
- animate-float         /* Float up and down */
```

---

## Data Flow

### Countries Data Structure

```javascript
// src/data/countries.js
{
  id: 1,
  name: 'Australia',
  flag: '🇦🇺',
  color: '#FFD700',
  animal: {
    name: 'Kangaroo',
    emoji: '🦘',
    description: 'A large marsupial that hops...',
    fact: 'Kangaroos can jump up to 30 feet!'
  },
  places: [
    {
      id: 1,
      name: 'Sydney Opera House',
      emoji: '🏢',
      description: 'A beautiful white building...',
      fact: 'It looks like giant shells!'
    },
    // ... more places
  ],
  quiz: [
    {
      id: 1,
      question: 'Which animal lives in Australia?',
      correctAnswer: 'Kangaroo',
      options: ['Kangaroo', 'Penguin', 'Moose', 'Lion']
    },
    // ... more questions
  ]
}
```

---

## Development Workflow

### Adding a New Feature

1. **Create branch**
   ```bash
   git checkout -b feature/my-feature
   ```

2. **Create component**
   ```bash
   touch src/components/MyComponent.jsx
   ```

3. **Write code**
   - Follow existing patterns
   - Use Tailwind classes
   - Add PropTypes for validation

4. **Test locally**
   ```bash
   npm run dev
   ```

5. **Commit changes**
   ```bash
   git add .
   git commit -m "Add MyComponent"
   ```

6. **Push to GitHub**
   ```bash
   git push origin feature/my-feature
   ```

7. **Create Pull Request**
   - Describe changes
   - Link related issues
   - Request review

---

## Adding a New Country

### Step 1: Add Country Data

Edit `src/data/countries.js`:

```javascript
{
  id: 11,
  name: 'New Country',
  flag: '🌎',
  color: '#HEXCOLOR',
  animal: {
    name: 'Animal Name',
    emoji: '🐾',
    description: 'Description of the animal...',
    fact: 'Fun fact about the animal!'
  },
  places: [
    {
      id: 1,
      name: 'Place Name',
      emoji: '🏛️',
      description: 'Description of the place...',
      fact: 'Fun fact about the place!'
    },
    // Add 3 places total
  ],
  quiz: [
    {
      id: 1,
      question: 'Question about the country?',
      correctAnswer: 'Correct Answer',
      options: ['Correct', 'Wrong1', 'Wrong2', 'Wrong3']
    },
    // Add 4 questions total
  ]
}
```

### Step 2: Add Images

Add images to `public/images/`:
- Country flag (if needed)
- Animal illustration: `public/images/animals/animal-name.png`
- Place images: `public/images/places/place-name.png`

### Step 3: Update Components (if needed)

If using images instead of emojis, update components to display them.

---

## Customization Guide

### Changing Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#YOUR_COLOR',
  secondary: '#YOUR_COLOR',
  // ...
}
```

### Changing Fonts

Edit `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont" rel="stylesheet">
```

Then update `tailwind.config.js`:
```javascript
fontFamily: {
  base: ['YourFont', 'sans-serif'],
}
```

### Changing Animations

Edit `tailwind.config.js` in `keyframes` section or `index.css`.

### Adding Sound Effects

1. Add audio files to `public/audio/`
2. Create hook in `src/hooks/useSound.js`
3. Use in components:
   ```javascript
   const { playSound } = useSound()
   <button onClick={() => playSound('correct')}>Answer</button>
   ```

---

## Testing

### Manual Testing Checklist

- [ ] All buttons clickable and responsive
- [ ] Navigation flow works correctly
- [ ] Quiz questions display properly
- [ ] Stamps save between sessions
- [ ] Responsive on mobile/tablet/desktop
- [ ] Animations smooth and performant
- [ ] Text readable at all zoom levels
- [ ] Touch targets adequate on mobile

### Browser Testing

- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Chrome Android

### Accessibility Testing

```bash
# Install axe DevTools
# Available as browser extension

# Check:
- Color contrast (7:1 ratio minimum)
- Keyboard navigation
- Screen reader compatibility
- Button sizes (44x44px minimum)
- Focus indicators visible
```

---

## Performance Optimization

### Image Optimization

```bash
# Optimize images before adding
# Use online tools: TinyPNG, ImageOptim, Squoosh

# Or command line:
npm install -g imagemin-cli
imagemin images/ --out-dir=public/images
```

### Code Splitting

Lazy load pages:
```javascript
import { lazy, Suspense } from 'react'

const MainMenu = lazy(() => import('./pages/MainMenu'))

<Suspense fallback={<Loading />}>
  <MainMenu />
</Suspense>
```

### Bundle Analysis

```bash
npm install -D rollup-plugin-visualizer
```

---

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
"homepage": "https://Glennis25.github.io/world-explorer-game"

# Add scripts
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

### Deploy to Netlify

```bash
# Connect GitHub repo at netlify.com
# Auto-deploy on push to main
```

---

## Debugging

### Enable React DevTools

1. Install React DevTools browser extension
2. Open DevTools (F12)
3. Go to "React" tab
4. Inspect component tree and state

### Debug State

```javascript
// In component
const { gameState, selectedCountry } = useContext(GameContext)
console.log({ gameState, selectedCountry })
```

### Debug Performance

```javascript
// Measure render time
console.time('render')
// ... component code
console.timeEnd('render')
```

---

## Common Issues & Solutions

### Issue: Styles not applying

**Solution:** Check Tailwind build process
```bash
npm run dev  # Rebuild CSS
```

### Issue: State not updating

**Solution:** Ensure Context is properly wrapped
```jsx
<GameContext.Provider value={value}>
  <App />
</GameContext.Provider>
```

### Issue: Images not loading

**Solution:** Check path is relative to `public/`
```jsx
<img src="/images/countries/australia.png" />
// ✅ Correct: /images/...
// ❌ Wrong: ./images/... or ../images/...
```

### Issue: Animations janky

**Solution:** Use `transform` and `opacity` (GPU accelerated)
```css
/* ✅ Good */
transform: scale(1.05)
opacity: 0.5

/* ❌ Bad */
width: 200px
height: 200px
```

---

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- iOS Safari: 12+
- Android Chrome: 51+

---

## Contributing Guidelines

1. Fork the repository
2. Create feature branch: `git checkout -b feature/xyz`
3. Follow code style (Prettier)
4. Write meaningful commit messages
5. Push to branch: `git push origin feature/xyz`
6. Open Pull Request with description

---

## Resources & Links

- **Vite Docs:** https://vitejs.dev/
- **React Docs:** https://react.dev/
- **Tailwind Docs:** https://tailwindcss.com/
- **MDN Web Docs:** https://developer.mozilla.org/
- **Accessibility Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/

---

## Support & Questions

- 📧 Email: glennis25@example.com
- 🐛 Bug Reports: GitHub Issues
- 💬 Discussions: GitHub Discussions
- 📚 Documentation: Check DESIGN.md

---

**Version:** 1.0  
**Last Updated:** August 18, 2026  
**Status:** Ready for Development
