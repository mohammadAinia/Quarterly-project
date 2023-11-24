import './Add_vacci.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Header } from '../../Componets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse ,faMessage ,faUserDoctor,faStethoscope} from '@fortawesome/free-solid-svg-icons'


const Add_vacci = () => {

    const navigate = useNavigate()
    const [Name_vaccines, setName_vaccines] = useState('')
    const [Vaccine_history, setVaccine_history] = useState('')
    const [Info_vaccines, setInfo_vaccines] = useState([])

    const { id } = useParams()


    useEffect(() => {

        axios.get(`http://localhost:3001/animal/get_vacc/${id}`, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {

                    setInfo_vaccines(res.data.result2)

                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })
    }, [])


    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3001/animal/add_vac/${id}`, { Name_vaccines, Vaccine_history })
            .then(res => {
                if (res.data.valid) {
                    alert('Added successfully')
                    navigate(-1)
                }
                else {
                    alert('err')
                }
            })
            .catch(err => { console.log(err) })
    }
    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <div className="container">

                <div className="title">Add Vaccines</div>
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="user-details">

                            <div className="input-box">
                                <span className="details">Name Vaccines *</span>
                                <select name="Vaccines" idd="cars" required onChange={e => setName_vaccines(e.target.value)}>

                                    {Info_vaccines.map((user, i) => {
                                        return (
                                            <option key={i} value={user.id} >{user.name_vacc}</option>
                                        )
                                    })}
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

export default Add_vacci
