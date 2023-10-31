import { Animal_info, Header } from '../../../Componets'

const Fish_info = () => {
  return (
    <>

      <Header href1={"/Animal"} a1={"Animal"} href3={"#"} a3={"FAQs"} href2={"#"} a2={"Adopt Animal"} href4={"/login"} a4={"Login"} />
      <Animal_info header={"Fish Animal"} image={""} p={"Fish are animals that live and swim in water (although there are fish that crawl on land, such as the mudskipper and the clary catfish), are cold-blooded (except for tuna, marlin, and mako sharks, which are warmer than water), and breathe through gills"} />

    </>
  )
}

export default Fish_info
