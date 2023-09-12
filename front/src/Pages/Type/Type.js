import './Type.css'
import { Header } from '../../Componets'

const Type = () => {
    return (
        <>
            <Header href1={"/Animal"} a1={"Animal"} href3={"#"} a3={"Common Problems"} href2={"#"} a2={"Adopt Animal"} href4={"/login"} a4={"Login"} />

            <div class="container">
                <div class="title">Choose the account type</div>
                <div class="content">
                    <form action="#">
                        <div class="button">
                            <a href="/Register_owner">Animal Owner</a>
                        </div>
                        <div class="button">
                            <a href="/Register_veterinarian">Veterinarian</a>
                        </div>
                        <div class="buttonn">
                            <a href="/Back">Back</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Type
