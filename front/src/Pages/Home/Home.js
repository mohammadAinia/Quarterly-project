import { Header } from '../../Componets'
import './Home.css'

const Home = () => {
  const handleAuth =()=> {
    
  }
  return (
    <>
      <Header href1={"/Animal"} a1={"Animal"} href3={"#"} a3={"Common Problems"} href2={"#"} a2={"Adopt Animal"} href4={"/login"} a4={"Login"} />

      <h1>hellow home</h1>
      <button onClick={handleAuth}>check auth</button>
    </>
  )
}

export default Home
