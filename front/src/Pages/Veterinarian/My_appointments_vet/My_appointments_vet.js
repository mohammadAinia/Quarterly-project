import './My_appointments_vet.css'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { Componets_My_appointments_vet } from '../../../Componets'


const My_appointments_vet = () => {

  const [Info, setInfo] = useState([])
  // const [InfoID, setInfoID] = useState([])


  useEffect(() => {
    axios.get('http://localhost:3001/#/#', { withCredentials: true })
      .then(res => {
        setInfo(res.data.result);
        // setInfoID(res.data.id)
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
                <Componets_My_appointments_vet Type={d.service} clinic={d.c_name}
                  animal={d.name} date={d.datebooking} time={d.timebookig} href={`Diagnosis${d.id}`} />
              </div>
            )
          })}
          <Componets_My_appointments_vet Type={""} clinic={""} vet={""}
            animal={""} date={""} time={""}  href={`Diagnosis/${6}`} />



        </div>
        <div class="text-wrapper-13">My appointments</div>

      </div>

    </>
  )
}

export default My_appointments_vet