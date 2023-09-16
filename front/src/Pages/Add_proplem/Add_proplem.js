import './Add_proplem.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import React, { useState } from 'react'
import { Header } from '../../Componets'

const Add_proplem = () => {

    const navigate = useNavigate()

    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/user/add_proplem', { Title, Description })
            .then(res => {
                if (res.data.valid) {
                    alert("Added successfully")
                }
                else {
                    alert('err')
                }
            })
            .catch(err => { console.log(err) })
    }
    return (
        <>
            <Header href1={"/Animal"} a1={"Animal"} href2={"#"} a2={"Adopt Animal"} href3={"/Proplem_veterianarian"} a3={"Common Problems"} href4={"/Add_Animal"} a4={"Add Animal"} href5={"/login_out"} a5={"Login Out"} />

            <div className="container">
                <div className="title">Add Proplem</div>
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="user-details">

                            <div className="input-box">
                                <span className="details">Title of the problem *</span>
                                <input type="text" required onChange={e => setTitle(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">Description problem *</span>
                                <input type="text" required onChange={e => setDescription(e.target.value)} />
                            </div>
                        </div>
                        <div className="button">
                            <button >Add</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    )
}

export default Add_proplem
