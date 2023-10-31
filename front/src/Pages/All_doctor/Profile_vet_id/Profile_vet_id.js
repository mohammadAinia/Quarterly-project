import './Profile_vet_id.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header, Profile_id_vet } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'

const Profile_vet_id = () => {

    const { id } = useParams()
    const [Info, setInfo] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/vet/profile/${id}`, { withCredentials: true })
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
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href5={"/Add_Animal"} a5={<FontAwesomeIcon icon={faPlus} />} href3={"/Animal_infoo"} a3={"All Animal"} href4={"/All_problem"} a4={"Ploblems"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            {Info.map((d, i) => {
                return (
                    <div key={i}>
                        <Profile_id_vet university={d.university} first_name={d.first_name} last_name={d.last_name} email={d.email} phone={d.phone} age={d.age} Nationality={d.nation} Addres={d.address} gender={d.gender} />
                    </div>
                )
            })}
        </>
    )
}

export default Profile_vet_id
