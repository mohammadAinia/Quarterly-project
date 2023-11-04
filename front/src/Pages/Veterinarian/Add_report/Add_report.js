import './Add_report.css'
import { Header, Profilee } from '../../../Componets/index'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faRightFromBracket, faHouse } from '@fortawesome/free-solid-svg-icons'
const Add_report = () => {

    const navigate = useNavigate()

    const [Report, setReport] = useState('')
    const [Next_visit, setNext_visit] = useState('')
    const Current_date = new Date()

    const { id } = useParams()

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()

        axios.post(`http://localhost:3001/vet/medical/add_report/${id}`, { Report, Next_visit })
            .then(res => {
                if (res.data.valid) {
                    alert('The report has been sent successfully')
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
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_vete"} a2={"FAQs"} href3={"/all_follow"} a3={"All Follow"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile_vet"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"Home_vet"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <div class="container">
                <div class="title">Add Report</div>
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
                            <div class="input-box">
                                <span class="details">Next visit </span>
                                <input style={{ "width": "440px" }} type="date" required onChange={e => setNext_visit(e.target.value)} />
                            </div>
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

export default Add_report
