import './Appointment_clinic_director.css'
import React, { useState } from 'react'
import { Header } from '../../../../Componets'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';


const Appointment_clinic_director = () => {

    const navigate = useNavigate()
    const { id } = useParams()

    const [First_name, setFirst_name] = useState('')
    const [Last_name, setLast_name] = useState('')
    const [Email, setEmail] = useState('')
    const [Phone, setPhone] = useState('')
    const [Password, setPassword] = useState('')
    const [Confirm, setConfirm] = useState('')
    const [Age, setAge] = useState('')
    const [Nationality, setNationality] = useState('')
    const [Addres, setAddres] = useState('')

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {


        if (Password === Confirm) {
            e.preventDefault()

            axios.post(`http://localhost:3001/clinic/add_new_admin_for_clinic/${id}`, { First_name, Last_name, Email, Phone, Password, Age, Nationality, Addres }, { withCredentials: true })
                .then(res => {
                    if (res.data.valid) {
                        // navigate(`/Choosing_a_doctor_clinic/${res.data.id}`)

                        // alert('The manager has been added successfully')
                        // navigate('/m')
                        Swal.fire({
                            title: "Good job!",
                            text: "The manager has been added successfully",
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
                            navigate('/m')
                        });
                    }
                }
                )
                .catch(err => alert(err))
        }
        else {
            //  alert("password not match")
            Swal.fire({
                title: "Good job!",
                text: "password not match",
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
            <Header href1={"/Animal"} a1={"About Pets"} href3={"#"} a3={"FAQs"} log={'/login'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightToBracket} /></div>} />

            <div>
                <div className="container" >
                    <div className="title">Appointment of a clinic director</div>
                    <div className="content">
                        <form action="#" onSubmit={handleSubmit} enctype="multipart/form-data">
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">First Name *</span>
                                    <input type="text" name='first_name' required onChange={e => setFirst_name(e.target.value)} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Last Name *</span>
                                    <input type="text" name='last_name' required onChange={e => setLast_name(e.target.value)} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email *</span>
                                    <input type="email" name='email' required onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Phone Number *</span>
                                    <input type="number" name='phone' required onChange={e => setPhone(e.target.value)} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Password *</span>
                                    <input type="password" name='password' required onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Confirm Password *</span>
                                    <input type="password" required onChange={e => setConfirm(e.target.value)} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Age *</span>
                                    <input type="date" name='age' required onChange={e => setAge(e.target.value)} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Nationality *</span>
                                    <input type="text" name='Nationality' required onChange={e => setNationality(e.target.value)} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Addres *</span>
                                    <input type="text" name='address' required onChange={e => setAddres(e.target.value)} />
                                </div>

                            </div>

                            <div className="button">
                                <button>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Appointment_clinic_director