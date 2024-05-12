import './Add_balance.css'
import { Header, Componets_Add_balance, Store_Header } from '../../../../Componets'


const Add_balance = () => {
    return (

        <>
            <Store_Header />
            <div>
                <div class="container" >
                    <div class="title">Add Balance</div><br />
                    <div class="content">
                        <Componets_Add_balance />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add_balance