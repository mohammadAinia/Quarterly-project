import './Animal_infoo.css'
import { Animal_info, Header } from '../../../Componets/index'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import a from '../../../Assert/Images/main.png'

const Animal_infoo = () => {

  const navigate = useNavigate()
  const [Info, setInfo] = useState([])

  useEffect(() => {

    axios.get('http://localhost:3001/search')
      .then(res => {
        if (res.data.valid) {
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
      {Info.map(i => {
        <div key={i.animal_id}>

          <Animal_info header={i.name} image={a} age={i.age} color={i.color} place={i.place} type={i.type} gender={i.gender} p={i.detals} />

        </div>
      })}

    </>
  )
}

export default Animal_infoo
