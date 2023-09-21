import './Your_animal_vaccines.css'

const Your_animal_vaccines = (props) => {
    return (
        <>
            <div>
                <div class="container" style={{ "margin-top": "50px", "margin-bottom": "70px" }}>
                    <div class="title">Vaccine</div>
                    <div class="content">
                        <form action="#" >
                            <div class="user-details">
                                <div className="input-box">
                                    <span className="details">Name of Vaccines animal</span>
                                    <p>{props.vaccines}</p>
                                </div>
                                <div className="input-box">
                                    <span className="details">Vaccine of date animla</span>
                                    <p>{props.vaccine_date}</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Your_animal_vaccines
