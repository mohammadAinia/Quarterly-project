import './Cart.css'
import cart_Rectangle_268 from '../../../../Assert/Images/cart_Rectangle_268.png'
import cart_trash_solid_1 from '../../../../Assert/Images/cart_trash_solid_1.png'
import cart_shop_solid_1 from '../../../../Assert/Images/cart_shop_solid_1.png'
import cart_Vector from '../../../../Assert/Images/cart_Vector.png'
import cart_Line_19 from '../../../../Assert/Images/cart_Line_19.png'
import cart_Line_20 from '../../../../Assert/Images/cart_Line_20.png'

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { Componets_Product_store, Componets_cart, Componets_user_reviews, Store_Header } from '../../../../Componets'



const Cart = () => {

    const [Image, setImage] = useState(null)
    const [Product_Info, setProduct_Info] = useState([])
    const [first_s, set_f] = useState([])




    const navigate = useNavigate()

    useEffect(() => {

        axios.get('http://localhost:3001/storee/#/', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {

                    setProduct_Info(res.data.result[0])
                    // set_f(res.data.result3[0].count_av)
                    // if (user.count_av == 0) {
                    //     setQuantity(0)
                    //     setNumber(0)
                    // }
                    // else {
                    //     setQuantity(1)
                    //     setNumber(1)
                    // }


                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })

    },
        [])

    //اضافة ونقصان الكمية المطلوبة

    const [number, setNumber] = useState('');
    const [quantity, setQuantity] = useState(null);


    const incrementNumberUntil = (targetValue) => {
        if (number < targetValue) {
            setNumber(prevNumber => prevNumber + 1);
        }
    };
    // Function to handle decrementing the number
    const decrementNumber = () => {
        if (number > 1) {
            setNumber(prevNumber => prevNumber - 1);
        }
    };
    return (

        <>
            <Store_Header />

            <div class="cart">
                <div class="div">
                    <div class="boxcart2"><img class="line" src={cart_Line_20} /></div>

                    <div class="overlap-3">
                        <p class="p">Buy online same day pick up in one of our 600+ stores! or free shipping over</p>
                        <div class="text-wrapper-10">View Details</div>
                    </div>
                    <p class="text-wrapper-11">Select a pick up or delivery option to proceed</p>
                    <div class="text-wrapper-12">Item</div>
                    <div class="text-wrapper-13">Price</div>
                    <div class="text-wrapper-14">Quantity</div>
                    <div class="overlap-4">
                        <p class="text-wrapper-15">Free shipping on orders over $49!</p>
                        <p class="shipping-taxes">(Shipping &amp; Taxes Calculated at Checkout)</p>
                        <div class="text-wrapper-16">9$ Until Free Shipping!</div>
                        <div class="text-wrapper-17">$49</div>
                        <div class="text-wrapper-18">200$</div>
                        <div class="text-wrapper-19">Cart Summary</div>
                        <div class="text-wrapper-20">Subtotal:</div>
                        <div class="rectangle-2"></div>
                        <img class="line" src="img/line-20.svg" />
                        <div class="rectangle-3" style={{ width: `${(40 / 40) * 230}px` }}></div>
                        {/* <div class="rectangle-4"></div> */}
                        <div class="rectangle-5"></div>
                        <div class="text-wrapper-21">Proceed to Checkout</div>
                    </div>

                    {/* المنتج */}
                    <div class="frame-3_me">
                        {Product_Info.map((user, i) => {
                            // Define quantity and number based on the condition
                            let quantity, number;
                            if (user.count_av === 0) {
                                quantity = 0;
                                number = 0;
                            } else {
                                quantity = user.count_av;
                                number = 1;
                            }

                            return (
                                <div class="overlap-3_cart">
                                    <div class="overlap-5">
                                        <p class="text-wrapper-23">{user.shortDesc}</p>
                                        <div class="text-wrapper-24">{"Size:" + user.size}</div>
                                        <div class="rectangle-6"></div>
                                        {quantity > 0 ? (
                                            <p class="text-wrapper-25">{quantity + " In Stock for Pick Up"}</p>
                                        ) : (
                                            <p class="text-wrapper-25cart">Out of stock</p>
                                        )}
                                    </div>
                                    <div class="overlap-8">
                                        <div class="text-wrapper-28">{number}</div>
                                        <div class="overlap-9" onClick={() => incrementNumberUntil(quantity)}>
                                            <div class="rectangle-8"></div>
                                            <div class="rectangle-9"></div>
                                        </div>
                                        <div class="rectangle-10" onClick={decrementNumber}></div>
                                        <div class="rectangle-11" onClick={decrementNumber}></div>
                                    </div>
                                    <div class="boxcart"><img class="line" src={cart_Line_19} /></div>
                                    <img class="rectangle-7" src={`http://localhost:3001/uploads/${user.image_url}`} />
                                    <div class="text-wrapper-22">{user.price + "$"}</div>
                                    <img class="trash-solid" src={cart_trash_solid_1} />
                                </div>
                            );
                        })}

                        {/* <div class="overlap-3_cart">
                            <div class="overlap-5">
                                <p class="text-wrapper-23">shampoo</p>
                                <div class="text-wrapper-24">Size: 150ml</div>
                                <div class="rectangle-6"></div>
                                <p class="text-wrapper-25cart">"Out of stock"</p>

                            </div>
                            <div class="overlap-8">
                                <div class="text-wrapper-28">{number}</div>
                                <div class="overlap-9" onClick={() => incrementNumberUntil(quantity)}>
                                    <div class="rectangle-8"></div>
                                    <div class="rectangle-9"></div>
                                </div>
                                <div class="rectangle-10" onClick={decrementNumber}></div>
                                <div class="rectangle-11" onClick={decrementNumber}></div>
                            </div>
                            <div class="boxcart"><img class="line" src={cart_Line_19} /></div>
                            <img class="rectangle-7" src={cart_trash_solid_1} />
                            <div class="text-wrapper-22">22 $</div>
                            <img class="trash-solid" src={cart_trash_solid_1} />
                        </div> */}
                    </div>



                    <div class="text-wrapper-26">Shopping Cart</div>
                    <div class="overlap-6">
                        <div class="ellipse"></div>
                        <img class="shop-solid" src={cart_shop_solid_1} />
                        <div class="text-wrapper-27">Pick Up In-Store</div>
                    </div>
                    <div class="overlap-7">
                        <div class="ellipse"></div>
                        <div class="text-wrapper-27">Ship To Me</div>
                        <img class="vector-3" src={cart_Vector} />
                    </div>

                    <img class="line-2" src="img/line-19.svg" />
                </div>
            </div >
        </>
    )
}

export default Cart