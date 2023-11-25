import './Your_animal.js'
import { Card, SectionHeader, Header } from '../../../Componets/index'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import b from '../../../Assert/Images/cat.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse, faMessage, faUserDoctor, faStethoscope } from '@fortawesome/free-solid-svg-icons'

const Your_animal = () => {

    const [Animall_info, setAnimal_info] = useState([])

    const navigate = useNavigate()

    const Request_adopt = async (id) => {
        try {
            await axios.post('http://localhost:3001/adopt/add_to_ad_list/' + id, { withCredentials: true })
            alert("Added to adoption list")
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
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

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
