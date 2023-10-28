import './Profile_id_vet.css'
import a from '../../../Assert/Images/image.png'

const Profile_id_vet = (props) => {
    return (
        <>
            <div className="containet" style={{ "margin-top": "100px", "margin-left": "30px" }}>

                <div className="left_side">

                    <div className="profiletext">
                        <div className="imgBx">
                            <img src={a} />
                        </div>
                        <h2>Profile <br /></h2>
                    </div>
                </div>
                <div style={{ "margin-top": "50px" }} className="right_side">

                    <div className="skils">

                        <h2 className="title2"> Information </h2>
                        <div className="box">
                            <div className="fst">
                                <h5>First name :</h5>
                            </div>
                            <div className="nameSkils">
                                <h4>{props.first_name}</h4>

                            </div>
                        </div>

                        <div className="box">
                            <div className="fst">
                                <h5>last name :</h5>
                            </div>
                            <div className="nameSkils">
                                <h4>{props.last_name}</h4>
                            </div>
                        </div>

                        <div className="box">
                            <div className="fst">
                                <h5>Email :</h5>
                            </div>
                            <div className="nameSkils">
                                <h4>{props.email}</h4>
                            </div>
                        </div>

                        <div className="box">
                            <div className="fst">
                                <h5>Phone :</h5>
                            </div>
                            <div className="nameSkils">
                                <h4>{props.phone}</h4>
                            </div>
                        </div>

                        <div className="box">
                            <div className="fst">
                                <h5>BirthDate :</h5>
                            </div>
                            <div className="nameSkils">
                                <h4>{props.age}</h4>
                            </div>
                        </div>

                        <div className="box">
                            <div className="fst">
                                <h5>Nationality :</h5>
                            </div>
                            <div className="nameSkils">
                                <h4>{props.Nationality}</h4>
                            </div>
                        </div>

                        <div className="box">
                            <div className="fst">
                                <h5>Addres :</h5>
                            </div>
                            <div className="nameSkils">
                                <h4>{props.Addres}</h4>
                            </div>
                        </div>

                        <div className="box">
                            <div className="fst">
                                <h5>university :</h5>
                            </div>
                            <div className="nameSkils">
                                <h4>{props.university}</h4>
                            </div>
                        </div>

                        <div className="box">
                            <div className="fst">
                                <h5>Gender :</h5>
                            </div>
                            <div className="nameSkils">
                                <h4>{props.gender}</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile_id_vet
