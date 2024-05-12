import { Adopt, Header ,Button} from '../../Componets'
import './Adoptt.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faRightFromBracket, faHouse } from '@fortawesome/free-solid-svg-icons'


const Adoptt = () => {

  const navigate = useNavigate()
  const [Adopt_info, setAdopt_info] = useState([])

  useEffect(() => {

    axios.get('http://localhost:3001/adopt/show_adop',{withCredentials: true })
      .then(res => {
        if (res.data.valid) {
          setAdopt_info(res.data.result)
        }
        else {
          navigate('/login')
        }
      })
      .catch(err => { console.log(err) })
  }, [])

  return (
    <>
      <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href5={"/Choose_type_add_animal_to_adopt"} a5={<FontAwesomeIcon icon={faPlus} />} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

      <section style={{ "margin-top": "00px" }} className="cards" id="services">
        <h2 className="heading">Adopt</h2>
        <div className="content">
            {Adopt_info.map((d, i) => {
              return (
                <div key={i}>
                  <Adopt image={'http://localhost:3001/uploads/'+d.urlImage} type={d.type} date={d.age.substring(0,10)} name={d.name} phone={d.phone} details={`Animal_info_adopt/${d.id}`} id={d.id}/>
                </div>
              )
            })}
        </div>
      </section >
    </>
  )
}

export default Adoptt
