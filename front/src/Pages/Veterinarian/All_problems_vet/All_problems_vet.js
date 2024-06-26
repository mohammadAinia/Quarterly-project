import './All_problems_vet.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Problems, Header } from '../../../Componets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faRightFromBracket, faHouse } from '@fortawesome/free-solid-svg-icons'

const All_problems_vet = () => {
    const [Problim_info, setProblim_info] = useState([])
    const navigate = useNavigate()


    useEffect(() => {

        axios.get('http://localhost:3001/problim/show_all_problem', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setProblim_info(res.data.result)
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
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_vete"} a2={"FAQs"} href3={"/all_follow"} a3={"All Follow"} href4={"/Forum_vet"} a4={"Forum"} href6={"/Notifications_vet"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile_vet"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"Home_vet"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <section className="pricing" id="pricing" style={{ "margin-top": "00px" }}>
                <h2 className="heading" style={{ "margin-left": "100px" }}>Forum</h2>

                <div className="box-container" style={{ "width": "600px" }}>
                    {Problim_info.map((user, i) => {
                        return (
                            <div key={i}>
                                <Problems name={user.title} text={user.disc} hreflink={`Problem_id/${user.id}`} type={user.animal_type} id1={user.id} />
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default All_problems_vet
