import './Edit_doctor_shift_time.css'
import React, { useState, useEffect } from 'react';
import { Header, Componets_Edit_doctor_shift_time } from '../../../../Componets'

const Edit_doctor_shift_time = () => {
    return (
        <>
            <div>
                <div class="container" style={{ "margin-top": "120px", "margin-bottom": "70px" }}>
                    <div class="title">Edit working hours</div><br />
                    <div class="content">
                        <Componets_Edit_doctor_shift_time />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Edit_doctor_shift_time