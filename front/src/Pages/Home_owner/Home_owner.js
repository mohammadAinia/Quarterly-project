import { useEffect, useState } from 'react'
import { Card, Bunner, Problems, Header, SectionHeader, Animal_info, Button, Add_proplem } from '../../Componets/index'
import './Home_owner.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import animal_image from '../../Assert/Images/—Pngtree—parrot_1001948.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faRightFromBracket, faBell ,faHouse } from '@fortawesome/free-solid-svg-icons'

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

      <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"Common Problems"} href5={"/Add_Animal"} a5={<FontAwesomeIcon icon={faPlus} />} href3={"/Animal_infoo"} a3={"All Animal"} href4={"/All_problem"} a4={"Ploblems"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/#"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>}/>

      <section class="banner" style={{ "margin-top": "1600px" }}>
        
        {Advice.map((user, i) => {
          return (
            <div key={i}>
              <Bunner header={"Welcome" + name} p1={user.one}
                p2={user.two}
                p3={user.three} p4={Isnotefi} image={animal_image} />
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
