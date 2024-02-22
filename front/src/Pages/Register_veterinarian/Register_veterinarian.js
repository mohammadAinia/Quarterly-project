import './Register_veterinarian.css'
import React, { useState } from 'react'
import { Header } from '../../Componets'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRightToBracket } from '@fortawesome/free-solid-svg-icons'

const Register_veterinarian = () => {
  const navigate = useNavigate()

  const [First_name, setFirst_name] = useState('')
  const [Last_name, setLast_name] = useState('')
  const [Email, setEmail] = useState('')
  const [Phone, setPhone] = useState('')
  const [Password, setPassword] = useState('')
  const [Confirm, setConfirm] = useState('')
  const [Age, setAge] = useState('')
  const [Nationality, setNationality] = useState('')
  const [Addres, setAddres] = useState('')
  const [University, setUniversity] = useState('')
  const [Bachelor, setBachelor] = useState()
  const [Previous_work, setPrevious_work] = useState('')
  const [Gender, setGender] = useState('')

  axios.defaults.withCredentials = true
  const handleSubmit = async (e) => {

    const formData = new FormData()

    formData.append('first_name', First_name)
    formData.append('last_name', Last_name)
    formData.append('email', Email)
    formData.append('phone', Phone)
    formData.append('password', Password)
    formData.append('age', Age)
    formData.append('gender', Gender)
    formData.append('Nationality', Nationality)
    formData.append('address', Addres)
    formData.append('university', University)
    formData.append('image', Bachelor)
    formData.append('previous_work', Previous_work)


    if (Password === Confirm) {
      e.preventDefault()

      axios.post('http://localhost:3001/user/signup_vet', formData)
        .then(res => {
          if (res.data.valid) {
            // navigate(`/Choosing_a_doctor_clinic/${res.data.id}`)
            navigate('/')
          }
        }
        )
        .catch(err => alert(err))
    }
    else { alert("password not match") }
  }
  return (
    <>
      <Header href1={"/Animal"} a1={"About Pets"} href3={"#"} a3={"FAQs"} log={'/login'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightToBracket} /></div>} />

      <div>
        <div className="container" >
          <div className="title">Registration Veterinarian</div>
          <div className="content">
            <form action="#" onSubmit={handleSubmit} enctype="multipart/form-data">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">First Name *</span>
                  <input type="text" name='first_name' required onChange={e => setFirst_name(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Last Name *</span>
                  <input type="text" name='last_name' required onChange={e => setLast_name(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Email *</span>
                  <input type="email" name='email' required onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number *</span>
                  <input type="number" name='phone' required onChange={e => setPhone(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Password *</span>
                  <input type="password" name='password' required onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Confirm Password *</span>
                  <input type="password" required onChange={e => setConfirm(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Age *</span>
                  <input type="date" name='age' required onChange={e => setAge(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Nationality *</span>
                  <input type="text" name='Nationality' required onChange={e => setNationality(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Addres *</span>
                  <input type="text" name='address' required onChange={e => setAddres(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Enter the name of the graduation university *</span>
                  <input type="text" name='university' required onChange={e => setUniversity(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">A copy of the bachelor's degree *</span>
                  <input type="file" required onChange={e => setBachelor(e.target.files[0])} />
                </div>
                <div className="input-box">
                  <span className="details">Details of previous work</span>
                  <input type="text" name='previous_work' onChange={e => setPrevious_work(e.target.value)} />
                </div>
              </div>
              <div className="gender-details">
                <input type="radio" name="gender" id="dot-1" value="male" onChange={e => setGender(e.target.value)} />
                <input type="radio" name="gender" id="dot-2" value="female" onChange={e => setGender(e.target.value)} />
                <span className="gender-title">Gender *</span>
                <div className="category">
                  <label for="dot-1">
                    <span className="dot one"></span>
                    <span className="gender" style={{ "color": "black" }}>Male</span>
                  </label>
                  <label for="dot-2">
                    <span className="dot two"></span>
                    <span className="gender" style={{ "color": "black" }}>Female</span>
                  </label>
                </div>
              </div>
              <div className="button">
                <button>Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register_veterinarian
