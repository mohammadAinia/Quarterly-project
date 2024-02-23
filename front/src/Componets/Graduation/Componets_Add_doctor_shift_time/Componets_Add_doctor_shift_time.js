import './Componets_Add_doctor_shift_time.css'
import axios from 'axios'
import { useState } from 'react'
import { Header } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'


const Componets_Add_doctor_shift_time = () => {
    const { id } = useParams()
    const navigate = useNavigate()


    const [sameWorkingHours, setSameWorkingHours] = useState(null); // Initial state set to null

    const handleRadioChange = (e) => {
        setSameWorkingHours(e.target.value === 'yes'); // Update state based on the selected radio button value
    }

    const [All_Day_From, setAll_Day_From] = useState('')
    const [All_Day_To, setAll_Day_To] = useState('')

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
        if (sameWorkingHours === true) {
            axios.post(`http://localhost:3001/clinic/add_shift/${id}`, {All_Day_From, All_Day_To},{ withCredentials: true })
                .then(res => {
                    if (res.data.valid) {
                        alert('the time shift was added ')
                        navigate(-1)
                    }
                })
                .catch(err => alert(err))

        }
        else {
            axios.post(`http://localhost:3001/clinic/add_shift_days/${id}`,{ Saturday_From, Saturday_To, Sunday_From, Sunday_To, Monday_From, Monday_To, Tuesday_From, Tuesday_To, Wednesday_From, Wednesday_To, Thursday_From, Thursday_To},{ withCredentials: true })
                .then(res => {
                    if (res.data.valid) {
                        navigate(-1)

                    }
                })
                .catch(err => alert(err))
        }


    }

    return (
        <>
            <form action="#" onSubmit={handleSubmit} enctype="multipart/form-data">

                <div class="gender-details">
                    <div class="gender-details">
                        <input type="radio" name="sameWorkingHours" value="yes" id="dot-1" onChange={handleRadioChange} />
                        <input type="radio" name="sameWorkingHours" value="no" id="dot-2" onChange={handleRadioChange} />
                        <span class="gender-title">Are all days the same working hours?</span>
                        <div class="category">
                            <label for="dot-1">
                                <span class="dot one"></span>
                                <span class="gender" style={{ "color": "black" }}>Yes</span>
                            </label>
                            <label for="dot-2">
                                <span class="dot two"></span>
                                <span class="gender" style={{ "color": "black" }}>No</span>
                            </label>
                        </div>
                    </div>
                </div>

                {sameWorkingHours === true && (
                    <div class="user-details">
                        <div class="input-box">
                            <span class="details">From *</span>
                            <input type="time" required name='name' onChange={e => setAll_Day_From(e.target.value)} />
                        </div>
                        <div class="input-box">
                            <span class="details">To *</span>
                            <input type="time" required name='age' onChange={e => setAll_Day_To(e.target.value)} />
                        </div>
                    </div>
                )}

                {sameWorkingHours === false && (
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
                )}

                {(sameWorkingHours === true || sameWorkingHours === false) && (
                    <div class="button">
                        <button>Add</button>
                    </div>
                )}

            </form>
        </>

    )
}

export default Componets_Add_doctor_shift_time