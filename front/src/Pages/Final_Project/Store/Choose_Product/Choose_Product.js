import './Choose_Product.css'
import Store_Vector from '../../../../Assert/Images/Store_Vector.png'
import store_Vector2 from '../../../../Assert/Images/store_Vector2.png'
import store_Vector3 from '../../../../Assert/Images/store_Vector3.png'
import store2_Vector_61 from '../../../../Assert/Images/store2_Vector_61.png'
import store2_Vector_60 from '../../../../Assert/Images/store2_Vector_60.png'
import store2_Rectangle_237 from '../../../../Assert/Images/store2_Rectangle_237.png'
import store2_Rectangle_238 from '../../../../Assert/Images/store2_Rectangle_238.png'
import store2_star_solid_1 from '../../../../Assert/Images/store2_star_solid_1.png'
import store2_Vector from '../../../../Assert/Images/store2_Vector.png'
import store2_Vector2 from '../../../../Assert/Images/store2_Vector2.svg'
import store_star_solid_1 from '../../../../Assert/Images/store_star_solid_1.png'
import store2_star_regular from '../../../../Assert/Images/store2_star_regular.png'
import store_Rectangle_141 from '../../../../Assert/Images/store_Rectangle_141.png'
import store_Vector4 from '../../../../Assert/Images/store_Vector4.svg'
import store_Vector_61 from '../../../../Assert/Images/store_Vector_61.png'
import store_Vector_60 from '../../../../Assert/Images/store_Vector_60.png'
import store2_Line_12 from '../../../../Assert/Images/store2_Line_12.png'
import store_Rectangle_168 from '../../../../Assert/Images/store_Rectangle_168.png'






import React, { useState, useEffect } from 'react';






const Choose_Product = () => {

    const [selectedStar, setSelectedStar] = useState(null);

    const handleRadioChange = (value) => {
        // Update the state with the selected radio button value
        setSelectedStar(value);
    };





    const [selectedOption, setSelectedOption] = useState('');

    // Function to handle selecting an option
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [number, setNumber] = useState(2);

    // Function to handle incrementing the number
    const incrementNumber = () => {
        setNumber(prevNumber => prevNumber + 1);
    };

    // Function to handle decrementing the number
    const decrementNumber = () => {
        if (number > 1) {
            setNumber(prevNumber => prevNumber - 1);
        }
    };

    const [largerImageSrc, setLargerImageSrc] = useState(null);

    useEffect(() => {
        // Set the initial larger image source when the component mounts
        //ضع هنا تابع بجيب صورة المنتج كتهيئة
        setLargerImageSrc(store2_Rectangle_238);
    }, []);

    // Click handler for thumbnail image
    const handleThumbnailClick = (src) => {
        // Update the source of the larger image
        setLargerImageSrc(src);
    };

    //********************************************************************************* */


    // (هنا الكود الخاص بالزووم (لاتكتر غلبه فيهن لان مستواهن اعلى من تفكيرك

    const [showZoomBox, setShowZoomBox] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // State to manage the visibility of the zoom box

    const handleMouseEnter = () => {
        setShowZoomBox(true);
    };

    const handleMouseMove = (event) => {
        const { left, top, width, height } = event.target.getBoundingClientRect();
        const mouseX = event.clientX - left;
        const mouseY = event.clientY - top;
        const relativeX = (mouseX / width) * 100;
        const relativeY = (mouseY / height) * 100;
        setMousePosition({ x: relativeX, y: relativeY });
    };

    const handleMouseLeave = () => {
        setShowZoomBox(false);
    };

    //********************************************************************************* */

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
            <div class="choose-a-product">
                <div class="div">
                    <div class="overlap">
                        <div class="text-wrapper">Shop by Pet</div>
                        <div class="text-wrapper-2">Shop by Brand</div>
                        <div class="text-wrapper-3">Deals</div>
                        <div class="text-wrapper-4">New Arrivals</div>
                        <div class="text-wrapper-5">Home</div>
                        <div class="text-wrapper-6">Store</div>
                        <div class="text-wrapper-7">Contact us</div>
                        <div class="frame">
                            <div class="overlap-group">
                                <div class="rectangle"></div>
                                <div class="text-wrapper-8">0</div>
                                <img class="vector" src={store_Vector3} />
                            </div>
                        </div>
                        <div class="vector-wrapper"><img class="img" src={store_Vector2} /></div>
                        <div class="overlap-wrapper">
                            <div class="overlap-2">
                                <div class="text-wrapper-9">PetCare</div>
                                <img class="vector-2" src={Store_Vector} />
                            </div>
                        </div>
                    </div>
                    <div class="boxstore2"><img class="line" src={store2_Line_12} /></div>

                    <div class="overlap-3">
                        <p class="p">Buy online same day pick up in one of our 600+ stores! or free shipping over</p>
                        <div class="text-wrapper-10">View Details</div>
                    </div>
                    <p class="text-wrapper-11">exced Freshly Clean Dog Shampoo</p>
                    <div class="text-wrapper-12">Product Description</div>
                    <div class="text-wrapper-13">Ingredients</div>
                    <div class="ratings-reviews">Ratings &amp; Reviews</div>
                    <div class="text-wrapper-14">Write a review</div>


                    {/* *******************************************************************************************************8 */}



                    {/* صور المنتج المصغرة */}
                    <div class="frame-3_me2">

                        <img
                            className="rectangle-2"
                            src={store_Rectangle_168}
                            alt="Thumbnail Image"
                            onClick={() => handleThumbnailClick(store_Rectangle_168)}
                        />
                        <img
                            className="rectangle-2"
                            src={store2_Rectangle_238}
                            alt="Thumbnail Image"
                            onClick={() => handleThumbnailClick(store2_Rectangle_238)}
                        />

                    </div>
                    {/* اسهم التنقل بين صور المنتج الصغيرة */}
                    <img class="vector-5" src={store2_Vector_60} />
                    <img class="vector-6" src={store2_Vector_61} />

                    {/* صور المنتج الكبيرة */}
                    {largerImageSrc && (
                        <div
                            className="rectangle-3"
                            style={{ position: 'relative' }}
                            onMouseEnter={handleMouseEnter}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                src={largerImageSrc}
                                alt="Larger Image"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                }}
                            />
                            {showZoomBox && (
                                <div
                                    className="zoom-box"
                                    style={{
                                        position: 'absolute',
                                        width: '200px',
                                        height: '200px',
                                        border: '1px solid black',
                                        borderRadius: 100,
                                        pointerEvents: 'none',
                                        left: `calc(${mousePosition.x}% - 100px)`,
                                        top: `calc(${mousePosition.y}% - 100px)`,
                                        backgroundImage: `url(${largerImageSrc})`,
                                        backgroundSize: '500% 500%',
                                        backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
                                    }}
                                />
                            )}
                        </div>
                    )}


                    {/* *******************************************************************************************************8 */}


                    {/* قسم عدد تعليقات الكلية على المنتج ومتوسط نجومه */}
                    <div class="element">(36)</div>
                    <img class="star-solid" src={store2_star_solid_1} />
                    <div class="star-container">
                        <StarRating rating={2} />

                    </div>
                    <img class="line" src="img/line-12.svg" />



                    {/* قسم اختيار حجم العبوة */}
                    <div className="frame-1">
                        <div className="div-wrapper">
                            <input
                                type="radio"
                                id="option1"
                                name="options"
                                value="150 ml"
                                checked={selectedOption === "150 ml"}
                                onChange={handleOptionChange}
                            />
                            <label htmlFor="option1" className="text-wrapper-15">150 ml</label>
                        </div>

                        <div className="div-wrapper">
                            <input
                                type="radio"
                                id="option2"
                                name="options"
                                value="80 ml"
                                checked={selectedOption === "80 ml"}
                                onChange={handleOptionChange}
                            />
                            <label htmlFor="option2" className="text-wrapper-15">80 ml</label>
                        </div>
                        <div className="div-wrapper">
                            <input
                                type="radio"
                                id="option3"
                                name="options"
                                value="50 ml"
                                checked={selectedOption === "50 ml"}
                                onChange={handleOptionChange}
                            />
                            <label htmlFor="option3" className="text-wrapper-15">50 ml</label>
                        </div>
                    </div>


                    {/* هنا سعر المنتج */}
                    <div class="text-wrapper-16">$22.99</div>


                    {/* قسم تحديد كم حبة للاضافة الى السلة */}
                    <div className="overlap-4">
                        <div className="text-wrapper-17">{number}</div>
                        <div className="overlap-5" onClick={incrementNumber}>
                            <div className="rectangle-4"></div>
                            <div className="rectangle-5" ></div>
                        </div>
                        <div className="rectangle-6" onClick={decrementNumber}></div>
                        <div className="rectangle-7" onClick={decrementNumber}></div>
                    </div>


                    {/* زر الاضافة الى السلة */}
                    <div class="overlap-6"><div class="text-wrapper-18">Add to Cart</div></div>


                    {/* اعلان التوصيل مجاني بكثر من 50 دولار */}
                    <div class="overlap-7">
                        <div class="img-wrapper"><img class="vector-3" src={store2_Vector2} /></div>
                        <div class="text-wrapper-19">Ship To Me</div>
                        <div class="text-wrapper-20">FREE Shipping Over $49</div>
                    </div>


                    <div class="frame-2">
                        <img class="vector-4" src={store2_Vector} />
                        <p class="text-wrapper-21">Roll over image to zoom in</p>
                    </div>







                    {/* *****************************************************************************************************************************8 */}

                    {/* قسم وصف المنتج */}
                    <div class="overlap-8">
                        <div class="overlap-9">
                            <p class="exceed-freshly-clean">
                                exceed Freshly Clean Dog Shampoo offers wellness that optimizes your pets&#39; health, beauty, and
                                comfort. This Freshly Clean Dog Shampoo is hand-crafted with naturally derived ingredients including
                                Vitamins A, E, B5, and extracts like Aloe Vera, Lavender and Rosemary.

                            </p>
                            <div class="text-wrapper-22">Features :</div>
                            <p class="text-wrapper-23">pH-balanced formula is free of parabens</p>
                            <p class="text-wrapper-24">pH-balanced formula is free of parabens</p>
                            <p class="text-wrapper-25">pH-balanced formula is free of parabens</p>
                            <p class="text-wrapper-26">pH-balanced formula is free of parabens</p>
                        </div>
                        <div class="overlap-10">
                            <p class="wet-coat-thoroughly">
                                Wet coat thoroughly with water. Massage shampoo through pet&#39;s coat while guarding areas around eyes
                                and ears. Rinse well with water. Pair with eXceed Conditioner and After-Groom Finisher Fragrance Spray
                                (sold separately).

                            </p>
                            <div class="text-wrapper-27">Use :</div>
                        </div>
                    </div>


                    {/* *****************************************************************************************************************************8 */}

                    {/* قسم مكونات المنتج */}
                    <div class="overlap-11">
                        <p class="text-wrapper-28">
                            Purified Water, Mild Coconut-based Cleansing and Foaming Agents, Preservative, Glycerin, Thickener, Oat
                            Extract, Aloe Vera Extract, Plant-based Enzyme, Vitamin B5 (Panthenol), Lavender Extract, Fragrance, Vitamin
                            E, Rosemary Extract, Capric Triglycerides, Vitamin A, Dye

                        </p>
                    </div>

                    {/* *****************************************************************************************************************************8 */}


                    {/* قسم التقييم والمراجعات */}

                    <div class="overlap-12">

                        {/* قسم نجوم التقييم  */}

                        <div className="frame-2_me">
                            <div className="overlap-13">
                                <input
                                    type="radio"
                                    className="star-radio"
                                    id="star-1"
                                    value={1}
                                    checked={selectedStar === 1}
                                    onChange={() => handleRadioChange(1)}
                                />
                                <label htmlFor="star-1">
                                    <img className="star-regular" src={store2_star_regular} alt="Star" />
                                    <div className="rectangle-8"></div>
                                </label>
                            </div>
                            <div className="overlap-13">
                                <input
                                    type="radio"
                                    className="star-radio"
                                    id="star-2"
                                    value={2}
                                    checked={selectedStar === 2}
                                    onChange={() => handleRadioChange(2)}
                                />
                                <label htmlFor="star-2">
                                    <img className="star-regular" src={store2_star_regular} alt="Star" />
                                    <div className="rectangle-8"></div>
                                </label>
                            </div>
                            <div className="overlap-13">
                                <input
                                    type="radio"
                                    className="star-radio"
                                    id="star-3"
                                    value={3}
                                    checked={selectedStar === 3}
                                    onChange={() => handleRadioChange(3)}
                                />
                                <label htmlFor="star-3">
                                    <img className="star-regular" src={store2_star_regular} alt="Star" />
                                    <div className="rectangle-8"></div>
                                </label>
                            </div>
                            <div className="overlap-13">
                                <input
                                    type="radio"
                                    className="star-radio"
                                    id="star-4"
                                    value={4}
                                    checked={selectedStar === 4}
                                    onChange={() => handleRadioChange(4)}
                                />
                                <label htmlFor="star-4">
                                    <img className="star-regular" src={store2_star_regular} alt="Star" />
                                    <div className="rectangle-8"></div>
                                </label>
                            </div>
                            <div className="overlap-13">
                                <input
                                    type="radio"
                                    className="star-radio"
                                    id="star-5"
                                    value={5}
                                    checked={selectedStar === 5}
                                    onChange={() => handleRadioChange(5)}
                                />
                                <label htmlFor="star-5">
                                    <img className="star-regular" src={store2_star_regular} alt="Star" />
                                    <div className="rectangle-8"></div>
                                </label>
                            </div>
                        </div>



                        {/* *****************************************************************************************************************************8 */}



                        {/* قسم تعليقات المستخدمين */}

                        <div class="overlap-18">
                            <p class="text-wrapper-29">
                                Purified Water, Mild Coconut-based Cleansing and Foaming Agents, Preservative, Glycerin, Thickener, Oat
                                Extract, Aloe Vera Extract, Plant-based Enzyme, Vitamin B5 (Panthenol), Lavender Extract, Fragrance,
                                Vitamin E, Rosemary Extract, Capric Triglycerides, Vitamin A, Dye

                            </p>
                            <div class="text-wrapper-30">2024/2/5</div>
                            <div class="overlap-group-wrapper">
                                <div class="overlap-19">
                                    <div class="text-wrapper-31">Mohammad Ainia</div>
                                    <div class="star-container3">
                                        <StarRating2 rating={8} />

                                    </div>
                     
                                </div>
                            </div>
                        </div>

                        {/* *****************************************************************************************************************************8 */}




                        <div class="text-wrapper-32">Rating Snapshot</div>
                        <div class="text-wrapper-33">All Reviews</div>
                        <div class="text-wrapper-34">Overall Ratting</div>
                        <div class="text-wrapper-35">Review this Product</div>

                        <div class="overlap-20">
                            <input class='rectangle-9' type='text' placeholder="Write a review" />

                        </div>

                        <div class="text-wrapper-37">5 Stars</div>
                        <div class="overlap-21">
                            <div class="text-wrapper-38">77 Reviews</div>
                            <div class="frame-3">
                                <div class="overlap-22">
                                    <div class="text-wrapper-39">4.7</div>
                                    <div class="star-container2">
                                        <StarRating2 rating={5} />

                                    </div>

                                    {/* <img class="vector-11" src={store_star_solid_1} /> */}
                                    {/* <img class="vector-12" src={store_star_solid_1} />
                                    <img class="vector-13" src={store_star_solid_1} /> */}
                                </div>
                                {/* <img class="vector-14" src={store_star_solid_1} /> */}
                            </div>
                        </div>
                        <div class="overlap-23">
                            <div class="overlap-24">
                                <div class="overlap-25">
                                    <div class="text-wrapper-40">57</div>
                                    <div class="text-wrapper-41">10</div>
                                </div>
                                <div class="text-wrapper-42">20</div>
                            </div>
                            <div class="text-wrapper-43">5</div>
                        </div>
                        <div class="text-wrapper-44">2</div>
                        <div class="overlap-26">
                            <div class="overlap-27">
                                <div class="overlap-28">
                                    <div class="text-wrapper-40">4 Stars</div>
                                    {/* <div class="text-wrapper-40">4 Stars</div> */}
                                </div>
                                <div class="text-wrapper-45">3 Stars</div>
                            </div>
                            <div class="text-wrapper-46">2 Stars</div>
                        </div>
                        <div class="text-wrapper-47">1 Stars</div>
                        <div class="rectangle-10"></div>
                        <div class="rectangle-11"></div>
                        <div class="rectangle-12"></div>
                        <div class="rectangle-13"></div>
                        <div class="rectangle-14"></div>
                        {/* <div class="rectangle-15"></div> */}
                        {/* <div class="rectangle-16"></div>
                        <div class="rectangle-17"></div>
                        <div class="rectangle-18"></div>
                        <div class="rectangle-19"></div> */}
                        <div class="overlap-29"><div class="text-wrapper-48">Share</div></div>
                    </div>
                    <div class="text-wrapper-49">Similar Items</div>
                    <div class="text-wrapper-50">Recently Viewed Items</div>
                    <div class="overlap-30">
                        <div class="rectangle-20"></div>
                        <img class="rectangle-21" src={store_Rectangle_141} />
                        <div class="text-wrapper-51">exceed</div>
                        <div class="element-2">4.6&nbsp;&nbsp; (36)</div>
                        <div class="text-wrapper-52">$22.99</div>
                        <div class="text-wrapper-53">Anxiety Relief</div>
                        <div class="text-wrapper-54">Dog Shampoo</div>
                        <div class="frame-4">
                            <div class="overlap-31">
                                <div class="rectangle-22"></div>
                                <div class="text-wrapper-55">Available for AutoShip</div>
                                <img class="vector-15" src={store_Vector4} />
                            </div>
                        </div>
                        <div class="frame-5"><div class="text-wrapper-56">view</div></div>
                    </div>
                    <div class="overlap-32">
                        <div class="rectangle-20"></div>
                        <img class="rectangle-21" src={store_Rectangle_141} />
                        <div class="text-wrapper-51">exceed</div>
                        <div class="element-2">4.6&nbsp;&nbsp; (36)</div>
                        <div class="text-wrapper-52">$22.99</div>
                        <div class="text-wrapper-53">Anxiety Relief</div>
                        <div class="text-wrapper-54">Dog Shampoo</div>
                        <div class="frame-4">
                            <div class="overlap-31">
                                <div class="rectangle-22"></div>
                                <div class="text-wrapper-55">Available for AutoShip</div>
                                <img class="vector-15" src={store_Vector4} />
                            </div>
                        </div>
                        <div class="frame-5"><div class="text-wrapper-56">view</div></div>
                    </div>
                    <img class="vector-16" src={store_Vector_60} />
                    <img class="vector-17" src={store_Vector_60} />
                    <img class="vector-18" src={store_Vector_61} />
                    <img class="vector-19" src={store_Vector_61} />
                </div>
            </div>
        </>
    )
}

export default Choose_Product