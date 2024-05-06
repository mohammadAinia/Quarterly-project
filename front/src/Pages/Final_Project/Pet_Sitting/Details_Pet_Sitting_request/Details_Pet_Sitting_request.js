import './Details_Pet_Sitting_request.css'
import store_Ellipse_108 from '../../../../Assert/Images/store_Ellipse_108.png'
import Sitting_Line_27 from '../../../../Assert/Images/Sitting_Line_27.png'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlus, faRightFromBracket, faRightToBracket, faPaw, faStoreSlash, faCoins, faFaceSmileWink, faBolt, faSearch,
    faClock, faArrowsRotate, faComments, faHandHoldingHeart, faHouseCircleCheck,
    faUsers, faArrowRightArrowLeft, faPaperPlane, faLocationDot, faHouse, faBell, faMessage, faUserDoctor, faStethoscope
} from '@fortawesome/free-solid-svg-icons'

import React from 'react'



const Details_Pet_Sitting_request = () => {
    const { id } = useParams()

    const navigate = useNavigate()
    const [Request_sitting_Info, setRequest_sitting_Info] = useState([])
    const [Yes, setYes] = useState("yes")


    useEffect(() => {
        axios.get(`http://localhost:3001/sitting/show_det/${id}`, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setRequest_sitting_Info(res.data.result);
                }
                else {
                    navigate("/login")
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3001/sitting/check_set/${id}`)
            .then(res => {
                if (res.data.valid) {
                    alert('Added successfully')
                    navigate(-1)
                }
                else {
                    alert('you have to login first ')
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })
    }
    return (

        <>
            <body>
                <div class="details-animal">
                    <div class="overlap-group-wrapper">
                        <div class="overlap-group">

                            <div class="rectangle"></div>
                            <div class="div"></div>
                            {/* معلومات الحيوان */}
                            {
                                Request_sitting_Info.map((user, i) => (
                                    <>
                                        <div class="text-wrapper">Animal details</div>
                                        <img class="ellipse" src={`http://localhost:3001/uploads/${user.urlImage}`} />
                                        <div class="text-wrapper-3">Name : {user.name}</div>
                                        <div class="text-wrapper-5">Age : {user.age.substring(0,10)}</div>
                                        <div class="text-wrapper-7">Place : {user.place}</div>
                                        <div class="text-wrapper-9">Gender : {user.gender}</div>
                                        <div class="text-wrapper-10">weight : {user.weight}</div>
                                        <div class="text-wrapper-11">Health : {user.health_stats}</div>

                                        {/* معلومات المالك */}
                                        <div class="text-wrapper-2">Owner details</div>
                                        <div class="text-wrapper-4">Name : {user.first_name+' '+user.last_name}</div>
                                        <div class="text-wrapper-6">Email : {user.email}</div>
                                        <div class="text-wrapper-8">Phone : {user.phone}</div>

                                        <div class="text-wrapper-13">Fare : {user.Service_price}$</div>
                                        <div class="text-wrapper-14">From : {user.date_from}</div>
                                        <div class="text-wrapper-15">To : {user.date_to}</div>
                                    </>
                                ))
                            }
                            {/* <div class="text-wrapper">Animal details</div>
                            <img class="ellipse" src={store_Ellipse_108} />
                            <div class="text-wrapper-3">Name : voov</div>
                            <div class="text-wrapper-5">Age : 23month</div>
                            <div class="text-wrapper-7">Place : AlNabek</div>
                            <div class="text-wrapper-9">Gender : Male</div>
                            <div class="text-wrapper-10">weight : 34kg</div>
                            <div class="text-wrapper-11">Health : Good</div> */}

                            {/* معلومات المالك */}
                            {/* <div class="text-wrapper-2">Owner details</div>
                            <div class="text-wrapper-4">Name : voov</div>
                            <div class="text-wrapper-6">Email : AhmedKhalid@gmail.com</div>
                            <div class="text-wrapper-8">Phone : 0992288581</div>

                            <div class="text-wrapper-13">Fare : 50$</div>
                            <div class="text-wrapper-14">From : 2024/4/30</div>
                            <div class="text-wrapper-15">To : 2024/5/15</div> */}

                            <button onClick={handleSubmit} class="frame"><div class="text-wrapper-12">Confirmation</div></button>

                            <img class="line" src={Sitting_Line_27} />
                            <img class="img" src={Sitting_Line_27} />
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Details_Pet_Sitting_request