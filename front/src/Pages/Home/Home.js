import { useEffect, useState } from 'react'
import { Header } from '../../Componets'
import './Home.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  useEffect(() => {

    axios.get('http://localhost:3001')
      .then(res => {
        if (res.data.valid) {
          setName(res.data.username)
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

      <h1>Welcome {name}</h1>
    </>
  )
}

export default Home
