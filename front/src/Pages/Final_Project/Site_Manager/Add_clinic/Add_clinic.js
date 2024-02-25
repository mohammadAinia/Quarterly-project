import './Add_clinic.css'
import add_clinic from '../../../../Assert/Images/add_clinic.png'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Add_clinic = () => {

    const navigate = useNavigate()
    const [Name_clinic, setName_clinic] = useState('')
    const [From, setFrom] = useState('')
    const [To, setTo] = useState('')
    const [Location, setLocation] = useState('')
    const [Location_details, setLocation_details] = useState('')

    const [Phone, setPhone] = useState('')
    // const [Map, setMap] = useState('')


    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/#/#', { Name_clinic, From, To, Location, Location_details, Phone })
            .then(res => {
                if (res.data.valid) {

                    alert('The clinic has been added successfully')
                    window.location.reload()

                }
                else {
                    alert('It didnt work')
                }
            })
            .catch(err => { console.log(err) })
    }


    return (
        <>
            <div class="add-clinicc">
                <form onSubmit={handleSubmit}>
                    <div class="overlap-group-wrapperr">
                        <div class="overlap-groupp">
                            <div class="overlapp">

                                <div class="add_clinic_imagee"><img class="add_clinic_elementt" src={add_clinic} /></div>

                                <div class="rectanglee"></div>
                                <div class="divv"></div>
                                <div class="text-wrapperr">Add Clinic</div>
                                <div class="text-wrapper-22">Name Clinic</div>
                                <div class="text-wrapper-33">Location</div>
                                <div class="text-wrapper-333">Location details</div>
                                <div class="text-wrapper-3333">Phone</div>


                                <div class="text-wrapper-44">Working Time</div>
                                <div class="text-wrapper-55">From</div>
                                <div class="text-wrapper-66">To</div>
                                <input type='text' class="rectangle-22" onChange={e => setName_clinic(e.target.value)} />
                                <input type='text' class="rectangle-222" onChange={e => setLocation_details(e.target.value)} />
                                <input type='number' class="rectangle-2222" onChange={e => setPhone(e.target.value)} />


                                <input type='time' class="rectangle-44" onChange={e => setFrom(e.target.value)} />


                                <select name="Vacciness" class="rectangle-33" required onChange={e => setLocation(e.target.value)}>

                                    <option>Damascus</option>
                                    <option>homs</option>
                                    <option>Aleppo</option>
                                    <option>Rif Damascus,Nabek</option>
                                    <option>Rif Damascus,Yabrod</option>

                                </select>

                                <input type='time' class="rectangle-55" onChange={e => setTo(e.target.value)} />
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