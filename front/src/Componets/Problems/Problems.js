import './Problems.css'
import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Problems = (props) => {
    const navigate = useNavigate()

    const [Comment, setComment] = useState('')

    axios.defaults.withCredentials = true
    const handleSubmit = (id1) => {

        axios.post('http://localhost:3001/send_comments/' + id1, { Comment })
            .then(res => {
                alert('Published successfully')
            })
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
                    <button style={{ "font-size": "1.4rem", "padding": "0.7rem 2rem" }} className="btn" onSubmit={handleSubmit(props.id1)}>share</button><br />
                    {/* <a href='/Problem_id/' className="btn" style={{ "font-size": "1.4rem", "padding": "0.7rem 2rem" }}>Comments</a> */}
                    
                    <Link style={{ "font-size": "1.4rem", "padding": "0.7rem 2rem" }} className='btn' to={`Problem_id/${props.id2}`}>Comments</Link>

                </div>
            </form>

        </>
    )
}

export default Problems
