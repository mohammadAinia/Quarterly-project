import './Componets_Modifying_clinic_working_hours.css'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';


const Componets_Modifying_clinic_working_hours = () => {

    const [From, setFrom] = useState('')
    const [To, setTo] = useState('')
    const navigate = useNavigate()

    useEffect(() => {

        axios.get('http://localhost:3001/clinic/get_time', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setFrom(res.data.result[0].time_open)
                    setTo(res.data.result[0].time_close)
                }
            })
            .catch(err => { console.log(err) })

    }, [])

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {

        e.preventDefault()
        if (From && To && From < To) {

            axios.post('http://localhost:3001/#/#', { From, To }, { withCredentials: true })
                .then(res => {
                    if (res.data.valid) {
                        // alert('the time shift was added ')
                        // navigate(-1)
                        Swal.fire({
                            title: "Good job!",
                            text: "the time shift was added",
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
                            navigate(-1);
                        });
                    }
                })
                .catch(err => alert(err))
        } else {
            // alert('Please enter valid working hours');
            Swal.fire({
                title: "Good job!",
                text: "Please enter valid working hours",
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
            })

        }
    }


    return (
        <>
            <form action="#" onSubmit={handleSubmit} enctype="multipart/form-data">

                <div class="user-details" style={{ "width": "450px" }}>
                    <div class="input-box">
                        <span class="details">From *</span>
                        <input defaultValue={From} style={{ "width": "200px" }} type="time" required name='name' onChange={e => setFrom(e.target.value)} />
                    </div>
                    <div class="input-box">
                        <span class="details">To *</span>
                        <input defaultValue={To} style={{ "width": "200px" }} type="time" required name='age' onChange={e => setTo(e.target.value)} />
                    </div>
                </div>
                <div class="button">
                    <button>Edit</button>
                </div>
            </form>

        </>
    )
}

export default Componets_Modifying_clinic_working_hours