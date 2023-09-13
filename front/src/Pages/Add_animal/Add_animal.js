import { useNavigate } from 'react-router-dom'
import './Add_animal.css'
import axios from 'axios'
import { useState } from 'react'
import { Header } from '../../Componets'

const Add_animal = () => {

  const navigate = useNavigate()

  const [Name, setName] = useState('')
  const [Age, setAge] = useState('')
  const [Animal_coler, setAnimal_coler] = useState('')
  const [Picture, setPicture] = useState('')
  const [Animal_place, setAnimal_place] = useState('')
  const [Additional_details, setAdditional_details] = useState('')
  const [Gender, setGender] = useState('')


  axios.defaults.withCredentials = true
  const handleSubmit = async (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/add_animal', { Name, Age, Animal_coler, Picture, Animal_place, Additional_details, Gender })
      .then(res => {
        if (res.data.valid) {
          navigate('/')
        }
        else {
          alert('EROR')
        }
      })
      .catch(err => { console.log(err) })
  }
  return (
    <>
      <Header href1={"/Animal"} a1={"Animal"} href5={"/Add_Animal"} a5={"Add Animal"}  href3={"#"} a3={"Common Problems"} href2={"#"} a2={"Adopt Animal"} href6={"/login"} a6={"Login"} />

      <div >
        <div class="container">
          <div class="title">Add Animal</div>
          <div class="content">
            <form action="#" onSubmit={handleSubmit}>
              <div class="user-details">
                <div class="input-box">
                  <span class="details">name of the animal *</span>
                  <input type="text"  required onChange={e => setName(e.target.value)} />
                </div>
                <div class="input-box">
                  <span class="details">Age *</span>
                  <input type="number"  required onChange={e => setAge(e.target.value)} />
                </div>
                <div class="input-box">
                  <span class="details">Animal color *</span>
                  <input type="text"  required onChange={e => setAnimal_coler(e.target.value)} />
                </div>
                <div class="input-box">
                  <span class="details">Picture of an animal</span>
                  <input type="file" onChange={e => setPicture(e.target.value)} />
                </div>
                <div class="input-box">
                  <span class="details">Animal Place *</span>
                  <input type="text"  required onChange={e => setAnimal_place(e.target.value)} />
                </div>
                <div class="input-box">
                  <span class="details">Additional details </span>
                  <input type="text" onChange={e => setAdditional_details(e.target.value)} />
                </div>
                <div class="gender-details">

                  {/* <input type="radio" name="diet" id="dot-1" />
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
                  </div> */}
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
