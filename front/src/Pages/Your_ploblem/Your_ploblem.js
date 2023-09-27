import './Your_ploblem.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Your_prob} from '../../Componets/index'

const Your_ploblem = () => {

    const navigate = useNavigate()
    const [Info, setInfo] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3001/problim/show_my_pob', { withCredentials: true })
            .then(res => {
                if (1 == 1) {
                    setInfo(res.data)
                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })
    }, [])
    return (
        <>

            <section className="pricing" id="pricing">
                <h2 className="heading">Proplem</h2>

                <div className="box-container">
                    {Info.map((user, i) => {
                        return (
                            <div key={i}>
                                <Your_prob name={user.title} type={user.disc} text={user.animal_type} id1={user.id} id2={user.id} />
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Your_ploblem
