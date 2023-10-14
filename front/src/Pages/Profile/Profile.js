import './Profile.css'
import { Header, Profilee } from '../../Componets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Profile = () => {
    const navigate = useNavigate()
    const [Info, setInfo] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3001/user/show_pofile', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setInfo(res.data.result)
                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })
    }, [])
    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"Common Problems"} href5={"/Add_Animal"} a5={<FontAwesomeIcon icon={faPlus} />} href3={"/Animal_infoo"} a3={"All Animal"} href4={"/All_problem"} a4={"Ploblems"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />
            {Info.map((d, i) => {
                return (
                    <div key={i}>
                        <Profilee id={d.id} first_name={d.first_name} last_name={d.last_name} email={d.email} phone={d.phone} age={d.age} gender={d.gender}/>
                    </div>
                )
            })}
        </>
    )
}
export default Profile


