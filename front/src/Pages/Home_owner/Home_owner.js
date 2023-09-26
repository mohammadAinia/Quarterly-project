import { useEffect, useState } from 'react'
import { Card, Notification,Bunner, Problems, Header, SectionHeader, Animal_info, Button, Add_proplem } from '../../Componets/index'
import './Home_owner.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import animal_image from '../../Assert/Images/—Pngtree—parrot_1001948.png'

const Home_owner = () => {
  const [name, setName] = useState('')
  const [Animall_info, setAnimal_info] = useState([])
  const [Problim_info, setProblim_info] = useState([])
  const navigate = useNavigate()

  useEffect(() => {

    // axios('http://localhost:3001/')
    // .then(res => setAnimal_info(res.data))
    // .catch(err=> alert(err))

    axios.get('http://localhost:3001/user/', { withCredentials: true })
      .then(res => {
        if (res.data.valid) {
          setName(res.data.username)
          setAnimal_info(res.data.result)
          setProblim_info(res.data.resultt)
          // if (res.data.image==null) {
          // res.data.image=animal_image
          // }
          // else {
          // setAnimal_info(res.data)
          // }
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
      {/* {Animall_info.map((user, i) => {
        return (
          <div key={i}>
            <ul>name : {user.name}</ul>
            <ul>email : {user.email}</ul>
          </div>
        )
      })} */}



      <Header href1={"/Animal"} a1={"Animal"} href2={"#"} a2={"Adopt Animal"} href3={"/common_users"} a3={"Common Problems"} href4={"/Add_Animal"} a4={"Add Animal"} href5={"/Animal_infoo"} a5={"All Animal"} href6={"/All_problem"} a6={"Ploblems"} href7={"/login_out"} a7={"Login Out"} />
      <section class="banner" style={{ "margin-top": "1600px" }}>
        <Bunner header={"Welcome" + name} p1={"!! You must provide a suitable environment for every animal you own"}
          p2={"!! Your dog is 39 days old. During this period, we advise you to feed him proteins and nutrients"}
          p3={"!! We would like to remind you that the vaccination date for your cat is approaching on 9/20/2022"} image={animal_image} />      </section>
      <Notification />




      {/* <h1>Welcome {name}</h1> */}

      <section className="animal" id="animal" >
        <SectionHeader>Your Animals</SectionHeader>
        <div className="">
          <div className="heading">
          </div>
        </div>
        <div className="box-container">

          {Animall_info.map((user, i) => {
            return (
              <div key={i}>
                <Card image={'http://localhost:3001/uploads/' + user.urlImage} name={user.name} link={"see details"} id={user.id} />
              </div>
            )
          }
          )
          }
        </div>
      </section>
      <Add_proplem />

      <section className="pricing" id="pricing">
        <h2 className="heading">Proplem</h2>

        <div className="box-container">
          {Problim_info.map((user, i) => {
            return (
              <div key={i}>
                <Problems name={user.title} type={user.disc} text={user.animal_type} id1={user.id} id2={user.id} />
              </div>
            )
          })}
        </div>
      </section>

    </>
  )
}

export default Home_owner
