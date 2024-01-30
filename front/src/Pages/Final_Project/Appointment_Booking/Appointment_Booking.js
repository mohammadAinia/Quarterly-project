import './Appointment_Booking.css'
import React, { useState, useEffect } from 'react';
import b_Frame15 from '../../../Assert/Images/b_Frame15.png'
import b_Frame16 from '../../../Assert/Images/b_Frame16.png'
import b_Vector21 from '../../../Assert/Images/b_Vector21.png'
import b_Frame14 from '../../../Assert/Images/b_Frame14.png'
import b_Frame22 from '../../../Assert/Images/b_Frame22.png'
import b_Frame21 from '../../../Assert/Images/b_Frame21.png'
import b_Vector19 from '../../../Assert/Images/b_Vector19.png'

const Appointment_Booking = () => {
    const [minDate, setMinDate] = useState('');
    const [maxDate, setMaxDate] = useState('');
    const [selectedPet, setSelectedPet] = useState(''); // Default value for pet
    const [showTimeSelection, setShowTimeSelection] = useState(false);
    const [showTimeText, setShowTimeText] = useState(false);
    const [pageCompletion, setPageCompletion] = useState(0);





    useEffect(() => {
        // Get the current date
        const currentDate = new Date();

        // Set the minimum date to today
        setMinDate(currentDate.toISOString().split('T')[0]);

        // Set the maximum date to one week from today
        const maxDate = new Date(currentDate);
        maxDate.setDate(currentDate.getDate() + 7);
        setMaxDate(maxDate.toISOString().split('T')[0]);
    }, []);


    const handleDateChange = (event) => {
        const selectedDate = new Date(event.target.value);

        // Check if the selected date is a Thursday or Saturday
        const isThursday = selectedDate.getDay() === 4; // 4 corresponds to Thursday
        const isSaturday = selectedDate.getDay() === 6; // 6 corresponds to Saturday

        // Update selectedPet based on the day of the week
        if (isThursday || isSaturday) {
            setSelectedPet('rabbit');
        } else {
            setSelectedPet('cat'); // For other days, set to 'cat' by default
        }
        setShowTimeSelection(true);
        setShowTimeText(true) // Show the time selection box when a date is selected

    };

    useEffect(() => {
        const updateCompletion = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

            const viewportBottom = scrollTop + windowHeight;
            const isScrolledToBottom = viewportBottom >= documentHeight;

            if (isScrolledToBottom) {
                setPageCompletion(100);
            } else {
                const completion = (viewportBottom / documentHeight) * 100;
                setPageCompletion(completion);
            }
        };

        // Update completion on scroll
        window.addEventListener('scroll', updateCompletion);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('scroll', updateCompletion);
    }, []);

    return (
        <>
            <div class="appointment">
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
                                <a class="text-wrapper" href='#'>Make Appointment</a>
                            </div>

                            <select name="Vaccines" class="rectangle-10" required >

                                <option>Medical examination</option>
                                <option>review</option>
                                <option>surgery</option>

                            </select>
                            <select name="Vaccines" class="rectangle-11" required >

                                <option>cat</option>

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
                                    value={selectedPet}
                                >
                                    {selectedPet !== 'rabbit' ? (
                                        <>
                                            <option value="10-AM">10-AM</option>
                                            <option value="10:30-AM">10:30-AM</option>
                                            <option value="11-AM">11-AM</option>
                                        </>
                                    ) : (
                                        <>
                                            <option value="9-AM">9-AM</option>
                                            <option value="9:30-AM">9:30-AM</option>
                                        </>
                                    )}
                                </select>
                            )}



                            <img class="vector-2" src={b_Vector21} />
                            <div class="ellipse"></div>
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
            </div>
            <div class="appointment">
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
                                <a class="text-wrapper" href='#'>Make Appointment</a>
                            </div>

                            <select name="Vaccines" class="rectangle-10" required >

                                <option>Medical examination</option>
                                <option>review</option>
                                <option>surgery</option>

                            </select>
                            <select name="Vaccines" class="rectangle-11" required >

                                <option>cat</option>

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
                                    value={selectedPet}
                                >
                                    {selectedPet !== 'rabbit' ? (
                                        <>
                                            <option value="10-AM">10-AM</option>
                                            <option value="10:30-AM">10:30-AM</option>
                                            <option value="11-AM">11-AM</option>
                                        </>
                                    ) : (
                                        <>
                                            <option value="9-AM">9-AM</option>
                                            <option value="9:30-AM">9:30-AM</option>
                                        </>
                                    )}
                                </select>
                            )}



                            <img class="vector-2" src={b_Vector21} />
                            <div class="ellipse"></div>
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
            </div>            <div class="appointment">
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
                                <a class="text-wrapper" href='#'>Make Appointment</a>
                            </div>

                            <select name="Vaccines" class="rectangle-10" required >

                                <option>Medical examination</option>
                                <option>review</option>
                                <option>surgery</option>

                            </select>
                            <select name="Vaccines" class="rectangle-11" required >

                                <option>cat</option>

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
                                    value={selectedPet}
                                >
                                    {selectedPet !== 'rabbit' ? (
                                        <>
                                            <option value="10-AM">10-AM</option>
                                            <option value="10:30-AM">10:30-AM</option>
                                            <option value="11-AM">11-AM</option>
                                        </>
                                    ) : (
                                        <>
                                            <option value="9-AM">9-AM</option>
                                            <option value="9:30-AM">9:30-AM</option>
                                        </>
                                    )}
                                </select>
                            )}



                            <img class="vector-2" src={b_Vector21} />
                            <div class="ellipse"></div>
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
            </div>
            <div class="appointment">
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
                                <a class="text-wrapper" href='#'>Make Appointment</a>
                            </div>

                            <select name="Vaccines" class="rectangle-10" required >

                                <option>Medical examination</option>
                                <option>review</option>
                                <option>surgery</option>

                            </select>
                            <select name="Vaccines" class="rectangle-11" required >

                                <option>cat</option>

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
                                    value={selectedPet}
                                >
                                    {selectedPet !== 'rabbit' ? (
                                        <>
                                            <option value="10-AM">10-AM</option>
                                            <option value="10:30-AM">10:30-AM</option>
                                            <option value="11-AM">11-AM</option>
                                        </>
                                    ) : (
                                        <>
                                            <option value="9-AM">9-AM</option>
                                            <option value="9:30-AM">9:30-AM</option>
                                        </>
                                    )}
                                </select>
                            )}



                            <img class="vector-2" src={b_Vector21} />
                            <div class="ellipse"></div>
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
                    <p className="p">
                        Booking an appointment saves you comfort and time, as there is no need to wait long at the clinic
                    </p>
                </div>
            </div>
            <div className="completion-circle-container">
                <div className="completion-circle" style={{ background: `conic-gradient(#ffcc04 ${pageCompletion}%, #ffffff ${pageCompletion}% 100%)` }}></div>
            </div>
        </>


    )
}

export default Appointment_Booking