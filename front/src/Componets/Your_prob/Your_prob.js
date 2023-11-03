import './Your_prob'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Your_prob = (props) => {


    axios.defaults.withCredentials = true

    const handleDelete = async (id) => {
        try {
            await axios.post('http://localhost:3001/problim/delete/'+id)
            window.location.reload()
        }
        catch (err) { console.log(err) }
    }



    return (
        <>
            <form  >
                <div className="box">
                    <h2 style={{ "font-size": "24px" }}>{props.type}</h2>
                    <br />
                    <h2>{props.name}</h2>
                    <br />
                    <p style={{ "font-size": "15px" }}>{props.text}</p> <br />

                    <button style={{ "font-size": "1.4rem", "padding": "0.7rem 2rem" }} className="btn" onClick={e => handleDelete(props.id2)}>delete</button><br />
                    <Link className="btn" to={`update_problem/${props.id2}`}>Update</Link>

                </div>
            </form>
        </>
    )
}

export default Your_prob
