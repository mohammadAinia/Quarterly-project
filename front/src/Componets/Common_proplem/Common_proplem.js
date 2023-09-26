import './Common_proplem.css'

const Common_proplem = (props) => {
    return (
        <>


            <div className="box">
                {/* <img src="images/pricing1.png" alt=""/> */}
                <h3>{props.name}</h3>
                <p>{props.detals}</p>
                <h4 className="price"><a href="/#">{props.a}</a></h4>
            </div>


        </>
    )
}

export default Common_proplem
