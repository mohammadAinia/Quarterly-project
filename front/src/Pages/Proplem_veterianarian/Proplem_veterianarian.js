import './Proplem_veterianarian.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Button, Common_proplem, Header } from '../../Componets'

const Proplem_veterianarian = () => {
    const [Proplems, setProplems] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        axios.get('http://localhost:3001/user/proplem')
            .then(res => {
                setProplems(res.data)

            })
            .catch(err => { console.log(err) })
    },
        [])
    return (
        <>
            <Header href1={"/Animal"} a1={"Animal"} href2={"#"} a2={"Adopt Animal"} href3={"/Proplem_veterianarian"} a3={"Common Problems"} href4={"/Add_Animal"} a4={"Add Animal"} href5={"/login_out"} a5={"Login Out"} />
            <Button href="/Add_proplem" value="Add Proplem" />
            <div class="box-container">

                {Proplems.map(i => {
                    <div key={i.Proplem.id}>

                        <Common_proplem name={i.name} detals={i.detals} a="Answer" />

                    </div>
                })}

            </div>
        </>
    )
}

export default Proplem_veterianarian
