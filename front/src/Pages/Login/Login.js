import './Login.css'

const Login = () => {
    return (
    <>
            <form action="" className="login-form">

                <h3>login form</h3>

                <input type="email" placeholder="Enter your email" className="box"/>
                    <input type="password" placeholder="Enter your password" className="box"/>
                        <div className="remember">
                            <input type="checkbox" name="" id="remember-me"/>
                                <label for="remember-me">remember me</label>
                        </div>
                        <a href="#" className="btn">login</a>

                    </form>
                </>
                )
}

export default Login
