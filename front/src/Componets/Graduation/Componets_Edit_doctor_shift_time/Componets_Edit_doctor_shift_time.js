import './Componets_Edit_doctor_shift_time.css'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Header } from '../../../Componets'
import { useNavigate } from 'react-router-dom'

const Componets_Edit_doctor_shift_time = () => {

    const [Saturday_From, setSaturday_From] = useState('')
    const [Saturday_To, setSaturday_To] = useState('')

    const [Sunday_From, setSunday_From] = useState('')
    const [Sunday_To, setSunday_To] = useState('')

    const [Monday_From, setMonday_From] = useState('')
    const [Monday_To, setMonday_To] = useState('')

    const [Tuesday_From, setTuesday_From] = useState('')
    const [Tuesday_To, setTuesday_To] = useState('')

    const [Wednesday_From, setWednesday_From] = useState('')
    const [Wednesday_To, setWednesday_To] = useState('')

    const [Thursday_From, setThursday_From] = useState('')
    const [Thursday_To, setThursday_To] = useState('')

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {

        e.preventDefault()
        axios.post('http://localhost:3001/#/#', Saturday_From, Saturday_To, Sunday_From, Sunday_To, Monday_From, Monday_To, Tuesday_From, Tuesday_To, Wednesday_From, Wednesday_To, Thursday_From, Thursday_To)
            .then(res => {
                if (res.data.valid) {
                    alert('Modified successfully')
                }
            })
            .catch(err => alert(err))
    }
    return (
        <>
            <form action="#" onSubmit={handleSubmit} enctype="multipart/form-data">

                <div class="user-details">
                    <div class="input-box">
                        <span class="details" style={{ "margin-left": "280px", "width": "100px" }}>Saturday</span>
                    </div>
                    <div class="input-box">
                    </div>
                    <div class="input-box">
                        <span class="details">From *</span>
                        <input type="time" name='name' required onChange={e => setSaturday_From(e.target.value)} />
                    </div>
                    <div class="input-box">
                        <span class="details">To *</span>
                        <input type="time" name='age' required onChange={e => setSaturday_To(e.target.value)} />
                    </div>


                    <div class="input-box">
                        <span class="details" style={{ "margin-left": "280px", "width": "100px" }}>Sunday</span>
                    </div>
                    <div class="input-box">
                    </div>
                    <div class="input-box">
                        <span class="details">From *</span>
                        <input type="time" name='name' required onChange={e => setSunday_From(e.target.value)} />
                    </div>
                    <div class="input-box">
                        <span class="details">To *</span>
                        <input type="time" name='age' required onChange={e => setSunday_To(e.target.value)} />
                    </div>


                    <div class="input-box">
                        <span class="details" style={{ "margin-left": "280px", "width": "100px" }}>Monday</span>
                    </div>
                    <div class="input-box">
                    </div>
                    <div class="input-box">
                        <span class="details">From *</span>
                        <input type="time" name='name' required onChange={e => setMonday_From(e.target.value)} />
                    </div>
                    <div class="input-box">
                        <span class="details">To *</span>
                        <input type="time" name='age' required onChange={e => setMonday_To(e.target.value)} />
                    </div>

                    <div class="input-box">
                        <span class="details" style={{ "margin-left": "280px", "width": "100px" }}>Tuesday</span>
                    </div>
                    <div class="input-box">
                    </div>
                    <div class="input-box">
                        <span class="details">From *</span>
                        <input type="time" name='name' required onChange={e => setTuesday_From(e.target.value)} />
                    </div>
                    <div class="input-box">
                        <span class="details">To *</span>
                        <input type="time" name='age' required onChange={e => setTuesday_To(e.target.value)} />
                    </div>

                    <div class="input-box">
                        <span class="details" style={{ "margin-left": "280px", "width": "100px" }}>Wednesday</span>
                    </div>
                    <div class="input-box">
                    </div>
                    <div class="input-box">
                        <span class="details">From *</span>
                        <input type="time" name='name' required onChange={e => setWednesday_From(e.target.value)} />
                    </div>
                    <div class="input-box">
                        <span class="details">To *</span>
                        <input type="time" name='age' required onChange={e => setWednesday_To(e.target.value)} />
                    </div>

                    <div class="input-box">
                        <span class="details" style={{ "margin-left": "280px", "width": "100px" }}>Thursday</span>
                    </div>
                    <div class="input-box">
                    </div>
                    <div class="input-box">
                        <span class="details">From *</span>
                        <input type="time" name='name' required onChange={e => setThursday_From(e.target.value)} />
                    </div>
                    <div class="input-box">
                        <span class="details">To *</span>
                        <input type="time" name='age' required onChange={e => setThursday_To(e.target.value)} />
                    </div>
                </div>


                <div class="button">
                    <button>Edit</button>
                </div>

            </form>
        </>


    )
}

export default Componets_Edit_doctor_shift_time