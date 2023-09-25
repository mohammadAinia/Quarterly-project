import './Animal_info.css'

const Animal_info = (props) => {
    return (
        <>
            <section className="banner">

                <div className="row">

                    <div className="content">
                        <h3>{props.header}</h3>
                        <br />
                        <br />
                        <br />
                        <br />
                        <h3>{props.advice}</h3>
                        <br />
                        <div className='nav'>
                            <p>{props.p}</p>
                            <br />
                            <p>{props.p2}</p>
                            <br />
                            <p>{props.p3}</p>
                        </div>
                        <p>{props.p}</p>
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
