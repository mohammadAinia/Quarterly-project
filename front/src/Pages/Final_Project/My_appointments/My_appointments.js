import { Componets_My_appointments } from '../../../Componets'
import './My_appointments.css'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'

const My_appointments = () => {

    const [Info, setInfo] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/clinic/show_next_appointment', { withCredentials: true })
            .then(res => {
                setInfo(res.data.result);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <div class="frame_My_appointments">
                <div class="div">
                    <div className="appointments-container">
                        {Info.map((d, i) => (
                            <Componets_My_appointments
                                key={i}
                                Type={d.service}
                                clinic={d.c_name}
                                vet={d.first_name}
                                animal={d.name}
                                date={d.datebooking}
                                time={d.timebookig}
                            />
                        ))}
                    </div>
                </div>
                <div class="text-wrapper-13">My appointments</div>
            </div>
        </>

    )
}

export default My_appointments