import './Request.css'
import { Header, Requests } from '../../../Componets'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'

const Request = () => {

  const navigate = useNavigate()
  const [Info, setInfo] = useState([])
  const [Animal_id, setAnimal_id] = useState()


  useEffect(() => {

    axios.get('http://localhost:3001/vet/show_req', { withCredentials: true })
      .then(res => {
        if (res.data.valid) {
          setInfo(res.data.result)
          // setAnimal_id(res.data.result2)

        }
        else {
          navigate('/login')
        }
      })
      .catch(err => { console.log(err) })
  }, [])

  return (
    <>
      <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_vete"} a2={"FAQs"} href3={"/all_follow"} a3={"All Follow"} href4={"/Forum_vet"} a4={"Forum"} href6={"/Notifications_vet"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile_vet"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"Home_vet"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

      <section style={{ "backgroundColor": "#f5f5f5", "margin-top": "30px" }} class="cards contact" id="contact">
        <h2 class="titlee" style={{ "margin-left": "0px", "width": "900px" }}>Follow-up requests</h2>

        <div class="content">
          {Info.map((d, i) => {
            return (
              <div key={i}>
                <Requests title={d.title} text={d.owner} id={d.animal_id_f} id2={d.f_id} />
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Request

