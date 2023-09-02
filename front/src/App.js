// Shift+Alt+F
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Header, Container, Login, Register_owner , Animal,Search,
  Register_veterinarian ,Home , Type ,Verification , Add_animal} from './Componets/index'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/Register_owner' element={<Register_owner/>}/>
              <Route path='/Register_veterinarian' element={<Register_veterinarian/>}/>
              <Route path='/TypeRegister' element={<Type/>}/>
              <Route path='/Back' element={<Login/>}/>
              <Route path='/Back_to_type' element={<Type/>}/>
              <Route path='/Animal' element={<Animal/>}/>
              <Route path='/Search' element={<Search/>}/>
          </Routes>
        </Container>
      </Router>
    </>
  )
}
export default App
