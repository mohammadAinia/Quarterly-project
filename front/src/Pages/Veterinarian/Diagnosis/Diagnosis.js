import './Diagnosis.css'
import React from 'react'
import { Header, Profilee } from '../../../Componets/index'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Diagnosis = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const [Report, setReport] = useState('')




    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()

        axios.post(`http://localhost:3001/vet/#/#/${id}`, { Report })
            .then(res => {
                if (res.data.valid) {
                    alert('The diagnosis was successfully added to the animal')
                    navigate(-1)
                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => alert(err))

    }


    return (
        <>
            <div class="container">
                <div class="title">Add Diagnosis</div>
                <div class="content" style={{ "width": "450px" }}>
                    <form onSubmit={handleSubmit}>
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details">Text </span>
                                <textarea style={{
                                    "height": "80px", "width": "440px", "outline": "none",
                                    "font-size": "16px", "border-radius": "5px", "padding-left": "15px",
                                    "border": "1px solid #ccc", "border-color": "#f18221", "border-bottom-width": "2px", "transition": "all 0.3s ease"
                                }} required onChange={e => setReport(e.target.value)} />
                            </div>
                            <div class="input-box">
                            </div>
                            {/* <div class="input-box">
                                <span class="details">Next visit </span>
                                <input style={{ "width": "440px" }} type="date" required onChange={e => setNext_visit(e.target.value)} />
                            </div> */}
                        </div>
                        <div class="button">
                            <button>Add</button>
                        </div>

                    </form>
                </div>
            </div>
        </>

    )
}

export default Diagnosis