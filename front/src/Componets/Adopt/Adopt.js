import './Adopt.css'
import b from '../../Assert/Images/cat.jpg'
import a from '../../Assert/Images/animal_1.jpg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Adopt = (props) => {

    const handleRequistAdopt = async () => {
        try {
            await axios.delete('http://localhost:3001/animal/#/')
            
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
                        cat
                        {props.name}
                    </h3>
                    <br />
                    <h3 style={{ "color": "#ff6e01", "font-size": "1.7em", "font-weight": "500", "margin": "10px" }}>Name</h3>
                    <p>
                        jojo
                    </p>
                    <h3 style={{ "color": "#ff6e01", "font-size": "1.7em", "font-weight": "500", "margin": "10px" }}>description</h3>
                    <p>
                        gjfngjfn
                        {props.details}
                    </p>
                    <h3 style={{ "color": "#ff6e01", "font-size": "1.7em", "font-weight": "500", "margin": "10px" }}>phone</h3>
                    <p>
                        0992288581
                        {props.phone}
                    </p>
                    <a href={`health_record${props.id}`} className="btn">See Details</a>
                    <br />


                    <a href={props.href} className="btn"> <button style={{ "color": "white", "background": "none", "fontSize": "17.5px" }} onClick={e => handleRequistAdopt} >adoption</button></a>
                </div>
            </div>

        </>
    )
}

export default Adopt
