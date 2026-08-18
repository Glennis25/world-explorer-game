import { useContext } from 'react'
import { GameContext } from '../context/GameContext'
import { countriesData } from '../data/countries'
import Button from '../components/common/Button'
import Card from '../components/common/Card'

export default function PassportBook() {
  const { handleSelectCountry, handleBackToMenu, passportStamps } = useContext(GameContext)

  return (
    <div className="page-enter min-h-screen px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-3">📖 My Passport 📖</h1>
        <p className="text-xl text-secondary font-semibold">Collect stamps from around the world!</p>
        <p className="text-lg mt-4">
          Stamps collected: <span className="text-primary font-bold text-2xl">{Object.keys(passportStamps).length}/10</span>
        </p>
      </div>

      {/* Countries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
        {countriesData.map((country) => (
          <Card key={country.id} className="relative cursor-pointer hover:scale-105 transform transition-transform">
            <div className="flex flex-col items-center">
              {/* Country Flag & Name */}
              <div className="text-6xl mb-3">{country.flag}</div>
              <h2 className="text-2xl font-bold text-dark-blue mb-4">{country.name}</h2>

              {/* Stamp */}
              <div className="mb-6 h-20 w-20 flex items-center justify-center">
                {passportStamps[country.id] ? (
                  <div className="text-6xl animate-bounce-slow">✅</div>
                ) : (
                  <div className="text-6xl opacity-20">⭕</div>
                )}
              </div>

              {/* Animal */}
              <div className="text-5xl mb-3">{country.animal.emoji}</div>
              <p className="text-sm text-gray-600 mb-4">{country.animal.name}</p>

              {/* Play Button */}
              <Button
                onClick={() => handleSelectCountry(country)}
                variant={passportStamps[country.id] ? 'success' : 'primary'}
                size="medium"
              >
                {passportStamps[country.id] ? '🔁 Replay' : '▶️ Play'}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Back Button */}
      <div className="flex justify-center mb-8">
        <Button
          onClick={handleBackToMenu}
          variant="secondary"
          size="medium"
        >
          ← Back to Menu
        </Button>
      </div>
    </div>
  )
}
