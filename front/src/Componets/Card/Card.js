import './Card.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <>

            <div className="box-container">
                <div className="box">
                    <img src={props.image} alt="You don't have any animals" />
                    <div className="content">
                        <h3>{props.name}</h3>
                        <a href={props.href} className="btn">{props.a} <Link style={{ "color": "white"}} to={props.href_link}>{props.link}</Link> </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
