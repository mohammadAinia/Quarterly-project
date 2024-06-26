import './Search_result_vet.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header, Page_new_chat } from '../../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'

const Search_result_vet = () => {

    const { Type } = useParams()
    const [Info, setInfo] = useState([])

    useEffect(() => {

        axios.get(`http://localhost:3001/chat/search_vet/${Type}`, { withCredentials: true })
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
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_vete"} a2={"FAQs"} href3={"/all_follow"} a3={"All Follow"} href4={"/Forum_vet"} a4={"Forum"} href6={"/Notifications_vet"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile_vet"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"Home_vet"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <section style={{ "backgroundColor": "#f5f5f5", "margin-top": "0px" }} class="cards contact" id="contact">
                <h2 style={{ "width": "380px", }} className="titlee">New message</h2>

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

export default Search_result_vet
