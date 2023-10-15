import './Page_chatt.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBell, faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'

const Page_chatt = (props) => {

    // const handleNewChat = async (id) => {
    //     try {
    //         await axios.post('http://localhost:3001/noti/check_n/' + id, { withCredentials: true }).then
    //             (res => {
    //                 if (res.data.valid)
    //                     window.location.reload()
    //             }
    //             )
    //             .catch
    //             (

    //         )

    //     }
    //     catch (err) { console.log(err) }
    // }
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
                    <Link style={{ "margin-left": "55px", "width": "95px" }} className="btn" to={`NewChat/${props.id}`}>New</Link>
                    {/* <button onClick={e => handleNewChat(props.id)} style={{ "margin-left": "55px", "width": "95px" }} className="btn">New</button> */}
                    {/* <button style={{ "margin-left": "50px", "width": "110px" }} className="btn">Profile</button> */}
                    <Link style={{ "margin-left": "50px", "width": "110px" }} className="btn" to={`profile/${props.id}`}>Profile</Link>

                </div>
            </div>
        </>
    )
}

export default Page_chatt
