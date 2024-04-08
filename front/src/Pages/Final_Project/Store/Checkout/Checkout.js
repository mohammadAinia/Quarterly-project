import './Checkout.css'
import checkout_Rectangle_268 from '../../../../Assert/Images/checkout_Rectangle_268.png'
import checkout_Line_24 from '../../../../Assert/Images/checkout_Line_24.png'
import checkout_Line_21 from '../../../../Assert/Images/checkout_Line_21.png'
import checkout_Line_25 from '../../../../Assert/Images/checkout_Line_25.png'

import { Componets_Product_store, Componets_cart, Componets_user_reviews, Store_Header } from '../../../../Componets'
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'



const Checkout = () => {

    const [Address, setAddress] = useState([])
    const [productInfo, setProduct_Info] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState('');




    const navigate = useNavigate()

    useEffect(() => {

        axios.get('http://localhost:3001/storee/#', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {

                    setProduct_Info(res.data.result)
                    setAddress(res.data.result2)

                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })

    },
        [])

    const handleOptionChange = (event) => {
        const selectedaddress = event.target.value;
        setSelectedAddress(selectedaddress);
    };


    return (

        <>
            <Store_Header />

            <div class="checkout">
                <div class="div">
                    <div class="overlap-3">
                        <p class="p">Buy online same day pick up in one of our 600+ stores! or free shipping over</p>
                        <div class="text-wrapper-10">View Details</div>
                    </div>
                    <div class="text-wrapper-11">Checkout</div>
                    <div class="overlap-4">

                        <div class="text-wrapper-12">Shipping Address</div>
                        <img class="line" src={checkout_Line_24} />

                        {/* فورم اضافة عنوان جديد */}
                        <input placeholder='City' class="rectangle-2" type='text' />
                        <input placeholder='Postal Code' class="rectangle-3" type='text' />
                        <input placeholder='Street' class="rectangle-4" type='text' />
                        <input class="rectangle-5" type='text' />
                        <div class="div-wrapper"><button class="text-wrapper-13">Add</button></div>

                        {/* عناوين مسجلة سابقة */}
                        <div class="frame-4_me">

                            {
                                Address.map((user, i) => (
                                    <div className="overlap-5" key={i}>
                                        <input
                                            type="radio"
                                            id={`option${i}`} // Use a unique id for each input
                                            name="options"
                                            value={user.id_add}

                                            checked={selectedAddress === user.id_add}
                                            onChange={handleOptionChange}
                                        />
                                        <label htmlFor={`option${i}`} className="text-wrapper-15">{user.Address}</label> {/* Use the same unique id in htmlFor */}
                                    </div>
                                ))
                            }

                            {/* <div class="overlap-5">
                                <input type="radio" id="nabek" name="location" value="Al-Nabek" />
                                <label for="nabek" class="radio-label">
                                    <div class="text-wrapper-14">Al-Nabek</div>
                                </label>
                            </div> */}
                        </div>


                        <div class="text-wrapper-15">Add New Address</div>
                    </div>
                    <div class="text-wrapper-16">Order Summary</div>
                    <div class="text-wrapper-17">Order Total</div>
                    <div class="overlap-6"><div class="text-wrapper-18">Place Order</div></div>

                    {/* مربع الطلبية */}
                    <div class="overlap-7">
                        <div class="text-wrapper-19">Place Order</div>
                        <div class="rectangle-6"></div>
                        <div class="text-wrapper-20">Order</div>
                        <a href="cart" class="text-wrapper-23">Edit Cart</a>

                        {/* المنتجات بالطلبية */}
                        <div className="frame-3_me">
                            <div className="overlap-3_cart">
                                <p class="text-wrapper-21">exceed Freshly Clean Dog Shampoo</p>
                                <div class="text-wrapper-22">Quantity: 2</div>
                                <img class="rectangle-7" src={checkout_Rectangle_268} />
                                <div class="text-wrapper-24">49 $</div>
                                <img class="line-2" src={checkout_Line_21} />
                            </div>
                        </div>



                    </div>


                    <div class="text-wrapper-25">Subtotal:</div>
                    <div class="text-wrapper-26">Shipping:</div>
                    <div class="estimated-sales-tax">Estimated Sales Tax: <br />(GST/HST/PST/RST/QST)</div>
                    <div class="text-wrapper-27">49 $</div>
                    <div class="text-wrapper-28">49 $</div>
                    <div class="text-wrapper-29">49 $</div>
                    <div class="text-wrapper-30">49 $</div>
                    <img class="line-3" src={checkout_Line_25} />
                    <img class="line-4" src={checkout_Line_25} />
                    <div class="overlap-8"><div class="text-wrapper-31">Confirm the order</div></div>
                </div>
            </div>
        </>
    )
}

export default Checkout