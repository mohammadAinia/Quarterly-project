import { useEffect, useState } from 'react'
import { Card, Bunner, Problems, Header, SectionHeader, Animal_info, Button, Add_proplem } from '../../Componets/index'
import './Home_owner.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import animal_image from '../../Assert/Images/—Pngtree—parrot_1001948.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse ,faMessage ,faUserDoctor,faStethoscope} from '@fortawesome/free-solid-svg-icons'

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

      <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href5={"/Add_Animal"} a5={<FontAwesomeIcon icon={faPlus} />} href6={"all_doc"} a6={<FontAwesomeIcon icon={faStethoscope} />} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href7={"/chat"} a7={<FontAwesomeIcon icon={faMessage} />} href8={"/Notifications"} a8={<FontAwesomeIcon icon={faBell} />} href9={"/profile"} a9={<div id="login-btn" className="fas fa-user"></div>} href10={"/"} a10={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

      <section className="bbanner" style={{ "margin-top": "2200px","margin-left":"200px" }}>
        <div className="row">
          <div style={{ "margin-top": "170px","margin-left":"260px" }} className="content">
            <h3 style={{"fontSize":"30px" }}>{"Welcome   " + name}</h3>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='nav'>

            <h3 style={{ "margin-left": "10px","fontSize":"28px" }}>     your advice</h3>

              {Advice.map((user, i) => {
                return (
                  <div  style={{"fontSize":"40px" }} key={i}>
                    <Bunner p1={user.one}
                      p2={user.gen_tip}
                      // p3={user.gen_tip} 
                      />
                  </div>
                )
              })}
              
            </div>
            <p style={{ "color": "black" }}>{Isnotefi}</p>
          </div>
          <div style={{ "padding-right": "60px" }}  className="image">
            {/* <img src={animal_image} alt="" /> */}
          </div>
        </div>
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
                <Card image={'http://localhost:3001/uploads/' + user.urlImage} name={user.name} href_link={`Animal_info_id/${user.id}`} link={"see details"} id={user.id} />
              </div>
            )
          })}
        </div>
      </section>

      <Add_proplem href={"my_problem"}/>

      <section className="pricing" id="pricing">
        <h2 className="heading">Forum</h2>

        <div className="box-container" >
          {Problim_info.map((user, i) => {
            return (
              <div key={i}>
                <Problems name={user.title} text={user.disc} type={user.animal_type} hreflink={`Problem_id/${user.id}`} id1={user.id}  />
              </div>
            )
          })}
        </div>
      </section>

    </>
  )
}

export default Home_owner
