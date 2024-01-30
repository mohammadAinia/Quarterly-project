import './Add_clinic.css'
import add_clinic from '../../../../Assert/Images/add_clinic.png'
import React, { useState, useEffect } from 'react';


const Add_clinic = () => {
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
                                <div class="text-wrapper">Add Clinic</div>
                                <div class="text-wrapper-2">Name Clinic</div>
                                <div class="text-wrapper-3">Location</div>
                                <div class="text-wrapper-4">Working Time</div>
                                <div class="text-wrapper-5">From</div>
                                <div class="text-wrapper-6">To</div>
                                <input type='text' class="rectangle-2" />
                                <input type='time' class="rectangle-4" />


                                <select name="Vaccines" class="rectangle-3" required >

                                    <option>Damascus</option>
                                    <option>homs</option>
                                    <option>Aleppo</option>
                                    <option>Rif Damascus,Nabek</option>
                                    <option>Rif Damascus,Yabrod</option>

                                </select>
                                <input type='time' class="rectangle-5" />
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

export default Add_clinic