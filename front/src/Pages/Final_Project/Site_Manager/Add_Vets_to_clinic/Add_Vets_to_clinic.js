import './Add_Vets_to_clinic.css'
import add_clinic from '../../../../Assert/Images/add_clinic.png'
import React, { useState, useEffect } from 'react';



//هذه تحتاج الى حذف راجع وتاكد 



const Add_Vets_to_clinic = () => {
    return (
        <>
            <div class="add-clinic">
                <form>
                    <div class="overlap-group-wrapper">
                        <div class="overlap-group">
                            <div class="overlap">

                                <div class="add_clinic_image"><img class="add_clinic_element" src={add_clinic} /></div>

                                <div class="rectangle"></div>
                                <div class="div"></div>
                                <div class="text-wrapper">Add Veterinarian</div>
                                <div class="text-wrapper-2">Full Name</div>
                                <div class="text-wrapper-3">Details about your veterinary experience</div>
                                <div class="text-wrapper-4">Years of Experience</div>
                                <div class="text-wrapper-5">Nationality</div>

                                <input type='text' class="rectangle-2" />
                                <input type='text' class="rectangle-4" />
                                <input type='text' class="rectangle-5" />
                                <input type='text' class="rectangle-3" />
                                    
                                <div class="frame">
                                    <button className="text-wrapper-7">Add</button>

                                </div>

                            </div>
                            <div class="rectangle-wrapper"><div class="rectangle-6"></div></div>

                        </div>
                    </div>
                </form>
            </div>
        </>

    )
}

export default Add_Vets_to_clinic