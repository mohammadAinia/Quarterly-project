import './Componets_Header_Search.css'
import store_Vector4 from '../../../Assert/Images/store_Vector4.svg'
import store_star_solid_1 from '../../../Assert/Images/store_star_solid_1.png'

import React from 'react'

const Componets_Header_Search = (props) => {
    function StarRating({ rating }) {
        const filledStars = Math.floor(rating);
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < filledStars) {
                stars.push(<img key={i} className="star-solid" src={store_star_solid_1} alt="Filled Star" />);
            }
        }
        return <div>{stars}</div>; // Return the array of stars wrapped in a div
    }
    return (

        <>
            <div class="overlap-22">
                <div class="rectangle-14"></div>
                <img class="rectangle-11" src={props.img} />
                <div class="text-wrapper-27">{props.brand}</div>
                <div class="text-wrapper-28">{props.price}</div>
                <div class="element">{props.rate} &nbsp;&nbsp; {props.comments}</div>
                <div class="text-wrapper-33">{props.desc}</div>
                <div class="rectangle-13"></div>
                <div class="text-wrapper-31">Available for AutoShip</div>
                <img class="vector-9" src={store_Vector4} />
                <div class="frame-3"><a href={props.href} class="text-wrapper-32">view</a ></div>
                <div class="star-container">
                    <StarRating rating={props.star} />
                </div>
            </div>
        </>
    )
}

export default Componets_Header_Search