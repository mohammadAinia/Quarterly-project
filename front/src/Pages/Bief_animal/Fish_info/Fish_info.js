import { Animal_info, Header } from '../../../Componets'

const Fish_info = () => {
  return (
    <>

      <Header href1={"/Animal"} a1={"Animal"} href3={"#"} a3={"Common Problems"} href2={"#"} a2={"Adopt Animal"} href4={"/login"} a4={"Login"} />
      <Animal_info header={"Fish Animal"} image={""} p={""} />

    </>
  )
}

export default Fish_info
