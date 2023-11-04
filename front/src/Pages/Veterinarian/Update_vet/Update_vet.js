import './Update_vet.css'
import a from '../../../Assert/Images/image.png'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header } from '../../../Componets'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'

const Update_vet = () => {

    const [First_name, setFirst_name] = useState('')
    const [Last_name, setLast_name] = useState('')
    const [Email, setEmail] = useState('')
    const [Age, setAge] = useState('')
    const [Phone, setPhone] = useState('')
    const [Addres, setAddres] = useState('')

    const { id } = useParams()

    useEffect(() => {

        axios.get('http://localhost:3001/#/#', { withCredentials: true })
            .then(res => {
                setFirst_name(res.data.result[0].first_name)
                setLast_name(res.data.result[0].last_name)
                setAge(res.data.result[0].age)
                setAge(res.data.result[0].email)
                setPhone(res.data.result[0].phone)
                setAddres(res.data.result[0].addres)

            })
            .catch(err => { console.log(err) })
    }, [])

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/#/#', { First_name, Last_name, Age, Phone ,Email , Addres})
            .then(res => {
                if (res.data.valid) {
                    alert('Modified successfully')
                    window.location.reload()


                }
                else {
                    alert('EROR valid eror')
                }
            })
            .catch(err => alert(err))

    }
    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_vete"} a2={"FAQs"} href3={"/all_follow"} a3={"All Follow"} href4={"/Forum_vet"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile_vet"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"Home_vet"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <form onSubmit={handleSubmit}>

                <div className="containet" style={{ "margin-top": "100px" }}>

                    <div className="left_side">

                        <div className="profiletext">
                            <div className="imgBx">
                                <img src={a} />
                            </div>
                            <h2>Profile <br /></h2>
                        </div>
                        <br />
                        <br />
                        <div className="contaner education">
                            <button style={{ "margin-left": "128px", "cursor": "pointer", "background": "white", "color": "#ff6e01" }} className='btnn titleee'>Update</button>
                        </div>

                    </div>
                    <div style={{ "margin-top": "50px" }} className="right_side">

                        <div className="skils">

                            <h2 className="title2"> Information </h2>
                            <div className="box">
                                <div className="fst">
                                    <h5>First name :</h5>
                                </div>
                                <div className="nameSkils">
                                    <input type="text" value={First_name} onChange={e => setFirst_name(e.target.value)} name='first_name' />
                                </div>
                            </div>

                            <div className="box">
                                <div className="fst">
                                    <h5>last name :</h5>
                                </div>
                                <div className="nameSkils">
                                    <input type="text" value={Last_name} onChange={e => setLast_name(e.target.value)} name='last_name' />
                                </div>
                            </div>
                            <div className="box">
                                <div className="fst">
                                    <h5>Email :</h5>
                                </div>
                                <div className="nameSkils">
                                    <input type="text" value={Email} onChange={e => setEmail(e.target.value)} name='email' />
                                </div>
                            </div>

                            <div className="box">
                                <div className="fst">
                                    <h5>Phone :</h5>
                                </div>
                                <div className="nameSkils">
                                    <input type="number" value={Phone} onChange={e => setPhone(e.target.value)} name='phone' />
                                </div>
                            </div>

                            <div className="box">
                                <div className="fst">
                                    <h5>Age :</h5>
                                </div>
                                <div className="nameSkils">
                                    <input type="date" value={Age} onChange={e => setAge(e.target.value)} name='age' />
                                </div>
                            </div>
                            <div className="box">
                                <div className="fst">
                                    <h5>Addres :</h5>
                                </div>
                                <div className="nameSkils">
                                    <input type="text" value={Addres} onChange={e => setAddres(e.target.value)} name='addres' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Update_vet
