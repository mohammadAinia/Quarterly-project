import './Add_doctor_shift.css'
import React from 'react'
import { Componets_Add_doctor_shift } from '../../../../Componets'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Add_doctor_shift = () => {

    const navigate = useNavigate()
    const [Info, setInfo] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3001/clinic/show_under', { withCredentials: true })
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
                                <Componets_Add_doctor_shift href={`Add_doctor_shift_time/${d.id}`} name={d.first_name} age={d.age} email={d.email}  />
                            </div>
                        )
                    })}
                    <Componets_Add_doctor_shift name={""} age={""} email={''} href={`Add_doctor_shift_time/${5}`}/>
                    
                </div>
            </div>
        </>

    )
}

export default Add_doctor_shift