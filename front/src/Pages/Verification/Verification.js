import './Verification.css'

const Verification = () => {
    return (
        <>
            <div class="container">
                <div class="title">Enter the verification code</div>
                <div class="content">
                    <form action="#">
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details"></span>
                                <input style={{"width":"320px"}} type="number" placeholder="Please check the email" required />
                            </div>
                        </div>
                        <div class="button">
                            <input type="submit" value="Register" />
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Verification
