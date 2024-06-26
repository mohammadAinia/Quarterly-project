import './Search_result.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header, Page_new_chat } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'

const Search_result = () => {

    const { Type } = useParams()
    const [Info, setInfo] = useState([])

    useEffect(() => {

        axios.get(`http://localhost:3001/chat/search_user/${Type}`, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setInfo(res.data.result)
                }
                else alert("err")
            })
            .catch(err => { alert(err) })

    }, [])

    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <section style={{ "backgroundColor": "#f5f5f5", "margin-top": "0px" }} class="cards contact" id="contact">
                <h2 style={{ "width": "700px", }} className="titlee">New message</h2>

                <div class="content">
                    {Info.map((d, i) => {
                        return (
                            <div key={i}>
                                <Page_new_chat name={d.first_name} id={d.id} />
                            </div>
                        )
                    })}
                </div>
            </section>

        </>
    )
}

export default Search_result
