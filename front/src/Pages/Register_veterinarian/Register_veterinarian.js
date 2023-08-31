import './Register_veterinarian.css'

const Register_veterinarian = () => {
  return (
    <>
      <div style={{"margin-top":"600px" , "margin-bottom":"70px"}}>
        <div class="container" >
          <div class="title">Registration Veterinarian</div>
          <div class="content">
            <form action="#">
              <div class="user-details">
                <div class="input-box">
                  <span class="details">First Name</span>
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div class="input-box">
                  <span class="details">Last Name</span>
                  <input type="text" placeholder="Enter your Last Name" required />
                </div>
                <div class="input-box">
                  <span class="details">Email</span>
                  <input type="text" placeholder="Enter your email" required />
                </div>
                <div class="input-box">
                  <span class="details">Phone Number</span>
                  <input type="text" placeholder="Enter your number" required />
                </div>
                <div class="input-box">
                  <span class="details">Password</span>
                  <input type="text" placeholder="Enter your password" required />
                </div>
                <div class="input-box">
                  <span class="details">Confirm Password</span>
                  <input type="text" placeholder="Confirm your password" required />
                </div>
                <div class="input-box">
                  <span class="details">Age</span>
                  <input type="number" placeholder="Enter Your Age" required />
                </div>
                <div class="input-box">
                  <span class="details">Nationality</span>
                  <input type="text" placeholder="Enter Nationality" required />
                </div>
                <div class="input-box">
                  <span class="details">Addres</span>
                  <input type="text" placeholder="Enter Addres" required />
                </div>
                <div class="input-box">
                  <span class="details">Enter the name of the graduation university</span>
                  <input type="text" placeholder="Enter the name of the graduation university" required />
                </div>
                <div class="input-box">
                  <span class="details">A copy of the bachelor's degree</span>
                  <input type="file" required />
                </div>
                <div class="input-box">
                  <span class="details">Details of previous work</span>
                  <input type="text" placeholder="Optinal" required />
                </div>
                <div class="input-box">
                  <span class="details">Photograph</span>
                  <input type="file"  />
                </div>
              </div>
              <div class="gender-details">
                <input type="radio" name="gender" id="dot-1" />
                <input type="radio" name="gender" id="dot-2" />
                <span class="gender-title">Gender</span>
                <div class="category">
                  <label for="dot-1">
                    <span class="dot one"></span>
                    <span class="gender">Male</span>
                  </label>
                  <label for="dot-2">
                    <span class="dot two"></span>
                    <span class="gender">Female</span>
                  </label>
                </div>
              </div>
              <div class="button">
                <input type="submit" value="Register" />
              </div>
              <div class="buttonn">
                <a href="/Back_to_type">Back</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register_veterinarian
