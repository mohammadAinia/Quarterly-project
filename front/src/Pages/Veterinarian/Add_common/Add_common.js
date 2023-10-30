import './Add_common.css'
import { Header, Profilee } from '../../../Componets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faRightFromBracket, faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Add_common = () => {

    const navigate = useNavigate()
    const [Title, setTitle] = useState('')
    const [Details, setDetails] = useState('')
    const [Type, setType] = useState('')




    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()

        axios.post('http://localhost:3001/co_problim/add_common', { Title, Details, Type })
            .then(res => {
                if (res.data.valid) {
                    alert('Added successfully')
                    navigate('/common_vete')
                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => alert(err))

    }

    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href5={"/Add_Animal"} a5={<FontAwesomeIcon icon={faPlus} />} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/#"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <div class="container">
                <div class="title">Add</div>
                <div class="content" style={{ "width": "450px" }}>
                    <form onSubmit={handleSubmit}>
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details">Title </span>
                                <input type="text" required onChange={e => setTitle(e.target.value)} />
                            </div>
                            <div class="input-box">
                                <span class="details">type </span>
                                <select style={{ "width": "200px" }} name="type" idd="animal" required onChange={e => setType(e.target.value)} >
                                    <option value={"cat"} >Cat</option>
                                    <option value={"dog"} >Dog</option>
                                    <option value={"bird"} >Bird</option>
                                    <option value={"reptile"} >Reptile</option>
                                </select>
                            </div>
                            <div class="input-box">
                                <span class="details">Details </span>
                                <input style={{ "width": "440px" }} type="text" required onChange={e => setDetails(e.target.value)} />
                            </div>
                        </div>
                        <div class="button">
                            <button>Add</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Add_common
