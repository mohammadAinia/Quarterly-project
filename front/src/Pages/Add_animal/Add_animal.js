import './Add_animal.css'

const Add_animal = () => {
  return (
    <>
      <div style={{"margin-top":"600px" , "margin-bottom":"70px"}}>
        <div class="container">
          <div class="title">Registration Animal</div>
          <div class="content">
            <form action="#">
              <div class="user-details">
                <div class="input-box">
                  <span class="details">name of the animal</span>
                  <input type="text" placeholder="required" required />
                </div>
                <div class="input-box">
                  <span class="details">Type of animal</span>
                  <input type="text" placeholder="required" required />
                </div>
                <div class="input-box">
                    <span class="details">Age</span>
                    <input type="number" placeholder="required" required />
                  </div>
                  <div class="input-box">
                    <span class="details">Animal color</span>
                    <input type="text" placeholder="required" required />
                  </div>
                  <div class="input-box">
                  <span class="details">Picture of an animal</span>
                  <input type="file"  />
                </div>
                  <div class="input-box">
                    <span class="details">Animal Place</span>
                    <input type="text" placeholder="required" required />
                  </div>
                  <div class="input-box">
                    <span class="details">Additional details</span>
                    <input type="text" placeholder="Optinal"  />
                  </div>
                <div class="gender-details">
                  <input type="radio" name="diet" id="dot-1" />
                  <input type="radio" name="diet" id="dot-2" />
                  <input type="radio" name="diet" id="dot-3" />
                  <span class="gender-title">Animal diet</span>
                  <div class="category">
                    <label for="dot-1">
                      <span class="dot one"></span>
                      <span class="gender">Vegetarian</span>
                    </label>
                    <label for="dot-2">
                      <span class="dot two"></span>
                      <span class="gender">Carnivorous</span>
                    </label>
                    <label for="dot-3">
                      <span class="dot three"></span>
                      <span class="gender">Both</span>
                    </label>
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
    </>
  )
}

export default Add_animal
