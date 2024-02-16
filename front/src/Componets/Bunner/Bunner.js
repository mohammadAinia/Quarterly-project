import './Bunner.css'
import advice7 from '../../Assert/Images/advice6_Vector.png'
import advice1 from '../../Assert/Images/Advice_Vector27.png'

const Bunner = (props) => {
    return (
        <>
            <div class="advice_box">
                <img class="advice_vector" src={advice7} />
            </div>
            <div class="overlap">
                <div class="rectangle">
                    <p class="text-wrapper">{props.p}</p>
                </div>
                <img class="vector" src={advice1} />
            </div>
        </>
    )
}

export default Bunner
