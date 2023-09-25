import './Animal_infoo.css'
import { About_your_animal, Header, Your_animal_vaccines } from '../../../Componets/index'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import a from '../../../Assert/Images/main.png'

const Animal_infoo = () => {

  const navigate = useNavigate()
  const [Info, setInfo] = useState([])

  useEffect(() => {

    axios.get('http://localhost:3001/animal/show_all_animal',{withCredentials:true})
      .then(res => {
        if (1 == 1) {
          setInfo(res.data)
        }
        else {
          navigate('/login')
        }
      })
      .catch(err => { console.log(err) })
  }, [])

  return (
    <>
      <Header href1={"/Animal"} a1={"Animal"} href3={"#"} a3={"Common Problems"} href2={"#"} a2={"Adopt Animal"} href4={"/login"} a4={"Login"} />
      {Info.map((d, i) => {
        return (
          <div key={i}>
            <About_your_animal name={d.name} age={d.age} place={d.place} color={d.color} details={d.Additional_details}
              type={d.type} gender={d.gender} weight={d.weight} height={d.high} health={d.health_stats} id={d.id} id2={d.animal_id} />

            <Your_animal_vaccines vaccines={d.name_vacc} vaccine_date={d.date_take_vac} />
          </div>
        )
      })}
    </>
  )
}

export default Animal_infoo
