import './Health_record.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header, Your_animal_vaccines } from '../../../Componets'


const Health_record = () => {

  const navigate = useNavigate()
  const [Info, setInfo] = useState([])
  const { id } = useParams()


  useEffect(() => {

    axios.get(`http://localhost:3001/#/#/${id}`)
      .then(res => {
        if (res.data) {
          setInfo(res.data.result)
        }
        else {
          navigate('/login')
        }
      })
      .catch(err => { console.log(err) })
  }, [])

  return (
    <>
      {Info.map((d, i) => {
        return (
          <div key={i}>

            <Your_animal_vaccines vaccines={d.name_vacc} vaccine_date={d.date_take_vac} />

          </div>
        )
      })}
    </>
  )
}

export default Health_record
