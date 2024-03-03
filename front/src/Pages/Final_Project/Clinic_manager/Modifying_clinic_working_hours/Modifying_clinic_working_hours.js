import './Modifying_clinic_working_hours.css'

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Header, Componets_Modifying_clinic_working_hours } from '../../../../Componets'

const Modifying_clinic_working_hours = () => {
    return (
        <>
            <div>
                <div class="container" style={{ "margin-top": "120px", "margin-bottom": "70px" }}>
                    <div class="title">Edit working hours</div><br />
                    <div class="content">
                        <Componets_Modifying_clinic_working_hours />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Modifying_clinic_working_hours