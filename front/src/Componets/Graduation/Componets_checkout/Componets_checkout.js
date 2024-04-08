import './Componets_checkout.css'
import checkout_Line_21 from '../../../Assert/Images/checkout_Line_21.png'


const Componets_checkout = (props) => {
    return (
        <>
            <div className="overlap-3_cart">
                <p class="text-wrapper-21">{props.short_desc}</p>
                <div class="text-wrapper-22">{props.quantity}</div>
                <img class="rectangle-7" src={props.image} />
                <div class="text-wrapper-24">{props.price}</div>
                <img class="line-2" src={checkout_Line_21} />
            </div>
        </>
    )
}

export default Componets_checkout