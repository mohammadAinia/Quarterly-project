import './Componets_Specific_clinic.css'
import React from 'react'
import avatar from '../../../Assert/Images/avatar.png'
import Linee from '../../../Assert/Images/Linee.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faRightToBracket, faPaw, faStoreSlash, faCoins, faFaceSmileWink, faBolt,faRightFromBracket,
    faClock, faArrowsRotate, faComments, faHandHoldingHeart, faHouseCircleCheck,
    faUsers, faArrowRightArrowLeft, faPaperPlane, faCheck, faStar,faPlus,faBell,faHouse
} from '@fortawesome/free-solid-svg-icons'

const Componets_Specific_clinic = (props) => {
    return (
        <>
            <div class="overlap-group-22">
                <div class="overlap-22">
                    <div class="text-wrapper-44">{props.Veterinarian_name}</div>
                    <img class="linee" src={Linee} />
                    <div class="spimage"><img class="sprectangle" src={avatar} /></div>

                </div>
                <div class="texxxxt-wrapper"><FontAwesomeIcon icon={faCheck} /></div><div class="text-wrapper-55">{props.Veterinarian_experience}</div>
                <div class="texxxxxt-wrapper"><FontAwesomeIcon icon={faCheck} /></div><p class="p">{props.Veterinarian_His_field_of_work}</p>
                <div class="texxxxxxt-wrapper"><FontAwesomeIcon icon={faCheck} /></div><div class="text-wrapper-66">{props.Veterinarian_nationality}</div>
                <div class="div-wrapper-22"><a class="text-wrapper-77" href={`Booking/${props.id}`}>Booking</a></div>

            </div>
        </>


    )
}

export default Componets_Specific_clinic