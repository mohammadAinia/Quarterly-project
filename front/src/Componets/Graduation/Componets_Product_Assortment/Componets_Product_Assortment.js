import './Componets_Product_Assortment.css'
import store_star_solid_1 from '../../../Assert/Images/store_star_solid_1.png'
import store_Vector4 from '../../../Assert/Images/store_Vector4.svg'
const Componets_Product_Assortment = (props) => {

    function StarRating({ rating }) {
        const filledStars = Math.floor(rating);
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < filledStars) {
                stars.push(<img key={i} className="star-solidd" src={store_star_solid_1} alt="Filled Star" />);
            }
        }
        return <div>{stars}</div>; // Return the array of stars wrapped in a div
    }
    return (

        <>
            <div class="overlap-3">
                <div class="rectangle-18"></div>
                <img class="rectangle-19" src={props.img} />
                <div class="text-wrapper-25">{props.brand}</div>
                <div class="element">{props.avg_review}</div>
                <div class="element2">{props.total_comments}</div>

                <div class="text-wrapper-26">{props.price}</div>
                <div class="text-wrapper-28">{props.desc}</div>
                <div class="frame-2">
                    <div class="overlap-4">
                        <div class="rectangle-20"></div>
                        <div class="text-wrapper-29">Available for AutoShip</div>
                        <img class="vector-3" src={store_Vector4} />
                    </div>
                </div>
                <div class="frame-3"><a href={props.href} class="text-wrapper-30">view</a></div>
                <div class="star-containerr">
                    <StarRating rating={props.num_star} />
                </div>

            </div>
        </>
    )
}

export default Componets_Product_Assortment