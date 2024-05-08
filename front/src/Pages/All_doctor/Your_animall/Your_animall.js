import './Your_animall.css'
import { Card, SectionHeader, Header } from '../../../Componets/index'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';

const Your_animall = () => {

    const [Animall_info, setAnimal_info] = useState([])
    const { id } = useParams()

    const navigate = useNavigate()

    const AddRequst = async (id2) => {
        try {
            await axios.get(`http://localhost:3001/vet/addreq/${id}/${id2}`, { withCredentials: true })
            // alert('The request has been sent successfully')
            // navigate(-1)
            Swal.fire({
                title: "Good job!",
                text: "The request has been sent successfully",
                icon: "success",
                customClass: {
                    container: 'enlarged-alert-container',
                    popup: 'enlarged-alert-popup',
                    title: 'enlarged-alert-title',
                    htmlContainer: 'enlarged-alert-html-container',
                    confirmButton: 'enlarged-alert-confirm-button',
                },
                position: 'center',
                backdrop: false,
            }).then(() => {
                navigate(-1);
            });
        }
        catch (err) { console.log(err) }
    }

    useEffect(() => {
        axios.get('http://localhost:3001/animal/show_all_animal_ad', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setAnimal_info(res.data.result)
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
            <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href5={"/Add_Animal"} a5={<FontAwesomeIcon icon={faPlus} />} href3={"/Animal_infoo"} a3={"All Animal"} href4={"/All_problem"} a4={"Ploblems"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

            <section className="animal" id="animal">
                <SectionHeader>Chose from your animal </SectionHeader>
                <div className="">
                    <div className="heading">
                    </div>
                </div>
                <div className="box-container">
                    {Animall_info.map((user, i) => {
                        return (
                            <div key={i}>
                                <div className="box-container">
                                    <div className="box">
                                        <img src={'http://localhost:3001/uploads/' + user.urlImage} alt="You don't have any animals" />
                                        <div className="content">
                                            <h3>{user.name}</h3>
                                            <button onClick={e => AddRequst(user.id)} className='btn'>Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Your_animall
