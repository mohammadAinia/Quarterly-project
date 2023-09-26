import './All_problem'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Problems } from '../../Componets'

const All_problem = () => {
    const [Problim_info, setProblim_info] = useState([])
    const navigate = useNavigate()
    

    useEffect(() => {

        axios.get('http://localhost:3001/#/', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setProblim_info(res.data.resultt)
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
