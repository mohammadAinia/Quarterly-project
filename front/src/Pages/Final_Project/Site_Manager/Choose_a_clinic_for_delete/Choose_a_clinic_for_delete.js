import './Choose_a_clinic_for_delete.css'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { Button, Card, Header, Componets_Clinic_with_button, SectionHeader } from '../../../../Componets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faRightToBracket, faPaw, faStoreSlash, faCoins, faFaceSmileWink, faBolt, faSearch,
    faClock, faArrowsRotate, faComments, faHandHoldingHeart, faHouseCircleCheck, faPlus,
    faUsers, faArrowRightArrowLeft, faPaperPlane, faLocationDot, faRightFromBracket, faBell, faHouse
} from '@fortawesome/free-solid-svg-icons'

const Choose_a_clinic_for_delete = () => {

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [Search_result, setSearch_result] = useState('')
    const [Clinics, setClinics] = useState([])
    const [filteredClinics, setFilteredClinics] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/clinic/showall', { withCredentials: true })
            .then(res => {
                if(res.data.valid){
                setClinics(res.data.result);
                setFilteredClinics(res.data.result); // Initialize filteredClinics with all clinics
    }
    else {
        navigate("/login")
    }
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
            clinic.c_name.toLowerCase().includes(value.toLowerCase())
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
                        filteredClinics.map((clinic, index) => {
                            return (
                                <div key={index}>
                                    <Componets_Clinic_with_button
                                        name_clinic={clinic.name}
                                        Working_hours={clinic.time_open}
                                        location={clinic.location}
                                        button={"Delete"}
                                        id={clinic.c_id}
                                    />
                                </div>
                            )

                        })
                    ) : (
                        Clinics.map((clinic, index) => {
                            return (
                                <div key={index}>
                                    <Componets_Clinic_with_button
                                        name_clinic={clinic.c_name}
                                        Working_hours={(clinic.time_open+'-'+clinic.time_close)}
                                        location={clinic.location}
                                        button={"Delete"}
                                        id={clinic.id}
                                    />
                                </div>
                            )

                        })
                    )}
                    <Componets_Clinic_with_button name_clinic={"Day Clinic"} Working_hours={"8AM - 4PM"} location={"Al-Nabek"}
                        button={"Delete"} id={1} />

                </div>
            </div>
            <button className={`search-button ${isSearchOpen ? 'active' : ''}`} onClick={handleSearchClick}>
                <FontAwesomeIcon icon={faSearch} />
            </button>

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

export default Choose_a_clinic_for_delete