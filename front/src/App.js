// Shift+Alt+F
// sahm + option + f
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import {
  Container, Login, Register_owner, Animal, Cat_info, Search_animal, Parrot_info, Fish_info,
  Register_veterinarian, Home_owner, Type, Dog_info, Add_animal, Animal_infoo, Profile,
  Common_users, Vaccines, Update_animals, Problem_id, Type_add_animal, Your_animal, Update_user,
  Animal_info_id, All_problem, Adoptt, Conversation, Add_vacci, Add_Animal_to_adopt, Verification,
  Your_ploblem, Update_problem, Page_chat, Profile_id, Vaccine_id, Search_user, Search_result,
  Notifications, Animal_info_adopt, Type_search, Common_vete, Add_common, Request, Your_animall,
  Search_problem, Search_result2, All_followw, Home, Add_report, All_doctor, Details_animal, Update_vet,
  Profile_vet_id, All_veci, Add_advices, All_advices, Add_vecine, General_user, FAQs, Profile_veterinarian,
  Notifications_vet, Animal_info_id_follow, All_problems_vet, Problem_id_vet, Your_problem_vet, Update_problem_vet,
  Animal_follow_id, Vaccine_vet_id, Page_chat_vet, Conversation_vet,Profile_id_vett,Search_user_vet
  ,Type_search_vet,Search_result_vet,Adopt_vet,Type_add_animal_vet,Your_animal_vet,Add_Animal_to_adopt_vet,
  Animal_info_adopt_vet,Search_vet
} from './Componets/index'

const App = () => {
  return (
    <>
      <Router>
        <Container>
          <Routes>

            <Route path='/' element={<Home_owner />} />
            <Route path='/login' element={<General_user />} />
            <Route path='Loginn' element={<Login />} />
            <Route path='/Registration' element={<Type />} />
            <Route path='/Register_owner' element={<Register_owner />} />
            <Route path='/Register_veterinarian' element={<Register_veterinarian />} />
            <Route path='/TypeRegister' element={<Type />} />
            <Route path='/Back' element={<Login />} />
            <Route path='/Back_to_type' element={<Type />} />
            <Route path='/Animal' element={<Animal />} />
            <Route path='/Search' element={<Search_animal />} />
            <Route path='/parrot' element={<Parrot_info />} />
            <Route path='/fish' element={<Fish_info />} />
            <Route path='/dog' element={<Dog_info />} />
            <Route path='/cat' element={<Cat_info />} />
            <Route path='/Animal_infoo' element={<Animal_infoo />} />
            <Route path='/Add_animal' element={<Add_animal />} />
            <Route path='/common_users' element={<Common_users />} />
            <Route path='/vaccines/:id' element={<Vaccines />} />
            <Route path='Animal_infoo/update/:id' element={<Update_animals />} />
            <Route path='Animal_infoo/show_vaccines/:id' element={<Vaccine_id />} />
            <Route path='Animal_info_id/:id/update/:id' element={<Update_animals />} />
            <Route path='/add_vaccine/:id' element={<Add_vacci />} />
            <Route path='Animal_info_id/:id/show_vaccines/:id' element={<Vaccine_id />} />
            <Route path='Animal_info_id/:id' element={<Animal_info_id />} />
            <Route path='Problem_id/:id' element={<Problem_id />} />
            <Route path='/my_problem' element={<Your_ploblem />} />
            <Route path='my_problem/update_problem/:id' element={<Update_problem />} />
            <Route path='/All_problem' element={<All_problem />} />
            <Route path='/All_problem/Problem_id/:id' element={<Problem_id />} />
            <Route path='/Notifications' element={<Notifications />} />
            <Route path='/Adopt' element={<Adoptt />} />
            <Route path='/Adopt_vet' element={<Adopt_vet />} />
            <Route path='/Choose_type_add_animal_to_adopt' element={<Type_add_animal />} />
            <Route path='/Choose_type_add_animal_to_adopt_vet' element={<Type_add_animal_vet />} />
            <Route path='/Add_Animal_to_adopt' element={<Add_Animal_to_adopt />} />
            <Route path='/Add_Animal_to_adopt_vet' element={<Add_Animal_to_adopt_vet />} />
            <Route path='/Chose_from_your_animal' element={<Your_animal />} />
            <Route path='/Chose_from_your_animal_vet' element={<Your_animal_vet />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/update_user' element={<Verification />} />
            <Route path='/update_userr/:id' element={<Update_user />} />
            <Route path='/chat' element={<Page_chat />} />
            <Route path='/NewChat/:id' element={<Conversation />} />
            <Route path='/NewChat_vet/:id' element={<Conversation_vet />} />
            <Route path='/profile_id/:id' element={<Profile_id />} />
            <Route path='/profile_id_vettt/:id' element={<Profile_id_vett />} />
            <Route path='/Search_user' element={<Search_user />} />
            <Route path='/Search_vet' element={<Search_vet />} />

            <Route path='/Search_user_vet' element={<Search_user_vet />} />
            <Route path='/search_result/:Type' element={<Search_result />} />
            <Route path='/search_result_vet/:Type' element={<Search_result_vet />} />
            <Route path='Animal_info_adopt/:id' element={<Animal_info_adopt />} />
            <Route path='Animal_info_adopt_vet/:id' element={<Animal_info_adopt_vet />} />
            <Route path='Animal_info_adopt_vet/:id/show_vaccines/:id' element={<Vaccine_vet_id />} />

            <Route path='Animal_info_adopt/:id/show_vaccines/:id' element={<Vaccine_id />} />
            <Route path='/Search_type' element={<Type_search />} />
            <Route path='/Search_type_vet' element={<Type_search_vet />} />
            <Route path='/common_vete' element={<Common_vete />} />
            <Route path='/Add_problem' element={<Add_common />} />
            <Route path='/Search_type_common' element={<Search_problem />} />
            <Route path='/search_result2/:Type' element={<Search_result2 />} />
            <Route path='Home_vet' element={<Home />} />
            <Route path='Home_vet/Problem_id/:id' element={<Problem_id_vet />} />
            <Route path='Home_vet/Animal_info_id_follow/:id' element={<Animal_follow_id />} />
            <Route path='Home_vet/Animal_info_id_follow/:id/show_vaccines/:id' element={<Vaccine_vet_id />} />
            <Route path='Home_vet/Animal_info_id/:id/update/:id' element={<Update_animals />} />
            <Route path='Home_vet/Animal_info_id/:id/show_vaccines/:id' element={<Vaccine_id />} />
            <Route path='add_report/:id' element={<Add_report />} />
            <Route path='all_follow' element={<All_followw />} />
            <Route path='all_follow/show_vaccines/:id' element={<Vaccine_vet_id />} />
            <Route path='requst' element={<Request />} />
            <Route path='animal_dtails/:id' element={<Details_animal />} />
            <Route path='animal_dtails/:id/show_vaccines/:id' element={<Vaccine_id />} />
            <Route path='all_doc' element={<All_doctor />} />
            <Route path='show_animal_requst/:id' element={<Your_animall />} />
            <Route path='profile_id_vet/:id' element={<Profile_vet_id />} />
            <Route path='all_vaccine' element={<All_veci />} />
            <Route path='add_vaci' element={<Add_vecine />} />
            <Route path='all_advice' element={<All_advices />} />
            <Route path='add_advice' element={<Add_advices />} />
            <Route path='FAQs' element={<FAQs />} />
            <Route path='profile_vet' element={<Profile_veterinarian />} />
            <Route path='update_vet' element={<Update_vet />} />
            <Route path='Animal_info_id_follow' element={<Animal_info_id_follow />} />
            <Route path='Notifications_vet' element={<Notifications_vet />} />
            <Route path='Forum_vet' element={<All_problems_vet />} />
            <Route path='Forum_vet/Problem_id/:id' element={<Problem_id_vet />} />
            <Route path='my_problem_vet' element={<Your_problem_vet />} />
            <Route path='my_problem_vet/update_problem/:id' element={<Update_problem_vet />} />
            <Route path='chat_vet' element={<Page_chat_vet />} /> 

          </Routes>
        </Container>
      </Router>
    </>
  )
}
export default App