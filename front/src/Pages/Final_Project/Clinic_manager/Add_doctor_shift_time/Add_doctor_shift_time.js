import './Add_doctor_shift_time.css'
import add_clinic from '../../../../Assert/Images/add_clinic.png'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Header, Componets_Add_doctor_shift_time } from '../../../../Componets'


const Add_doctor_shift_time = () => {


    return (
        <>
            <div>
                <div class="container" style={{ "margin-top": "120px", "margin-bottom": "70px" }}>
                    <div class="title">Add working hours</div><br/>
                    <div class="content">
                        <Componets_Add_doctor_shift_time />
                    </div>
                </div>
            </div>
        </>


    )
}

export default Add_doctor_shift_time