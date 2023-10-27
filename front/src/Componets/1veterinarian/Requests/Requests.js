import './Requests.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faPaw} from '@fortawesome/free-solid-svg-icons'
import { faBell  } from '@fortawesome/free-regular-svg-icons'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'

const Requests = (props) => {

  const handleAccept = async (id) => {
    try {
        axios.get('http://localhost:3001/vet/accept_requset/'+id, { withCredentials: true }).then
        (res => {
          if (res.data.valid){
          alert('The request has been accepted')
          window.location.reload()
        }
        else{
          alert("njnj")
        }
        }
        )
        .catch
        ( err=>{
          alert(err)
        }
      )

    }
    catch (err) { console.log(err) }
  }
  return (
    <>
      <div class="card">
        <div class="icons">
          
          <FontAwesomeIcon icon={faPaw} />
        </div>
        <div class="info">
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </div>
        <div>
          <Link style={{ "margin-left": "175px", "width": "110px" }} className="btn" to={`/animal_dtails/${props.id}`}>details</Link>
        </div>
        <div>
          <button onClick={e => handleAccept(props.id2)} style={{ "margin-left": "150px" }} className="btn">Acceptance</button>
        </div>

      </div>
    </>
  )
}

export default Requests
