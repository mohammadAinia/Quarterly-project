import './Page_new_chat.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBell, faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Page_new_chat = (props) => {

  const navigate = useNavigate()

  const create_new_chat = async (id) => {
    try {
      axios.post('http://localhost:3001/chat/create_chat/'+id,{ withCredentials: true })
      .then(
        res=>{ 
          var e=res.data.result12

          // navigate(`/NewChat/${e}`)
          setTimeout(() => {
            navigate(`/NewChat/${e}`); 
          }, 8000); // 2000 milliseconds = 2 seconds delay
        }
      ).catch()
      
    }
    catch (err) { alert(err) }
  }

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

          <button style={{ "margin-left": "55px", "width": "95px" }} className="btn" onClick={e => create_new_chat(props.id)}>New</button>
          <Link style={{ "margin-left": "50px", "width": "110px" }} className="btn" to={`/profile_id_vet/${props.id}`}>Profile</Link>
        </div>
      </div>
    </>
  )
}

export default Page_new_chat
