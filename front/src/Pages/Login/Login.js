import './Login.css'

const Login = () => {
    return (
        <>
            <div class="container">
                <div class="title">Login</div>
                <div class="content">
                    <form action="#">
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details">Email *</span>
                                <input type="text" placeholder="Enter your email" required />
                            </div>
                            <div class="input-box">
                                <span class="details">Password</span>
                                <input type="text" placeholder="Enter your password" required />
                            </div>
                        </div>
                        <div class="button">
                            <input type="submit" value="Login" />
                        </div>
                        {/* <div class="button">
                            <input type="submit" value="Sign up" />
                        </div> */}
                        <div class="button">
                            <a href="/TypeRegister">Sign up</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
