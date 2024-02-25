import { Componets_My_appointments } from '../../../Componets'
import './My_appointments.css'
import React from 'react'

const My_appointments = () => {
    return (
        <>
            <div class="frame_My_appointments">
                <div class="div">
                    <Componets_My_appointments Type={"ex"} clinic={"day"} vet={"mohammad"} animal={"caty"} date={"2024/2/2"} time={"11:30 pm"}/>

                </div>
                <div class="text-wrapper-13">My appointments</div>

            </div>
        </>

    )
}

export default My_appointments