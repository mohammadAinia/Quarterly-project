import React from 'react'

const Componets_My_requests = (props) => {
    return (
        <>
            <div class="overlap-2">
                <div class="text-wrapper-3">{props.type_animal}</div>
                <div class="text-wrapper-4">Name: {props.name}</div>
                <div class="text-wrapper-5">Fare : {props.fare}$</div>
                <div class="text-wrapper-6">From : {props.from}</div>
                <div class="text-wrapper-7">To : {props.to}</div>
                <div class="rectangle-2"></div>
                {props.test !== '' ? (
                    <div class="text-wrapper-55">Accepted By</div>
                ) : (
                    <div class="text-wrapper-5555">Request is still on offer</div>
                )}
                <div class="text-wrapper-555">{props.name_accepted}</div>
            </div>
        </>
    )
}

export default Componets_My_requests