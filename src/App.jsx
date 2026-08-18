import { useState } from 'react'
import { GameContext } from './context/GameContext'
import MainMenu from './pages/MainMenu'
import PassportBook from './pages/PassportBook'
import LearningModule from './pages/LearningModule'
import Quiz from './pages/Quiz'
import './App.css'

function App() {
  const [gameState, setGameState] = useState('menu') // menu, passport, learning, quiz
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [passportStamps, setPassportStamps] = useState({})

  const handleSelectCountry = (country) => {
    setSelectedCountry(country)
    setGameState('learning')
  }

  const handleLearningComplete = () => {
    setGameState('quiz')
  }

  const handleQuizComplete = () => {
    setPassportStamps(prev => ({
      ...prev,
      [selectedCountry.id]: true
    }))
    setGameState('passport')
  }

  const handleBackToPassport = () => {
    setGameState('passport')
  }

  const handleBackToMenu = () => {
    setGameState('menu')
  }

  const contextValue = {
    gameState,
    setGameState,
    selectedCountry,
    passportStamps,
    handleSelectCountry,
    handleLearningComplete,
    handleQuizComplete,
    handleBackToPassport,
    handleBackToMenu
  }

  return (
    <GameContext.Provider value={contextValue}>
      <div className="app min-h-screen bg-gradient-to-br from-background via-blue-100 to-pink-100">
        {gameState === 'menu' && <MainMenu />}
        {gameState === 'passport' && <PassportBook />}
        {gameState === 'learning' && <LearningModule />}
        {gameState === 'quiz' && <Quiz />}
      </div>
    </GameContext.Provider>
  )
}

export default App
