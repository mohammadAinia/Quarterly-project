import './Your_animall.css'
import { Card, SectionHeader } from '../../../Componets/index'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Your_animall = () => {

    const [Animall_info, setAnimal_info] = useState([])
    const { id } = useParams()

    const navigate = useNavigate()

    const AddRequst = async (id2) => {
        try {
            await axios.get(`http://localhost:3001/vet/addreq/${id}/${id2}`, { withCredentials: true })
            alert('The request has been sent successfully')
            navigate(-1)
        }
        catch (err) { console.log(err) }
    }

    useEffect(() => {
        axios.get('http://localhost:3001/animal/show_all_animal_ad', { withCredentials: true })
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
            <section className="animal" id="animal">
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
                                            <button onClick={e => AddRequst(user.id)} className='btn'>Select</button>
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

export default Your_animall
