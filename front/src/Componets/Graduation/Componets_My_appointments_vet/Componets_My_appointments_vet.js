import './Componets_My_appointments_vet.css'
import My_AppointmentVector_36 from '../../../Assert/Images/My_AppointmentVector_36.png'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
const Componets_My_appointments_vet = (props) => {

    const [isDiagnosed, setIsDiagnosed] = useState(false);
    const navigate = useNavigate()


    // useEffect(() => {
    //     axios.get(`http://localhost:3001/#/${props.id}`, { withCredentials: true })
    //         .then(res => {
    //             setIsDiagnosed(res.data.diagnosed);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             navigate('/login'); // Redirect to login page if there's an error
    //         });
    // }, [props.href, navigate]);


    return (
        <>
            <div class="overlap-group">
                <div class="rectangle"></div>
                <img class="vector" src={My_AppointmentVector_36} />
                <div class="text-wrapper">{props.Type}</div>
                <div class="text-wrapper-2">{props.clinic}</div>
                <div class="text-wrapper-3">{props.animal}</div>
                <div class="text-wrapper-4">{props.date}</div>
                <div class="text-wrapper-5">{props.time}</div>
                {/* <div class="text-wrapper-6">{props.time}</div> */}
                <div class="text-wrapper-7">Type :</div>
                <div class="text-wrapper-8">Clinic :</div>
                <div class="text-wrapper-9">Animal :</div>
                <div class="text-wrapper-10">Date :</div>
                <div class="text-wrapper-11">Time :</div>
                {/* <div class="text-wrapper-12">Time :</div> */}
                <a className="nice-button" href={props.href}>Diagnosis</a>

                {isDiagnosed && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="green-check">
                        <path fill="#4CAF50" d="M9 16.17l-3.5-3.5 1.17-1.17 2.33 2.33 4.16-4.16 1.17 1.17z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <animate attributeName="opacity" from="0.2" to="1" dur="1s" repeatCount="indefinite"/>
                    </svg>
                )}
            </div>


        </>
    )
}

export default Componets_My_appointments_vet