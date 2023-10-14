import './Notification.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { useEffect } from 'react'
import axios from 'axios'

const Notification = (props) => {

    const handleDelete = async (id) => {
        try {
            await axios.post('http://localhost:3001/noti/check_n/'+id,{ withCredentials: true }).then
            (res=> 
                {
                if(res.data.valid)
                window.location.reload()
                }
            )
            .catch
            (

            )
            
        }
        catch (err) { console.log(err) }
    }

    return (
        <>

            <div class="card">
                <div class="icons">
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <div class="info">
                    <h3>{props.title}</h3>
                    <p>{props.text} </p>
                </div>
                <div>
                    <button onClick={e => handleDelete(props.id)} style={{ "margin-left": "180px" }} className="btn">ok</button>
                </div>
            </div>

        </>
    )
}

export default Notification
