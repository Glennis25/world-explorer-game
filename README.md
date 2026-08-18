# 🌍 World Explorer Game

An interactive educational game for children aged 3-6 that teaches them about famous places, buildings, and animals from around the world.

## Features

- 🗺️ **Passport Book System**: Collect stamps as you complete each country
- 🏛️ **Learning Modules**: Explore iconic places, buildings, and animals from each country
- 🧩 **Picture Matching Quiz**: Test knowledge with fun multiple-choice questions
- 🎨 **Child-Friendly UI**: Colorful, intuitive design for young learners
- 🔊 **Audio & Narration**: Engaging sound effects and spoken guidance
- 🎮 **Replayable Content**: Randomized quizzes for endless learning

## Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: TailwindCSS + Custom CSS animations
- **State Management**: React Context API
- **Audio**: Howler.js
- **Build Tool**: Vite
- **Hosting**: Vercel

## Project Structure

```
world-explorer-game/
├── public/
│   ├── images/
│   │   ├── countries/
│   │   ├── animals/
│   │   ├── places/
│   │   └── ui/
│   └── audio/
├── src/
│   ├── components/
│   │   ├── Passport/
│   │   ├── Quiz/
│   │   ├── LearningModule/
│   │   ├── MainMenu/
│   │   └── common/
│   ├── pages/
│   ├── context/
│   ├── data/
│   ├── styles/
│   ├── hooks/
│   ├── utils/
│   └── App.jsx
├── package.json
└── vite.config.js
```

## Getting Started

### Installation

```bash
git clone https://github.com/Glennis25/world-explorer-game.git
cd world-explorer-game
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Countries & Animals (MVP)

- 🇦🇺 Australia - Kangaroo
- 🇧🇷 Brazil - Toucan
- 🇨🇦 Canada - Moose
- 🇫🇷 France - French Bulldog
- 🇮🇳 India - Bengal Tiger
- 🇿🇦 South Africa - Lion
- 🇬🇧 United Kingdom - Red Fox
- 🇺🇸 United States - Bald Eagle
- 🇨🇭 Switzerland - Alpine Ibex
- 🇯🇵 Japan - Red Panda

## Game Flow

1. Main Menu
2. Passport View
3. Learning Module
4. Quiz
5. Stamp Reward

---

**Happy Learning! 🌎✨**
