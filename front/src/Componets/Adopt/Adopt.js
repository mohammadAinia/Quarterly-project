import './Adopt.css'
import b from '../../Assert/Images/cat.jpg'
import a from '../../Assert/Images/animal_1.jpg'


const Adopt = (props) => {
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
                        {props.name}
                    </h3>
                    <br />
                    <h3 style={{ "color": "#ff6e01", "font-size": "1.7em", "font-weight": "500", "margin": "10px" }}>description</h3>
                    <p>
                        {props.details}
                    </p>
                    <h3 style={{ "color": "#ff6e01", "font-size": "1.7em", "font-weight": "500", "margin": "10px" }}>Price</h3>
                    <p>
                        2828828
                    </p>
                    <h3 style={{ "color": "#ff6e01", "font-size": "1.7em", "font-weight": "500", "margin": "10px" }}>date</h3>
                    <p>
                        2022
                    </p>
                    <h3 style={{ "color": "#ff6e01", "font-size": "1.7em", "font-weight": "500", "margin": "10px" }}>phone</h3>
                    <p>
                        {props.phone}
                    </p>
                    <a href={`health_record${props.id}`} className="btn">Health Record</a>
                </div>
            </div>

        </>
    )
}

export default Adopt
