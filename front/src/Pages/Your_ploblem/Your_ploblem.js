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

            <section className="pricing" id="pricing" style={{ "margin-top":"400px"}}>
                <h2 className="heading" style={{ "margin-left":"90px"}}>Proplem</h2>

                <div className="box-container" style={{ "width":"600px" }}>
                    {Info.map((user, i) => {
                        return (
                            <div key={i}>
                                <Your_prob name={user.title} text={user.disc} type={user.animal_type} id1={user.id} id2={user.id} />
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Your_ploblem
