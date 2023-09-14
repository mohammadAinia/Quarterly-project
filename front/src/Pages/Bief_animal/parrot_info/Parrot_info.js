import bunner from '../../../../src/Assert/Images/—Pngtree—parrot_1001948.png'
import { Animal_info, Header } from '../../../Componets'

const Parrot_info = () => {
    const x =5
    return (
        <>
            <Header href1={"/Animal"} a1={"Animal"} href3={"#"} a3={"Common Problems"} href2={"#"} a2={"Adopt Animal"} href4={"/login"} a4={"Login"} />

            <Animal_info header={"Parrot Animal"} image={bunner} p={"The parrot bird, known scientifically as: Psittaciformes, is the smartest bird on the planet.It is distinguished by its green, blue, and yellow color. This bird can imitate a group of sounds and words.This is what made it popular with everyone, as it can imitate about 800 words."} />
            {/* <Animal_info header={"Parrot Animal"} age={"Age:"+x} color={"white"} place={"syria"} type={"cat"} gender={"male"} p={",c,c,c,c,c"} /> */}

        </>
    )
}

export default Parrot_info
