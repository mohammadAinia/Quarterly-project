import './Componets_Clinic_with_button.css'
import React from 'react'
import line from '../../../Assert/Images/Line1.png'
import clinic from '../../../Assert/Images/clinic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faRightToBracket, faPaw, faStoreSlash, faCoins, faFaceSmileWink, faBolt,
    faClock, faArrowsRotate, faComments, faHandHoldingHeart, faHouseCircleCheck, faPlus,
    faUsers, faArrowRightArrowLeft, faPaperPlane, faLocationDot, faRightFromBracket, faBell, faHouse
} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';


const Componets_Clinic_with_button = (props) => {

    const handleDelete = async (id) => {

        try {
            await axios.post('http://localhost:3001/#/#/' + id)
            // alert("The clinic has been successfully deleted")
            Swal.fire({
                title: "Good job!",
                text: "The clinic has been successfully deleted",
                icon: "success",
                customClass: {
                    container: 'enlarged-alert-container',
                    popup: 'enlarged-alert-popup',
                    title: 'enlarged-alert-title',
                    htmlContainer: 'enlarged-alert-html-container',
                    confirmButton: 'enlarged-alert-confirm-button',
                },
                position: 'center',
                backdrop: false,
            }).then(() => {
                window.location.reload()
            });

        }
        catch (err) { console.log(err) }
    }

    return (
        <>
            <div class="overlap-groupp">
                <div class="ellipsee"><img class="clinic" src={clinic} /></div>
                <div class="text-wrapperr">{props.name_clinic}</div>
                <img class="linee" src={line} />
                <div class="elementtt"><FontAwesomeIcon icon={faClock} /></div>
                <div class="elementt">{props.Working_hours}</div>
                <div class="elementttT"><FontAwesomeIcon icon={faLocationDot} /></div>
                <div class="divv">{props.location}</div>
                <div class="framee"><button class="text-wrapper-222" onClick={() => handleDelete(props.id)}>{props.button}</button></div>
            </div>
        </>

    )
}

export default Componets_Clinic_with_button