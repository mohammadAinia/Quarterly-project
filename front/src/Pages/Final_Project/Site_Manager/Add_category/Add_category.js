import './Add_category.css'
import { Header, Componets_Add_category } from '../../../../Componets'


const Add_category = () => {
    return (

        <>
            <div>
                <div class="container" >
                    <div class="title">Add category to the store</div><br />
                    <div class="content">
                        <Componets_Add_category />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add_category