import './Home_for_clinic_manager.css'
import React from 'react'
import { Header } from '../../../../Componets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faRightToBracket, faPaw, faStoreSlash, faCoins, faFaceSmileWink, faBolt, faSearch,
    faClock, faArrowsRotate, faComments, faHandHoldingHeart, faHouseCircleCheck, faPlus,
    faUsers, faArrowRightArrowLeft, faPaperPlane, faLocationDot, faRightFromBracket, faBell, faHouse
} from '@fortawesome/free-solid-svg-icons'

import Admin_Vector30 from '../../../../Assert/Images/Admin_Vector30.png'
import Admin_Vector_31 from '../../../../Assert/Images/Admin_Vector_31.png'
import Admin_Vector_32 from '../../../../Assert/Images/Admin_Vector_32.png'
import Admin_Vector_33 from '../../../../Assert/Images/Admin_Vector_33.png'

const Home_for_clinic_manager = () => {
    return (

        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href5={"/add_clinic"} a5={<FontAwesomeIcon icon={faPlus} />} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <div class="admin-page">
                <div class="div">
                    <div class="overlap-group">
                        <img class="vector" src={Admin_Vector30} />
                        <img class="img" src={Admin_Vector_31} />
                        <img class="frame" src={Admin_Vector_32} />
                        <img class="frame2" src={Admin_Vector_33} />

                    </div>
                    <div class="text-wrapper">Clinic Manager Control Panel</div>
                    <div class="div-wrapper"><a href='/Choose_register_new_doctor' class="text-wrapper-2">Add Vet</a></div>
                    <div class="frame-2"><a href='Edit_doctor_shift' class="text-wrapper-2">Changing doctor's working hours</a></div>
                    <div class="frame-3"><a href='Edit_information_to_clinic' class="text-wrapper-2">Change information to a clinic</a></div>
                    <div class="frame-4"><a href='#' class="text-wrapper-2"> -----</a></div>
                    <div class="frame-5"><a href='#' class="text-wrapper-2"> -----</a></div>
                    <div class="frame-6"><a href='#' class="text-wrapper-2"> -----</a></div>
                    <div class="frame-7"><a href='#' class="text-wrapper-2"> -----</a></div>
                    <div class="frame-8"><a href='Del_Vet' class="text-wrapper-2">Del Vet</a></div>
                    <div class="frame-9"><a href='#' class="text-wrapper-2">----</a></div>
                    <div class="frame-10"><a href='#' class="text-wrapper-2">----</a></div>
                    <div class="frame-11"><a href='#' class="text-wrapper-2">----</a></div>
                    <div class="frame-12"><a href='#' class="text-wrapper-2">----</a></div>
                </div>
            </div>
        </>

    )
}

export default Home_for_clinic_manager