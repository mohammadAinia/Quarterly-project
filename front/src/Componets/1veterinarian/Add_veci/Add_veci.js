import './Add_veci.css'
import axios from 'axios'
import { useState } from 'react'
import { Header } from '../..'
import { useNavigate } from 'react-router-dom'

const Add_veci = () => {

    const navigate = useNavigate()

    const [Name, setName] = useState('')
    const [Type, setType] = useState('')
    const [Description, setDescription] = useState('')
    const [Number_of_doses, setNumber_of_doses] = useState('')
    const [Minage, setMinage] = useState('')
    const [Maxage, setMaxage] = useState('')


    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {

        e.preventDefault()

        axios.post('http://localhost:3001/#/#', { Name, Type, Minage, Maxage, Description, Number_of_doses })
            .then(res => {
                if (res.data.valid) {
                    alert('The vaccine was added successfully')
                }
                else {
                    alert('EROR')
                }
            })
            .catch(err => alert(err))
    }
    return (
        <>
            <form action="#" onSubmit={handleSubmit} enctype="multipart/form-data">
                <div class="user-details">
                    <div class="input-box">
                        <span class="details">name *</span>
                        <input type="text" required onChange={e => setName(e.target.value)} />
                    </div>
                    <div class="input-box">
                        <span class="details">Description *</span>
                        <input type="text" required onChange={e => setDescription(e.target.value)} />
                    </div>
                    <div class="input-box">
                        <span class="details">Min Age *</span>
                        <input type="number" placeholder='num month' required onChange={e => setMinage(e.target.value)} />
                    </div>
                    <div class="input-box">
                        <span class="details">Max Age *</span>
                        <input type="number" placeholder='num month' required onChange={e => setMaxage(e.target.value)} />
                    </div>
                    <div class="input-box">
                        <span class="details">Number of doses *</span>
                        <input type="number" required onChange={e => setNumber_of_doses(e.target.value)} />
                    </div>

                    <div class="input-box">
                        <span class="details">type Animal</span>
                        <select name="type" idd="animal" required onChange={e => setType(e.target.value)}>
                            <option value={"cat"} >Cat</option>
                            <option value={"dog"} >Dog</option>
                            <option value={"bird"} >Bird</option>
                            <option value={"reptile"} >Reptile</option>
                        </select>
                    </div>

                </div>
                <div class="button">
                    <button>Add</button>
                </div>
            </form>
        </>
    )
}

export default Add_veci
