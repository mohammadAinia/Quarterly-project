import './Profile_id.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header, Profilee_id } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'

const Profile_id = () => {
    const { id } = useParams()
    const [Info, setInfo] = useState([])
    const [Animals, setAnimals] = useState([])
    var names = ''
    var a=[]

    useEffect(() => {
        axios.get(`http://localhost:3001/chat/show_profile/${id}`, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setInfo(res.data.result)
                    setAnimals(res.data.results)
                }
                else alert("err")
            })
            .catch(err => { alert(err) })
    }, [])

    Animals.map((d,i)=>{
        
            a.push(d.type+",")
    
    })
    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"Common Problems"} href5={"/Add_Animal"} a5={<FontAwesomeIcon icon={faPlus} />} href3={"/Animal_infoo"} a3={"All Animal"} href4={"/All_problem"} a4={"Ploblems"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            {Info.map((d, i) => {
                return (
                    <div key={i}>
                        <Profilee_id first_name={d.first_name} last_name={d.last_name} email={d.email} phone={d.phone} age={d.age} gender={d.gender} animals={a} />
                    </div>
                )
            })}
            {/* {Animals.map((d, i) => {
                return (
                    <div key={i}>
                        <Profilee_id first_name={d.name} />
                    </div>
                )
            })} */}
        </>
    )
}

export default Profile_id
