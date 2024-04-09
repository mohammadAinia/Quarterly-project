import './Checkout.css'
import checkout_Rectangle_268 from '../../../../Assert/Images/checkout_Rectangle_268.png'
import checkout_Line_24 from '../../../../Assert/Images/checkout_Line_24.png'
import checkout_Line_21 from '../../../../Assert/Images/checkout_Line_21.png'
import checkout_Line_25 from '../../../../Assert/Images/checkout_Line_25.png'

import { Componets_Product_store, Componets_checkout, Componets_user_reviews, Store_Header } from '../../../../Componets'
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'



const Checkout = () => {

    const [Address, setAddress] = useState([])
    const [productInfo, setProduct_Info] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [Mony, setMony] = useState(0);




    const [Street, setStreet] = useState('');
    const [City, setCity] = useState('');
    const [PostalCode, setPostalCode] = useState('');
    const [House_Number, setHouse_Number] = useState('');





    const navigate = useNavigate()

    useEffect(() => {

        axios.get('http://localhost:3001/storee/show_det', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {

                    setProduct_Info(res.data.result)
                    setAddress(res.data.result2)
                    setMony(res.data.result1[0].charge_w)
                    setSelectedAddress(res.data.result1[0].id_a)

                    calculateTotalPrice(res.data.result);

                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })

    },
        [])
    console.log(selectedAddress)

    // تابع اضافة عنوان جديد
    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/storee/add_address', { Street, City, PostalCode, House_Number }, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {

                    alert("The address has been added successfully");
                    window.location.reload();
                }
                else {
                    navigate('/login')
                }

            })
            .catch(err => { console.log(err) });
    };

    const [TotalAmount, setTotalAmount] = useState(0);
    // تابع تاكيد الطلبة وخصم من المحفظة
    const handleSubmit2 = async (e) => {

        e.preventDefault();
        if (totalPrice > 49) {
            setTotalAmount((totalPrice * 0.1) + totalPrice)
        }
        else {
            setTotalAmount((totalPrice * 0.1) + totalPrice + 15)
        }
        if (Mony >= TotalAmount) {
            axios.post('http://localhost:3001/storee/complet_order', { selectedAddress, TotalAmount })
                .then(res => {
                    if (res.data.valid) {
                        alert("Orders have been confirmed. The delivery representative will contact you within 24 hours");
                        navigate(-3)
                    }
                    else {
                        navigate('/login')
                    }

                })
                .catch(err => { console.log(err) });
        }
        else {
            alert("Sorry, the wallet balance is not enough. Please recharge it");
        }
    };
    const calculateTotalPrice = (products) => {
        let total = 0;
        products.forEach(product => {
            total += product.special_price * product.select_count;
        });
        setTotalPrice(total);
    };
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


                        <div class="text-wrapper-15">Add New Address</div>
                        {/* فورم اضافة عنوان جديد */}
                        <form onSubmit={handleSubmit}>
                            <input placeholder='City' class="rectangle-2" type='text' onChange={e => setCity(e.target.value)} />
                            <input placeholder='Postal Code' class="rectangle-3" type='number' onChange={e => setPostalCode(e.target.value)} />
                            <input placeholder='Street' class="rectangle-4" type='text' onChange={e => setStreet(e.target.value)} />
                            <input placeholder='House number' class="rectangle-5" type='number' onChange={e => setHouse_Number(e.target.value)} />
                            <div class="div-wrapper"><button class="text-wrapper-13">Add</button></div>
                        </form>

                        {/* عناوين مسجلة سابقة */}
                        <div class="frame-4_me">

                            {
                                Address.map((user, i) => (
                                    <div className="overlap-5" key={i}>
                                        <input
                                            type="radio"
                                            id={`option${i}`} // Use a unique id for each input
                                            name="options"
                                            value={user.id_a}

                                            checked={selectedAddress === user.id_a}
                                            onChange={handleOptionChange}
                                        />
                                        <label htmlFor={`option${i}`} className="text-wrapper-14">{user.street}</label> {/* Use the same unique id in htmlFor */}
                                    </div>
                                ))
                            }

                            {/* <div class="overlap-5">
                                <input type="radio" id="nabek" name="location" value="Al-Nabek" />
                                <label for="nabek" class="radio-label">
                                    <label class="text-wrapper-14">gsygfeysgfsjgy</label>

                                </label>
                            </div> */}
                        </div>


                    </div>
                    <div class="text-wrapper-16">Order Summary</div>
                    <div class="overlap-6"><div class="text-wrapper-18">Place Order</div></div>

                    {/* مربع الطلبية */}
                    <div class="overlap-7">
                        <div class="text-wrapper-19">Place Order</div>
                        <div class="rectangle-6"></div>
                        <div class="text-wrapper-20">Order</div>
                        <a href="cart" class="text-wrapper-23">Edit Cart</a>

                        {/* المنتجات بالطلبية */}
                        <div className="frame-3_me">


                            {
                                productInfo.map(product => (
                                    <Componets_checkout
                                        short_desc={product.short_name}
                                        quantity={"Quantity: " + product.select_count}
                                        image={`http://localhost:3001/uploads/${product.image_url}`}
                                        price={(product.special_price * product.select_count) + "$"}
                                    />
                                ))
                            }
                            {/* 
                            <Componets_checkout
                                short_desc={"exceed Freshly Clean Dog Shampoo"}
                                quantity={"Quantity: 2"}
                                image={checkout_Rectangle_268}
                                price={"49 $"}
                            /> */}

                        </div>



                    </div>


                    <div class="text-wrapper-25">Subtotal:</div>
                    <div class="text-wrapper-27">{totalPrice} $</div>

                    <div class="text-wrapper-26">Shipping:</div>
                    {totalPrice >= 49 ? (
                        <div class="text-wrapper-28">0 $</div>
                    ) : (
                        <>
                            <div class="text-wrapper-28">15 $</div>
                        </>
                    )}

                    <div class="estimated-sales-tax">VAT: <br />(10%)</div>
                    <div class="text-wrapper-29">{(totalPrice * 0.1).toFixed(2)} $</div>

                    <div class="text-wrapper-17">Order Total</div>
                    {totalPrice >= 49 ? (
                        <div class="text-wrapper-30">{(totalPrice * 0.1) + totalPrice} $</div>
                    ) : (
                        <>
                            <div class="text-wrapper-30">{(totalPrice * 0.1) + totalPrice + 15} $</div>
                        </>
                    )}

                    <img class="line-3" src={checkout_Line_25} />
                    <img class="line-4" src={checkout_Line_25} />

                    <div class="overlap-8"><button onClick={handleSubmit2} class="text-wrapper-31">Confirm the order</button></div>
                </div>
            </div>
        </>
    )
}

export default Checkout