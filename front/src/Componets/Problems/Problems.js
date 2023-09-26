import './Problems.css'
import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Problems = (props) => {
    const navigate = useNavigate()

    const [Comment, setComment] = useState('')

    axios.defaults.withCredentials = true
    const handleSubmit = (id) => {

        axios.post("http://localhost:3001/problim/add_answer/"+id, { Comment })
            .then(res => {
                if(res.data.valid)
                {alert('Published successfully')
            }
            else {
                navigate('/login')
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
                    <button onClick={e =>handleSubmit(props.id1)} style={{ "font-size": "1.4rem", "padding": "0.7rem 2rem" }} className="btn">share</button><br />
                    <Link className="btn" to={`Problem_id/${props.id2}`}>Comments</Link>
                    {/* <Link className="btn" to={props.link}>{props.link_name}</Link> */}
                </div>
            </form>

        </>
    )
}

export default Problems
