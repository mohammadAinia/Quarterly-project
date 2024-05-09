import './Componets_Gellary.css'
import React from 'react'
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faRightToBracket, faPaw, faStoreSlash, faCoins, faFaceSmileWink, faBolt,
    faClock, faArrowsRotate, faComments, faHandHoldingHeart, faHouseCircleCheck, faPlus,
    faTrash
} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const Componets_Gellary = (props) => {

    const handleDelete = async (id) => {

        try {
            await axios.post(`http://localhost:3001/#/#/${id}`)
            // alert("The clinic has been successfully deleted")
            // alert(id)
            Swal.fire({
                title: "Good job!",
                text: "The image has been successfully deleted",
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
            <div class="overlap-group-22">
                <div class="rectangle-4"></div>
                <img class="rectangle-6" src={props.image} />
                {/* زر الحذف */}
                <div class="ellipse-4"></div>
                <button onClick={() => handleDelete(props.id)} class="trash-solid"> <FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </>
    )
}

export default Componets_Gellary