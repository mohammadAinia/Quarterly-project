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
            <section class="cards contact" id="contact">
                <h2 class="title">Notifications</h2>
                <div class="content">
                    {Info.map((d, i) => {
                        return (
                            <div key={i}>
                                <Notification title={d.title} text={d.text} id={d.id}/>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Notifications