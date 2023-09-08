import './Login.css'
import { Search_animal } from '../../Componets/index'
import axios from 'axios'
import React, { useState } from 'react'
const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <>
            <div className="container">
                <div className="title">Login</div>
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Email *</span>
                                <input type="email" placeholder="Enter your email" required onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="password" placeholder="Enter your password" required onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="button">
                            <button >login</button>
                        </div>
                        {/* <div className="button">
                            <input type="submit" value="Sign up" />
                        </div> */}
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
