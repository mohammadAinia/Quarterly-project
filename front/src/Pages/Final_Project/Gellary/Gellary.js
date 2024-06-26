import './Gellary.css'
import React, { useEffect, useState, useRef } from 'react';
import Gallery_Line_29 from '../../../Assert/Images/Gallery_Line_29.png'
import Gallery_Line_30 from '../../../Assert/Images/Gallery_Line_30.png'
import Gallery_Vector from '../../../Assert/Images/Gallery_Vector.png'
import Gallery_Rectangle_349 from '../../../Assert/Images/Gallery_Rectangle_349.png'
import gallery_Vector_69 from '../../../Assert/Images/gallery_Vector_69.png'
import gallery_Vector_79 from '../../../Assert/Images/gallery_Vector_79.png'
import gallery_Vector_80 from '../../../Assert/Images/gallery_Vector_80.png'
import gallery_Frame_108 from '../../../Assert/Images/gallery_Frame_108.png'
import gallery_Frame_109 from '../../../Assert/Images/gallery_Frame_109.png'
import gallery_Frame_110 from '../../../Assert/Images/gallery_Frame_110.png'
import gallery_Vector_72 from '../../../Assert/Images/gallery_Vector_72.png'
import gallery_Vector_71 from '../../../Assert/Images/gallery_Vector_71.png'
import gallery_Vector_73 from '../../../Assert/Images/gallery_Vector_73.png'
import gallery_Vector_74 from '../../../Assert/Images/gallery_Vector_74.png'
import gallery_Vector_75 from '../../../Assert/Images/gallery_Vector_75.png'
import gallery_Vector_76 from '../../../Assert/Images/gallery_Vector_76.png'
import gallery_Vector_78 from '../../../Assert/Images/gallery_Vector_78.png'
import cat from '../../../Assert/Images/cat.jpg'
import gallery_Vector_68 from '../../../Assert/Images/gallery_Vector_68.png'
import gallery_Vector_77 from '../../../Assert/Images/gallery_Vector_77.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlus, faRightFromBracket, faRightToBracket, faPaw, faStoreSlash, faCoins, faFaceSmileWink, faBolt, faSearch,
    faClock, faArrowsRotate, faComments, faHandHoldingHeart, faHouseCircleCheck,
    faUsers, faArrowRightArrowLeft, faPaperPlane, faLocationDot, faHouse, faBell, faMessage, faUserDoctor, faStethoscope
} from '@fortawesome/free-solid-svg-icons'
import { Componets_Gellary, Header } from '../../../Componets'

import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const Gellary = () => {

    const { id } = useParams()
    const [Images, setImages] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        axios.get(`http://localhost:3001/gallery/get_photo/${id}`, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {

                    setImages(res.data.result)
                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })

    },
        [])
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [Search_result, setSearch_result] = useState('')
    const [Clinics, setClinics] = useState([])
    const [filteredClinics, setFilteredClinics] = useState([]);
    const handleSearchInputChange = (event) => {
        const { value } = event.target;
        setSearch_result(event.value)

        // Filter clinics based on search input
        const filtered = Clinics.filter(clinic =>
            clinic.c_name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredClinics(filtered);
    };

    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (

        <>
            <Header href12={"/Pet_Sitting"} a12={"Pet Sitting"} href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href5={"/Add_Animal"} a5={<FontAwesomeIcon icon={faPlus} />} href6={"all_doc"} a6={<FontAwesomeIcon icon={faStethoscope} />} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href7={"/chat"} a7={<FontAwesomeIcon icon={faMessage} />} href8={"/Notifications"} a8={"Notifications"} href9={"/profile"} a9={"profile"} href10={"/"} a10={<FontAwesomeIcon icon={faHouse} />} href11={"My_appointments"} a11={"My appointments"} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <body>
                <div class="gallery">
                    <div class="overlap-group-wrapper">
                        <div class="overlap-group">
                            <div class="rectangle"></div>
                            <img class="vector" src={gallery_Vector_68} />
                            <div class="div"></div>
                            <img class="line" src={Gallery_Line_29} />
                            <img class="img" src={gallery_Vector_73} />
                            <img class="vector-2" src={gallery_Vector_75} />
                            <img class="vector-3" src={gallery_Vector_76} />
                            <img class="vector-4" src={gallery_Vector_77} />
                            <img class="vector-5" src={gallery_Vector_78} />
                            <img class="vector-6" src={gallery_Vector_74} />
                            <img class="line-2" src={Gallery_Line_30} />
                            <div class="rectangle-2"></div>
                            <img class="vector-7" src={Gallery_Vector} />
                            <div class="ellipse"></div>
                            <div class="ellipse-2"></div>
                            <div class="ellipse-3"></div>
                            <div class="text-wrapper">Gallery</div>
                            <div class="text-wrapper-2">Pet</div>
                            <div class="rectangle-3"></div>

                            {/* صور الحيوان */}
                            <div class="frame-22">
                                {
                                    Images.map((user, i) => (
                                        <Componets_Gellary
                                            key={i}
                                            image={`http://localhost:3001/uploads/${user.photo_url}`}
                                            id={user.p_id}
                                        />
                                    ))
                                }
                            </div>


                            <img class="rectangle-5" src={Gallery_Rectangle_349} />
                            <img class="vector-8" src={gallery_Vector_69} />
                            <img class="vector-9" src={gallery_Vector_69} />
                            <img class="frame" src={gallery_Frame_108} />
                            <img class="frame-2" src={gallery_Frame_109} />
                            <img class="frame-3" src={gallery_Frame_110} />
                            <img class="vector-10" src={gallery_Vector_72} />
                            <img class="vector-11" src={gallery_Vector_71} />
                            <img class="vector-12" src={gallery_Vector_79} />
                            <img class="vector-13" src={gallery_Vector_80} />

                        </div>
                    </div>
                </div>

            </body>
            <a href={`Add_photo_to_gallery/${id}`} className='search-button2'>
                <div className='button_gallery'><FontAwesomeIcon icon={faPlus} /></div>

            </a>
            {/* {isSearchOpen && (
                <div className="search-popup">
                    <input className="search-input" type="text" placeholder="Search..." onChange={e => setSearch_result(e.target.value)} />
                </div>
            )} */}
        </>
    )
}

export default Gellary