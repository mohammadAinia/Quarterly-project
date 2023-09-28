import './Notifications.css'
import { Header, Notification } from '../../Componets'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Notifications = () => {

    const navigate = useNavigate()
    const [Info, setInfo] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3001/#/#')
            .then(res => {
                if (1 == 1) {
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
            <a href='/' style={{ "margin-left": "1300px" , "margin-top":"30px" }} className="btn" >Back</a>

            <section style={{ "backgroundColor": "#f5f5f5" }} class="cards contact" id="contact">
                <h2 class="titlee">Notifications</h2>

                <div class="content">
                    {Info.map((d, i) => {
                        return (
                            <div key={i}>
                                <Notification title={d.title} text={d.text} id={d.id} />
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Notifications