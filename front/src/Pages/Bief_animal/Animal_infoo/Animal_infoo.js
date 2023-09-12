import './Animal_infoo.css'
import { Animal_info, Header } from '../../../Componets'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Animal_infoo = () => {

  const navigate = useNavigate()
  const [header, setHeader] = useState('')
  const [image, setImage] = useState('')
  const [p, setP] = useState('')

  useEffect(() => {

    axios.get('http://localhost:3001/search')
      .then(res => {
        if (res.data.valid) {
          setHeader(res.data.Header)
          setImage(res.data.Image)
          setP(res.data.P)
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

      <Animal_info header={header} image={image} p={p} />

    </>
  )
}

export default Animal_infoo
