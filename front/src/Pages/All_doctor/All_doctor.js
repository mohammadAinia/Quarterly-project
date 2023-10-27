import './All_doctor.css'
import { Header, All_doc } from '../../Componets'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const All_doctor = () => {

    const navigate = useNavigate()
    const [Info, setInfo] = useState([])
    const [Old_chat, setOld_chat] = useState([])


    useEffect(() => {

        axios.get('http://localhost:3001/vet/show_all_vet', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setInfo(res.data.result)
                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })
    }, [])
    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"Common Problems"} href5={"/Search_type"} a5={<FontAwesomeIcon icon={faMagnifyingGlass} />} href3={"/Animal_infoo"} a3={"All Animal"} href4={"/All_problem"} a4={"Ploblems"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/#"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <section style={{ "backgroundColor": "#f5f5f5", "margin-top": "0px" }} class="cards contact" id="contact">
                <h2 className="titlee">All vets</h2>

                <div class="content">
                    {Info.map((d, i) => {
                        return (
                            <div key={i}>
                                <All_doc name={d.first_name} id={d.id} />
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default All_doctor
