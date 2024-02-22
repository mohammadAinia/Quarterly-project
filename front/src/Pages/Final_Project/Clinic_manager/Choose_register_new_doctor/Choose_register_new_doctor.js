import './Choose_register_new_doctor.css'
import React from 'react'

import choose_Vector from '../../../../Assert/Images/choose_Vector.png'
import choose_Vector2 from '../../../../Assert/Images/choose_Vector2.png'
import choose_Vector3 from '../../../../Assert/Images/choose_Vector3.png'



const Choose_register_new_doctor = () => {
    return (
        <>
            <div class="choose">
                <div class="div">
                    <div class="overlap-group">
                        <div class="overlap">
                            <div class="text-wrapper">Choose</div>
                            <img class="vector" src={choose_Vector3} />
                        </div>
                        <div class="frame"><a class="text-wrapper-2" href='Adding_new_doctor_clinic'>Register a new doctor</a></div>
                        <div class="div-wrapper"><a class="text-wrapper-2" href='Select_Register'>Registered veterinarian</a></div>
                    </div>
                    <img class="img" src={choose_Vector} />
                    <img class="vector-2" src={choose_Vector2} />
                </div>
            </div>
        </>

    )
}

export default Choose_register_new_doctor