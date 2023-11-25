import './Type_add_animal_vet.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Header } from '../../../../Componets/index'
import { faPlus, faRightFromBracket, faBell, faHouse, faMessage, faUserDoctor, faStethoscope } from '@fortawesome/free-solid-svg-icons'

const Type_add_animal_vet = () => {
    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_vete"} a2={"FAQs"} href3={"/all_follow"} a3={"All Follow"} href4={"/Forum_vet"} a4={"Forum"} href6={"/Notifications_vet"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile_vet"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"Home_vet"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <div class="container">
                <div class="title">Choose how to add animal</div>
                <div class="content">
                    <form action="#">
                        <div class="button">
                            <a style={{ "width": "300px" }} href="/Chose_from_your_animal_vet">Choose from my animals</a>
                        </div>
                        <div class="button">
                            <a href="/Add_Animal_to_adopt_vet">Insert a new animal</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Type_add_animal_vet
