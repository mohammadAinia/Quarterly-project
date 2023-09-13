import { useEffect, useState } from 'react'
import { Card, Header,SectionHeader } from '../../Componets/index'
import './Home_owner.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home_owner = () => {
  const [name, setName] = useState('')
  const [Name_animal, setName_animal] = useState('')
  const [Image, setImage] = useState('')
  const [Href, setHref] = useState('')


  const navigate = useNavigate()

  useEffect(() => {

    axios.get('http://localhost:3001/user/')
      .then(res => {
        if (res.data.valid) {
          setName(res.data.username)
        }
        else {
          navigate('/login')
        }
      })
      .catch(err => { console.log(err) })

    axios.get('http://localhost:3001/animal/')
      .then(res => {
        if (res.data.valid) {
          setName_animal(res.data.name)
          setImage(res.data.image)
          setHref(res.data.href)
        }
        else {
          alert("err")
        }
      })
      .catch(err => { console.log(err) })
  }, [])


  return (
    <>
      <Header href1={"/Animal"} a1={"Animal"} href5={"/Add_Animal"} a5={"Add Animal"} href3={"#"} a3={"Common Problems"} href2={"#"} a2={"Adopt Animal"} href6={"/login"} a6={"Login"} />
      <h1>Welcome {name}</h1>
      <section className="animal" id="animal" >
        <SectionHeader>Your Animal</SectionHeader>
        <div className="">
          <div className="heading">
            <a href="/Search" className="btn">Search</a>
          </div>
        </div>
        <div className="box-container">
          <Card  image={Image} name={Name_animal} href={Href}/>
        </div>
      </section>
    </>
  )
}

export default Home_owner
