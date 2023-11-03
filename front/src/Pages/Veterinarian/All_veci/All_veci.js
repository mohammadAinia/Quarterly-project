import './All_veci.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header, Problems, All_vaccine } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse ,faMessage ,faUserDoctor,faStethoscope} from '@fortawesome/free-solid-svg-icons'

const All_veci = () => {

    const [Vaccine, setVaccines] = useState([])
    const navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {

        axios.get(`http://localhost:3001/vet/showAllV`, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setVaccines(res.data.result)
                }
                else navigate('/login')

            })
            .catch(err => { console.log(err) })
    }, [])
    return (
        <>
              <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_vete"} a2={"FAQs"} href5={"add_vaci"} a5={<FontAwesomeIcon icon={faPlus} />} href3={"/all_follow"} a3={"All Follow"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"Home_vet"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <div>
                <div className="container" style={{ "margin-top": "50px", "margin-bottom": "70px", "margin-left": "90px" }}>
                    <div className="title">All Vaccine</div>
                    <div className="content">
                        <form action="#" >
                            <div className="user-details">
                                {Vaccine.map((user, i) => {
                                    return (
                                        <div key={i}>
                                            <All_vaccine text={user.name_vacc} />
                                        </div>
                                    )
                                })}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default All_veci
