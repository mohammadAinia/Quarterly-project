import './My_appointments_vet.css'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { Componets_My_appointments_vet } from '../../../Componets'
import { Card, Bunner, Problems, Header, SectionHeader, Animal_info, Button, Add_proplem } from '../../../Componets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNotesMedical, faRightFromBracket, faBell, faHouse, faMessage, faLink, faSyringe } from '@fortawesome/free-solid-svg-icons'


const My_appointments_vet = () => {

  const [Info, setInfo] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/clinic/show_appointment_vet', { withCredentials: true })
      .then(res => {
        setInfo(res.data.result);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header href1={"/Adopt_vet"} a1={"Adopt"} href2={"/common_vete"} a2={"FAQs"} href5={"/requst"} a5={<FontAwesomeIcon icon={faLink} />} href6={"all_advice"} a6={<FontAwesomeIcon icon={faNotesMedical} />} href7={"all_vaccine"} a7={<FontAwesomeIcon icon={faSyringe} />} href3={"all_follow"} a3={"All Follow"} href4={"/Forum_vet"} a4={"Forum"} href8={"/chat_vet"} a8={<FontAwesomeIcon icon={faMessage} />} href9={"/Notifications_vet"} a9={<FontAwesomeIcon icon={faBell} />} href10={"profile_vet"} a10={<div id="login-btn" className="fas fa-user"></div>} href11={"My_appointments_vet"} a11={"My appointments"} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

      <div className="frame_My_appointments">
        <div className="div">
          {/* <div className="appointments-container"> */}
          {Info.map((d, i) => (
            <div key={i} className="overlap-group">
              <Componets_My_appointments_vet
                Type={d.service}
                clinic={d.c_name}
                animal={d.name}
                date={d.datebooking}
                time={d.timebookig}
                href={`Diagnosis/${d.id_b}/${d.id}`}
                test={d.check_ !== 0}
              />
            </div>
          ))}
          {/* </div> */}
        </div>
        <div className="text-wrapper-13">My appointments</div>
      </div>
    </>
  )
}

export default My_appointments_vet
//mjhsek