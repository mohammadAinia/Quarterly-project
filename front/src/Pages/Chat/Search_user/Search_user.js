import './Search_user.css'
import { Header, Profilee } from '../../../Componets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Search_user = () => {

    const navigate = useNavigate()
    const [Type, setType] = useState('')

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        // alert(Type)
        navigate(`/search_result/${Type}`)

    }
    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <div class="container">
                <div class="title">Search</div>
                <div class="content"  style={{ "width": "300px" }}>
                    <form onSubmit={handleSubmit}>
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details">type </span>
                                <select style={{ "width": "250px" }}  name="type" idd="animal" required onChange={e => setType(e.target.value)} >
                                    <option value={""} ></option>
                                    <option value={"cat"} >Cat</option>
                                    <option value={"dog"} >Dog</option>
                                    <option value={"bird"} >Bird</option>
                                    <option value={"reptile"} >Reptile</option>
                                </select>
                            </div>
                        </div>
                        <div class="button">
                            <button>search</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
export default Search_user
