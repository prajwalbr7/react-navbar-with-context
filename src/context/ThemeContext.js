import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: '',
  toggleTheme: () => {},
})

export default ThemeContext
