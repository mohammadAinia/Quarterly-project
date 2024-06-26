import './Page_chat.css'
import { Header, Notification, Page_chatt } from '../../../Componets'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Page_chat = () => {

    const navigate = useNavigate()
    const [Info, setInfo] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3001/chat/show_chats', { withCredentials: true })
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
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href5={"/Search_type"} a5={<FontAwesomeIcon icon={faMagnifyingGlass} />} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <section style={{ "backgroundColor": "#f5f5f5", "margin-top": "0px" }} class="cards contact" id="contact">
                <h2 style={{ "width": "780px", }} className="titlee">Message Box</h2>

                <div style={{ "margin-left": "30px", }} class="content">
                    {Info.map((d, i) => {
                        return (
                            <div key={i}>
                                <Page_chatt name={d.first_name} href_link1={`/NewChat/${d.chat_id}`} name_link1={"send"} id={d.chat_id} href_link2={`/profile_id/${d.chat_id}`} name_link2={"Profile"}/>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Page_chat
