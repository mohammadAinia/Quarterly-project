import './Your_animal.js'
import { Card, SectionHeader } from '../../../Componets/index'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import b from '../../../Assert/Images/cat.jpg'

const Your_animal = () => {

    const [Animall_info, setAnimal_info] = useState([])

    const navigate = useNavigate()

    const Request_adopt = async (id) => {
        try {
            await axios.post('http://localhost:3001/adopt/add_to_ad_list/'+id,{withCredentials: true })
            alert("Added to adoption list")
        }
        catch (err) { console.log(err) }
    }

    useEffect(() => {
        axios.get('http://localhost:3001/animal/show_all_animal_ad',{withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setAnimal_info(res.data.result)
                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })

    },
        [])
    return (
        <>
            <section className="animal" id="animal" >
                <SectionHeader>Your Animals</SectionHeader>
                <div className="">
                    <div className="heading">
                    </div>
                </div>
                <div className="box-container">
                    {Animall_info.map((user, i) => {
                        return (
                            <div key={i}>
                                <div className="box-container">
                                    <div className="box">
                                        <img src={'http://localhost:3001/uploads/' + user.urlImage} alt="You don't have any animals" />
                                        <div className="content">
                                            <h3>{user.name}</h3>
                                            <button onClick={e => Request_adopt(user.id)} className='btn'>Addition adoption</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Your_animal
