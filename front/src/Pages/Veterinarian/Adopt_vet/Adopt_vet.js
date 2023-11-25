import './Adopt_vet.css'
import { Adopt, Header, Button } from '../../../Componets'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faRightFromBracket, faHouse } from '@fortawesome/free-solid-svg-icons'

const Adopt_vet = () => {

    const navigate = useNavigate()
    const [Adopt_info, setAdopt_info] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3001/adopt/show_adop', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setAdopt_info(res.data.result)
                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })
    }, [])
    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_vete"} a2={"FAQs"} href5={"Choose_type_add_animal_to_adopt_vet"} a5={<FontAwesomeIcon icon={faPlus} />} href3={"/all_follow"} a3={"All Follow"} href4={"/Forum_vet"} a4={"Forum"} href6={"/Notifications_vet"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile_vet"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"Home_vet"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <section style={{ "margin-top": "00px" }} className="cards" id="services">
                <h2 className="heading">Adopt</h2>
                <div className="content">
                    {Adopt_info.map((d, i) => {
                        return (
                            <div key={i}>
                                <Adopt image={'http://localhost:3001/uploads/' + d.urlImage} type={d.type} date={d.age} name={d.name} phone={d.phone} details={`Animal_info_adopt_vet/${d.id}`} id={d.id} />
                            </div>
                        )
                    })}
                </div>
            </section >
        </>
    )
}

export default Adopt_vet
