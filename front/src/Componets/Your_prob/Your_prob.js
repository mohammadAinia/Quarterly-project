import './Your_prob'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Your_prob = (props) => {


    axios.defaults.withCredentials = true

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:3001/#/#/' + id)
            window.location.reload()
        }
        catch (err) { console.log(err) }
    }



    return (
        <>
            <form >
                <div className="box">

                    <h2>{props.name}</h2>
                    <h2>{props.type}</h2>
                    <p style={{ "font-size": "10px" }}>{props.text}</p> <br />

                    <button style={{ "font-size": "1.4rem", "padding": "0.7rem 2rem" }} className="btn" onClick={e => handleDelete(props.id1)}>delete</button><br />
                    <Link className="btn" to={`update_problem/${props.id2}`}>Update</Link>

                </div>
            </form>
        </>
    )
}

export default Your_prob
