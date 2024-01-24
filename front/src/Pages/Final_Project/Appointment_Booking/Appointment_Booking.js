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
    };

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
                            <div class="rectangle-10"></div>
                            {/* <div class="rectangle-11"></div> */}

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
                            {selectedPet !== 'rabbit' && (
                                <select className="rectangle-13" name="Vaccines" required value={selectedPet}>
                                    <option value="rabbit">10-AM</option>
                                    <option value="rabbit">10:30-AM</option>
                                    <option value="rabbit">11-AM</option>
                                </select>
                            )}
                            {selectedPet === 'rabbit' && (
                                <select className="rectangle-13" name="Vaccines" required value={selectedPet}>
                                    <option value="rabbit">9-AM</option>
                                    <option value="rabbit">9:30-AM</option>
                                </select>
                            )}



                            <img class="vector-2" src={b_Vector21} />
                            <div class="ellipse"></div>
                            <div class="text-wrapper-2">Select Service</div>
                            <div class="text-wrapper-3">Select Animal</div>
                            <div class="text-wrapper-4">Select Day</div>
                            <div class="text-wrapper-55">Select Time</div>
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
        </>


    )
}

export default Appointment_Booking