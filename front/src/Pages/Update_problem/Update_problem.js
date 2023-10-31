import './Update_problem.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header } from '../../Componets'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse, faMessage, faUserDoctor, faStethoscope } from '@fortawesome/free-solid-svg-icons'
const Update_problem = () => {
    const navigate = useNavigate()


    const [Name, setName] = useState('')
    const [Details, setDetails] = useState('')
    const [Type, setType] = useState('')

    const { id } = useParams()

    useEffect(() => {

        axios.get(`http://localhost:3001/problim/show_problem/${id}`, { withCredentials: true })
            .then(res => {
                setName(res.data.result[0].title)
                setDetails(res.data.result[0].disc)
                setType(res.data.result[0].animal_type)
            })
            .catch(err => { console.log(err) })
    }, [])

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()

        axios.post(`http://localhost:3001/problim/update_problem/${id}`, { Name, Details, Type })
            .then(res => {
                if (res.data.valid) {
                    navigate('/my_problem')
                }
                else {
                    alert('EROR valid eror')
                    navigate('/login')

                }
            })
            .catch(err => alert(err))
    }
    return (
        <>
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href5={"/Add_Animal"} a5={<FontAwesomeIcon icon={faPlus} />} href6={"all_doc"} a6={<FontAwesomeIcon icon={faStethoscope} />} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href7={"/chat"} a7={<FontAwesomeIcon icon={faMessage} />} href8={"/Notifications"} a8={<FontAwesomeIcon icon={faBell} />} href9={"/profile"} a9={<div id="login-btn" className="fas fa-user"></div>} href10={"/"} a10={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <div>
                <div class="container" style={{ "margin-top": "270px", "margin-bottom": "70px" }}>
                    <div class="title">update Problem</div>
                    <div class="content">
                        <form onSubmit={handleSubmit} enctype="multipart/form-data">
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">title propblem </span>
                                    <input style={{ "width": "140%" }} type="text" value={Name} onChange={e => setName(e.target.value)} />
                                </div>
                                <div class="input-box">
                                    <span class="details" style={{ "margin-left": "95px" }}>type </span>
                                    <select value={Type} style={{
                                        "height": "30px", "width": "60%", "outline": "none",
                                        "font-size": "13px", "border-radius": "5px", "padding-left": "15px", "margin-left": "95px",
                                        "border": "1px solid #ccc", "border-color": "#f18221", "border-bottom-width": "2px", "transition": "all 0.3s ease"
                                    }} onChange={e => setType(e.target.value)}>
                                        <option value={"cat"} >Cat</option>
                                        <option value={"dog"}>Dog</option>
                                        <option value={"fish"}>Fish</option>
                                        <option value={"birds"}>Birds</option>
                                        <option value={"reptile"}>reptile</option>

                                    </select>
                                </div>
                                <div class="input-box">
                                    <span class="details">details</span>
                                    <textarea onChange={e => setDetails(e.target.value)} value={Details} style={{
                                        "height": "80px", "width": "215%", "outline": "none",
                                        "font-size": "16px", "border-radius": "5px", "padding-left": "15px",
                                        "border": "1px solid #ccc", "border-color": "#f18221", "border-bottom-width": "2px", "transition": "all 0.3s ease"
                                    }} />
                                </div>

                            </div>
                            <div class="button">
                                <button>update</button>
                            </div>
                            <div class="buttonn">
                                <a href="/my_problem">Back</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Update_problem
