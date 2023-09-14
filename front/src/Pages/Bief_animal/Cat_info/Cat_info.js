import { Animal_info, Header } from '../../../Componets'

const Cat_info = () => {
  return (
    <>

      <Header href1={"/Animal"} a1={"Animal"} href3={"#"} a3={"Common Problems"} href2={"#"} a2={"Adopt Animal"} href4={"/login"} a4={"Login"} />
      <Animal_info header={"Cat Animal"} image={""} p={"It is a type of carnivorous mammal, and it is the only domesticated animal from the feline family. It is often referred to as the domestic cat to distinguish it from the rest of its wild cat family. Cats can be either house cats, farm cats or wild cats, the latter category roaming freely and avoiding contact with humans. Humans prefer the company of domestic cats due to their ability to hunt rodents. About 60 cat breeds have been identified through various cat registries."} />

    </>
  )
}

export default Cat_info
