import './Add_product_store.css'
import { Header, Componets_Add_product_store } from '../../../../Componets'


const Add_product_store = () => {
    return (

        <>
            <div>
                <div class="container" style={{ "margin-top": "120px", "margin-bottom": "70px" }}>
                    <div class="title">Add a product to the store</div><br />
                    <div class="content">
                        <Componets_Add_product_store />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add_product_store