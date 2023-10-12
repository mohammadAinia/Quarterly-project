import './Add_Animal_to_adopt.css'
import { Header, Add_animall } from '../../../Componets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faRightFromBracket, faHouse } from '@fortawesome/free-solid-svg-icons'

const Add_Animal_to_adopt = () => {

  return (
    <>
      <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"Common Problems"} href3={"/Animal_infoo"} a3={"All Animal"} href4={"/All_problem"} a4={"Ploblems"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/#"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

      <div>
        <div class="container" style={{ "margin-top": "270px", "margin-bottom": "70px" }}>
          <div class="title">Add Animal</div>
          <div class="content">
            <Add_animall />
          </div>
        </div>
      </div>
    </>
  )
}

export default Add_Animal_to_adopt
