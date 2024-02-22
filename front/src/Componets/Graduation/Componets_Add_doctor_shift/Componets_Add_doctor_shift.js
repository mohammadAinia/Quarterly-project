import './Componets_Add_doctor_shift.css'
import React from 'react'
import all_vet_Vector_34 from '../../../Assert/Images/all_vet_Vector_34.png'
import axios from 'axios'

const Componets_Add_doctor_shift = (props) => {
    return (
        <>
            <div class="frame">
                <div class="overlap">
                    <img class="vector" src={all_vet_Vector_34} />
                    <div class="text-wrapper">vet</div>
                    <div class="div">Name :</div>
                    <div class="text-wrapper-2">{props.name}</div>
                </div>
                <div class="overlap-group">
                    <div class="text-wrapper-3">Age :</div>
                    <div class="text-wrapper-4">{props.age}</div>
                </div>
                <div class="overlap-2">
                    <div class="text-wrapper-3">Email :</div>
                    <div class="text-wrapper-4">{props.email}</div>
                </div>
                <div class="div-wrapper"><a class="text-wrapper-5" href={props.href}>Select</a></div>
            </div>
        </>


    )
}

export default Componets_Add_doctor_shift