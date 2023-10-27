import './Home.css'
import { useEffect, useState } from 'react'
import { Card, Bunner, Problems, Header, SectionHeader, Animal_info, Button, Add_proplem } from '../../../Componets/index'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import animal_image from '../../../Assert/Images/—Pngtree—parrot_1001948.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse, faMessage } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [name, setName] = useState('')
    const [Animall_info, setAnimal_info] = useState([])
    const [Problim_info, setProblim_info] = useState([])
    const [Advice, setAdvice] = useState([])
    const [Isnotefi, setIsnotefi] = useState('')


    const navigate = useNavigate()

    useEffect(() => {

        axios.get('http://localhost:3001/user/', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setName(res.data.username)
                    // setAnimal_info(res.data.result)
                    setProblim_info(res.data.resultt)
                    setAdvice(res.data.resulttt)
                    setIsnotefi(res.data.resultttt)
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
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_vete"} a2={"Common Problems"}  href3={"/#"} a3={"All Follow"} href4={"/All_problem"} a4={"Ploblems"} href6={"/chat"} a6={<FontAwesomeIcon icon={faMessage} />} href7={"/Notifications"} a7={<FontAwesomeIcon icon={faBell} />} href8={"/profile"} a8={<div id="login-btn" className="fas fa-user"></div>} href9={"/"} a9={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <section className="bbanner" style={{ "margin-top": "1100px" }}>
                <div className="row">
                    <div className="content">
                        <h3>{"Welcome   " + name}</h3>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className='nav'>

                            <h3 style={{ "margin-left": "10px" }}>     your advice</h3>

                            {Advice.map((user, i) => {
                                return (
                                    <div key={i}>
                                        <Bunner p1={user.one}
                                            p2={user.gen_tip}
                                        // p3={user.gen_tip} 
                                        />
                                    </div>
                                )
                            })}

                        </div>
                        <p style={{ "color": "red" }}>{Isnotefi}</p>
                    </div>
                    <div className="image">
                        <img src={animal_image} alt="" />
                    </div>
                </div>
            </section>


            <section className="animal" id="animal" >
                <SectionHeader>follow cases</SectionHeader>
                <div className="">
                    <div className="heading">
                    </div>
                </div>
                <div className="box-container">

                    {/* {Animall_info.map((user, i) => {
                        return (
                            <div key={i}>
                                <Card image={'http://localhost:3001/uploads/' + user.urlImage} name={user.name} link={"see details"} id={user.id} />
                            </div>
                        )
                    })} */}
                </div>
            </section>

            <Add_proplem />

            <section className="pricing" id="pricing">
                <h2 className="heading">Proplem</h2>

                <div className="box-container" >
                    {Problim_info.map((user, i) => {
                        return (
                            <div key={i}>
                                <Problems name={user.title} text={user.disc} type={user.animal_type} id1={user.id} />
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Home
