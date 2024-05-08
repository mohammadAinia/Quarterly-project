import React from 'react'
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faRightToBracket, faPaw, faStoreSlash, faCoins, faFaceSmileWink, faBolt,
    faClock, faArrowsRotate, faComments, faHandHoldingHeart, faHouseCircleCheck, faPlus,
    faUsers, faArrowRightArrowLeft, faPaperPlane, faLocationDot, faRightFromBracket, faBell, faHouse
} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const Componets_Requests_accepted = (props) => {

    const handleDelete = async (id) => {

        try {
            await axios.post('http://localhost:3001/#/#/' + id)
            // alert("The clinic has been successfully deleted")
            Swal.fire({
                title: "Good job!",
                text: "The babysitting request has been successfully cancelled",
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
            <div class="overlap-2">
                <div class="text-wrapper-3">{props.type_animal}</div>
                <div class="text-wrapper-4">Name: {props.name}</div>
                <div class="text-wrapper-5">Fare : {props.fare}$</div>
                <div class="text-wrapper-6">From : {props.from}</div>
                <div class="text-wrapper-7">To : {props.to}</div>
                <div class="rectangle-2"></div>
                <button onClick={() => handleDelete(props.id)}  class="frame"><div class="text-wrapper-8">Cancel confirmation</div></button >
            </div>
        </>
    )
}

export default Componets_Requests_accepted