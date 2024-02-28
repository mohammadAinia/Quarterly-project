import './Componets_Edit_doctor_shift_time.css'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'


const Componets_Edit_doctor_shift_time = () => {

    const { id } = useParams()
    const navigate = useNavigate()

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

    useEffect(() => {

        axios.get(`http://localhost:3001/#/${id}`, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setSaturday_From(res.data.Saturday_From)
                    setSaturday_To(res.data.Saturday_To)

                    setSunday_From(res.data.Sunday_From)
                    setSunday_To(res.data.Sunday_To)

                    setMonday_From(res.data.Monday_From)
                    setMonday_To(res.data.Monday_To)

                    setTuesday_From(res.data.Tuesday_From)
                    setTuesday_To(res.data.Tuesday_To)

                    setWednesday_From(res.data.Wednesday_From)
                    setWednesday_To(res.data.Wednesday_To)

                    setThursday_From(res.data.Thursday_From)
                    setThursday_To(res.data.Thursday_To)

                }
            })
            .catch(err => { console.log(err) })

    }, [])


    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {

        e.preventDefault()
        axios.post(`http://localhost:3001/#/#/${id}`, Saturday_From, Saturday_To, Sunday_From, Sunday_To, Monday_From, Monday_To, Tuesday_From, Tuesday_To, Wednesday_From, Wednesday_To, Thursday_From, Thursday_To, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    alert('Modified successfully')
                }
            })
            .catch(err => alert(err))
    }
    return (
        <>
            <form onSubmit={handleSubmit} enctype="multipart/form-data">

                <div class="user-details">
                    <div class="input-box">
                        <span class="details" style={{ "margin-left": "220px", "width": "200px" }}>Saturday {Saturday_From+' '+Saturday_To}</span>
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
                        <span class="details" style={{ "margin-left": "220px", "width": "200px" }}>Sunday {Sunday_From+' '+Sunday_To}</span>
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
                        <span class="details" style={{ "margin-left": "220px", "width": "200px" }}>Monday {Monday_From+' '+Monday_To}</span>
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
                        <span class="details" style={{ "margin-left": "220px", "width": "200px" }}>Tuesday {Tuesday_From+' '+Tuesday_To}</span>
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
                        <span class="details" style={{ "margin-left": "220px", "width": "200px" }}>Wednesday {Wednesday_From+' '+Wednesday_To}</span>
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
                        <span class="details" style={{ "margin-left": "220px", "width": "200px" }}>Thursday {Thursday_From+' '+Thursday_To}</span>
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