// Shift+Alt+F
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Header, Container, Login, Register ,Home , Type} from './Componets/index'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        {/* <Type /> */}
        <Container>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/Register' element={<Register/>}/>
              <Route path='/TypeRegister' element={<Type/>}/>

          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App
