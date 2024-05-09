import './Report.css'
import React from 'react'
import report_Vector47 from '../../../Assert/Images/report_Vector47.png'
import report_Vector48 from '../../../Assert/Images/report_Vector48.png'
import report_Vector_49 from '../../../Assert/Images/report_Vector_49.png'
import report_Vector51 from '../../../Assert/Images/report_Vector51.png'
import report_Vector50 from '../../../Assert/Images/report_Vector50.png'
import report_Vector46 from '../../../Assert/Images/report_Vector46.png'
import report_Line2 from '../../../Assert/Images/report_Line2.png'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header, About_your_animal, Your_animal_vaccines } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse, faMessage, faUserDoctor, faStethoscope } from '@fortawesome/free-solid-svg-icons'

const Report = () => {


    // هاد تجربه لاتمسحو 
    // useEffect(() => {
    //     // Sample data for testing
    //     const sampleInfoAnimal = [
    //         {
    //             Name: 'Fluffy',
    //             Type: 'Dog',
    //             Gender: 'Male',
    //             Age: '3',
    //             Height: '50cm',
    //             Weight: '20kg',
    //             Place: 'Park',
    //             Color: 'White'
    //         }
    //         // You can add more objects for additional testing scenarios
    //     ];

    //     // Set the sample data to InfoAnimal state
    //     setInfoAnimal(sampleInfoAnimal);
    //     // Assuming other state variables like Vacc and Health_Record are also set with sample data for testing

    // }, []); 

    const navigate = useNavigate()
    const [Health_Record, setHealth_Record] = useState([])
    const { id } = useParams()
    const [Vacc, setVacc] = useState([])
    const [InfoAnimal, setInfoAnimal] = useState([])


    const [Name, setName] = useState('')
    const [Type, setType] = useState('')
    const [Gender, setGender] = useState('')
    const [Age, setAge] = useState('')
    const [Height, setHeight] = useState('')
    const [Weight, setWeight] = useState('')
    const [Place, setPlace] = useState('')
    const [Color, setColor] = useState('')
    const [Image, setImage] = useState('')




    useEffect(() => {

        axios.get(`http://localhost:3001/#/#/${id}`, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setInfoAnimal(res.data.result)
                    setVacc(res.data.result2)
                    setHealth_Record(res.data.result3)
                }
                // else if (res.data.value) {
                //     navigate('/')
                // }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })
    }, [])


    useEffect(() => {
        // Assuming InfoAnimal is an array of objects
        if (InfoAnimal.length > 0) {
            const animal = InfoAnimal[0]; // Assuming you want data from the first element
            setName(animal.name || ''); // Set Name state
            setType(animal.type || ''); // Set Type state
            setGender(animal.gender || ''); // Set Gender state
            setAge(animal.age || ''); // Set Age state
            setHeight(animal.Height || ''); // Set Height state
            setWeight(animal.Weight || ''); // Set Weight state
            setPlace(animal.place || ''); // Set Place state
            setColor(animal.color || ''); // Set Color state
            setImage(animal.urlImage || '')
        }
    }, [InfoAnimal]);

    return (
        <>
            <div class="report">

                <div class="div">

                    <div class="overlap">
                        <img class="ellipse" src={`http://localhost:3001/uploads/${Image}`} />
                        <div class="ellipse-2"></div>
                    </div>
                    <div class="overlap-group">
                        <div class="overlap-2">
                            <div class="overlap-3">
                                <div class="rectangle"></div>
                                <img class="vector" src={report_Vector47} />
                                <div class="text-wrapper">ABOUT</div>
                            </div>
                            <div class="text-wrapper-2">Name :</div>
                            <div class="text-wrapper-3">Height :</div>
                            {/* اسم الحيوان */}
                            <div class="text-wrapper-4">{Name}</div>
                            {/* طول الحيوان */}
                            <div class="text-wrapper-5">{Height}</div>
                        </div>
                        <div class="overlap-4">
                            <div class="overlap-group-2">
                                <div class="rectangle"></div>
                                <img class="vector" src={report_Vector48} />
                                <div class="text-wrapper-6">Health record</div>
                            </div>
                            <div class="overlap-5">
                                <div class="text-wrapper-7">Age :</div>
                                <div class="text-wrapper-8">{Age}</div>
                            </div>
                            <div class="overlap-6">
                                <div class="text-wrapper-7">Color :</div>
                                <div class="text-wrapper-9">{Color}</div>
                            </div>
                        </div>
                        <img class="line" src={report_Line2} />
                    </div>
                    <div class="overlap-10">
                        <div class="text-wrapper-7">Type :</div>
                        <div class="text-wrapper-14">{Type}</div>
                    </div>
                    <div class="text-wrapper-15">weight :</div>
                    <div class="text-wrapper-21">{Weight}</div>

                    <div class="text-wrapper-16">Gender :</div>
                    <div class="text-wrapper-22">{Gender}</div>
                    <div class="overlap-11">
                        <div class="text-wrapper-17">Place :</div>
                        <div class="text-wrapper-18">{Place}</div>
                    </div>


                    <div class="overlap-7">
                        <div class="rectangle"></div>
                        <img class="vector" src={report_Vector_49} />
                        <div class="text-wrapper-10">Vaccines</div>
                    </div>
                    {/* <div class="overlap-8">
                        <div class="rectangle"></div>
                        <img class="vector" src={report_Vector51} />
                        <div class="text-wrapper-11">pharmaceutical</div>
                    </div> */}
                    <div class="overlap-9">
                        <img class="img" src={report_Vector50} />
                        <div class="ellipse-3"></div>
                    </div>
                    <div class="overlap-90" ></div>
                    <div class="text-wrapper-12">Report</div>
                    {/* <div class="frame"><div class="text-wrapper-13">Gellary</div></div>
                    <div class="div-wrapper"><div class="text-wrapper-13">Print</div></div> */}

                    {/* تقرير صحي */}
                    <div class="frame-3_me2">
                        {Health_Record.map((user, i) => (
                            <p className="p" key={i}>- {user.desc}</p>
                        ))}

                    </div>
                    {/* معلومات اللقاحات*/}
                    <div class="frame-3_me22">
                        {Vacc.map((user, i) => (
                            <p class="text-wrapper-19" key={i}>- {user.desc}</p>
                        ))}

                    </div>

                    {/* <div class="text-wrapper-20">Antifungals</div> */}
                </div>
            </div>
        </>
    )
}

export default Report