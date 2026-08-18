import { createContext, useState } from 'react'
import { countriesData } from '../data/countries'

export const GameContext = createContext()

export function GameProvider({ children }) {
  const [gameState, setGameState] = useState('menu') // menu, passport, learning, quiz
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [passportStamps, setPassportStamps] = useState({})
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [quizScore, setQuizScore] = useState(0)

  const handleStartGame = () => {
    setGameState('passport')
  }

  const handleSelectCountry = (country) => {
    setSelectedCountry(country)
    setGameState('learning')
    setCurrentQuestion(0)
  }

  const handleLearningComplete = () => {
    setGameState('quiz')
    setCurrentQuestion(0)
    setQuizScore(0)
  }

  const handleQuizComplete = () => {
    // Award stamp
    setPassportStamps(prev => ({
      ...prev,
      [selectedCountry.id]: true
    }))
    // Go back to passport
    setGameState('passport')
    setSelectedCountry(null)
  }

  const handleBackToPassport = () => {
    setGameState('passport')
    setSelectedCountry(null)
    setCurrentQuestion(0)
  }

  const handleBackToMenu = () => {
    setGameState('menu')
    setSelectedCountry(null)
    setCurrentQuestion(0)
  }

  const handleUpdateScore = (newScore) => {
    setQuizScore(newScore)
  }

  const value = {
    gameState,
    setGameState,
    selectedCountry,
    setSelectedCountry,
    passportStamps,
    setPassportStamps,
    currentQuestion,
    setCurrentQuestion,
    quizScore,
    setQuizScore,
    handleStartGame,
    handleSelectCountry,
    handleLearningComplete,
    handleQuizComplete,
    handleBackToPassport,
    handleBackToMenu,
    handleUpdateScore,
    countriesData
  }

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
}
