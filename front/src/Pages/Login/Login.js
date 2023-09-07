import './Login.css'
//hhfgf
import { Search_animal } from '../../Componets/index'
import axios from 'axios'
import React, { useState } from 'react'
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/user/login', { email, password })
            .then(res => <Search_animal/>)
            .catch(err => console.log(err))
    }
    return (
        <>
            <div class="container">
                <div class="title">Login</div>
                <div class="content">
                    <form onSubmit={handleSubmit}>
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details">Email *</span>
                                <input type="text" placeholder="Enter your email" required onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div class="input-box">
                                <span class="details">Password</span>
                                <input type="text" placeholder="Enter your password" required onChange={e => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div class="button">
                            <input type="submit" value="Login" />
                        </div>
                        {/* <div class="button">
                            <input type="submit" value="Sign up" />
                        </div> */}
                        <div class="button">
                            <a href="/TypeRegister">Sign up</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
