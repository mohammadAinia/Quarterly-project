import './Common_proplem.css'

const Common_proplem = (props) => {
    return (
        <>


            <div className="box">
                <h2 style={{ "font-size": "24px" }}>{props.type}</h2>
                <br />
                <h2>{props.name}</h2>
                <br />
                <p style={{ "font-size": "15px" }}>{props.detals}</p>
                {/* <h4 className="price"><a href="/#">{props.a}</a></h4> */}
            </div>


        </>
    )
}

export default Common_proplem
