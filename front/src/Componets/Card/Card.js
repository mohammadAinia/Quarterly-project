import './Card.css'

const Card = (props) => {
    return (
        <>

                <div className="box-container">
                    <div className="box">
                        <img src={props.image} alt="" />
                        <div className="content">
                            <h3>{props.name}</h3>
                            <a href={props.href} className="btn">see datails</a>
                        </div>
                    </div>

                </div>
        </>
    )
}

export default Card
