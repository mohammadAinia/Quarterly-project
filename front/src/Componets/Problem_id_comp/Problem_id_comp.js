import './Problem_id_comp'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Problem_id_comp = (props) => {

    const [Comment, setComment] = useState('')






    axios.defaults.withCredentials = true
    const handleSubmit = (id1) => {

        id1.preventDefault()
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
                        <textarea placeholder="add comment" required />
                    </div>
                    <button style={{ "font-size": "1.4rem", "padding": "0.7rem 2rem" }} className="btn" onSubmit={handleSubmit(props.id1)}>share</button><br />

                </div>
            </form>
        </>
    )
}

export default Problem_id_comp
