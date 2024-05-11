import './Componets_Select_Register.css'
import React from 'react'
import all_vet_Vector_34 from '../../../Assert/Images/all_vet_Vector_34.png'
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Swal from 'sweetalert2';


const Componets_Select_Register = (props) => {
    const navigate = useNavigate()

    const handleAction = async (id) => {
        axios.get(`http://localhost:3001/clinic/add_to_clinic/${id}`,{withCredentials: true})
            .then(res => {
                if (res.data.valid) {
                    // alert("The doctor has been successfully added to the clinic")
                    // navigate(`Add_doctor_shift_time/${id}`)
                    Swal.fire({
                        title: "Good job!",
                        text: "The doctor has been successfully added to the clinic",
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
                        navigate(`Add_doctor_shift_time/${id}`)
                    });

                }
            })
            .catch(err => alert(err))
    }

    return (
        <>
            <div class="frame">
                <div class="overlap">
                    <img class="vector" src={all_vet_Vector_34} />
                    <div class="text-wrapper">vet</div>
                    <div class="div">Name :</div>
                    <div class="text-wrapper-2">{props.name}</div>
                </div>
                <div class="overlap-group">
                    <div class="text-wrapper-3">Age :</div>
                    <div class="text-wrapper-4">{props.age}</div>
                </div>
                <div class="overlap-2">
                    <div class="text-wrapper-3">Email :</div>
                    <div class="text-wrapper-4">{props.email}</div>
                </div>
                <div class="div-wrapper"><button class="text-wrapper-5" onClick={e => handleAction(props.id)}>Select</button></div>
            </div>
        </>

    )
}

export default Componets_Select_Register