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

    const [typeDelaviry, setTypeDelaviry] = useState(null)
    const [productInfo, setProductInfo] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [totalPrice, setTotalPrice] = useState(0); // State to hold the total price




    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/storee/show_cart', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setProductInfo(res.data.result);
                    // Initialize quantities with default values
                    const initialQuantities = {};
                    res.data.result.forEach(product => {
                        initialQuantities[product.id] = product.count_av > 0 ? 1 : 0;
                    });
                    setQuantities(initialQuantities);
                    // Calculate total price
                    calculateTotalPrice(res.data.result, initialQuantities);
                } else {
                    navigate('/login');
                }
            })
            .catch(err => console.log(err));
    }, []);
    console.log(productInfo)

    // تابع حذف المنتج من السلة
    const handleDelete = (productId) => {
        // Send delete request to backend
        axios.post(`http://localhost:3001/storee/delete/${productId}`,{withCredentials:true})
            .then(res => {
                // Handle response if needed
                console.log('Product deleted successfully');
            })
            .catch(err => {
                // Handle error
                console.error('Error deleting product:', err);
            });
    };




    // تابع ارسال المعلومات الى مرحلة الدفع
    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault();

        const productMatrix = [];
        productInfo.forEach(product => {
            productMatrix.push({
                productId: product.id,
                quantity: quantities[product.id]
            });
        });

        axios.post('http://localhost:3001/#', { products: productMatrix, deliveryType: typeDelaviry })
            .then(res => {
                if (res.data.valid) {
                    navigate('/#')
                } else {
                    alert('Not published');
                }
            })
            .catch(err => { console.log(err) });
    };


    //اضافة ونقصان الكمية المطلوبة

    const incrementNumberUntil = (productId, targetValue) => {
        if (quantities[productId] < targetValue) {
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [productId]: prevQuantities[productId] + 1
            }));
            // Recalculate total price when quantity changes
            calculateTotalPrice(productInfo, { ...quantities, [productId]: quantities[productId] + 1 });
        }
    };

    const decrementNumber = productId => {
        if (quantities[productId] > 1) {
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [productId]: prevQuantities[productId] - 1
            }));
            // Recalculate total price when quantity changes
            calculateTotalPrice(productInfo, { ...quantities, [productId]: quantities[productId] - 1 });
        }
    };
    const calculateTotalPrice = (products, quantities) => {
        let total = 0;
        products.forEach(product => {
            total += product.special_price * quantities[product.id];
        });
        setTotalPrice(total);
    };
    const handleChange = (e) => {
        setTypeDelaviry(e.target.value);
    };
    return (

        <>
            <Store_Header />

            <div class="cart">
                <div class="div">

                    <div class="overlap-3">
                        <p class="p">Buy online same day pick up in one of our 600+ stores! or free shipping over</p>
                        <div class="text-wrapper-10">View Details</div>
                    </div>
                    <p class="text-wrapper-11">Select a pick up or delivery option to proceed</p>
                    <div class="text-wrapper-12">Item</div>
                    <div class="text-wrapper-13">Price</div>
                    <div class="text-wrapper-14">Quantity</div>

                    <form onSubmit={handleSubmit}>


                        {/* ملخص السلة */}
                        <div class="boxcart2"><img class="line" src={cart_Line_20} /></div>
                        <div class="overlap-4">

                            <div class="text-wrapper-19">Cart Summary</div>
                            <p class="text-wrapper-15">Free shipping on orders over 49$!</p>

                            <div class="text-wrapper-20">Subtotal:</div>
                            <div className="text-wrapper-18">{totalPrice} $</div>

                            <div class="rectangle-2"></div>
                            <img class="line" src="img/line-20.svg" />

                            <div class="text-wrapper-17">49 $</div>
                            <div class="rectangle-3" style={{ width: `${(totalPrice / 40) * 230}px` }}></div>
                            {totalPrice >= 49 ? (
                                <div class="text-wrapper-16cart">Congratulations, you get FREE Shipping!</div>
                            ) : (
                                <>
                                    <div class="text-wrapper-16">{(49 - totalPrice) + " $ Until Free Shipping!"}</div>
                                </>
                            )}


                            <p class="shipping-taxes">(Shipping &amp; Taxes Calculated at Checkout)</p>
                            <div class="rectangle-5"></div>
                            <button class="text-wrapper-21">Proceed to Checkout</button>
                        </div>

                        <div class="overlap-6">
                            <input
                                type="radio"
                                id="pickup"
                                name="shippingOption"
                                className="radio-input"
                                value="pick in store"
                                onChange={handleChange} // Add onChange event listener
                            />
                            <label for="pickup" className="radio-label">
                                <div class="ellipse"></div>
                                <img class="shop-solid" src={cart_shop_solid_1} />
                                <div class="text-wrapper-27">Pick Up In-Store</div>
                            </label>
                        </div>
                        <div class="overlap-7">
                            <input
                                type="radio"
                                id="shipToMe"
                                name="shippingOption"
                                className="radio-input"
                                value="ship to me"
                                onChange={handleChange} // Add onChange event listener
                            />
                            <label for="shipToMe" className="radio-label">
                                <div class="ellipse"></div>
                                <div class="text-wrapper-27">Ship To Me</div>
                                <img class="vector-3" src={cart_Vector} />
                            </label>
                        </div>
                    </form>


                    {/* المنتج */}
                    <div className="frame-3_me">
                        {productInfo.map(product => (
                            <div className="overlap-3_cart" key={product.id}>
                                <div className="overlap-5">
                                    <p className="text-wrapper-23">{product.short_name}</p>
                                    <div className="text-wrapper-24">Size: {product.detalis}</div>
                                    <div className="rectangle-6"></div>
                                    {product.count_av > 0 ? (
                                        <p className="text-wrapper-25">{product.count_av} In Stock for Pick Up</p>
                                    ) : (
                                        <p className="text-wrapper-25cart">Out of stock</p>
                                    )}
                                </div>
                                <div className="overlap-8">
                                    <div className="text-wrapper-28">{quantities[product.id]}</div>
                                    <div className="overlap-9" onClick={() => incrementNumberUntil(product.id, product.count_av)}>
                                        <div className="rectangle-8"></div>
                                        <div className="rectangle-9"></div>
                                    </div>
                                    <div className="rectangle-10" onClick={() => decrementNumber(product.id)}></div>
                                    <div className="rectangle-11" onClick={() => decrementNumber(product.id)}></div>
                                </div>
                                <div class="boxcart"><img class="line" src={cart_Line_19} /></div>
                                <img class="rectangle-7" src={`http://localhost:3001/uploads/${product.image_url}`} />
                                <div class="text-wrapper-22">{product.special_price + "$"}</div>
                                <img
                                    className="trash-solid"
                                    src={cart_trash_solid_1}
                                    onClick={() => handleDelete(product.cart_id)}
                                    alt="Delete"
                                />
                            </div>
                        ))}
                    </div>



                    <div class="text-wrapper-26">Shopping Cart</div>


                    <img class="line-2" src="img/line-19.svg" />
                </div>
            </div >
        </>
    )
}

export default Cart