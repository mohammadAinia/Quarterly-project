import './Verification.css'
import { Header, Profilee } from '../../Componets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Verification = () => {

    const navigate = useNavigate()
    const [Password, setPassword] = useState('')


    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {

        e.preventDefault()
        axios.post('http://localhost:3001/user/check_password', {Password})
            .then(res => {
                if (res.data.valid) {
                    navigate(`/update_userr/${Password}`)
                }
                else {
                    alert('The password is incorrect')
                }
            })
            .catch(err => alert(err))
    }
    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"Common Problems"} href5={"/Add_Animal"} a5={<FontAwesomeIcon icon={faPlus} />} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <div class="container">
                <div class="title">Enter Password</div>
                <div class="content">
                    <form onSubmit={handleSubmit}>
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details"></span>
                                <input style={{ "width": "320px" }} type="password" onChange={e => setPassword(e.target.value)} required />
                            </div>
                        </div>
                        <div class="button">
                            <button>send</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Verification
