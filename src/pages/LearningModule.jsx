import { useContext, useState } from 'react'
import { GameContext } from '../context/GameContext'
import Button from '../components/common/Button'
import Card from '../components/common/Card'

export default function LearningModule() {
  const { selectedCountry, handleLearningComplete, handleBackToPassport } = useContext(GameContext)
  const [currentSlide, setCurrentSlide] = useState(0)

  if (!selectedCountry) return null

  const slides = [
    {
      type: 'intro',
      title: `Welcome to ${selectedCountry.name}! ${selectedCountry.flag}`,
      content: `Let's learn about this amazing country!`
    },
    ...selectedCountry.places.map((place) => ({
      type: 'place',
      title: place.name,
      emoji: place.emoji,
      content: place.description,
      fact: place.fact
    })),
    {
      type: 'animal',
      title: selectedCountry.animal.name,
      emoji: selectedCountry.animal.emoji,
      content: selectedCountry.animal.description,
      fact: selectedCountry.animal.fact
    }
  ]

  const currentSlide_data = slides[currentSlide]
  const progress = ((currentSlide + 1) / slides.length) * 100

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      handleLearningComplete()
    }
  }

  return (
    <div className="page-enter min-h-screen px-4 py-8 flex flex-col">
      {/* Progress Bar */}
      <div className="max-w-2xl mx-auto w-full mb-8">
        <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-primary h-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center mt-3 text-sm font-semibold">
          {currentSlide + 1} of {slides.length}
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <Card className="max-w-2xl w-full">
          <div className="text-center">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark-blue">
              {currentSlide_data.title}
            </h1>

            {/* Emoji */}
            {currentSlide_data.emoji && (
              <div className="text-8xl md:text-9xl mb-6 animate-float">
                {currentSlide_data.emoji}
              </div>
            )}

            {/* Description */}
            <p className="text-2xl text-gray-700 mb-6">
              {currentSlide_data.content}
            </p>

            {/* Fun Fact */}
            {currentSlide_data.fact && (
              <div className="bg-accent bg-opacity-30 rounded-2xl p-6 mb-6 border-3 border-accent">
                <p className="text-xl font-semibold text-dark-blue">
                  💡 Fun Fact: {currentSlide_data.fact}
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between max-w-2xl mx-auto w-full mt-8 gap-4">
        <Button
          onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
          variant="secondary"
          size="medium"
          className={currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}
          disabled={currentSlide === 0}
        >
          ← Back
        </Button>
        <Button onClick={handleBackToPassport} variant="secondary" size="medium">
          Exit
        </Button>
        <Button
          onClick={handleNext}
          variant="primary"
          size="medium"
        >
          {currentSlide === slides.length - 1 ? 'Start Quiz 🧩' : 'Next →'}
        </Button>
      </div>
    </div>
  )
}
