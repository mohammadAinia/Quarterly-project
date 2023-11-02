import './Type.css'
import { Header, Choose_button } from '../../Componets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
const Type = () => {
    return (
        <>
            <Header href1={"/Animal"} a1={"About Pets"} href3={"#"} a3={"FAQs"} log={'/login'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightToBracket} /></div>} />

            <Choose_button title="account type " href1="/Register_owner" name1="Animal Owner" href2="/Register_veterinarian" name2="Veterinarian" />

        </>
    )
}

export default Type
