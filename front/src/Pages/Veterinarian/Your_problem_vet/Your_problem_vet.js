import './Your_problem_vet.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Your_prob, Header } from '../../../Componets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse, faMessage, faUserDoctor, faStethoscope } from '@fortawesome/free-solid-svg-icons'

const Your_problem_vet = () => {
    const navigate = useNavigate()
    const [Info, setInfo] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3001/problim/show_my_pob', { withCredentials: true })
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
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_vete"} a2={"FAQs"} href3={"/all_follow"} a3={"All Follow"} href4={"/Forum_vet"} a4={"Forum"} href6={"/Notifications_vet"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile_vet"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"Home_vet"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <section className="pricing" id="pricing" style={{ "margin-top": "00px" }}>
                <h2 className="heading" style={{ "margin-left": "90px" }}>Forum</h2>

                <div className="box-container" style={{ "width": "600px" }}>
                    {Info.map((user, i) => {
                        return (
                            <div key={i}>
                                <Your_prob name={user.title} text={user.disc} type={user.animal_type} id1={user.id} id2={user.id} />
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Your_problem_vet
