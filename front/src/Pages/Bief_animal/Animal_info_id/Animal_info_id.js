import './Animal_info_id.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header ,About_your_animal} from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'

const Animal_info_id = () => {
    const navigate = useNavigate()


    const [Name, setName] = useState('')
    const { id } = useParams()
    const [Info, setInfo] = useState([])


    useEffect(() => {

        axios.get('http://localhost:3001/animal/' + id)
            .then(res => {
                setInfo(res.data)
            })
            .catch(err => { console.log(err) })
    }, [])
    return (
        <>
            <Header href1={"/Animal"} a1={"Animal"} href3={"#"} a3={"Common Problems"} href2={"#"} a2={"Adopt Animal"} href4={"/login"} a4={"Login"} />
            {Info.map((d, i) => {
                return (
                    <div key={i}>
                        <About_your_animal name={d.name} id={d.id} id2={d.id} />
                    </div>
                )
            })}
        </>
    )
}

export default Animal_info_id
