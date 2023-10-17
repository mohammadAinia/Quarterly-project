import './Vaccine_id.css'
import { Header, Your_animal_vaccines } from '../../../Componets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Vaccine_id = () => {
    const navigate = useNavigate()
    const [Info, setInfo] = useState([])
    const { id } = useParams()

    useEffect(() => {

        axios.get(`http://localhost:3001/#/#/${id}`, { withCredentials: true })
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
            <div >
                <div class="container" style={{ "margin-bottom": "50px" }}>
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
