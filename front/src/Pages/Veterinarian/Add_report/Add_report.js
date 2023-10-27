import './Add_report.css'
import { Header, Profilee } from '../../../Componets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Add_report = () => {

    const navigate = useNavigate()

    const [Report, setReport] = useState('')
    const [Next_visit, setNext_visit] = useState('')
    const Current_date = new Date()

    const { id } = useParams()

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()

        axios.post(`http://localhost:3001/#/#/${id}`, { Report, Next_visit, Current_date })
            .then(res => {
                if (res.data.valid) {
                    alert('The report has been sent successfully')
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
                                {/* <span class="details">Next visit </span>
                                <input type="date" required onChange={e => setReport(e.target.value)} /> */}
                            </div>
                            <div class="input-box">
                                <span class="details">Next visit </span>
                                <input style={{"width":"440px"}}  type="date" required onChange={e => setReport(e.target.value)} />
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
