import './Add_Sitting_request.css'
import { Header, Componets_Add_Sitting_request } from '../../../../Componets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlus, faRightFromBracket, faRightToBracket, faPaw, faStoreSlash, faCoins, faFaceSmileWink, faBolt, faSearch,
    faClock, faArrowsRotate, faComments, faHandHoldingHeart, faHouseCircleCheck,
    faUsers, faArrowRightArrowLeft, faPaperPlane, faLocationDot, faHouse, faBell, faMessage, faUserDoctor, faStethoscope
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Add_Sitting_request = () => {
    return (
        <>
            <Header href12={"/Pet_Sitting"} a12={"Pet Sitting"} href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href5={"/Add_Animal"} a5={<FontAwesomeIcon icon={faPlus} />} href6={"all_doc"} a6={<FontAwesomeIcon icon={faStethoscope} />} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href7={"/chat"} a7={<FontAwesomeIcon icon={faMessage} />} href8={"/Notifications"} a8={"Notifications"} href9={"/profile"} a9={"profile"} href10={"/"} a10={<FontAwesomeIcon icon={faHouse} />} href11={"My_appointments"} a11={"My appointments"} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <div>
                <div class="container" >
                    <div class="title">Add a Sitting request</div><br />
                    <div class="content">
                        <Componets_Add_Sitting_request />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add_Sitting_request