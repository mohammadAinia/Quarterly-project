import './Type.css'
import { Header ,Choose_button} from '../../Componets'

const Type = () => {
    return (
        <>
            <Header href1={"/Animal"} a1={"Animal"} href3={"#"} a3={"FAQs"} href2={"#"} a2={"Adopt Animal"} href4={"/login"} a4={"Login"} />

            <Choose_button title="account type " href1="/Register_owner" name1="Animal Owner" href2="/Register_veterinarian" name2="Veterinarian"/>

        </>
    )
}

export default Type
