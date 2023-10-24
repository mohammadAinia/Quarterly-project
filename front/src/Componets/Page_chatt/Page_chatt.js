import './Page_chatt.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBell, faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'

const Page_chatt = (props) => {

    return (
        <>
            <div class="card" style={{ "width": "250px", "height": "300px" }}>
                <div class="icons">
                    <FontAwesomeIcon icon={faCircleUser} />
                </div>
                <div class="info">
                    <h3>{props.name}</h3>
                </div>
                <br />
                <div>
                    
                    <Link style={{"margin-left": "55px", "width": "95px" }} className="btn" to={props.href_link1}> {props.name_link1}</Link>
                    <Link style={{ "margin-left": "50px", "width": "110px" }} className="btn" to={`/profile_id/${props.id}`}>Profile</Link>

                </div>
            </div>
        </>
    )
}

export default Page_chatt
