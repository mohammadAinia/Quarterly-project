import './Search_result2.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header, Common_proplem } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'

const Search_result2 = () => {

  const { Type } = useParams()
  const [Info, setInfo] = useState([])

  useEffect(() => {

    axios.post(`http://localhost:3001/co_problim/search`,{Type})
      .then(res => {
        if (res.data.valid) {
          setInfo(res.data.result)
        }
        else alert("err")
      })
      .catch(err => { alert(err) })

  }, [])
  return (
    <>
      <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href6={"/Notifications"} a6={<FontAwesomeIcon icon={faBell} />} href7={"/profile"} a7={<div id="login-btn" className="fas fa-user"></div>} href8={"/"} a8={<FontAwesomeIcon icon={faHouse} />} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

      <section className="pricing" id="pricing" style={{ "margin-top": "300px" }}>

        <h2 className="heading" style={{ "margin-left": "100px" }}>FAQs</h2>
        <div className="box-container" style={{ "width": "600px" }}>
          {Info.map((i, d) => {
            return (
              <div key={d}>

                <Common_proplem type={i.animal_type} name={i.title} detals={i.disc} />

              </div>
            )
          })}
        </div>

      </section>
    </>
  )
}

export default Search_result2
