import './Animal_infoo.css'
import { About_your_animal, Header, Your_animal_vaccines } from '../../../Componets/index'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import a from '../../../Assert/Images/main.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faRightFromBracket, faHouse } from '@fortawesome/free-solid-svg-icons'

const Animal_infoo = () => {

  const navigate = useNavigate()
  const [Info, setInfo] = useState([])

  useEffect(() => {

    axios.get('http://localhost:3001/animal/show_all_animal', { withCredentials: true })
      .then(res => {
        if (res.data.valid) {
          setInfo(res.data.result)
        }
        else {
          navigate('/login')
        }
      })
      .catch(err => { console.log(err) })
  }, [])

  return (
    <>
      <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

      <div style={{ "margin-top": "120px", "margin-bottom": "20px" }}>
        {Info.map((d, i) => {
          return (
            <div key={i}>
              <About_your_animal name={d.name} age={d.age.substring(0,10)} place={d.place} color={d.color} details={d.Additional_details}
                type={d.type} gender={d.gender} weight={d.weight} height={d.high} health={d.health_stats} id={d.id} id2={d.animal_id} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Animal_infoo
