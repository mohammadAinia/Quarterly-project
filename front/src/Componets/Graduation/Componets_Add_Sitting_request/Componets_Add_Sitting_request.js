import './Componets_Add_Sitting_request.css'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';


const Componets_Add_Sitting_request = () => {

    const navigate = useNavigate();

    const [MyAnimals, setMyAnimals] = useState([])
    const [Chosen_animal, setChosen_animal] = useState('')
    const [Fare, setFare] = useState('')
    const [DateFrom, setDateFrom] = useState('')
    const [DateTo, setDateTo] = useState('')




    useEffect(() => {

        axios.get('http://localhost:3001/sitting/show_my_animals', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setMyAnimals(res.data.result)
                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })
    }, [])


    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault();


        axios.post('http://localhost:3001/sitting/add_new_animal', {Chosen_animal, Fare, DateFrom, DateTo})
            .then(res => {
                if (res.data.valid) {
                    // alert('The request has been added successfully')
                    // navigate(-1)
                    Swal.fire({
                        title: "Good job!",
                        text: "The request has been added successfully",
                        icon: "success",
                        customClass: {
                            container: 'enlarged-alert-container',
                            popup: 'enlarged-alert-popup',
                            title: 'enlarged-alert-title',
                            htmlContainer: 'enlarged-alert-html-container',
                            confirmButton: 'enlarged-alert-confirm-button',
                        },
                        position: 'center',
                        backdrop: false,
                    }).then(() => {
                        navigate(-1);
                    });

                }
            })
            .catch(err => alert(err))
    }
    const today = new Date().toISOString().split('T')[0]; // Get today's date

    return (
        <>
            <form onSubmit={handleSubmit} enctype="multipart/form-data">

                <div class="user-details">

                    <div class="input-box">
                        {/* <span class="details" style={{ "margin-left": "280px", "width": "200px" }}> {Saturday_From + ' ' + Saturday_To}</span> */}
                    </div>
                    <div class="input-box">
                    </div>
                    <div class="input-box">
                        <span class="details">Choose Animal *</span>
                        <select name="brand" id="cars" required onChange={e => setChosen_animal(e.target.value)}>
                        <option  value='' ></option>
                            {MyAnimals.map((user, i) => {
                                return (
                                    <option key={i} value={user.id} >{user.name}</option>
                                )
                            })}
                        </select>

                    </div>

                    <div className="input-box">
                        <span className="details">Fare $ *</span>
                        <input
                            required
                            type='number'
                            onChange={(e) => setFare(e.target.value)}
                        />
                    </div>

                    <div class="input-box">
                        <span class="details">From *</span>
                        <input
                            required
                            type='date'
                            min={today} // Set min attribute to today's date
                            value={DateFrom}
                            onChange={(e) => setDateFrom(e.target.value)}
                        />

                    </div>
                    <div class="input-box">
                        <span class="details">To *</span>
                        <input
                            required
                            type='date'
                            min={DateFrom} // Set min attribute to DateFrom value
                            value={DateTo}
                            onChange={(e) => setDateTo(e.target.value)}
                        />

                    </div>
                </div>

                <div class="button">
                    <button>Add</button>
                </div>

            </form>
        </>
    )
}

export default Componets_Add_Sitting_request