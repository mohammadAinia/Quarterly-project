import './Add_Animal_to_adopt_vet.css'
import { Header, Add_animall } from '../../../../Componets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faRightFromBracket, faHouse } from '@fortawesome/free-solid-svg-icons'

const Add_Animal_to_adopt_vet = () => {
    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_vete"} a2={"FAQs"} href3={"/all_follow"} a3={"All Follow"} href4={"/Forum_vet"} a4={"Forum"} href6={"/Notifications_vet"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile_vet"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"Home_vet"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />
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

export default Add_Animal_to_adopt_vet
