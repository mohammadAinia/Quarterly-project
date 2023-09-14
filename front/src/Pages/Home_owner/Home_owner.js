import { useEffect, useState } from 'react'
import { Card, Header, SectionHeader } from '../../Componets/index'
import './Home_owner.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import animal_image from '../../Assert/Images/cute.avif'


const Home_owner = () => {
  const [name, setName] = useState('')
  const [Animal_info, setAnimal_info] = useState([])



  const navigate = useNavigate()

  useEffect(() => {

    axios.get('http://localhost:3001/user/')
      .then(res => {
        if (res.data.valid) {
          setName(res.data.username)
          if (res.data.image == null) {
            res.data.image = animal_image
          }
          else {
            setAnimal_info(res.data)
          }
        }
        else {
          navigate('/login')
        }
      })
      .catch(err => { console.log(err) })

    // axios.get('http://localhost:3001/animal/')
    //   .then(res => {
    //     if (res.data.valid) {
    //       setName_animal(res.data.name)
    //       setImage(res.data.image)
    //       setHref(res.data.href)
    //     }
    //     else {
    //       alert("err")
    //     }
    //   })
    //   .catch(err => { console.log(err) })
  },
    [])


  return (
    <>
      <Header href1={"/Animal"} a1={"Animal"} href2={"#"} a2={"Adopt Animal"} href3={"#"} a3={"Common Problems"}  href4={"/Add_Animal"} a4={"Add Animal"} href5={"/login"} a5={"Login"} />

      <h1>Welcome {name}</h1>

      <section className="animal" id="animal" >

        <SectionHeader>Your Animals</SectionHeader>
        <div className="">
          <div className="heading">
            {/* <a href="/Search" className="btn"></a> */}
          </div>
        </div>
        <div className="box-container">
          {Animal_info.map(i => {
            <div key={i.animal_id}>

              <Card image={i.image} name={i.name} href={"/Animal_infoo"} />
            </div>
          })}
        </div>
      </section>
    </>
  )
}

export default Home_owner
