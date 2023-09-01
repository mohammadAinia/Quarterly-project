import './Register_owner.css'

const Register_owner = () => {
    return (
        <div>
            <div class="container">
                <div class="title">Registration Owner</div>
                <div class="content">
                    <form action="#">
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details">First Name</span>
                                <input type="text" placeholder="required" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Last Name</span>
                                <input type="text" placeholder="required" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Email</span>
                                <input type="text" placeholder="required" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Phone Number</span>
                                <input type="text" placeholder="required" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Password</span>
                                <input type="text" placeholder="required" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Confirm Password</span>
                                <input type="text" placeholder="required" required />
                            </div>
                        </div>
                        <div class="button">
                            <input type="submit" value="Next" />
                        </div>
                        <div class="buttonn">
                            <a href="/Back_to_type">Back</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register_owner
