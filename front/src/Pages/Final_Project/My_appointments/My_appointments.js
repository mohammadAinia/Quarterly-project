import { Componets_My_appointments } from '../../../Componets'
import './My_appointments.css'
import { Card, Bunner, Problems, Header, SectionHeader, Animal_info, Button, Add_proplem } from '../../../Componets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse, faMessage, faUserDoctor, faStethoscope } from '@fortawesome/free-solid-svg-icons'
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
            <Header href12={"/Pet_Sitting"} a12={"Pet Sitting"} href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href5={"/Add_Animal"} a5={<FontAwesomeIcon icon={faPlus} />} href6={"all_doc"} a6={<FontAwesomeIcon icon={faStethoscope} />} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href7={"/chat"} a7={<FontAwesomeIcon icon={faMessage} />} href8={"/Notifications"} a8={"Notifications"} href9={"/profile"} a9={"profile"} href10={"/"} a10={<FontAwesomeIcon icon={faHouse} />} href11={"My_appointments"} a11={"My appointments"} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

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