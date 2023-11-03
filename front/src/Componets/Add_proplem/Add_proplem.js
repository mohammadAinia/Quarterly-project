import './Add_proplem'
import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Add_proplem = () => {
    const navigate = useNavigate()

    const [Name, setName] = useState('')
    const [Text, setText] = useState('')
    const [Type, setType] = useState('')



    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {

        e.preventDefault()
        axios.post('http://localhost:3001/problim/add_problim', { Name , Text , Type})
            .then(res => {
                if (res.data.valid) {
                    alert("Published successfully")
                    window.location.reload()

                }
                else {
                    alert('Not published')
                }
            })
            .catch(err => { console.log(err) })
    }
    return (
        <>
            <section className="contact" id="contact">

                <h2 className="heading">Do you have a problem ?</h2>

                <form onSubmit={handleSubmit}>
                    <div className="t1">
                        
                        <select style={{
                            "height": "30px", "width": "20%", "outline": "none",
                            "font-size": "13px", "border-radius": "5px", "padding-left": "15px","margin-bottom": "8px",
                            "border": "1px solid #ccc", "border-color": "#f18221", "border-bottom-width": "2px", "transition": "all 0.3s ease"
                        }} required onChange={e => setType(e.target.value)}>
                                <option value={"cat"} >Cat</option>
                                <option value={"dog"}>Dog</option>
                                <option value={"fish"}>Fish</option>
                                <option value={"birds"}>Birds</option>
                                <option value={"reptile"}>reptile</option>

                        </select>
                    </div>

                    <textarea onChange={e => setName(e.target.value)} style={{
                        "height": "40px", "width": "30%", "outline": "none",
                        "font-size": "13px", "border-radius": "5px", "padding-left": "15px",
                        "border": "1px solid #ccc", "border-color": "#f18221", "border-bottom-width": "2px", "transition": "all 0.3s ease"
                    }} placeholder="                  Title of the problem" required />

                    <div>
                        <textarea onChange={e => setText(e.target.value)} style={{
                            "height": "80px", "width": "50%", "outline": "none",
                            "font-size": "16px", "border-radius": "5px", "padding-left": "15px",
                            "border": "1px solid #ccc", "border-color": "#f18221", "border-bottom-width": "2px", "transition": "all 0.3s ease"
                        }} placeholder=" proplem" required /></div>

                    <div>
                        <button  className="btn">share</button><br/>
                        <a href='/my_problem' className="btn">my problem</a>

                    </div>

                </form>

            </section>
        </>
    )
}

export default Add_proplem
