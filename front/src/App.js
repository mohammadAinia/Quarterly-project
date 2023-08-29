// Shift+Alt+F
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Header, Container, Login, Register ,Home} from './Componets/index'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App
