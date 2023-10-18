import './Adopt.css'
import b from '../../Assert/Images/cat.jpg'
import a from '../../Assert/Images/animal_1.jpg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Adopt = (props) => {

    const handleRequistAdopt = async (id) => {
        try {
            await axios.get('http://localhost:3001/adopt/adopt/'+id,{withCredentials: true })

            alert('Your adoption request has been successful')
        }
        catch (err) { console.log(err) }
    }
    return (
        <>
            <div className="card">

                <div className="profiletext">
                    <div className="imgBx">
                        <img src={props.image} />
                    </div>
                </div>
                <div className="icons" style={{ "color": "#ff6e01", "font-size": "4em", "text-align": "center" }}>
                    <i className="fa-solid fa-user-large"></i>
                </div>
                <div className="info">
                    <h3>
                        {props.type}
                    </h3>
                    <br />
                    <h3 style={{ "color": "#ff6e01", "font-size": "1.7em", "font-weight": "500", "margin": "10px" }}>date</h3>
                    <p>
                        {props.date}
                    </p>
                    <h3 style={{ "color": "#ff6e01", "font-size": "1.7em", "font-weight": "500", "margin": "10px" }}>Name</h3>
                    <p>
                        {props.name}
                    </p>
                    <h3 style={{ "color": "#ff6e01", "font-size": "1.7em", "font-weight": "500", "margin": "10px" }}>phone</h3>
                    <p>
                        {props.phone}
                    </p>
                    <a href={`Animal_info_adopt/${props.id}`} className="btn">See Details</a>
                    <br />
                    <a href={props.href} className="btn"> <button style={{ "color": "white", "background": "none", "fontSize": "17.5px" }} onClick={e => handleRequistAdopt(props.id)} >adoption</button></a>
                </div>
            </div>

        </>
    )
}

export default Adopt
