import './Add_proplem'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Add_proplem = () => {
    const navigate = useNavigate()

    const [Text, setText] = useState('')

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {

        e.preventDefault()
        axios.post('http://localhost:3001/add_proplem',{ Text})
            .then(res => {
                alert('Published successfully')
            })
            .catch(err => { console.log(err) })
        // axios.post('http://localhost:3001/user/#', { Text})
        //     .then(res => {
        //         if (res.data.valid) {
        //             alert("Published successfully")
        //         }
        //         else {
        //             alert('Not published')
        //         }
        //     })
        //     .catch(err => { console.log(err) })
    }
    return (
        <>
            <section className="contact" id="contact">

                <h2 className="heading">Do you have a proplem ?</h2>

                <form onSubmit={handleSubmit}>

                    <textarea cols="30" rows="10" placeholder="meassage" onChange={e => setText(e.target.value)}/>

                    <button className="btn">share</button>

                </form>

            </section>
        </>
    )
}

export default Add_proplem
