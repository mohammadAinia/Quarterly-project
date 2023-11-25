import './FAQs.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Button, Common_proplem, Header } from '../../../Componets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faRightToBracket, faPaw, faStoreSlash, faCoins, faFaceSmileWink, faBolt,
    faClock, faArrowsRotate, faComments, faHandHoldingHeart, faHouseCircleCheck,
    faUsers, faArrowRightArrowLeft, faPaperPlane
} from '@fortawesome/free-solid-svg-icons'


const FAQs = () => {
    const [Proplems, setProplems] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        axios.get('http://localhost:3001/co_problim/FAQ')
            .then(res => {
                setProplems(res.data)

            })
            .catch(err => { console.log(err) })
    },
        [])
    return (
        <>
            <Header href1={"/Animal"} a1={"About Pets"} href3={"FAQs"} a3={"FAQs"} log={'/Loginn'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightToBracket} /></div>} />
            <section className="pricing" id="pricing" style={{ "margin-top": "4500px" }}>

                <h2 className="heading" style={{ "margin-left": "100px" }}>FAQs</h2>

                <div className="box-container" style={{ "width": "600px" }}>

                    {Proplems.map((i, d) => {
                        return (
                            <div key={d}>

                                <Common_proplem type={i.animal_type} name={i.title} detals={i.disc} />

                            </div>
                        )
                    })}
                </div>

            </section>
        </>
    )
}

export default FAQs
