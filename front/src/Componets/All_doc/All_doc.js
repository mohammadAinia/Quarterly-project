import './All_doc.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const All_doc = (props) => {
    const navigate = useNavigate()

    // const sendRequst = async (id) => {
    //     try {
    //         axios.post('http://localhost:3001/#/#/' + id, { withCredentials: true })

    //         alert('The request has been sent successfully')
    //     }
    //     catch (err) { alert(err) }
    // }
    return (
        <>
            <div class="card" style={{ "width": "250px", "height": "300px" }}>
                <div class="icons">
                    <FontAwesomeIcon icon={faUserDoctor} />
                </div>
                <div class="info">
                    <h3 style={{ "color": "black" }}>{props.name}</h3>
                </div>
                <br />
                <div>
                    <Link style={{ "margin-left": "40px", "width": "125px" }} className="btn" to={`/show_animal_requst/${props.id}`}>request</Link>
                    <Link style={{ "margin-left": "48px", "width": "110px" }} className="btn" to={`/profile_id_vet/${props.id}`}>Profile</Link>
                </div>
            </div>
        </>
    )
}

export default All_doc
