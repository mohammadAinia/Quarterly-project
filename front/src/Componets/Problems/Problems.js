import './Problems.css'
import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Problems = (props) => {
    const navigate = useNavigate()

    const [Text, setComment] = useState('')

    axios.defaults.withCredentials = true
    const handleSubmit = (id1) => {

        id.preventDefault()
        axios.post("http://localhost:3001/problim/add_answer/"+id, { Text })
            .then(res => {
                if(res.data.valid){alert('Published successfully')
            }
            else {
                alert("Please fill all the fields")
            }
            
            }
            )
            .catch(err => { console.log(err) })
    }

    return (
        <>


            <form >
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
            </form>

        </>
    )
}

export default Problems
