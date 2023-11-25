import './Conversation.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header, Conversation_sender, Conversation_receive } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const Conversation = () => {
    const navigate = useNavigate()

    const { id } = useParams()

    const [Name, setName] = useState('')
    const [Session_id, setSession_id] = useState('')
    const [Info, setInfo] = useState([])
    const [Message, setMessage] = useState('')

    useEffect(() => {

        axios.get(`http://localhost:3001/chat/open_chat/${id}`, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setName(res.data.name)
                    setSession_id(res.data.idd)
                    setInfo(res.data.result2)
                }
                else alert("err")
            })
            .catch(err => { alert(err) })
    }, [])

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()

        axios.post(`http://localhost:3001/chat/send_message/${id}`, { Message })
            .then(res => {
                if (res.data.valid) {
                    window.location.reload()
                }
            }
            )
            .catch(err => alert(err))
    }
    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <form style={{"margin-top" : "80px"}} onSubmit={handleSubmit}>
                <div class="--dark-theme" id="chat">
                    <div class="chat__conversation-board">

                        <h3 className='m'>{Name}</h3>
                        <h2 className='mm'></h2>
                        <br />
                        {Info.map((d, i) => {
                            if (d.chat_id === Session_id) {
                                return (
                                    <div key={i}>
                                        <Conversation_sender sender={d.message} />
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div key={i}>
                                        <Conversation_receive receive={d.message} />
                                    </div>
                                )
                            }
                        })}
                    </div>

                    <div class="chat__conversation-panel">
                        <div class="chat__conversation-panel__container">

                            <input class="chat__conversation-panel__input panel-item" type='text' placeholder="Type a message..." onChange={e => setMessage(e.target.value)} />
                            <button class="chat__conversation-panel__button panel-item btn-icon send-message-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="1036">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </form>
        </>
    )
}

export default Conversation