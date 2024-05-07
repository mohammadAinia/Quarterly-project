import './Edit_information_to_clinic.css'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2';

const Edit_information_to_clinic = () => {

    const navigate = useNavigate()
    const [One, setOne] = useState('')
    const [Two, setTwo] = useState('')
    const [Three, setThree] = useState('')


    useEffect(() => {

        axios.get('http://localhost:3001/clinic/show_info_clinic', { withCredentials: true })
            .then(res => {
                //راجع صفحة اسمها Update_animals للاستذكار
                setOne(res.data.result[0].special)
                setTwo(res.data.result[0].spe1)
                setThree(res.data.result[0].spe2)

            })
            .catch(err => { console.log(err) })
    }, [])


    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/clinic/add_info_to_clinic', { One, Two, Three })
            .then(res => {
                if (res.data.valid) {
                    // alert('The information has been successfully modified')
                    // window.location.reload()
                    Swal.fire({
                        title: "Good job!",
                        text: "The information has been successfully modified",
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
                <div className="title">Edit Info</div>
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">One</span>
                                <input type="text" value={One} style={{ "width": "650px" }} onChange={e => setOne(e.target.value)} />
                            </div>
                            <div className="input-box">
                            </div>
                            <div className="input-box">
                                <span className="details">Two</span>
                                <input type="text" value={Two} style={{ "width": "650px" }} onChange={e => setTwo(e.target.value)} />
                            </div>
                            <div className="input-box">
                            </div>                            <div className="input-box">
                                <span className="details">Three</span>
                                <input type="text" value={Three} style={{ "width": "650px" }} onChange={e => setThree(e.target.value)} />
                            </div>
                            <div className="input-box">
                            </div>
                        </div>
                        <div className="button">
                            <button >Edit</button>
                        </div>

                    </form>
                </div>
            </div>
        </>

    )
}

export default Edit_information_to_clinic