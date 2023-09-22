import './Update_animals.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header } from '../../Componets'
import { useNavigate, useParams } from 'react-router-dom'

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

        axios.get('http://localhost:3001/edit/' + id)
            .then(res => {
                setName(res.data[0].name)
                setPicture(res.data[0].urlimage)
                setAnimal_place(res.data[0].place)
                setAdditional_details(res.data[0].Additional_details)
                setWeight(res.data[0].weight)
                setHeight(res.data[0].high)
                setHealthـstatus(res.data[0].health_stats)

            })
            .catch(err => { console.log(err) })
    }, [])

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {

        const formData = new FormData()

        formData.append('image', Picture)
        formData.append('name', Name)
        formData.append('animal_place', Animal_place)
        formData.append('details', Additional_details)
        formData.append('weight', Weight)
        formData.append('height', Height)
        formData.append('health_Status', Healthـstatus)

        e.preventDefault()

        axios.put('http://localhost:3001/animal/update/' + id, formData)
            .then(res => {
                if (res.data.valid) {
                    navigate('/Animal_infoo')
                }
                else {
                    alert('EROR valid eror')
                }
            })
            .catch(err => alert(err))
    }
    return (
        <>
            <Header href1={"/Animal"} a1={"Animal"} href5={"/Add_Animal"} a5={"Add Animal"} href3={"#"} a3={"Common Problems"} href2={"#"} a2={"Adopt Animal"} href6={"/login"} a6={"Login"} />
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
                                    <input type="file" value={Picture} onChange={e => setPicture(e.target.files[0])} />
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
                            <div class="buttonn">
                                <a href="/Animal_infoo">Back</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update_animals