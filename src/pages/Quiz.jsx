import { useContext, useState, useEffect } from 'react'
import { GameContext } from '../context/GameContext'
import Button from '../components/common/Button'
import Card from '../components/common/Card'

export default function Quiz() {
  const { selectedCountry, handleQuizComplete, handleBackToPassport } = useContext(GameContext)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(null)

  if (!selectedCountry) return null

  const questions = selectedCountry.quiz
  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswerSelect = (answer) => {
    if (selectedAnswer !== null) return // Prevent multiple selections

    setSelectedAnswer(answer)
    const correct = answer === question.correctAnswer
    setIsCorrect(correct)
    setShowFeedback(true)

    if (correct) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
      setIsCorrect(null)
    } else {
      // Quiz complete
      handleQuizComplete()
    }
  }

  // Shuffle options
  const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5)

  return (
    <div className="page-enter min-h-screen px-4 py-8 flex flex-col">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-3">🧩 Quiz Time! 🧩</h1>
        <p className="text-xl text-secondary font-semibold">{selectedCountry.name} {selectedCountry.flag}</p>
      </div>

      {/* Progress Bar */}
      <div className="max-w-2xl mx-auto w-full mb-8">
        <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-accent h-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center mt-3 text-sm font-semibold">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>

      {/* Score */}
      <div className="text-center mb-8">
        <p className="text-2xl font-bold text-primary">Score: {score}/{questions.length}</p>
      </div>

      {/* Question Card */}
      <div className="flex-grow flex items-center justify-center">
        <Card className="max-w-2xl w-full">
          <div className="text-center">
            {/* Question */}
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-dark-blue">
              {question.question}
            </h2>

            {/* Answer Options */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-8">
              {shuffledOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={selectedAnswer !== null}
                  className={`p-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    selectedAnswer === option
                      ? isCorrect
                        ? 'bg-success text-white scale-105 shadow-xl'
                        : 'bg-red-500 text-white scale-105 shadow-xl'
                      : 'bg-blue-100 text-dark-blue hover:bg-blue-200'
                  } ${selectedAnswer !== null && option === question.correctAnswer ? 'ring-4 ring-success' : ''}`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className={`mb-8 p-6 rounded-2xl border-4 ${
                isCorrect
                  ? 'bg-success bg-opacity-20 border-success'
                  : 'bg-red-100 border-red-500'
              }`}>
                <p className="text-2xl font-bold">
                  {isCorrect ? '🎉 Correct! Great job!' : '💪 Not quite, try again next time!'}
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between max-w-2xl mx-auto w-full mt-8 gap-4">
        <Button onClick={handleBackToPassport} variant="secondary" size="medium">
          Exit Quiz
        </Button>
        {showFeedback && (
          <Button
            onClick={handleNextQuestion}
            variant="primary"
            size="medium"
          >
            {currentQuestion === questions.length - 1 ? '✅ Get Stamp!' : 'Next Question →'}
          </Button>
        )}
      </div>
    </div>
  )
}
