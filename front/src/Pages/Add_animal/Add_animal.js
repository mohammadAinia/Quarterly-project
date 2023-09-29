import './Add_animal.css'
import axios from 'axios'
import { useState } from 'react'
import { Header } from '../../Componets'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faRightFromBracket, faHouse } from '@fortawesome/free-solid-svg-icons'


const Add_animal = () => {

  const navigate = useNavigate()

  const [Name, setName] = useState('')
  const [Age, setAge] = useState('')
  const [Animal_coler, setAnimal_coler] = useState('')
  const [Picture, setPicture] = useState()
  const [Animal_place, setAnimal_place] = useState('')
  const [Additional_details, setAdditional_details] = useState('')
  const [Gender, setGender] = useState('')
  const [Type, setType] = useState('')
  const [Weight, setWeight] = useState('')
  const [Height, setHeight] = useState('')
  const [Healthـstatus, setHealthـstatus] = useState('')
  const [Vaccines, setVaccines] = useState('')



  axios.defaults.withCredentials = true
  const handleSubmit = async (e) => {

    const formData = new FormData()

    formData.append('image', Picture)
    formData.append('name', Name)
    formData.append('age', Age)
    formData.append('animal_color', Animal_coler)
    formData.append('animal_place', Animal_place)
    formData.append('details', Additional_details)
    formData.append('type', Type)
    formData.append('gender', Gender)
    formData.append('weight', Weight)
    formData.append('height', Height)
    formData.append('health_Status', Healthـstatus)


    e.preventDefault()

    axios.post('http://localhost:3001/animal/add-animal', formData)
      .then(res => {
        if (res.data.valid) {
          if (Vaccines === "yes") {
            navigate(`/vaccines/${res.data.id}`)
          }
          else {
            navigate('/')
          }
        }
        else {
          alert('EROR')
        }
      })
      .catch(err => alert(err))
  }
  return (
    <>
      <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"Common Problems"} href5={"/Add_Animal"} a5={<FontAwesomeIcon icon={faPlus} />} href3={"/Animal_infoo"} a3={"All Animal"} href4={"/All_problem"} a4={"Ploblems"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/#"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

      <div>
        <div class="container" style={{ "margin-top": "270px", "margin-bottom": "70px" }}>
          <div class="title">Add Animal</div>
          <div class="content">
            <form action="#" onSubmit={handleSubmit} enctype="multipart/form-data">
              <div class="user-details">
                <div class="input-box">
                  <span class="details">name of the animal *</span>
                  <input type="text" name='name' required onChange={e => setName(e.target.value)} />
                </div>
                <div class="input-box">
                  <span class="details">Age *</span>
                  <input type="month" name='age' required onChange={e => setAge(e.target.value)} />
                </div>
                <div class="input-box">
                  <span class="details">Animal Place *</span>
                  <input type="text" name='animal_place' required onChange={e => setAnimal_place(e.target.value)} />
                </div>
                <div class="input-box">
                  <span class="details">Animal color *</span>
                  <input type="text" name='animal_color' required onChange={e => setAnimal_coler(e.target.value)} />
                </div>
                <div class="input-box">
                  <span class="details">Picture of an animal</span>
                  <input type="file" onChange={e => setPicture(e.target.files[0])} />
                </div>
                <div class="input-box">
                  <span class="details">Additional details </span>
                  <input type="text" name='details' onChange={e => setAdditional_details(e.target.value)} />
                </div>
                <div class="input-box">
                  <span class="details">type </span>
                  <input type="text" name='type' onChange={e => setType(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Weight kg *</span>
                  <input type="number" name='weight' required onChange={e => setWeight(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Height cm *</span>
                  <input type="number" name='height' required onChange={e => setHeight(e.target.value)} />
                </div>
                <div className="input-box">
                  <span className="details">Health Status *</span>
                  <input type="text" name='health_Status' required onChange={e => setHealthـstatus(e.target.value)} />
                </div>
                <div class="gender-details">
                  <div class="gender-details">
                    <input type="radio" name="gender" id="dot-1" onChange={e => setGender(e.target.value)} />
                    <input type="radio" name="gender" id="dot-2" onChange={e => setGender(e.target.value)} />
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

                <div className="gender-details">
                  <input type="radio" name="health" value="yes" id="dot-3" onChange={e => setVaccines(e.target.value)} />
                  <input type="radio" name="health" value="no" id="dot-4" onChange={e => setVaccines(e.target.value)} />
                  <span className="gender-title">Does he have vaccinations? *</span>
                  <div className="category">
                    <label for="dot-3">
                      <span className="dot three"></span>
                      <span className="gender">Yes</span>
                    </label>
                    <label for="dot-4">
                      <span className="dot four"></span>
                      <span className="gender">No</span>
                    </label>
                  </div>
                </div>

              </div>
              <div class="button">
                <button>Add</button>
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
