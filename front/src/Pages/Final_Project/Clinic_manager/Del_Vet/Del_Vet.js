import './Del_Vet.css'
import React from 'react'
import all_vet_Vector_34 from '../../../../Assert/Images/all_vet_Vector_34.png'
import { Componets_Del_Vet } from '../../../../Componets'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Del_Vet = () => {

    const navigate = useNavigate()
    const [Info, setInfo] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3001/#/#', { withCredentials: true })
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
            <div class="all-vet">
                <div class="frame-wrapper">

                    {Info.map((d, i) => {
                        return (
                            <div key={i}>
                                <Componets_Del_Vet name={d.first_name} age={d.age} email={d.email} id={d.id} />
                            </div>
                        )
                    })}
                    <Componets_Del_Vet name={""} age={""} email={""} id={""} />

                </div>
            </div>
        </>

    )
}

export default Del_Vet