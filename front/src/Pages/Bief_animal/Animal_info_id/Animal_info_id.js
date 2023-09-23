import './Animal_info_id.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header, About_your_animal, Your_animal_vaccines } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'

const Animal_info_id = () => {
    const navigate = useNavigate()


    const [Name, setName] = useState('')
    const { id } = useParams()
    const [Info, setInfo] = useState([])


    useEffect(() => {

        axios.get(`http://localhost:3001/animal/show_animal_id/${id}`, { withCredentials: true })
            .then(res => {
                if (res.data) {
                    setInfo(res.data)
                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })
    }, [])
    return (
        <>
            <Header href1={"/Animal"} a1={"Animal"} href3={"#"} a3={"Common Problems"} href2={"#"} a2={"Adopt Animal"} href4={"/login"} a4={"Login"} />
            {Info.map((d, i) => {
                return (
                    <div key={i}>
                        <About_your_animal name={d.name} age={d.age} place={d.place} color={d.color} details={d.Additional_details}
                            type={d.type} gender={d.gender} weight={d.weight} height={d.high} health={d.health_stats} id={d.id} id2={d.animal_id} />

                        <Your_animal_vaccines vaccines={d.vacc_info_id} vaccine_date={d.date_take_vac} />
                    </div>
                )
            })}
        </>
    )
}

export default Animal_info_id
