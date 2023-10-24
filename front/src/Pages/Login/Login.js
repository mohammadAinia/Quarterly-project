import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
// import { Search_animal } from '../../Componets/index'
import React, { useState } from 'react'
import { Header } from '../../Componets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRightToBracket } from '@fortawesome/free-solid-svg-icons'

const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/user/login', { email, password })
            .then(res => {
                if (res.data.Login) {
                    navigate('/')
                }
                // else if(res.data.Login==='doc')
                // {
                //     navigate('/Home_vet')
                // }
                else {
                    alert('no record')
                }
            })
            .catch(err => { console.log(err) })
    }

    return (
        <>
            <Header href1={"/Animal"} a1={"Animal"} href3={"#"} a3={"Common Problems"} href2={"#"} a2={"Adopt Animal"} log={'/login'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightToBracket} /></div>} />

            <div className="container">
                <div className="title">Login</div>
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Email *</span>
                                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">Password *</span>
                                <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="button">
                            <button >login</button>
                        </div>
                        <div className="button">
                            <a href="/TypeRegister">Sign up</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
