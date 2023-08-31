import './RegistrationType.css'

const RegistrationType = () => {
  return (
    <>
      <div class="container">
                <div class="title">Login</div>
                <div class="content">
                    <form action="#">
                        <div class="button">
                            <input type="submit" value="Login" />
                        </div>
                        {/* <div class="button">
                            <input type="submit" value="Sign up" />
                        </div> */}
                        <div class="button">
                            <a href="/Register">Sign up</a>
                        </div>
                    </form>
                </div>
            </div>
    </>
  )
}

export default RegistrationType
