import './Common_proplem.css'

const Common_proplem = (props) => {
    return (
        <>
            <section className="pricing" id="pricing" >

                <h2 className="heading">Common Proplem</h2>

                <div className="box-container">

                    <div className="box">
                        {/* <img src="images/pricing1.png" alt=""/> */}
                            <h3>{props.name}</h3>
                            <p>{props.detals}</p>
                            <h4 className="price"><a href="/#">{props.a}</a></h4>
                    </div>

                </div>

            </section>

        </>
    )
}

export default Common_proplem
