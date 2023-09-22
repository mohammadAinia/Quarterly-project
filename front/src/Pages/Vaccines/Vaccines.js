import './Vaccines.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import React, { useState } from 'react'
import { Header } from '../../Componets'

const Vaccines = () => {

    const navigate = useNavigate()

    const [Name_vaccines, setName_vaccines] = useState('')
    const [Vaccine_history, setVaccine_history] = useState('')
    

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/user/#', { Name_vaccines, Vaccine_history })
            .then(res => {
                if (res.data.valid) {
                    navigate('/')
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
                <div className="title">Add Vaccines</div>
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="user-details">

                            <div className="input-box">
                                <span className="details">Name Vaccines *</span>
                                <select name="Vaccines" id="cars" required onChange={e => setName_vaccines(e.target.value)}>
                                    <optgroup label="Cat">
                                        <option value="quadruple vaccination">quadruple vaccination</option>
                                        <option value="Rabies vaccination">Rabies vaccination</option>
                                    </optgroup>
                                    <optgroup label="Dog">
                                        <option value="Quadruple vaccination">Quadruple vaccination</option>
                                        <option value="Coronavirus vaccination">Coronavirus vaccination</option>
                                    </optgroup>
                                </select>
                            </div>

                            <div className="input-box">
                                <span className="details">Vaccine history *</span>
                                <input type="date" required onChange={e => setVaccine_history(e.target.value)} />
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

export default Vaccines
