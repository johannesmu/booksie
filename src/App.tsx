
import "./App.css"
import { Header } from './components/Header'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
// pages for routes
import { Home } from "./pages/Home"
import { About } from './pages/About'
import { Signup } from "./pages/Signup"

function App() {
  const [auth, setAuth] = useState(false)
  return (
    <>
      <Header title="Booksie" />
      <Container fluid>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Container>
      <footer className="footer">Footer</footer>
    </>
  )
}

export default App
