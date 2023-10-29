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

        axios.get(`http://localhost:3001/#/#/${id}`, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setVaccines(res.data.resultt)
                }
                else navigate('/login')

            })
            .catch(err => { console.log(err) })
    }, [])
    return (
        <>
              <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"Common Problems"} href5={"add_vaci"} a5={<FontAwesomeIcon icon={faPlus} />} href6={"all_doc"} a6={<FontAwesomeIcon icon={faStethoscope} />} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href7={"/chat"} a7={<FontAwesomeIcon icon={faMessage} />} href8={"/Notifications"} a8={<FontAwesomeIcon icon={faBell} />} href9={"/profile"} a9={<div id="login-btn" className="fas fa-user"></div>} href10={"/"} a10={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <div>
                <div className="container" style={{ "margin-top": "50px", "margin-bottom": "70px", "margin-left": "90px" }}>
                    <div className="title">All Vaccine</div>
                    <div className="content">
                        <form action="#" >
                            <div className="user-details">
                            <All_vaccine text={"hekwkw"} />
                            <All_vaccine text={"wkndfef"} />
                            <All_vaccine text={"fknjwkf"} />

                                {Vaccine.map((user, i) => {
                                    return (
                                        <div key={i}>
                                            <All_vaccine text={user.answer} />
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
