import './My_requests.css'
import React from 'react'
import sitting_file1 from '../../../../Assert/Images/sitting_file1.png'
import { Header, Componets_My_requests } from '../../../../Componets/index'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlus, faRightFromBracket, faRightToBracket, faPaw, faStoreSlash, faCoins, faFaceSmileWink, faBolt, faSearch,
    faClock, faArrowsRotate, faComments, faHandHoldingHeart, faHouseCircleCheck,
    faUsers, faArrowRightArrowLeft, faPaperPlane, faLocationDot, faHouse, faBell, faMessage, faUserDoctor, faStethoscope
} from '@fortawesome/free-solid-svg-icons'

const My_requests = () => {
    const navigate = useNavigate()
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [requestSitting, setRequestSitting] = useState([]);
    const [filteredRequestSitting, setFilteredRequestSitting] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/sitting/#', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setRequestSitting(res.data.result);
                    setFilteredRequestSitting(res.data.result); // Initialize filteredClinics with all clinics
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
        setSearchQuery(value);

        const filtered = requestSitting.filter(p =>
            p.name.toLowerCase().includes(value.toLowerCase()) ||
            p.type.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredRequestSitting(filtered);
    };

    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
    };
    return (

        <>
            <Header href12={"/Pet_Sitting"} a12={"Pet Sitting"} href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href5={"/Add_Animal"} a5={<FontAwesomeIcon icon={faPlus} />} href6={"all_doc"} a6={<FontAwesomeIcon icon={faStethoscope} />} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href7={"/chat"} a7={<FontAwesomeIcon icon={faMessage} />} href8={"/Notifications"} a8={"Notifications"} href9={"/profile"} a9={"profile"} href10={"/"} a10={<FontAwesomeIcon icon={faHouse} />} href11={"My_appointments"} a11={"My appointments"} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />
            <body>
                <div class="animal-sitting2">
                    <div class="div">

                        {/* قسم عرض طلبات المجالسة */}
                        <div class="text-wrapper-2">My requests</div>

                        <div class="card-madical">
                            <div class="store2">

                                {isSearchOpen ? (
                                    filteredRequestSitting.map((sitting, index) => (
                                        <div key={index}>
                                            <Componets_My_requests
                                                type_animal={sitting.type}
                                                name={sitting.name}
                                                fare={sitting.Service_price}
                                                from={sitting.date_from}
                                                to={sitting.date_to}
                                                name_accepted={sitting.first_name + ' ' + sitting.last_name}
                                                test={sitting.first_name}
                                            />
                                        </div>
                                    ))
                                ) : (
                                    requestSitting.map((sitting, index) => (
                                        <div key={index}>
                                            <Componets_My_requests
                                                type_animal={sitting.type}
                                                name={sitting.name}
                                                fare={sitting.Service_price}
                                                from={sitting.date_from}
                                                to={sitting.date_to}
                                                name_accepted={sitting.first_name + ' ' + sitting.last_name}
                                                test={sitting.first_name} />
                                        </div>
                                    ))
                                )}



                                {/* <Componets_My_requests
                                    type_animal={"Cat"}
                                    name={"koch"}
                                    fare={50}
                                    from={"2024/4/30"}
                                    to={"2024/5/15"}
                                    href={`Details_Pet_Sitting_request/${5}`}
                                /> */}

                            </div>
                        </div>
                    </div>
                </div>
            </body>
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

export default My_requests