import './About_your_animal.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const About_your_animal = (props) => {

    const navigate = useNavigate()

    const handleDelete = async (id)=>{
        try{
            await axios.delete('http://localhost:3001/animal/delete/'+id)
            window.location.reload()
        }
        catch(err){console.log(err)}
    }
    
    return (
        <>
            <div>
                <div class="container" style={{ "margin-top": "400px", "margin-bottom": "20px" }}>
                    <div class="title">Animal Info</div>
                    <div class="content">
                        <form action="#" >
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">name animal</span>
                                    <p>{props.name}</p>
                                </div>
                                <div class="input-box">
                                    <span class="details">Age</span>
                                    <p>{props.age}</p>
                                </div>
                                <div class="input-box">
                                    <span class="details">Animal Place</span>
                                    <p>{props.place}</p>
                                </div>
                                <div class="input-box">
                                    <span class="details">Animal color</span>
                                    <p>{props.color}</p>
                                </div>
                                <div class="input-box">
                                    <span class="details">Additional details </span>
                                    <p>{props.details}</p>
                                </div>
                                <div class="input-box">
                                    <span class="details">type </span>
                                    <p>{props.type}</p>
                                </div>
                                <div className="input-box">
                                    <span className="details">Gender</span>
                                    <p>{props.gender}</p>
                                </div>
                                <div className="input-box">
                                    <span className="details">Weight kg</span>
                                    <p>{props.weight}</p>
                                </div>
                                <div className="input-box">
                                    <span className="details">Height cm</span>
                                    <p>{props.height}</p>
                                </div>
                                <div className="input-box">
                                    <span className="details">Health Status</span>
                                    <p>{props.health}</p>
                                </div>
                            </div>
                            <div class="button">
                                <button onClick={e =>handleDelete(props.id2)}>Delete</button>
                            </div>
                            <div class="buttonn">
                                {/* <a href="/#">Update info</a> */}
                                <Link to={`update/${props.id2}`}>Update</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About_your_animal
