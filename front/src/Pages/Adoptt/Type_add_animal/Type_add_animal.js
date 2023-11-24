import './Type_add_animal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  Header} from '../../../Componets/index'
import { faPlus, faRightFromBracket, faBell, faHouse, faMessage, faUserDoctor, faStethoscope } from '@fortawesome/free-solid-svg-icons'

const Type_add_animal = () => {

    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <div class="container">
                <div class="title">Choose how to add animal</div>
                <div class="content">
                    <form action="#">
                        <div class="button">
                            <a style={{ "width": "300px" }} href="/Chose_from_your_animal">Choose from my animals</a>
                        </div>
                        <div class="button">
                            <a href="/Add_Animal_to_adopt">Insert a new animal</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Type_add_animal
