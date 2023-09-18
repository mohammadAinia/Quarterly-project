import { useEffect,useState } from 'react'
import { Card,Common_proplem,Header,SectionHeader,Animal_info,Button } from '../../Componets/index'
import './Home_owner.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import animal_image from '../../Assert/Images/cute.avif'


const Home_owner=() => {
  const [name,setName]=useState('')
  const [Animall_info,setAnimal_info]=useState([])

  const navigate=useNavigate()

  useEffect(() => {

    axios.get('http://localhost:3001/user/')
      .then(res => {
        if (res.data.valid) {
          setName(res.data.username)
          if (res.data.image==null) {
            res.data.image=animal_image
            setAnimal_info(res.data)
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


  },
    [])
  return (
    <>
      <Header href1={"/Animal"} a1={"Animal"} href2={"#"} a2={"Adopt Animal"} href3={"/Proplems"} a3={"Common Problems"} href4={"/Add_Animal"} a4={"Add Animal"} href5={"/login_out"} a5={"Login Out"} />
      <section class="banner" style={{ "margin-top": "1030px" }}>
        <Animal_info header={"Welcome"+name} image={""} p={"Fish are animals that live and swim in water (although there are fish that crawl on land, such as the mudskipper and the clary catfish), are cold-blooded (except for tuna, marlin, and mako sharks, which are warmer than water), and breathe through gills"} />
      </section>


      {/* <h1>Welcome {name}</h1> */}

      <section className="animal" id="animal" >
        <SectionHeader>Your Animals</SectionHeader>
        <div className="">
          <div className="heading">
            {/* <a href="/Search" className="btn"></a> */}
          </div>
        </div>
        <div className="box-container">

          {Animall_info.map(i => {
            <div key={i.animal_id}>
              <Card image={i.image} name={i.name} href={"/Animal_infoo"} />
            </div>
          })}
        </div>
      </section>
      <section class="pricing" id="pricing">
        <div class="box-container">
          <Common_proplem />
        </div>
        <div className="">
          <Button href="/Proplems_owner" value="See More" />
        </div>

      </section>
    </>
  )
}

export default Home_owner
