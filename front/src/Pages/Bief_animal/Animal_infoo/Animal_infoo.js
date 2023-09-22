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

    axios.get('http://localhost:3001/animal/show_all_animal')
      .then(res => {
        if (1==1) {
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
            <About_your_animal name={d.name} age={d.age} place={d.place} color={d.color} details={d.details} 
            type={d.type} gender={d.gender} weight={d.weight} height={d.height} health={d.health}
             vaccines={d.vaccines} vaccine_date={d.vaccine_date} id2={d.id}/>

             <Your_animal_vaccines vaccines={d.vaccines} vaccine_date={d.vaccine_date}/>
          </div>
        )
      })}

    </>
  )
}

export default Animal_infoo
