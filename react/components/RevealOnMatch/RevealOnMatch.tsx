import React, { useState } from 'react'

interface RevealOnMatchProps {
  children: React.ReactNode
}

const RevealOnMatch: React.FC<RevealOnMatchProps> = ({ children }) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [isMatched, setIsMatched] = useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)

    // Verificamos si el valor ingresado es '72269428'
    if (value === '72269428') {
      setIsMatched(true)
    } else {
      setIsMatched(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-text">Ingresa el texto:</label>
        <input
          type="text"
          id="input-text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>

      {/* Mostramos el contenido de children solo si el texto es '72269428' */}
      {isMatched && <div>{children}</div>}
    </div>
  )
}

export default RevealOnMatch
