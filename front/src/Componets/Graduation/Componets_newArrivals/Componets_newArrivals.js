import './Componets_newArrivals.css'
import store_Vector4 from '../../../Assert/Images/store_Vector4.svg'

const Componets_newArrivals = (props) => {
    return (

        <>
            <div class="overlap-group-2">
                <div class="rectangle-10"></div>
                <img class="rectangle-11" src={props.image} />
                <div class="rectangle-12"></div>
                <div class="text-wrapper-26">NEW</div>
                <div class="text-wrapper-27">{props.brand}</div>
                <div class="text-wrapper-28">{props.price}</div>
                {/* <div class="text-wrapper-29">Anxiety Relief</div> */}
                <div class="text-wrapper-30">{props.desc}</div>
                <div class="rectangle-13"></div>
                <div class="text-wrapper-31">Available for AutoShip</div>
                <img class="vector-9" src={store_Vector4} />
                <div class="frame-3"><a href={props.href} class="text-wrapper-32">view</a></div>
            </div>
        </>
    )
}

export default Componets_newArrivals