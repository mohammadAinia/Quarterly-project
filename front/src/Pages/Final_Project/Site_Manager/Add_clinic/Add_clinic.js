import './Add_clinic.css'
import add_clinic from '../../../../Assert/Images/add_clinic.png'
import React, { useState, useEffect } from 'react';


const Add_clinic = () => {
    return (
        <>
            <div class="add-clinicc">
                <form>
                    <div class="overlap-group-wrapperr">
                        <div class="overlap-groupp">
                            <div class="overlapp">

                                <div class="add_clinic_imagee"><img class="add_clinic_elementt" src={add_clinic} /></div>

                                <div class="rectanglee"></div>
                                <div class="divv"></div>
                                <div class="text-wrapperr">Add Clinic</div>
                                <div class="text-wrapper-22">Name Clinic</div>
                                <div class="text-wrapper-33">Location</div>
                                <div class="text-wrapper-44">Working Time</div>
                                <div class="text-wrapper-55">From</div>
                                <div class="text-wrapper-66">To</div>
                                <input type='textt' class="rectangle-22" />
                                <input type='timee' class="rectangle-44" />


                                <select name="Vacciness" class="rectangle-33" required >

                                    <option>Damascus</option>
                                    <option>homs</option>
                                    <option>Aleppo</option>
                                    <option>Rif Damascus,Nabek</option>
                                    <option>Rif Damascus,Yabrod</option>

                                </select>
                                <input type='timee' class="rectangle-55" />
                                <div class="framee">
                                    <button className="text-wrapper-77">Add</button>

                                </div>

                            </div>
                            <div class="rectangle-wrapperr"><div class="rectangle-66"></div></div>

                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Add_clinic