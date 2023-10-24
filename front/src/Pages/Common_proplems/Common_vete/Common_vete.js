import './Common_vete.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Button, Common_proplem, Header } from '../../../Componets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse, faMessage } from '@fortawesome/free-solid-svg-icons'

const Common_vete = () => {
    const [Proplems, setProplems] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        axios.get('http://localhost:3001/co_problim/show_all_com', { withCredentials: true })
            .then(res => {
                setProplems(res.data)

            })
            .catch(err => { console.log(err) })
    },
        [])
    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"Common Problems"} href5={"/Add_problem"} a5={<FontAwesomeIcon icon={faPlus} />} href3={"/Animal_infoo"} a3={"All Animal"} href4={"/All_problem"} a4={"Ploblems"} href6={"/chat"} a6={<FontAwesomeIcon icon={faMessage} />} href7={"/Notifications"} a7={<FontAwesomeIcon icon={faBell} />} href8={"/profile"} a8={<div id="login-btn" className="fas fa-user"></div>} href9={"/"} a9={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />
            <section className="pricing" id="pricing" style={{ "margin-top":"3500px"}}>

                <h2 className="heading" style={{ "margin-left":"100px"}}>Common Proplem</h2>

                <div className="box-container" style={{ "width":"600px" }}>

                    {Proplems.map((i, d) => {
                        return (
                            <div key={d}>

                                <Common_proplem type={i.animal_type} name={i.title} detals={i.disc} />

                            </div>
                        )
                    })}
                </div>

            </section>
        </>
    )
}

export default Common_vete
