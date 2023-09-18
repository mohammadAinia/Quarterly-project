import './Register_owner.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Header } from '../../Componets'


const Register_owner = () => {

    const navigate = useNavigate()

    const [First_name, setFirst_name] = useState('')
    const [Last_name, setLast_name] = useState('')
    const [Email, setEmail] = useState('')
    const [Phone, setPhone] = useState('')
    const [Password, setPassword] = useState('')
    const [Confirm, setConfirm] = useState('')
    const [Age, setAge] = useState('')
    const [Gender, setGender] = useState('')
    const [Images, setImages] = useState()

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {


        const formData = new FormData()
        formData.append('image', Images)
        formData.append('first_name', First_name)
        // formData.append('lirst_name', Last_name)
        // formData.append('phone', Phone)
        formData.append('email', Email)
        formData.append('password', Password)
        // formData.append('age', Age)
        // formData.append('gender', Gender)


        if (Password === Confirm) {
            e.preventDefault()

            // axios.post('http://localhost:3001/signup', formData)
            //     .then(res => {
            //         if (res.data.Login) {
            //             navigate('/Add_animal')
            //         }
            //     }
            //     )
            //     .catch(err => alert(err.data.message))
            axios.post('http://localhost:3001/signup', formData)
            .then(res => {
                alert("good")
            }
            )
            .catch(err => alert(err))
        }
        else { alert("password not match") }
    }


    return (
        <div>
            <Header href1={"/Animal"} a1={"Animal"} href3={"#"} a3={"Common Problems"} href2={"#"} a2={"Adopt Animal"} href4={"/login"} a4={"Login"} />

            <div className="container">
                <div className="title">Registration Owner</div>
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">First Name *</span>
                                <input type="text" name='first_name' required onChange={e => setFirst_name(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">Last Name *</span>
                                <input type="text" required onChange={e => setLast_name(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">Email *</span>
                                <input type="email" name='email' required onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">Age *</span>
                                <input type="date" required onChange={e => setAge(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">Phone Number *</span>
                                <input type="number" required onChange={e => setPhone(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">image *</span>
                                <input type="file" required onChange={e => setImages(e.target.files[0])} />
                            </div>
                            <div className="input-box">
                                <span className="details">Password *</span>
                                <input type="password" name='password' required onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">Confirm Password *</span>
                                <input type="password" required onChange={e => setConfirm(e.target.value)} />
                            </div>
                            <div class="gender-details">
                                <input type="radio" name="gender" id="dot-1" onChange={e => setGender(e.target.value)} />
                                <input type="radio" name="gender" id="dot-2" onChange={e => setGender(e.target.value)} />
                                <span class="gender-title">Gender *</span>
                                <div class="category">
                                    <label for="dot-1">
                                        <span class="dot one"></span>
                                        <span class="gender">Male</span>
                                    </label>
                                    <label for="dot-2">
                                        <span class="dot two"></span>
                                        <span class="gender">Female</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="button">
                            <button>Register</button>
                        </div>
                        <div className="buttonn">
                            <a href="/Back_to_type">Back</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register_owner
