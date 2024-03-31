import './Product_Assortment.css'
import store2_star_solid_1 from '../../../../Assert/Images/store2_star_solid_1.png'
import Store_Vector from '../../../../Assert/Images/Store_Vector.png'
import store_Vector2 from '../../../../Assert/Images/store_Vector2.png'
import store_Vector3 from '../../../../Assert/Images/store_Vector3.png'
import choose2_a_Line_13 from '../../../../Assert/Images/choose2_a_Line_13.png'


const Product_Assortment = () => {


    //اختبار كم نجمة اظهر
    function StarRating({ rating }) {
        const filledStars = Math.floor(rating);
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < filledStars) {
                stars.push(<img key={i} class="star-solid" src={store2_star_solid_1} alt="Filled Star" />);
            }
        }
        return <div>{stars}</div>; // Return the array of stars wrapped in a div
    }
    return (

        <>
            <div class="product-assortment">
                <div class="div">
                    <div class="overlap">
                        <div class="text-wrapper">Shop by Pet</div>
                        <div class="text-wrapper-2">Shop by Brand</div>
                        <div class="text-wrapper-3">Deals</div>
                        <div class="text-wrapper-4">New Arrivals</div>
                        <div class="text-wrapper-5">Home</div>
                        <div class="text-wrapper-6">Store</div>
                        <div class="text-wrapper-7">Contact us</div>
                        <div class="frame"><img class="vector" src={store_Vector2} /></div>
                        <div class="overlap-group-wrapper">
                            <div class="overlap-group">
                                <div class="text-wrapper-8">PetCare</div>
                                <img class="img" src={Store_Vector} />
                            </div>
                        </div>
                        <div class="overlap-wrapper">
                            <div class="overlap-2">
                                <div class="rectangle"></div>
                                <div class="text-wrapper-9">0</div>
                                <img class="vector-2" src={store_Vector3} />
                            </div>
                        </div>
                    </div>

                    <div class="box100"><img class="line" src={choose2_a_Line_13} /></div>
                    <div class="box101"><img class="line" src={choose2_a_Line_13} /></div>
                    <div class="box102"><img class="line" src={choose2_a_Line_13} /></div>


                    {/* *********************************************************************************************************** */}



                    {/* عناصر التصفية حسب البراند */}
                    <div class="frame-3_me2">
                        <div>
                            <div for="brand1" class="text-wrapper-10">ACANA (23)</div>
                            {/* اول مربع اختيار */}
                            {/* <div class="rectangle-2"></div> */}
                            <input class="rectangle-2" type='checkbox' value={"acana"} id='brand1' />
                        </div>


                    </div>




                    {/* عناصر التصفية حسب الطريقة */}
                    <div class="frame-3_me23">

                        <div>
                            <div for='one' class="text-wrapper-16">Top Rated (23)</div>
                            {/* <div class="rectangle-8"></div> */}
                            <input class="rectangle-8" type='checkbox' value={"#"} id='one' />
                        </div>

                        <div>
                            <div for='two' class="text-wrapper-16">Made in China (23)</div>
                            {/* <div class="rectangle-8"></div> */}
                            <input class="rectangle-8" type='checkbox' value={"#"} id='two' />
                        </div>

                        <div>
                            <div for='three' class="text-wrapper-16">Made in italy (23)</div>
                            {/* <div class="rectangle-8"></div> */}
                            <input class="rectangle-8" type='checkbox' value={"#"} id='three' />

                        </div>

                        <div>
                            <div for='four' class="text-wrapper-16">New (23)</div>
                            {/* <div class="rectangle-8"></div> */}
                            <input class="rectangle-8" type='checkbox' value={"#"} id='four' />

                        </div>

                    </div>

                    {/* عناصر التصفية حسب نجوم التقييم */}

                    {/* نجمة واحدة */}
                    <div class="UP">&amp; UP (23)</div>
                    {/* <div class="rectangle-9"></div> */}
                    <input class="rectangle-9" type='checkbox' value={1} />
                    <div class="star-container">
                        <StarRating rating={1} />
                    </div>

                    {/* نجمتين */}
                    <div class="UP-2">&amp; UP (23)</div>
                    {/* <div class="rectangle-11"></div> */}
                    <input class="rectangle-11" type='checkbox' value={2} id='star' />
                    <div class="star-container2">
                        <StarRating rating={2} />
                    </div>

                    {/* ثلاث نجوم */}
                    <div class="UP-3">&amp; UP (23)</div>
                    {/* <div class="rectangle-13"></div> */}
                    <input class="rectangle-13" type='checkbox' value={3} />
                    <div class="star-container3">
                        <StarRating rating={3} />
                    </div>

                    {/* اربع نجوم */}
                    <div class="UP-4">&amp; UP (23)</div>
                    {/* <div class="rectangle-15"></div> */}
                    <input class="rectangle-15" type='checkbox' value={4} />
                    <div class="star-container4">
                        <StarRating rating={4} />
                    </div>

                    {/* خمس نجوم */}
                    <div class="UP-5">&amp; UP (23)</div>
                    {/* <div class="rectangle-16"></div> */}
                    <input class="rectangle-16" type='checkbox' value={5} />

                    <div class="star-container5">
                        <StarRating rating={5} />
                    </div>


                    {/* *********************************************************************************************************** */}




                    <div class="div-wrapper">
                        <p class="p">Buy online same day pick up in one of our 600+ stores! or free shipping over</p>
                    </div>
                    <img class="line" src="img/line-13.svg" />
                    <img class="line-2" src="img/line-14.svg" />
                    <img class="line-3" src="img/line-15.svg" />


                    <div class="text-wrapper-20">Brand</div>
                    <div class="text-wrapper-21">Puppy Essentials</div>
                    <div class="text-wrapper-23">Shop your way</div>
                    <div class="text-wrapper-24">Rating</div>


                    {/* *********************************************************************************************************** */}


                    {/* مربع اختيار ترتيب العناصر حسب ... */}
                    <div for='sort' class="text-wrapper-22">Sort By</div>
                    {/* <div class="rectangle-17"></div> */}

                    <select class="rectangle-17" id="sort" name="brand">
                        <option value="brand1">Price low</option>
                        <option value="brand2">Haigh Price</option>
                        <option value="brand3">Brand 3</option>
                    </select>



                    {/* *********************************************************************************************************** */}


                    <div class="frame-3_meee">


                        <div class="overlap-3">

                            <div class="rectangle-18"></div>
                            <img class="rectangle-19" src="img/rectangle-215.png" />
                            <div class="text-wrapper-25">exceed</div>
                            <div class="element">4.6&nbsp;&nbsp; (36)</div>
                            <div class="text-wrapper-26">$22.99</div>
                            <div class="text-wrapper-27">Anxiety Relief</div>
                            <div class="text-wrapper-28">Dog Shampoo</div>
                            <div class="frame-2">
                                <div class="overlap-4">
                                    <div class="rectangle-20"></div>
                                    <div class="text-wrapper-29">Available for AutoShip</div>
                                    <img class="vector-3" src="img/vector-45.svg" />
                                </div>
                            </div>
                            <div class="frame-3"><div class="text-wrapper-30">view</div></div>
                            <img class="vector-4" src="img/vector-16.svg" />
                            <img class="vector-5" src="img/vector-40.svg" />
                            <img class="vector-6" src="img/vector-41.svg" />
                            <img class="vector-7" src="img/vector-20.svg" />
                            <img class="vector-8" src="img/vector-13.svg" />
                        </div>
                        
                        
                    </div>


                </div>
            </div>
        </>
    )
}

export default Product_Assortment