import { Adopt, Header } from '../../Componets'
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

    axios.get('http://localhost:3001/#/#')
      .then(res => {
        if (1 == 1) {
          setAdopt_info(res.data)
        }
        else {
          navigate('/login')
        }
      })
      .catch(err => { console.log(err) })
  }, [])

  return (
    <>
      <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"Common Problems"} href5={"/Add_Animal"} a5={<FontAwesomeIcon icon={faPlus} />} href3={"/Animal_infoo"} a3={"All Animal"} href4={"/All_problem"} a4={"Ploblems"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/#"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

      <section style={{ "margin-top": "200px" }} className="cards" id="services">
        <h2 className="title">Adopt</h2>
        <div className="content">
          <div className="card">
          <Adopt />

            {/* {Adopt_info.map((d, i) => {
              return (
                <div key={i}>
                  <Adopt />
                </div>
              )
            })} */}
          </div>
        </div>
      </section >
    </>
  )
}

export default Adoptt
