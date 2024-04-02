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

        axios.get(`http://localhost:3001/clinic/show_shift_time/${id}`, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setSaturday_From(res.data.result[0].start)
                    setSaturday_To(res.data.result[0].end)

                    setSunday_From(res.data.result[1].start)
                    setSunday_To(res.data.result[1].end)

                    setMonday_From(res.data.result[2].start)
                    setMonday_To(res.data.result[2].end)

                    setTuesday_From(res.data.result[3].start)
                    setTuesday_To(res.data.result[3].end)

                    setWednesday_From(res.data.result[4].start)
                    setWednesday_To(res.data.result[4].end)

                    setThursday_From(res.data.result[5].start)
                    setThursday_To(res.data.result[5].end)
                }
            })
            .catch(err => { console.log(err) })

    }, [])


    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {

        e.preventDefault()
        axios.post(`http://localhost:3001/clinic/update_time_shift/${id}`, {Saturday_From, Saturday_To, Sunday_From, Sunday_To, Monday_From, Monday_To, Tuesday_From, Tuesday_To, Wednesday_From, Wednesday_To, Thursday_From, Thursday_To}, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    alert('Modified successfully')
                    navigate(-2)
                }
            })
            .catch(err => alert(err))
    }
    return (
        <>
            <form onSubmit={handleSubmit} enctype="multipart/form-data">

                <div class="user-details">
                    <div class="input-box">
                        <span class="details" style={{ "margin-left": "280px", "width": "200px" }}>Saturday {Saturday_From+' '+Saturday_To}</span>
                    </div>

                    <div class="input-box">
                    </div>
                    <div class="input-box">
                        <span class="details">From *</span>
                        <input type="time"defaultValue={Saturday_From}  name='name' required onChange={e => setSaturday_From(e.target.value)} />
                    </div>
                    <div class="input-box">
                        <span class="details">To *</span>
                        <input type="time" defaultValue={Saturday_To} name='age' required onChange={e => setSaturday_To(e.target.value)} />
                    </div>


                    <div class="input-box">
                        <span class="details" style={{ "margin-left": "280px", "width": "200px" }}>Sunday {Sunday_From+' '+Sunday_To}</span>
                    </div>
                    <div class="input-box">
                    </div>
                    <div class="input-box">
                        <span class="details">From *</span>
                        <input type="time" defaultValue={Sunday_From} name='name' required onChange={e => setSunday_From(e.target.value)} />
                    </div>
                    <div class="input-box">
                        <span class="details">To *</span>
                        <input type="time" defaultValue={Sunday_To} name='age' required onChange={e => setSunday_To(e.target.value)} />
                    </div>


                    <div class="input-box">
                        <span class="details" style={{ "margin-left": "280px", "width": "200px" }}>Monday {Monday_From+' '+Monday_To}</span>
                    </div>
                    <div class="input-box">
                    </div>
                    <div class="input-box">
                        <span class="details">From *</span>
                        <input type="time" defaultValue={Monday_From} name='name' required onChange={e => setMonday_From(e.target.value)} />
                    </div>
                    <div class="input-box">
                        <span class="details">To *</span>
                        <input type="time" name='age' defaultValue={Monday_To} required onChange={e => setMonday_To(e.target.value)} />
                    </div>

                    <div class="input-box">
                        <span class="details" style={{ "margin-left": "280px", "width": "200px" }}>Tuesday {Tuesday_From+' '+Tuesday_To}</span>
                    </div>
                    <div class="input-box">
                    </div>
                    <div class="input-box">
                        <span class="details">From *</span>
                        <input type="time" defaultValue={Tuesday_From} name='name' required onChange={e => setTuesday_From(e.target.value)} />
                    </div>
                    <div class="input-box">
                        <span class="details">To *</span>
                        <input type="time" name='age' defaultValue={Tuesday_To} required onChange={e => setTuesday_To(e.target.value)} />
                    </div>

                    <div class="input-box">
                        <span class="details" style={{ "margin-left": "280px", "width": "200px" }}>Wednesday {Wednesday_From+' '+Wednesday_To}</span>
                    </div>
                    <div class="input-box">
                    </div>
                    <div class="input-box">
                        <span class="details">From *</span>
                        <input type="time" defaultValue={Wednesday_From} name='name' required onChange={e => setWednesday_From(e.target.value)} />
                    </div>
                    <div class="input-box">
                        <span class="details">To *</span>
                        <input type="time" name='age' defaultValue={Wednesday_To} required onChange={e => setWednesday_To(e.target.value)} />
                    </div>

                    <div class="input-box">
                        <span class="details" style={{ "margin-left": "280px", "width": "200px" }}>Thursday {Thursday_From+' '+Thursday_To}</span>
                    </div>
                    <div class="input-box">
                    </div>
                    <div class="input-box">
                        <span class="details">From *</span>
                        <input type="time" name='name' defaultValue={Thursday_From} required onChange={e => setThursday_From(e.target.value)} />
                    </div>
                    <div class="input-box">
                        <span class="details">To *</span>
                        <input type="time" name='age' defaultValue={Thursday_To} required onChange={e => setThursday_To(e.target.value)} />
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