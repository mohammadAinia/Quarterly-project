import './Specific_clinic.css'
import sphand from '../../../Assert/Images/sphand.png'
import sphand2 from '../../../Assert/Images/sphand2.png'
import spVector from '../../../Assert/Images/spVector.png'
import spVector2 from '../../../Assert/Images/spVector2.png'
import spVector3 from '../../../Assert/Images/spVector3.png'
import footer_Vector from '../../../Assert/Images/footer_Vector.png'
import Vectorr from '../../../Assert/Images/Vectorr.png'
import footer_phone from '../../../Assert/Images/footer_phone.png'
import spvector9 from '../../../Assert/Images/spvector9.png'
import spvector10 from '../../../Assert/Images/spvector10.png'
import spvector11 from '../../../Assert/Images/spvector11.png'
import footer_Vector37 from '../../../Assert/Images/footer_Vector37.png'
import footer_Vector_one from '../../../Assert/Images/footer_Vector_one.png'
import footer_Vector_two from '../../../Assert/Images/footer_Vector_two.png'


import { Button, Card, Componets_Specific_clinic, Header, SectionHeader } from '../../../Componets/index'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faRightToBracket, faPaw, faStoreSlash, faCoins, faFaceSmileWink, faBolt, faRightFromBracket,
    faClock, faArrowsRotate, faComments, faHandHoldingHeart, faHouseCircleCheck,
    faUsers, faArrowRightArrowLeft, faPaperPlane, faCheck, faStar, faPlus, faBell, faHouse
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Specific_clinic = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const [Info, setInfo] = useState([])
    const [Clinic_Name, setClinic_Name] = useState('')
    const [Location, setLocation] = useState('')
    const [Phone, setPhone] = useState('')
    const [one, setone] = useState('')
    const [two, settwo] = useState('')
    const [three, setthree] = useState('')





    useEffect(() => {

        axios.get(`http://localhost:3001/clinic/showc/${id}`, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setInfo(res.data.result)
                    setClinic_Name(res.data.result1[0].c_name)
                    setLocation(res.data.result1[0].location+','+res.data.result1[0].det_loc)
                    setPhone(res.data.result1[0].phone)
                    setone(res.data.result1[0].special)
                    settwo(res.data.result1[0].spe1)
                    setthree(res.data.result1[0].spe2)



                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })
    }, [])


    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href5={"/Add_Vets_to_clinic"} a5={<FontAwesomeIcon icon={faPlus} />} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <div class="specific-clinic">
                <div class="div">
                    <div class="overlap-group">
                        <img class="vector" src={spVector} />
                        <img class="img" src={spVector3} />
                        <img class="vector-2" src={sphand} />
                        <img class="vector-3" src={sphand2} />
                    </div>
                    <div class="overlap">
                        <img class="vector-4" src={spVector2} />
                        <p class="your-pet-s-health-is">&nbsp;&nbsp; Your Pet&#39;s Health is Our Top Priority</p>
                        <div class="texxxt-wrapper"><FontAwesomeIcon icon={faStar} /></div><p class="text-wrapper">{one}</p>
                        <div class="texxt-wrapper"><FontAwesomeIcon icon={faStar} /></div><p class="state-of-the-art">{two}</p>
                        <div class="texxxxxt-wrapper"><FontAwesomeIcon icon={faStar} /></div><p class="your-pet-s-wellness">{three}</p>
                        <p class="passionate">Passionate Veterinary Care&nbsp;&nbsp;for Happy Healthy Pets.</p>
                    </div>
                </div>
            </div>
            {/* Your Pet&#39;s Wellness Journey Starts Here */}
            {/* State-of-the-Art Facilities for Your Pet&#39;s Wellbeing */}
            {/* Trusted Veterinary Professionals with a Passion for Animals */}

            <div class="framee">
                <div class="divv">
                    <div class="overlapp">
                        <div class="overlap-groupp">
                            <img class="vectorr" src={spvector9} />
                            <div class="text-wrapperr">{"Welcome to " + Clinic_Name + " clinic"}</div>
                            {/* <div class="div-wrapperr"><div class="text-wrapper-22">Booking now</div></div> */}
                            <img class="imgg" src={spvector10} />
                            <div class="text-wrapper-33">Our medical staff</div>
                            <img class="vector-22" src={Vectorr} />
                        </div>
                        <img class="vector-33" src={spvector11} />
                    </div>


                    {Info.map((d, i) => {
                        var full = d.first_name + '  ' + d.last_name
                        return (
                            <div key={i}>
                                <Componets_Specific_clinic Veterinarian_name={full} Veterinarian_experience={d.address} Veterinarian_His_field_of_work={d.deatalis}
                                    Veterinarian_nationality={d.nation} id={d.user_id} /></div>
                        )
                    })}

                    {/* <Componets_Specific_clinic Veterinarian_name={"Mohammad Ainia"} Veterinarian_experience={"4 years experience"} Veterinarian_His_field_of_work={"He has more experience with cats"}
                        Veterinarian_nationality={"Syrian nationality"} href={'Booking'} /> */}

                    <div class="footer-clinic">
                        <div class="div">
                            <img class="vector" src={footer_Vector37} />
                            <div class="text-wrapper">{Location}</div>
                            <div class="text-wrapper-2">{Phone}</div>
                            <img class="phone-solid" src={footer_phone} />
                            <img class="location1" src={footer_Vector_one} />
                            <img class="location2" src={footer_Vector_two} />

                            <img class="img" src={footer_Vector} />
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Specific_clinic