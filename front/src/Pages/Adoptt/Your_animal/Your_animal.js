import './Your_animal.js'
import { Card, SectionHeader } from '../../../Componets/index'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import b from '../../../Assert/Images/cat.jpg'

const Your_animal = () => {

    const [Animall_info, setAnimal_info] = useState([])

    const navigate = useNavigate()

    const handleDelete =  () => {
            console.log("kdkkdk")

    }

    // useEffect(() => {
    //     axios.get('http://localhost:3001/user/', { withCredentials: true })
    //         .then(res => {
    //             if (res.data.valid) {
    //                 setAnimal_info(res.data.result)

    //             }
    //             else {
    //                 navigate('/login')
    //             }
    //         })
    //         .catch(err => { console.log(err) })

    // },
    //     [])
    return (
        <>
            <section className="animal" id="animal" >
                <SectionHeader>Your Animals</SectionHeader>
                <div className="">
                    <div className="heading">
                    </div>
                </div>
                <div className="box-container">

                    <div className="box-container">
                        <div className="box">
                            <img src={b} alt="You don't have any animals" />
                            <div className="content">
                                <h3>cat</h3>
                                {/* <a href={''} className="btn">{''} <button onClick={alert('ss')} style={{ "color": "white", "background": "none", "fontSize": "17.5px" }}>Addition adoption</button></a> */}
                                <button onClick={e => alert('jjjjjdj')} className='btn'>Addition adoption</button>
                            </div>
                        </div>
                    </div>

                    {/* {Animall_info.map((user, i) => {
                        return (
                            <div key={i}>
                                <Card image={'http://localhost:3001/uploads/' + user.urlImage} name={user.name} link={"Addition adoption"} id={user.id} />
                            </div>
                        )
                    })} */}
                </div>
            </section>
        </>
    )
}

export default Your_animal
