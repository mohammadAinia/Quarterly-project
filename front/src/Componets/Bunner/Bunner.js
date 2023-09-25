import './Bunner.css'

const Bunner = (props) => {
    return (
        <>
            <section className="bbanner">

                <div className="row">

                    <div className="content">
                        <h3>{props.header}</h3>
                        <br />
                        <br />
                        <br />
                        <br />
                        <h3>advice</h3>
                        <br />
                        <div className='nav'>

                            <p>{props.p1}</p>
                            <br />
                            <p>{props.p2}</p>
                            <br />
                            <p>{props.p3}</p>
                        </div>
                    </div>
                    <div className="image">
                        <img src={props.image} alt="" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Bunner
