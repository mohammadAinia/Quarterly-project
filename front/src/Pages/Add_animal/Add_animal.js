import './Add_animal.css'
// import axios from 'axios'
// import { useState } from 'react'
import { Header, Add_animall } from '../../Componets'
// import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faRightFromBracket, faHouse } from '@fortawesome/free-solid-svg-icons'


const Add_animal = () => {


  return (
    <>
      <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

      <div>
        <div class="container" style={{ "margin-top": "120px", "margin-bottom": "70px" }}>
          <div class="title">Add Animal</div>
          <div class="content">
            <Add_animall />
          </div>
        </div>
      </div>
    </>
  )
}

export default Add_animal
