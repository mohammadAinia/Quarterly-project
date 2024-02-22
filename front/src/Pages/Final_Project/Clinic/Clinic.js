import './Clinic.css'
import React from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { Button, Card, Header, Componets_Clinic, SectionHeader } from '../../../Componets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faRightToBracket, faPaw, faStoreSlash, faCoins, faFaceSmileWink, faBolt, faSearch,
    faClock, faArrowsRotate, faComments, faHandHoldingHeart, faHouseCircleCheck, faPlus,
    faUsers, faArrowRightArrowLeft, faPaperPlane, faLocationDot, faRightFromBracket, faBell, faHouse
} from '@fortawesome/free-solid-svg-icons'
import c1 from '../../../Assert/Images/c1.png'
import c2 from '../../../Assert/Images/c2.png'
import c3 from '../../../Assert/Images/c3.png'
import c4 from '../../../Assert/Images/c4.png'
import c5 from '../../../Assert/Images/c5.png'
import c6 from '../../../Assert/Images/3.png'
import c7 from '../../../Assert/Images/c7.png'
import c8 from '../../../Assert/Images/c8.png'
import line from '../../../Assert/Images/Line1.png'
import clinic from '../../../Assert/Images/clinic.png'
import vector11 from '../../../Assert/Images/vector11.png'
import Vector4 from '../../../Assert/Images/Vector4.png'
import Vector5 from '../../../Assert/Images/Vector5.png'
// import Vector10 from '../../../Assert/Images/Vector10.png'





const Clinic = () => {

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [Search_result, setSearch_result] = useState('')
    const [Clinics, setClinics] = useState([])
    const [filteredClinics, setFilteredClinics] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/clinic/showall', { withCredentials: true })
            .then(res => {
                setClinics(res.data);
                // setFilteredClinics(res.data); // Initialize filteredClinics with all clinics
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    const handleSearchInputChange = (event) => {
        const { value } = event.target;
        setSearch_result(event.value)

        // Filter clinics based on search input
        const filtered = Clinics.filter(clinic =>
            Clinics.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredClinics(filtered);
    };

    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href5={"/add_clinic"} a5={<FontAwesomeIcon icon={faPlus} />} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />
            <div className="macbook-pro">
                <div className="div">
                    <div className="overlap">
                        <div className="overlap">
                            <img className="vector" alt='' src={c4} />
                            <img className="img" src={c3} />
                            <img className="vector-2" src={c2} />
                            <div className="text-wrapper">WE CARE</div>
                            <div className="text-wrapper-2">ABOUT</div>
                            <div className="text-wrapper-3">YOUR PET</div>
                        </div>
                        <div className="overlap-group">
                            <div className="rectangle"></div>
                            <div className="rectangle-2"></div>
                            <div className="rectangle-3"></div>
                            <div className="ellipse"></div>
                            <div className="ellipse-2"></div>
                        </div>
                    </div>
                    <div className="overlap-2">
                        <img className="vector-55" src={Vector5} /><img className="vector-4" src={Vector4} /> <img className="vector-5" src={c1} />
                    </div>
                    <img className="vector-6" src={c5} />
                    <div className="overlap-group-2">
                        <div className="rectangle-4"></div>
                        <div className="rectangle-5"></div>
                        <div className="rectangle-6"></div>
                        <div className="ellipse-3"></div>
                        <div className="ellipse-4"></div>
                    </div>
                    <div className="overlap-3">
                        <div className="rectangle-7"></div>
                        <div className="rectangle-8"></div>
                        <div className="rectangle-9"></div>
                        <div className="ellipse-5"></div>
                        <div className="ellipse-6"></div>
                    </div>
                    <img className="frame" src={c8} />
                    <img className="frame2" src={c7} />
                </div>
            </div>

            <h1>Madicals</h1>

            <div class="card-madical">
                <div class="overlap-group-wrapper">

                    {Search_result !== '' ? (
                        filteredClinics.map((clinic, index) => (
                            <Componets_Clinic
                                key={index}
                                name_clinic={clinic.c_name}
                                Working_hours={clinic.time_open}
                                location={clinic.c_place}
                                href={`Specific_clinic/${clinic.id_c}`}
                                button={"View"}
                            />
                        ))
                    ) : (
                        Clinics.map((clinic, index) => (
                            <Componets_Clinic
                                key={index}
                                name_clinic={clinic.c_name}
                                Working_hours={clinic.time_open}
                                location={clinic.c_place}
                                href={`Specific_clinic/${clinic.id_c}`}
                                button={"View"} />
                        ))
                    )}
                    <Componets_Clinic href={`Specific_clinic/${clinic.id_c}`}
                        button={"View"} name_clinic={"Day Clinic"} Working_hours={"8AM - 4PM"} location={"Al-Nabek"} />

                </div>
            </div>
            <button className={`search-button ${isSearchOpen ? 'active' : ''}`} onClick={handleSearchClick}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
            {/* {isSearchOpen && (
                <div className="search-popup">
                    <input className="search-input" type="text" placeholder="Search..." onChange={e => setSearch_result(e.target.value)} />
                </div>
            )} */}
            {isSearchOpen && (
                <div className={`search-popup ${isSearchOpen ? 'active' : ''}`}>
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search..."
                        onChange={handleSearchInputChange}
                    />
                </div>
            )}
        </>
    );

}

export default Clinic