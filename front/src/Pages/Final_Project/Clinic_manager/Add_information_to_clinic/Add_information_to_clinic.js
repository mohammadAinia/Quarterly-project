import './Add_information_to_clinic.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2';

const Add_information_to_clinic = () => {

    const navigate = useNavigate()
    const [One, setOne] = useState('')
    const [Two, setTwo] = useState('')
    const [Three, setThree] = useState('')


    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/clinic/add_info_to_clinic', { One, Two, Three })
            .then(res => {
                if (res.data.valid) {
                    // alert('Information has been added to the clinic successfully')
                    // window.location.reload()
                    Swal.fire({
                        title: "Good job!",
                        text: "Information has been added to the clinic successfully",
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
            })
            .catch(err => { console.log(err) })
    }

    return (
        <>
            <div className="container">
                <div className="title">Add Info</div>
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">One *</span>
                                <input type="text" style={{ "width": "650px" }} required onChange={e => setOne(e.target.value)} />
                            </div>
                            <div className="input-box">
                            </div>
                            <div className="input-box">
                                <span className="details">Two *</span>
                                <input type="text" style={{ "width": "650px" }} required onChange={e => setTwo(e.target.value)} />
                            </div>
                            <div className="input-box">
                            </div>                            <div className="input-box">
                                <span className="details">Three *</span>
                                <input type="text" style={{ "width": "650px" }} required onChange={e => setThree(e.target.value)} />
                            </div>
                            <div className="input-box">
                            </div>
                        </div>
                        <div className="button">
                            <button >Add</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Add_information_to_clinic