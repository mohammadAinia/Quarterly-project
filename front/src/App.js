// Shift+Alt+F
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Header, Container, Login, Register } from './Componets/index'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Login />
          <Routes>

          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App
