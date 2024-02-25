import './Componets_My_appointments.css'
import React from 'react'
import My_AppointmentVector_36 from '../../../Assert/Images/My_AppointmentVector_36.png'


const Componets_My_appointments = (props) => {
    return (
        <>
            <div class="overlap-group">
                <div class="rectangle"></div>
                <img class="vector" src={My_AppointmentVector_36} />
                <div class="text-wrapper">{props.Type}</div>
                <div class="text-wrapper-2">{props.clinic}</div>
                <div class="text-wrapper-3">{props.vet}</div>
                <div class="text-wrapper-4">{props.animal}</div>
                <div class="text-wrapper-5">{props.date}</div>
                <div class="text-wrapper-6">{props.time}</div>
                <div class="text-wrapper-7">Type :</div>
                <div class="text-wrapper-8">Clinic :</div>
                <div class="text-wrapper-9">Vet :</div>
                <div class="text-wrapper-10">Animal :</div>
                <div class="text-wrapper-11">Date :</div>
                <div class="text-wrapper-12">Time :</div>
            </div>

        </>

    )
}

export default Componets_My_appointments