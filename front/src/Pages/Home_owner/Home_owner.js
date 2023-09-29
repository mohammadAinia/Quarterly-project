import { useEffect, useState } from 'react'
import { Card, Bunner, Problems, Header, SectionHeader, Animal_info, Button, Add_proplem } from '../../Componets/index'
import './Home_owner.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import animal_image from '../../Assert/Images/—Pngtree—parrot_1001948.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faBell } from '@fortawesome/free-solid-svg-icons'

const Home_owner = () => {
  const [name, setName] = useState('')
  const [Animall_info, setAnimal_info] = useState([])
  const [Problim_info, setProblim_info] = useState([])
  const [Advice, setAdvice] = useState([])
  const [Isnotefi, setIsnotefi] = useState('')


  const navigate = useNavigate()

  useEffect(() => {

    axios.get('http://localhost:3001/user/', { withCredentials: true })
      .then(res => {
        if (res.data.valid) {
          setName(res.data.username)
          setAnimal_info(res.data.result)
          setProblim_info(res.data.resultt)
          setAdvice(res.data.resulttt)
          setIsnotefi(res.data.resultttt)
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

      <Header href1={"/Animal"} a1={"Animal"} href2={"#"} a2={"Adopt Animal"} href3={"/common_users"} a3={"Common Problems"} href4={"/Add_Animal"} a4={"Add Animal"} href5={"/Animal_infoo"} a5={"All Animal"} href6={"/All_problem"} a6={"Ploblems"} href7={"/Notifications"} a7={<FontAwesomeIcon icon={faBell} />} href8={"/#"} a8={<div id="login-btn" className="fas fa-user"></div>} />

      <section class="banner" style={{ "margin-top": "1600px" }}>
        
        {Advice.map((user, i) => {
          return (
            <div key={i}>
              <Bunner header={"Welcome" + name} p1={user.one}
                p2={user.gen_tip}
                p3={user.gen_tip} p4={Isnotefi} image={animal_image} />
            </div>
          )
        })}

      </section>

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
          })}
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
