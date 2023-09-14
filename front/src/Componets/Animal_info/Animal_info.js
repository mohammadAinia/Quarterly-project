import './Animal_info.css'

const Animal_info = (props) => {
    return (
        <>
            <section className="banner">

                <div className="row">

                    <div className="content">
                        <h3>{props.header}</h3>
                        <p>{props.age}</p>
                        <p>{props.color}</p>
                        <p>{props.place}</p>
                        <p>{props.type}</p>
                        <p>{props.gender}</p>
                        <p>{props.p}</p>
                    </div>
                    <div className="image">
                        <img src={props.image} alt="" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Animal_info
