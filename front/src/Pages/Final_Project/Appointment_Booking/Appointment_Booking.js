import './Appointment_Booking.css'
import React from 'react';
import b_Frame15 from '../../../Assert/Images/b_Frame15.png'
import b_Frame16 from '../../../Assert/Images/b_Frame16.png'
import b_Vector21 from '../../../Assert/Images/b_Vector21.png'
import b_Frame14 from '../../../Assert/Images/b_Frame14.png'
import b_Frame22 from '../../../Assert/Images/b_Frame22.png'
import b_Frame21 from '../../../Assert/Images/b_Frame21.png'
import b_Vector19 from '../../../Assert/Images/b_Vector19.png'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import { Button, Card, Componets_Specific_clinic, Header, SectionHeader } from '../../../Componets/index'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faRightToBracket, faPaw, faStoreSlash, faCoins, faFaceSmileWink, faBolt, faRightFromBracket,
    faClock, faArrowsRotate, faComments, faHandHoldingHeart, faHouseCircleCheck,
    faUsers, faArrowRightArrowLeft, faPaperPlane, faCheck, faStar, faPlus, faBell, faHouse
} from '@fortawesome/free-solid-svg-icons'
const Appointment_Booking = () => {
    const [minDate, setMinDate] = useState('');
    const [maxDate, setMaxDate] = useState('');
    const [selectedPet, setSelectedPet] = useState(''); // Default value for pet
    const [showTimeSelection, setShowTimeSelection] = useState(false);
    const [showTimeText, setShowTimeText] = useState(false);
    const [pageCompletion, setPageCompletion] = useState(0);
    const [circleBeating, setCircleBeating] = useState(false);
    const [availableWorkingHours, setAvailableWorkingHours] = useState([]);

    const navigate = useNavigate()
    const [Animals, setAnimals] = useState([])
    const [Working_hours_one, setWorking_hours_one] = useState([])
    const [Working_hours_two, setWorking_hours_two] = useState([])

    const [Sick_animal, setSick_animal] = useState('')
    const [Day_of_booking, setDay_of_booking] = useState('')
    const [Type_Service, setType_Service] = useState('')
    const [Time, setTime] = useState('')



    const { id } = useParams()

    useEffect(() => {

        axios.get(`http://localhost:3001/clinic/show_all_animal`, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setAnimals(res.data.result)
                    // setWorking_hours_one(res.data.result2)
                    // setWorking_hours_two(res.data.result3)
                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })
    }, [])

    useEffect(() => {
        // Get the current date
        const currentDate = new Date();

        // Set the minimum date to today
        setMinDate(currentDate.toISOString().split('T')[0]);

        // Set the maximum date to one week from today
        const maxDate = new Date(currentDate);
        maxDate.setDate(currentDate.getDate() + 14);
        setMaxDate(maxDate.toISOString().split('T')[0]);
    }, []);

    const fetchWorkingHours = (date) => {
        axios.get(`http://localhost:3001/clinic/show_av_time/${date}/${id}`, { withCredentials: true })
            .then(res => {
                setAvailableWorkingHours(res.data.av_time);
            })
            .catch(err => {
                console.error('Error fetching working hours:', err);
            });
    };




    const handleDateChange = (event) => {
        const selectedDate = new Date(event.target.value); ////


        //هذه اذا بدي ياه اظهر اشعار لايحجز ايام السبت او الخميس
        // const dayOfWeek = selectedDate.getDay();
        // if (dayOfWeek === 4 || dayOfWeek === 6) { // Thursday or Saturday
        //     alert('Appointments cannot be booked on Thursdays or Saturdays.');
        //     return;
        // }

        const formattedDate = event.target.value;
        setDay_of_booking(formattedDate);
        fetchWorkingHours(formattedDate);


        // Check if the selected date is a Thursday or Saturday
        // const isThursday = selectedDate.getDay() === 4; // 4 corresponds to Thursday
        // const isSaturday = selectedDate.getDay() === 6; // 6 corresponds to Saturday

        // // Update selectedPet based on the day of the week
        // if (isThursday || isSaturday) {
        //     setSelectedPet('rabbit');
        // } else {
        //     setSelectedPet('cat'); // For other days, set to 'cat' by default
        // }


        setShowTimeSelection(true);
        setShowTimeText(true) // Show the time selection box when a date is selected

    };

    useEffect(() => {
        const updateCompletion = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop =
                window.scrollY ||
                window.pageYOffset ||
                (document.body.scrollTop +
                    (document.documentElement && document.documentElement.scrollTop) ||
                    0);

            const viewportBottom = scrollTop + windowHeight;
            const isScrolledToBottom = viewportBottom >= documentHeight;

            if (isScrolledToBottom) {
                setPageCompletion(100);
                setCircleBeating(true);
            } else {
                const completion = (viewportBottom / documentHeight) * 100;
                setPageCompletion(completion);
                setCircleBeating(false);
            }
        };

        window.addEventListener('scroll', updateCompletion);

        return () => window.removeEventListener('scroll', updateCompletion);
    }, []);



    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3001/clinic/make_appointment/${id}`, { Sick_animal, Type_Service, Day_of_booking, selectedPet, Time })
            .then(res => {
                if (res.data.valid) {
                    // alert('The appointment has been booked successfully. You can view the appointment details from your appointments')
                    // navigate(-1)
                    Swal.fire({
                        title: "Good job!",
                        text: "The appointment has been booked successfully. You can view the appointment details from your appointments",
                        icon: "success",
                        customClass: {
                            container: 'enlarged-alert-container',
                            popup: 'enlarged-alert-popup',
                            title: 'enlarged-alert-title',
                            htmlContainer: 'enlarged-alert-html-container',
                            confirmButton: 'enlarged-alert-confirm-button',
                        },
                        position: 'center',
                        backdrop: false,
                    }).then(() => {
                        navigate(-1);
                    });
                }
                else {
                    alert('err')
                }
            })
            .catch(err => { console.log(err) })
    }


    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href5={"/Add_Vets_to_clinic"} a5={<FontAwesomeIcon icon={faPlus} />} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />
            <div class="appointment">
                <form onSubmit={handleSubmit}>
                    <div class="div">
                        <div class="overlap">
                            <div class="overlap-group">
                                <img class="frame" src={b_Frame14} />
                                <img class="framee" src={b_Frame15} />
                                <img class="frame-3" src={b_Frame16} />
                                <img class="frame-4" src={b_Frame22} />
                                <img class="frame-5" src={b_Frame21} />
                                <div class="rectangle-9"></div>
                                <div class="div-wrapper">
                                    <button class="text-wrapper">Make Appointment</button>
                                </div>

                                <select name="Vaccines" class="rectangle-10" required onChange={e => setType_Service(e.target.value)}>

                                    <option>Medical examination</option>
                                    <option>review</option>
                                    <option>surgery</option>

                                </select>
                                <select name="Vaccines" class="rectangle-11" required onChange={e => setSick_animal(e.target.value)}>

                                    {/* <option>cat</option> */}

                                    {Animals.map((user, i) => {
                                        return (
                                            <option key={i} value={user.id} >{user.name}</option>
                                        )
                                    })}

                                </select>

                                <input
                                    className="rectangle-12"
                                    type="date"
                                    min={minDate}
                                    max={maxDate}
                                    onChange={handleDateChange}
                                />


                                {showTimeSelection && (
                                    <select
                                        className="rectangle-13"
                                        name="Vaccines"
                                        required
                                        onChange={e => setTime(e.target.value)}
                                    >
                                        {availableWorkingHours.map((hour, index) => (
                                            <option key={index} value={hour}>{hour}</option>
                                        ))}
                                    </select>
                                )}
                                {/* {showTimeSelection && (
                                    <select
                                        className="rectangle-13"
                                        name="Vaccines"
                                        required
                                        value={selectedPet}
                                    >
                                        {selectedPet !== 'rabbit' ? (
                                            <>

                                                {Working_hours_one.map((user, i) => {
                                                    return (
                                                        <option key={i} value={"user.id"} >{"user."}</option>
                                                    )
                                                })}
                                            </>
                                        ) : (
                                            <>

                                                {Working_hours_two.map((user, i) => {
                                                    return (
                                                        <option key={i} value={"user.id"} >{"user."}</option>
                                                    )
                                                })}
                                            </>
                                        )}
                                    </select>
                                )} */}
                                <img class="vector-2" src={b_Vector21} />
                                <div class="ellipse" id="bird-eye"></div>
                                <div class="text-wrapper-2">Select Service</div>
                                <div class="text-wrapper-3">Select Animal</div>
                                <div class="text-wrapper-4">Select Day</div>
                                <div className={`text-wrapper-55 ${showTimeText ? 'visible' : 'hidden'}`}>
                                    Select Time
                                </div>
                            </div>
                            <img class="vector-3" src={b_Vector19} />
                        </div>
                        <div class="overlap-2">
                            <div class="text-wrapper-5">Time to make an</div>
                            <div class="text-wrapper-6">Appointment</div>
                        </div>
                        <p class="p">
                            Booking an appointment saves you comfort and time, as there is no need to wait long at the clinic
                        </p>
                    </div>

                </form>
            </div>

            <div
                className={`completion-circle-container ${circleBeating ? 'beat-animation' : ''
                    }`}
            >
                <div
                    className="completion-circle"
                    style={{
                        background: `conic-gradient(#ffcc04 ${pageCompletion}%, #ffffff ${pageCompletion}% 100%)`,
                    }}
                ></div>
            </div>
        </>


    )
}

export default Appointment_Booking