import './Update_animals.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header } from '../../Componets'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse, faMessage, faUserDoctor, faStethoscope } from '@fortawesome/free-solid-svg-icons'

const Update_animals = () => {

    const navigate = useNavigate()


    const [Name, setName] = useState('')
    const [Picture, setPicture] = useState()
    const [Animal_place, setAnimal_place] = useState('')
    const [Additional_details, setAdditional_details] = useState('')
    const [Weight, setWeight] = useState('')
    const [Height, setHeight] = useState('')
    const [Healthـstatus, setHealthـstatus] = useState('')

    const { id } = useParams()

    useEffect(() => {

        axios.get(`http://localhost:3001/animal/show_animal_id/${id}`, { withCredentials: true })
            .then(res => {
                setName(res.data.result[0].name)
                setPicture(res.data.result[0].urlIimage)
                setAnimal_place(res.data.result[0].place)
                setAdditional_details(res.data.result[0].Additional_details)
                setWeight(res.data.result[0].weight)
                setHeight(res.data.result[0].high)
                setHealthـstatus(res.data.result[0].health_stats)

            })
            .catch(err => { console.log(err) })
    }, [])

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {

        const formData = new FormData()

        formData.append('image', Picture)
        formData.append('name', Name)
        formData.append('animal_place', Animal_place)
        formData.append('Additional_details', Additional_details)
        formData.append('weight', Weight)
        formData.append('height', Height)
        formData.append('health_Status', Healthـstatus)

        e.preventDefault()

        axios.post(`http://localhost:3001/animal/update/${id}`, formData, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    alert('Modified successfully')
                    navigate('/')
                }
                else {
                    alert('EROR valid eror')
                }
            })
            .catch(err => alert(err + "hello"))
    }
    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />
            <div>
                <div class="container" style={{ "margin-top": "270px", "margin-bottom": "70px" }}>
                    <div class="title">update Animal</div>
                    <div class="content">
                        <form action="#" onSubmit={handleSubmit} enctype="multipart/form-data">
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">name of the animal </span>
                                    <input type="text" value={Name} name='name' onChange={e => setName(e.target.value)} />
                                </div>
                                <div class="input-box">
                                    <span class="details">Animal Place </span>
                                    <input type="text" value={Animal_place} name='animal_place' onChange={e => setAnimal_place(e.target.value)} />
                                </div>
                                <div class="input-box">
                                    <span class="details">Picture of an animal</span>
                                    <input type="file" onChange={e => setPicture(e.target.files[0])} />
                                </div>
                                <div class="input-box">
                                    <span class="details">Additional details </span>
                                    <input type="text" value={Additional_details} name='details' onChange={e => setAdditional_details(e.target.value)} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Weight kg </span>
                                    <input type="number" value={Weight} name='weight' onChange={e => setWeight(e.target.value)} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Height cm </span>
                                    <input type="number" value={Height} name='height' onChange={e => setHeight(e.target.value)} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Health Status </span>
                                    <input type="text" value={Healthـstatus} name='health_Status' onChange={e => setHealthـstatus(e.target.value)} />
                                </div>

                            </div>
                            <div class="button">
                                <button>update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update_animals
