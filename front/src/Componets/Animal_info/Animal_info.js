import './Animal_info.css'

const Animal_info = (props) => {
    return (
        <>
            <section className="banner">

                <div className="row">

                    <div className="content">
                        <h3>{props.header}</h3>
                        <p style={{"text-transform":"lowercase"}}>{props.p}</p>
                        <p>{props.age}</p>
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
