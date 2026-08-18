import { useContext } from 'react'
import { GameContext } from '../context/GameContext'
import Button from '../components/common/Button'

export default function MainMenu() {
  const { setGameState } = useContext(GameContext)

  return (
    <div className="page-enter min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        {/* Title */}
        <div className="mb-12 animate-float">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            🌍 World Explorer 🌍
          </h1>
          <p className="text-2xl md:text-3xl text-secondary font-semibold">
            Learn about the amazing world around you!
          </p>
        </div>

        {/* Description */}
        <div className="bg-white rounded-3xl p-8 max-w-2xl mx-auto mb-12 card">
          <p className="text-lg md:text-xl text-dark-blue mb-4">
            🗺️ Discover famous places and animals from 10 countries
          </p>
          <p className="text-lg md:text-xl text-dark-blue mb-4">
            📚 Learn fun facts about each country
          </p>
          <p className="text-lg md:text-xl text-dark-blue">
            🎖️ Collect passport stamps when you complete a quiz!
          </p>
        </div>

        {/* Start Button */}
        <Button
          onClick={() => setGameState('passport')}
          variant="primary"
          size="large"
          className="text-2xl md:text-3xl px-12 py-6 mb-6"
        >
          ✨ Start Game ✨
        </Button>

        {/* Instructions */}
        <div className="max-w-2xl mx-auto bg-accent bg-opacity-20 rounded-2xl p-6 border-4 border-accent">
          <h3 className="text-xl font-bold mb-3">🎮 How to Play:</h3>
          <ol className="text-left text-base md:text-lg">
            <li className="mb-2">📖 Choose a country from your passport</li>
            <li className="mb-2">👀 Learn about amazing places and animals</li>
            <li className="mb-2">🧩 Answer quiz questions correctly</li>
            <li>🎖️ Collect your passport stamp!</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
