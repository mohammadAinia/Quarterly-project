import './Common_proplem.css'

const Common_proplem = () => {
    return (
        <>
            <section className="pricing" id="pricing" style={{ "margin-top": "600px"}}>

                <h2 className="heading">pricing</h2>

                <div className="box-container">

                    <div className="box">
                        <img src="images/pricing1.png" alt=""/>
                            <h3>individuals</h3>
                            <h4 className="price">$ 10</h4>
                            <p>the entrance is from 8:00 to 14:00</p>
                    </div>

                    <div className="box">
                        <img src="images/pricing2.png" alt=""/>
                            <h3>school</h3>
                            <h4 className="price">$ 20</h4>
                            <p>the entrance is from 8:00 to 14:00</p>
                    </div>

                    <div className="box">
                        <img src="images/pricing1.png" alt=""/>
                            <h3>family</h3>
                            <h4 className="price">$ 30</h4>
                            <p>the entrance is from 8:00 to 14:00</p>
                    </div>

                </div>

            </section>

        </>
    )
}

export default Common_proplem
