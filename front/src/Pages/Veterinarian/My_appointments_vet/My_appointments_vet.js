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
      <div class="frame_My_appointments">
        <div class="div">

          {Info.map((d, i) => {
            return (
              <div key={i}>
                <Componets_My_appointments_vet
                  Type={d.service}
                  clinic={d.c_name}
                  animal={d.name}
                  date={d.datebooking}
                  time={d.timebookig}
                  href={`Diagnosis/${d.id_b}/${d.id}`}
                  test={"d."}
                />
              </div>
            )
          })}
          {/* <Componets_My_appointments_vet Type={""} test={true} clinic={""}
            animal={""} date={""} time={""} href={""} />
          <Componets_My_appointments_vet Type={""} test={true} clinic={""}
            animal={""} date={""} time={""} href={""} />
          <Componets_My_appointments_vet Type={""} clinic={""}
            animal={""} date={""} time={""} href={""} />
          <Componets_My_appointments_vet Type={""} clinic={""}
            animal={""} date={""} time={""} href={""} />
          <Componets_My_appointments_vet Type={""} clinic={""}
            animal={""} date={""} time={""} href={""} test={true}/> */}




        </div>
        <div class="text-wrapper-13">My appointments</div>

      </div>

    </>
  )
}

export default My_appointments_vet