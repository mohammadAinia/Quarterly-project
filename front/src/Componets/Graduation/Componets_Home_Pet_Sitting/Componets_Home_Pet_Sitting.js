import './Componets_Home_Pet_Sitting.css'

import React from 'react'

const Componets_Home_Pet_Sitting = (props) => {
    return (

        <>
            <div class="overlap-2">
                <div class="text-wrapper-3">{props.type_animal}</div>
                <div class="text-wrapper-4">Name: {props.name}</div>
                <div class="text-wrapper-5">Fare : {props.fare}$</div>
                <div class="text-wrapper-6">From : {props.from}</div>
                <div class="text-wrapper-7">To : {props.to}</div>
                <div class="rectangle-2"></div>
                <a href={props.href} class="frame"><div class="text-wrapper-8">Details</div></a >
            </div>
        </>
    )
}

export default Componets_Home_Pet_Sitting