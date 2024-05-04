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
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"common_vete"} a2={"FAQs"} href3={"/all_follow"} a3={"All Follow"} href4={"/All_problem"} a4={"Forum"} href5={"Add_problem"} a5={<FontAwesomeIcon icon={faPlus} />} href6={"/Notifications_vet"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile_vet"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"Home_vet"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />
            <section className="pricing" id="pricing" style={{ "margin-top": "00px" }}>

                <h2 className="heading" style={{ "margin-left": "100px" }}>FAQs</h2>

                <div className="box-container" style={{ "width": "600px" }}>

                    {Proplems.map((i, d) => {
                        return (
                            <div key={d}>

                                {/* <Common_proplem type={i.animal_type} name={i.title} detals={i.disc} /> */}
                                <>
                                    <div className="box-containerr2">
                                        <div className="box">
                                            <h2 style={{ "font-size": "24px" }}>{i.animal_type}</h2>
                                            <br />
                                            <h2>{i.title}</h2>
                                            <br />
                                            <p style={{ "font-size": "15px" }}>{i.disc}</p>
                                            {/* <h4 className="price"><a href="/#">{props.a}</a></h4> */}
                                        </div>
                                    </div>
                                </>

                            </div>

                        )
                    })}
                </div>

            </section>
        </>
    )
}

export default Common_vete
