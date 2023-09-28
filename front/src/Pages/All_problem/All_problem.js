import './All_problem'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Problems,Header } from '../../Componets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell } from '@fortawesome/free-solid-svg-icons'

const All_problem = () => {
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
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"Common Problems"} href5={"/Add_Animal"} a5={<FontAwesomeIcon icon={faPlus} />} href3={"/Animal_infoo"} a3={"All Animal"} href4={"/All_problem"} a4={"Ploblems"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/#"} a7={<div id="login-btn" className="fas fa-user"></div>} />

            <section className="pricing" id="pricing">
                <h2 className="heading">All Proplem</h2>

                <div className="box-container">
                    {Problim_info.map((user, i) => {
                        return (
                            <div key={i}>
                                <Problems name={user.title} type={user.disc} text={user.animal_type} id1={user.id} id2={user.id} />
                            </div>
                        )
                    })}
                </div>
            </section>

        </>
    )
}

export default All_problem
