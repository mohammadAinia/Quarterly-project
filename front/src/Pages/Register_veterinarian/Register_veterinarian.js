import './Register_veterinarian.css'
import React, { useState } from 'react'
import { Header } from '../../Componets'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


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
  const [Bachelor, setBachelor] = useState('')
  const [Previous_work, setPrevious_work] = useState('')
  const [Photograph, setPhotograph] = useState('')
  const [Gender, setGender] = useState('')

  axios.defaults.withCredentials = true

  const handleSubmit = async (e) => {
    if (Password === Confirm) {
      e.preventDefault()

      axios.post('http://localhost:3001/user/signup_vet', { First_name, Last_name, Phone, Email, Password, Age, Nationality, Addres, University, Bachelor, Previous_work, Photograph, Gender })
        .then(res => 
          { 
            if(res.data.Login){
              navigate('/')
            }
          }
          )
        .catch(err => alert(err))
    }
    else{alert("password not match")}

    // const workout = { First_name, Last_name, Email, Phone, Password, Age, Nationality, Addres, university, bachelor, previous_work, Photograph, Gender }

    // const response = await fetch('/user/', {
    //   method: 'POST',
    //   body: JSON.stringify(workout),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // const json = await response.json()
    // if (response.ok) {
    //   console.log("hello")
    // }
    // else if (!response.ok)
    //   console.log(json.error)
  }
  return (
    <>
      <Header href1={"/Animal"} a1={"Animal"} href3={"#"} a3={"Common Problems"} href2={"#"} a2={"Adopt Animal"} href4={"/login"} a4={"Login"} />

      <div style={{ "margin-top": "600px", "margin-bottom": "70px" }}>
        <div className="container" >
          <div className="title">Registration Veterinarian</div>
          <div className="content">
            <form onSubmit={handleSubmit}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">First Name *</span>
                  <input type="text" required onChange={e => setFirst_name(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Last Name *</span>
                  <input type="text" required onChange={e => setLast_name(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Email *</span>
                  <input type="email" required onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number *</span>
                  <input type="number" required onChange={e => setPhone(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Password *</span>
                  <input type="password" required onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Confirm Password *</span>
                  <input type="password" required onChange={e => setConfirm(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Age *</span>
                  <input type="date" required onChange={e => setAge(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Nationality *</span>
                  <input type="text" required onChange={e => setNationality(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Addres *</span>
                  <input type="text" required onChange={e => setAddres(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Enter the name of the graduation university *</span>
                  <input type="text" required onChange={e => setUniversity(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">A copy of the bachelor's degree *</span>
                  <input type="file" required onChange={e => setBachelor(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Details of previous work</span>
                  <input type="text" onChange={e => setPrevious_work(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Photograph</span>
                  <input type="file" onChange={e => setPhotograph(e.target.value)} />
                </div>
              </div>
              <div className="gender-details">
                <input type="radio" name="gender" id="dot-1" value="male" onChange={e => setGender(e.target.value)} />
                <input type="radio" name="gender" id="dot-2" value="male" onChange={e => setGender(e.target.value)} />
                <span className="gender-title">Gender *</span>
                <div className="category">
                  <label for="dot-1">
                    <span className="dot one"></span>
                    <span className="gender">Male</span>
                  </label>
                  <label for="dot-2">
                    <span className="dot two"></span>
                    <span className="gender">Female</span>
                  </label>
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
    </>
  )
}

export default Register_veterinarian
