import React, { useState } from 'react'

import './App.css'
import Dashboard from './pages/dashboard'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    </>
  )
}

export default App
