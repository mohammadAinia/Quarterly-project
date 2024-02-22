import './Componets_Select_Register.css'
import React from 'react'
import all_vet_Vector_34 from '../../../Assert/Images/all_vet_Vector_34.png'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Componets_Select_Register = (props) => {

    const handleAction = async (id) => {
        try {
            await axios.post('http://localhost:3001/#/#/' + id)
            alert("The doctor has been successfully added to the clinic")
            window.location.reload()
        }
        catch (err) { console.log(err) }
    }

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
                <div class="div-wrapper"><button class="text-wrapper-5" onClick={() => handleAction(props.id)}>Select</button></div>
            </div>
        </>

    )
}

export default Componets_Select_Register