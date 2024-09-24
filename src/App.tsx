
import "./App.css"
import { Header } from './components/Header'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Home } from "./pages/Home"
import { About } from './pages/About'

function App() {
  const [ auth, setAuth ] = useState( false )
  return (
    <>
      <Header title="Booksie"/>
      <div className="container">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
        </Routes>
      </div>
      <footer className="footer">Footer</footer>
    </>
  )
}

export default App
