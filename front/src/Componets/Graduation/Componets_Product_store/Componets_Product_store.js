import './Componets_Product_store.css'
import store_star_solid_1 from '../../../Assert/Images/store_star_solid_1.png'
import store_Vector4 from '../../../Assert/Images/store_Vector4.svg'



const Componets_Product_store = (props) => {

    function StarRating3({ rating }) {
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

            <div class="overlap-30">
                <div class="rectangle-20"></div>
                <img class="rectangle-21" src={props.img} />
                <div class="text-wrapper-51">{props.brand}</div>
                <div class="element-2">{props.avg_review}</div>
                <div class="element-3">{props.total_comments}</div>

                <div class="text-wrapper-52">{props.price}</div>
                <div class="text-wrapper-54">{props.desc}</div>
                <div class="frame-4">
                    <div class="overlap-31">
                        <div class="rectangle-22"></div>
                        <div class="text-wrapper-55">Available for AutoShip</div>
                        <img class="vector-15" src={store_Vector4} />
                    </div>
                </div>
                <div class="frame-5"><a href={props.href} class="text-wrapper-56">view</a></div>
                <div class="star-containerr">
                    <StarRating3 rating={props.num_star} />
                </div>
            </div>
        </>
    )
}

export default Componets_Product_store