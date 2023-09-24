import './Problem_id.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header, Problem_id_comp } from '../../Componets'
import { useNavigate, useParams } from 'react-router-dom'


const Problem_id = (props) => {

    const [Problim_info, setProblim_info] = useState('')
 

    const { id } = useParams()

    useEffect(() => {

        axios.get(`http://localhost:3001/#/${id}`)
            .then(res => {
                setProblim_info(res.result)
            })
            .catch(err => { console.log(err) })
    }, [])


    return (
        <>
        
            <section className="pricing" id="pricing">
                <h2 className="heading">Proplem</h2>

                <div className="box-container">
                    {Problim_info.map((user, i) => {
                        return (
                            <div key={i}>
                                <Problem_id_comp name={user.title} type={user.disc} text={user.animal_type} id1={user.id_problim} />
                            </div>
                        )
                    })}
                </div>
            </section>
            
        </>
    )
}

export default Problem_id
