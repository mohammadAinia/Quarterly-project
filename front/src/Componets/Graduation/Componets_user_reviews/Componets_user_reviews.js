import './Componets_user_reviews.css'
import store_star_solid_1 from '../../../Assert/Images/store_star_solid_1.png'


const Componets_user_reviews = (props) => {

    function StarRating2({ rating }) {
        const filledStars = Math.floor(rating);
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < filledStars) {
                stars.push(<img key={i} className="vector-11" src={store_star_solid_1} alt="Filled Star" />);
            }
        }
        return <div>{stars}</div>; // Return the array of stars wrapped in a div
    }
    return (

        <>
            <div class="overlap-18">
                <p class="text-wrapper-29">
                    {props.comment}

                </p>
                <div class="text-wrapper-30">{props.date}</div>
                <div class="overlap-group-wrapper">
                    <div class="overlap-19">
                        <div class="text-wrapper-31">{props.user_name}</div>
                        <div class="star-container3">
                            <StarRating2 rating={props.num_star} />

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Componets_user_reviews