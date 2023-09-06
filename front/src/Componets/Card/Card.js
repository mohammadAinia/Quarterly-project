import './Card.css'

const Card = (props) => {
    return (
        <>
            <section className="animal" id="animal" >

                <div className="box-container">
                    <div className="box">
                        <img src={props.image} alt="" />
                        <div className="content">
                            <h3>{props.name}</h3>
                            <a href="#" className="btn">see datails</a>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Card
