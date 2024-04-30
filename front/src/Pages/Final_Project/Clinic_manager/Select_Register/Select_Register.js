import './Select_Register.css'
import React from 'react'
import { Componets_Select_Register } from '../../../../Componets'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Select_Register = () => {

    const navigate = useNavigate()
    const [Info, setInfo] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3001/clinic/showall_without_clinc', { withCredentials: true })
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
                                <Componets_Select_Register name={d.first_name} age={(d.age).substring(0,10)} email={d.email} id={d.id} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>

    )
}

export default Select_Register