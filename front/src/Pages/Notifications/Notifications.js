import './Notifications.css'
import { Header, Notification } from '../../Componets'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'

const Notifications = () => {

    const navigate = useNavigate()
    const [Info, setInfo] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3001/noti/notifications',{ withCredentials: true })
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
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"Common Problems"} href5={"/Add_Animal"} a5={<FontAwesomeIcon icon={faPlus} />} href3={"/Animal_infoo"} a3={"All Animal"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/#"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <section style={{ "backgroundColor": "#f5f5f5" , "margin-top":"600px" }} class="cards contact" id="contact">
                <h2 class="titlee">Notifications</h2>

                <div class="content">
                    {Info.map((d,i) => {
                        return (
                            <div key={i}>
                                <Notification title={d.title} text={d.details} id={d.id_notification} />
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Notifications