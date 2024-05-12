import './My_appointments_vet.css'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { Componets_My_appointments_vet } from '../../../Componets'



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
                test={d.check_!== 0}
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