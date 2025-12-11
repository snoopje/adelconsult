import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode')
      if (saved !== null) {
        return saved === 'true'
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    
    if (isDark) {
      root.classList.add('dark')
      root.style.colorScheme = 'dark'
      root.style.backgroundColor = '#000000'
      if (body) body.style.backgroundColor = '#000000'
    } else {
      root.classList.remove('dark')
      root.style.colorScheme = 'light'
      root.style.backgroundColor = '#ffffff'
      if (body) body.style.backgroundColor = '#ffffff'
    }
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', isDark.toString())
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(prev => {
      const newValue = !prev
      const root = document.documentElement
      const body = document.body
      
      if (newValue) {
        root.classList.add('dark')
        root.style.backgroundColor = '#000000'
        if (body) body.style.backgroundColor = '#000000'
      } else {
        root.classList.remove('dark')
        root.style.backgroundColor = '#ffffff'
        if (body) body.style.backgroundColor = '#ffffff'
      }
      
      return newValue
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

