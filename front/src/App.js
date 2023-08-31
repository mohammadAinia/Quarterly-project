// Shift+Alt+F
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Header, Container, Login, Register ,Home , RegistrationType} from './Componets/index'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <RegistrationType/>
        <Container>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/Register' element={<Register/>}/>
          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App
