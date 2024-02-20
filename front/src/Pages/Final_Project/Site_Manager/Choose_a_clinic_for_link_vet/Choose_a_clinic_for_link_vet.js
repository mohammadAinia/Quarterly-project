import './Choose_a_clinic_for_link_vet.css'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { Button, Card, Header, Componets_Clinic_To_choose, SectionHeader } from '../../../../Componets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faRightToBracket, faPaw, faStoreSlash, faCoins, faFaceSmileWink, faBolt, faSearch,
    faClock, faArrowsRotate, faComments, faHandHoldingHeart, faHouseCircleCheck, faPlus,
    faUsers, faArrowRightArrowLeft, faPaperPlane, faLocationDot, faRightFromBracket, faBell, faHouse
} from '@fortawesome/free-solid-svg-icons'

const Choose_a_clinic_for_link_vet = () => {

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [Search_result, setSearch_result] = useState('')
    const [Clinics, setClinics] = useState([])
    const [filteredClinics, setFilteredClinics] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/#', { withCredentials: true })
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
            <h1>Choose Clinic</h1>

            <div class="card-madical">
                <div class="overlap-group-wrapper">

                    {Search_result !== '' ? (
                        filteredClinics.map((clinic, index) => (
                            <Componets_Clinic_To_choose
                                key={index}
                                name_clinic={clinic.name}
                                Working_hours={clinic.workingHours}
                                location={clinic.location}
                                button={"Delete"} />

                        ))
                    ) : (
                        Clinics.map((clinic, index) => (
                            <Componets_Clinic_To_choose
                                key={index}
                                name_clinic={clinic.name}
                                Working_hours={clinic.workingHours}
                                location={clinic.location}
                                button={"Select"}
                                id={clinic.id}
                            />
                        ))
                    )}
                    <Componets_Clinic_To_choose name_clinic={"Day Clinic"} Working_hours={"8AM - 4PM"} location={"Al-Nabek"}
                        button={"Select"} id={1} />

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

    )
}

export default Choose_a_clinic_for_link_vet