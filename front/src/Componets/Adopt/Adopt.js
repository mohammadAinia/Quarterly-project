import './Adopt.css'
import b from '../../Assert/Images/cat.jpg'

const Adopt = (props) => {
    return (
        <>

            <div className="profiletext">
                <div className="imgBx">
                    <img src={b} />
                </div>
            </div>
            <div className="icons" style={{ "color": "#ff6e01", "font-size": "4em", "text-align": "center" }}>
                <i className="fa-solid fa-user-large"></i>
            </div>
            <div className="info">
                <h3>
                    Cat
                </h3>
                <br />
                <h3 style={{ "color": "#ff6e01", "font-size": "1.7em", "font-weight": "500", "margin": "10px" }}>description</h3>
                <p>
                    I have a medium-sized cat in good health,
                    34 feet tall and 45 pounds in weight.
                    She eats meat and is cheerful
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
                    050505055
                </p>
                <a href={`health_record${props.id}`} className="btn">Health Record</a>
            </div>

        </>
    )
}

export default Adopt
