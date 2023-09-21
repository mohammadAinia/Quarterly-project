// Shift+Alt+F
// sahm + option + f
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Container, Login, Register_owner , Animal,Cat_info,Search_animal, Parrot_info,Fish_info,
  Register_veterinarian ,Home_owner , Type ,Dog_info , Add_animal,Animal_infoo,Add_proplem,
  Common_users,Vaccines,About_your_animal,Your_animal_vaccines,Update_animals} from './Componets/index'

const App = () => {
  return (
    <>
      <Router>
        <Container>
          <Routes>
            
              <Route path='/' element={<Home_owner/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/Register_owner' element={<Register_owner/>}/>
              <Route path='/Register_veterinarian' element={<Register_veterinarian/>}/>
              <Route path='/TypeRegister' element={<Type/>}/>
              <Route path='/Back' element={<Login/>}/>
              <Route path='/Back_to_type' element={<Type/>}/>
              <Route path='/Animal' element={<Animal/>}/>
              <Route path='/Search' element={<Search_animal/>}/>
              <Route path='/parrot' element={<Parrot_info/>}/>
              <Route path='/fish' element={<Fish_info/>}/>
              <Route path='/dog' element={<Dog_info/>}/>
              <Route path='/cat' element={<Cat_info/>}/>
              <Route path='/Animal_infoo' element={<Animal_infoo/>}/>
              <Route path='/Add_animal' element={<Add_animal/>}/>
              <Route path='/Add_proplem' element={<Add_proplem/>}/>
              <Route path='/common_users' element={<Common_users/>}/>
              <Route path='/vaccines' element={<Vaccines/>}/>
              <Route path='/about' element={<About_your_animal/>}/>
              <Route path='/vv' element={<Your_animal_vaccines/>}/>
              <Route path='/update/:id' element={<Update_animals/>}/>

              
          </Routes>
        </Container>
      </Router>
    </>
  )
}
export default App
