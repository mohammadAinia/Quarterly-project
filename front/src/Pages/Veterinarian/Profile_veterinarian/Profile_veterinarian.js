import './Profile_veterinarian.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header, Profile_vet } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'

const Profile_veterinarian = () => {

    const { id } = useParams()
    const [Info, setInfo] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/#/#', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setInfo(res.data.result)
                }
                else alert("err")
            })
            .catch(err => { alert(err) })
    }, [])
    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_vete"} a2={"FAQs"} href3={"/all_follow"} a3={"All Follow"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"Home_vet"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            {Info.map((d, i) => {
                return (
                    <div key={i}>
                        <Profile_vet university={d.university} first_name={d.first_name} last_name={d.last_name} email={d.email} phone={d.phone} age={d.age} Nationality={d.nation} Addres={d.address} gender={d.gender} />
                    </div>
                )
            })}
        </>
    )
}

export default Profile_veterinarian
