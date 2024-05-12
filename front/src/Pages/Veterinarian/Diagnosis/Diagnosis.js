import './Diagnosis.css'
import React from 'react'
import { Header, Profilee } from '../../../Componets/index'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNotesMedical, faRightFromBracket, faBell, faHouse, faMessage, faLink, faSyringe } from '@fortawesome/free-solid-svg-icons'

const Diagnosis = () => {
    const navigate = useNavigate()
    const { id, ii } = useParams()

    const [Report, setReport] = useState('')


    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()

        axios.post(`http://localhost:3001/clinic/add_de/${id}/${ii}`, { Report })
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
            <Header href1={"/Adopt_vet"} a1={"Adopt"} href2={"/common_vete"} a2={"FAQs"} href5={"/requst"} a5={<FontAwesomeIcon icon={faLink} />} href6={"all_advice"} a6={<FontAwesomeIcon icon={faNotesMedical} />} href7={"all_vaccine"} a7={<FontAwesomeIcon icon={faSyringe} />} href3={"all_follow"} a3={"All Follow"} href4={"/Forum_vet"} a4={"Forum"} href8={"/chat_vet"} a8={<FontAwesomeIcon icon={faMessage} />} href9={"/Notifications_vet"} a9={<FontAwesomeIcon icon={faBell} />} href10={"profile_vet"} a10={<div id="login-btn" className="fas fa-user"></div>} href11={"My_appointments_vet"} a11={"My appointments"} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

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