import './Animal_info_id_follow.css'
import { All_follow, Header } from '../../../Componets/index'
import { useNavigate ,useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import a from '../../../Assert/Images/main.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faRightFromBracket, faHouse } from '@fortawesome/free-solid-svg-icons'

const Animal_info_id_follow = () => {

    const navigate = useNavigate()
    const [Info, setInfo] = useState([])
    const { id } = useParams()


    useEffect(() => {

        axios.get(`http://localhost:3001/#/#${id}`, { withCredentials: true })
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
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_vete"} a2={"FAQs"} href3={"/all_follow"} a3={"All Follow"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"Home_vet"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <div style={{ "margin-top": "300px", "margin-bottom": "20px" }}>
                {Info.map((d, i) => {
                    return (
                        <div key={i}>
                            <All_follow name={d.name} age={d.age} place={d.place} color={d.color} details={d.Additional_details}
                                type={d.type} gender={d.gender} weight={d.weight} height={d.high} health={d.health_stats} id2={d.animal_id} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Animal_info_id_follow
