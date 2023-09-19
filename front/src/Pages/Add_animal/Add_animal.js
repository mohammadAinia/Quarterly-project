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
  const [Picture, setPicture] = useState()
  const [Animal_place, setAnimal_place] = useState('')
  const [Additional_details, setAdditional_details] = useState('')
  const [Gender, setGender] = useState('')
  const [Type, setType] = useState('')



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

    e.preventDefault()

    axios.post('http://localhost:3001/animal/add-animal',formData)
      .then(res => {
        if (res.data.valid) {
          navigate('/')
        }
        else {
          alert('EROR')
        }
      })
      .catch(err => alert(err))
  }
  return (
    <>
      <Header href1={"/Animal"} a1={"Animal"} href5={"/Add_Animal"} a5={"Add Animal"} href3={"#"} a3={"Common Problems"} href2={"#"} a2={"Adopt Animal"} href6={"/login"} a6={"Login"} />

      <div >
        <div class="container">
          <div class="title">Add Animal</div>
          <div class="content">
            <form action="#" onSubmit={handleSubmit}  enctype="multipart/form-data">
              <div class="user-details">
                <div class="input-box">
                  <span class="details">name of the animal *</span>
                  <input type="text" name='name' required onChange={e => setName(e.target.value)} />
                </div>
                <div class="input-box">
                  <span class="details">Age *</span>
                  <input type="number" name='age' required onChange={e => setAge(e.target.value)} />
                </div>
                <div class="input-box">
                  <span class="details">Animal color *</span>
                  <input type="text" name='animal_color' equired onChange={e => setAnimal_coler(e.target.value)} />
                </div>
                <div class="input-box">
                  <span class="details">Picture of an animal</span>
                  <input type="file"  onChange={e => setPicture(e.target.files[0])} />
                </div>
                <div class="input-box">
                  <span class="details">Animal Place *</span>
                  <input type="text" name='animal_place' required onChange={e => setAnimal_place(e.target.value)} />
                </div>
                <div class="input-box">
                  <span class="details">Additional details </span>
                  <input type="text" name='details' onChange={e => setAdditional_details(e.target.value)} />
                </div>
                <div class="input-box">
                  <span class="details">type </span>
                  <input type="text" name='type' onChange={e => setType(e.target.value)} />
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
