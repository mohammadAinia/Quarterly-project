import './Problem_id_vet.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header, Problems, Comments } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse, faMessage, faUserDoctor, faStethoscope } from '@fortawesome/free-solid-svg-icons'

const Problem_id_vet = () => {

  const [Problim_info, setProblim_info] = useState([])
  const [Comment, setComments] = useState([])
  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {

    axios.get(`http://localhost:3001/problim/show_problem/${id}`, { withCredentials: true })
      .then(res => {
        if (res.data.valid) {
          setProblim_info(res.data.result)
          setComments(res.data.resultt)
        }
        else navigate('/login')

      })
      .catch(err => { console.log(err) })
  }, [])
  return (
    <>
      <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_vete"} a2={"FAQs"} href3={"/all_follow"} a3={"All Follow"} href4={"/Forum_vet"} a4={"Forum"} href6={"/Notifications_vet"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile_vet"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"Home_vet"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

      <section className="pricing" id="pricing" style={{ "margin-top": "0px" }}>
        <h2 className="heading">Forum</h2>

        <div className="box-container">
          {Problim_info.map((user, i) => {
            return (
              <div key={i}>
                <Problems name={user.title} text={user.disc} type={user.animal_type} id1={id} id2={user.id} hreflink={""} />
              </div>
            )
          })}
        </div>
      </section>

      <div>
        <div className="container" style={{ "margin-top": "50px", "margin-bottom": "70px", "margin-left": "250px" }}>
          <div className="title">Comments</div>
          <div className="content">
            <form action="#" >
              <div className="user-details">
                {Comment.map((user, i) => {
                  return (
                    <div key={i}>
                      <Comments name={user.publisher_ans} text={user.answer} />
                    </div>
                  )
                })}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Problem_id_vet
