import './Problems.css'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Problems = (props) => {
    const navigate = useNavigate()

    const [Comment, setComment] = useState('')

    axios.defaults.withCredentials = true
    const handleSubmit = (id) => {

        id.preventDefault()
        axios.post('http://localhost:3001/send_comments/' + id, { Text })
            .then(res => {
                alert('Published successfully')
            })
            .catch(err => { console.log(err) })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <section className="pricing" id="pricing" >
                    <h2 className="heading">Proplem</h2>

                    <div className="box-container">
                        <div className="box">
                            <h2>{props.name}</h2>
                            <h2>{props.type}</h2>
                            <p style={{ "font-size": "10px" }}>{props.text}</p> <br />
                            <div class="inputBox">
                                <textarea placeholder="add comment" required onChange={e => setComment(e.target.value)} />
                            </div>
                            <button style={{ "font-size": "1.4rem", "padding": "0.7rem 2rem" }} className="btn">share</button><br />
                            <a href='/All_problems' className="btn" style={{ "font-size": "1.4rem", "padding": "0.7rem 2rem" }}>Comments</a>
                        </div>
                    </div>
                </section>
            </form>
        </>
    )
}

export default Problems
