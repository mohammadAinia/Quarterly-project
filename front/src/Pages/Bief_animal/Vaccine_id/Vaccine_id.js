import './Vaccine_id.css'
import { Header, Your_animal_vaccines } from '../../../Componets/index'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse ,faMessage ,faUserDoctor,faStethoscope} from '@fortawesome/free-solid-svg-icons'


const Vaccine_id = () => {
    const navigate = useNavigate()
    const [Info, setInfo] = useState([])
    const { id } = useParams()

    useEffect(() => {

        axios.get(`http://localhost:3001/animal/show_all_vac/${id}`, { withCredentials: true })
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
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <div >
                <div class="container" style={{ "margin-bottom": "50px","margin-top":"230px" }}>
                    <div class="title">Vaccine</div>

                    {Info.map((d, i) => {
                        return (
                            <div key={i}>
                                <Your_animal_vaccines vaccines={d.name_vacc} vaccine_date={d.date_take_vac} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Vaccine_id
