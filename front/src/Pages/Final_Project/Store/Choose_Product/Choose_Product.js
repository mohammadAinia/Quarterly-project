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






import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { Componets_Product_store, Componets_user_reviews } from '../../../../Componets'







var pricee
const Choose_Product = () => {

    const [Product_Info, setProduct_Info] = useState([])
    const [Size, setSize] = useState([])
    const [Features, setFeatures] = useState([" "])
    const [UserReviews, setUserReviews] = useState([])
    const [SimilarItem, setSimilarItem] = useState([])
    const [Recently_Viewed_Items, setRecently_Viewed_Items] = useState([])
    const [desc, setdesc] = useState([])
    const [first_s, set_f] = useState([])
    const [smallimage, set_small] = useState([])









    const { id } = useParams()

    //تهيئة الصورة الكبيرة
    const [largerImageSrc, setLargerImageSrc] = useState(null);


    //توابع جلب معلومات من الباك


    const navigate = useNavigate()

    useEffect(() => {

        axios.get(`http://localhost:3001/storee/open_proudact/${id}`, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {

                    setProduct_Info(res.data.result[0])
                    setSize(res.data.result3)
                    setdesc(res.data.result1[0])
                    setFeatures(res.data.result2)
                    setUserReviews(res.data.result9)
                    setRecently_Viewed_Items(res.data.result5)
                    set_f(res.data.result3[0].count_av)
                    setPrice(res.data.result3[0].special_price)
                    setSimilarItem(res.data.v)
                    set_small(res.data.result651)
                    if (res.data.result3[0].count_av==0){
                        setQuantity(0)
                        setNumber(0)
                    }
                    else {
                        setQuantity(1)
                        setNumber(1)
                    }
                    //هنا عطيني صورة المنتج
                    // alert(res.data.result[0].image_url)
                    setLargerImageSrc(`http://localhost:3001/uploads/${res.data.result651[0].urli}`);
                    // setQuantity(res.data.result3[0].count_av)
// alert(res.data.result3[0].special_price)

                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })

    },
        [])




    //تابع اضافة الى سلة التسوق
    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (quantity === 0) {
            // Quantity is zero, item cannot be added to the cart
            alert("This item is out of stock.");
            return;
        }

        axios.post('http://localhost:3001/#/#', { number, selectedOption })
            .then(res => {
                if (res.data.valid) {
                    alert("Added to cart successfully");
                    window.location.reload();
                } else {
                    alert('Not published');
                }
            })
            .catch(err => { console.log(err) });
    };



    const [Comment, setComment] = useState('')

    // تابع اضافة تعليق
    axios.defaults.withCredentials = true
    const handleSubmit2 = async (e) => {
        e.preventDefault();

        axios.post(`http://localhost:3001/storee/addrev/${id}`, { selectedStar, Comment })
            .then(res => {
                if (res.data.valid) {
                    alert("Added to cart successfully");
                    window.location.reload();
                } else {
                    alert('Not published');
                }
            })
            .catch(err => { console.log(err) });
    };









    // اختيار نجوم التقييم
    const [selectedStar, setSelectedStar] = useState(null);

    const handleRadioChange = (value) => {
        // Update the state with the selected radio button value
        setSelectedStar(value);
    };





    const [selectedOption, setSelectedOption] = useState('');
    const [quantity, setQuantity] = useState(null);
    var [price, setPrice] = useState('');
    var [quantit,setQ]=useState(0)
    useEffect(() => {
        // Call fetchPackageInfo when the component mounts
        fetchPackageInfo();
    }, []);

    // معالجة اختيار حجم عبوة
    const handleOptionChange = (event) => {
        const selectedSize = event.target.value;
        setSelectedOption(selectedSize);
        // Call a function to fetch quantity and price based on the selected package size
        fetchPackageInfo(selectedSize);
    };

    // هنا التابع الي بجبلي معلومات الكمية والسعر بناء على اختيار الحجم  
    const fetchPackageInfo = (selectedSize) => {
        if (!selectedSize) {

            const basicQuantity = first_s.count_av; // Assuming Product.quantity holds the basic quantity
            const quantityToShow = basicQuantity === 0 ? 0 : 1; // If basic quantity is zero, show zero, otherwise show one
            setQuantity(basicQuantity);
            setNumber(quantityToShow);
            
            // const basicQuantity = 5; // Assuming Product.quantity holds the basic quantity
            // const quantityToShow = basicQuantity === 0 ? 0 : 1; // If basic quantity is zero, show zero, otherwise show one
            // setQuantity(basicQuantity);
            // setNumber(quantityToShow);
            // setPrice(30);
            // alert(quantity)

        } else {

            axios.get(`http://localhost:3001/storee/get_addtion/${selectedSize}`, { withCredentials: true })
                .then(res => {
                    if (res.data.valid) {
                        const fetchedQuantity = res.data.result[0].count_av;
                        const quantityToShow = fetchedQuantity === 0 ? 0 : 1; // If fetched quantity is zero, show zero, otherwise show one
                        setQuantity(fetchedQuantity);
                        setNumber(quantityToShow);
                        setPrice(res.data.result[0].special_price);
                        // alert(res.data.result[0].special_price)

                    } else {
                        navigate('/login');
                    }
                })
                .catch(err => { console.log(err) });

            // alert("hellow")
        }
    };






    //اضافة ونقصان الكمية المطلوبة

    const [number, setNumber] = useState('');

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


    //اختبار كم نجمة اظهر
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
    function StarRating3({ rating }) {
        const filledStars = Math.floor(rating);
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < filledStars) {
                stars.push(<img key={i} className="star-solidd" src={store_star_solid_1} alt="Filled Star" />);
            }
        }
        return <div>{stars}</div>; // Return the array of stars wrapped in a div
    }
    function StarRating4({ rating }) {
        const filledStars = Math.floor(rating);
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < filledStars) {
                stars.push(<img key={i} className="star-soliddd" src={store_star_solid_1} alt="Filled Star" />);
            }
        }
        return <div>{stars}</div>; // Return the array of stars wrapped in a div
    }

    const frameRef2 = useRef(null);

    const scrollRight = () => {
        if (frameRef2.current) {
            frameRef2.current.scrollBy({
                left: 300, // Adjust as needed to control the scroll distance
                behavior: 'smooth' // Add smooth scrolling effect
            });
        }
    };
    const scrollLeft = () => {
        if (frameRef2.current) {
            frameRef2.current.scrollBy({
                left: -300, // Adjust as needed to control the scroll distance
                behavior: 'smooth' // Add smooth scrolling effect
            });
        }
    };
    const frameRef3 = useRef(null);

    const scrollRight2 = () => {
        if (frameRef3.current) {
            frameRef3.current.scrollBy({
                left: 300, // Adjust as needed to control the scroll distance
                behavior: 'smooth' // Add smooth scrolling effect
            });
        }
    };
    const scrollLeft2 = () => {
        if (frameRef3.current) {
            frameRef3.current.scrollBy({
                left: -300, // Adjust as needed to control the scroll distance
                behavior: 'smooth' // Add smooth scrolling effect
            });
        }
    };


    //اسهم التنقل بالصور الصغيرة

    const frameRef = useRef(null);

    const scrollBottom = () => {
        if (frameRef.current) {
            frameRef.current.scrollBy({
                top: 300, // Adjust as needed to control the scroll distance
                behavior: 'smooth' // Add smooth scrolling effect
            });
        }
    };
    const scrollTop = () => {
        if (frameRef.current) {
            frameRef.current.scrollBy({
                top: -300, // Adjust as needed to control the scroll distance
                behavior: 'smooth' // Add smooth scrolling effect
            });
        }
    };
    // jbfks

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
                        {quantity === 0 && <div className="text-wrapper-100">Out of stock</div>}
                    </div>

                    {/* تفاصيل المنتج بالبداية اول الصفحة */}
                    <p class="text-wrapper-11">{Product_Info.short_name}</p>




                    <div class="text-wrapper-12">Product Description</div>
                    <div class="text-wrapper-13">Ingredients</div>
                    <div class="ratings-reviews">Ratings &amp; Reviews</div>
                    <div class="text-wrapper-14"> Write a review</div>


                    {/* *******************************************************************************************************8 */}



                    {/* صور المنتج المصغرة */}
                    <div class="frame-3_me2" ref={frameRef}>

                        {/* تم تعطيل هذه الميزة سأصلحها انا لاحقا لاتقرب عليها هيي شغالة بس بدي عدل شغلة بالداتا بيز لتشتغل متل الناس  */}
                        {smallimage.map((user, i) => (
                            <img
                                className="rectangle-2"
                                src={`http://localhost:3001/uploads/${user.urli}`}
                                alt="Thumbnail Image"
                                onClick={() => handleThumbnailClick(`http://localhost:3001/uploads/${user.urli}`)}
                            />

                        ))}



                    </div>
                    {/* اسهم التنقل بين صور المنتج الصغيرة */}
                    <img class="vector-5" src={store2_Vector_60} onClick={scrollBottom} />
                    <img class="vector-6" src={store2_Vector_61} onClick={scrollTop} />

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
                    <div class="element">({Product_Info.review_count})</div>
                    {/* <img class="star-solid" src={store2_star_solid_1} />         */}
                    {/* mohamad commet for star appear in the right side of proudact small photos */}
                    <div class="star-container">
                        <StarRating rating={Product_Info.star_count} />

                    </div>
                    <img class="line" src="img/line-12.svg" />


                    {/* زر الاضافة الى السلة */}
                    <form onSubmit={handleSubmit}>

                        <div class="overlap-6"><button class="text-wrapper-18">Add to Cart</button></div>
                        {/* jgkj */}

                        {/* قسم اختيار حجم العبوة */}

                        <div className="frame-1">

                            {/* {Size.map((user, i) => (
                                <div className="div-wrapper">
                                    <input
                                        key={i}
                                        type="radio"
                                        id="option1"
                                        name="options"
                                        value={user.id_add}
                                        checked={selectedOption === user.detalis}
                                        onChange={handleOptionChange}
                                    />
                                    <label htmlFor="option1" className="text-wrapper-15" >{user.detalis}</label>
                                </div>

                            ))} */}
                            {
                            Size.map((user, i) => (
                                <div className="div-wrapper" key={i}>
                                    <input
                                        type="radio"
                                        id={`option${i}`} // Use a unique id for each input
                                        name="options"
                                        value={user.id_add}

                                        checked={selectedOption === user.id_add}
                                        onChange={handleOptionChange}
                                    />
                                    <label htmlFor={`option${i}`} className="text-wrapper-15">{user.detalis}</label> {/* Use the same unique id in htmlFor */}
                                </div>
                            ))
                            }
                            
                            {/* <div className="div-wrapper">
                                <input
                                    type="radio"
                                    id="option1"
                                    name="options"
                                    value={"user.details"}
                                    checked={selectedOption === "user.details"}
                                    onChange={handleOptionChange}
                                />
                                <label htmlFor="option1" className="text-wrapper-15">{"user.details"}</label>
                            </div> */}
                            {/* {Size.detalis && (
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
                        )} */}

                        </div>
                        {/* قسم تحديد كم حبة للاضافة الى السلة */}
                        <div className="overlap-4">
                            <div className="text-wrapper-17">{number}</div>
                            <div className="overlap-5" onClick={() => incrementNumberUntil(quantity)}>
                                <div className="rectangle-4"></div>
                                <div className="rectangle-5" ></div>
                            </div>
                            <div className="rectangle-6" onClick={decrementNumber}></div>
                            <div className="rectangle-7" onClick={decrementNumber}></div>
                        </div>
                    </form>


                    {/* هنا سعر المنتج */}
                    <div class="text-wrapper-16">{(price) + ' $'}</div>








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
                            {/* تفاصيل المنتج */}
                            <p class="exceed-freshly-clean">{desc.descc}  </p>

                            {/* ميزات المنتج */}

                            <div class="text-wrapper-22">{desc.type_addtion} :</div>
                            <ul>
                                {Features.map((user, i) => (

                                    <li class="text-wrapper-23">{user.uii}</li>
                                ))}
                            </ul>
                        </div>
                        {/* طريقة استخدام المنتج */}
                        <div class="overlap-10">
                            <p class="wet-coat-thoroughly">
                                {desc.other_f}
                            </p>
                            <div class="text-wrapper-27"></div>
                        </div>
                    </div>


                    {/* *****************************************************************************************************************************8 */}

                    {/* قسم مكونات المنتج */}

                    <div class="overlap-11">
                        <p class="text-wrapper-28">
                            {Product_Info.ingredients}
                        </p>
                    </div>

                    {/* *****************************************************************************************************************************8 */}


                    {/* قسم التقييم والمراجعات */}

                    <div class="overlap-12">

                        <form onSubmit={handleSubmit2}>

                            {/* مربع كتابة تعليق */}
                            <div class="overlap-20">
                                <input class='rectangle-9' type='text' placeholder="Write a review" onChange={e => setComment(e.target.value)} />

                            </div>

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
                            <div class="overlap-29"><button class="text-wrapper-48">Share</button></div>
                        </form>



                        {/* *****************************************************************************************************************************8 */}



                        {/* قسم تعليقات المستخدمين */}


                        {UserReviews.map((user, i) => (

                            <Componets_user_reviews
                                comment={user.review}
                                date={user.date_add}
                                user_name={user.user_name}
                                num_star={user.stars}
                            />

                        ))}

                        {/* <Componets_user_reviews
                            comment={"fdjsHGhfvbsffs"}
                            date={"2024/2/2"}
                            user_name={"mohammad ainia"}
                            num_star={4}
                        /> */}






                        {/* *****************************************************************************************************************************8 */}




                        <div class="text-wrapper-32">Rating Snapshot</div>
                        <div class="text-wrapper-33">All Reviews</div>
                        <div class="text-wrapper-34">Overall Ratting</div>
                        <div class="text-wrapper-35">Review this Product</div>




                        <div class="text-wrapper-37">5 Stars</div>
                        <div class="overlap-21">

                            {/* كم عدد جميع التعليقات */}
                            <div class="text-wrapper-38">{(Product_Info.comments) + ' Reviews'} </div>

                            <div class="frame-3">
                                <div class="overlap-22">

                                    {/* متوسط التقييم */}
                                    <div class="text-wrapper-39">{Product_Info.star_count}</div>

                                    <div class="star-container2">
                                        <StarRating rating={Product_Info.star_count} />
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* هنا عدد التقييمات لكل نجمة */}
                        <div class="overlap-23">
                            <div class="overlap-24">
                                <div class="overlap-25">
                                    <div className="text-wrapper-40">{Product_Info.five}</div>

                                    <div class="text-wrapper-41">{Product_Info.four}</div>
                                </div>
                                <div class="text-wrapper-42">{Product_Info.three}</div>
                            </div>
                            <div class="text-wrapper-43">{Product_Info.two}</div>
                        </div>
                        <div class="text-wrapper-44">{Product_Info.one}</div>




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

                        {/* كمان هون ارجع حط الاسماء مشان تظهر نسبة التقدم حسب كل نجمة */}
                        <div className="rectangle-10" style={{ width: `${(Product_Info.five / 40) * 133}px` }}></div>
                        <div className="rectangle-11" style={{ width: `${(Product_Info.four / 40) * 133}px` }}></div>
                        <div className="rectangle-12" style={{ width: `${(Product_Info.three / 40) * 133}px` }}></div>
                        <div className="rectangle-13" style={{ width: `${(Product_Info.two / 40) * 133}px` }}></div>
                        <div className="rectangle-14" style={{ width: `${(Product_Info.one / 40) * 133}px` }}></div>

                    </div>



                    {/* ***************************************************************************************************************************8 */}
                    {/* منتجات مشابهة */}
                    <div class="text-wrapper-49">Similar Items</div>
                    <div class="frame-3_mee" ref={frameRef2}>

                        {SimilarItem.map((user, i) => (
                            < Componets_Product_store
                                img={`http://localhost:3001/uploads/${user.image_url}`}
                                brand={user.store_in_name}
                                avg_review={user.review_count}
                                total_comments={"(" + (user.comments) + ")"}
                                price={(user.price) + ' $'}
                                desc={user.short_name}
                                href={`${user.id}`}
                                num_star={user.star_count}
                            />
                        ))}

                        {/* < Componets_Product_store
                            img={store_Rectangle_141}
                            brand={"Exceed"}
                            avg_review={"4.3"}
                            total_comments={"(" + 32 + ")"}
                            price={("42") + " $"}
                            desc={"shampooo"}
                            href={`${5}`}
                            num_star={4}
                        /> */}

                    </div>


                    {/* اسهم التنقل بين العناصر */}
                    <img class="vector-16" src={store_Vector_60} onClick={scrollRight} />
                    <img class="vector-18" src={store_Vector_61} onClick={scrollLeft} />

                    {/* ***************************************************************************************************************************8 */}
                    {/* اخر العناصر التي تمت زيارتها */}

                    <div class="text-wrapper-50">Recently Viewed Items</div>
                    <div class="frame-3_meee" ref={frameRef3}>




                        {/* {Recently_Viewed_Items.map((user, i) => (


                            < Componets_Product_store
                                img={`http://localhost:3001/uploads/${user.image_url}`}
                                brand={user.short_name}
                                avg_review={user.avg_review}
                                total_comments={"(" + (user.totla_commets) + ")"}
                                price={(user.price) + "$"}
                                desc={user.store_in_name}
                                href={`${user.id}`}
                                num_star={user.num_star}
                            />
                        ))} */}


                        < Componets_Product_store
                            img={store_Rectangle_141}
                            brand={"Exceed"}
                            avg_review={"4.3"}
                            total_comments={"(" + 32 + ")"}
                            price={("42") + " $"}
                            desc={"shampooo"}
                            href={`${5}`}
                            num_star={4}
                        />

                    </div>


                    {/* اسهم التنقل بين عناصر */}
                    <img class="vector-17" src={store_Vector_60} onClick={scrollRight2} />
                    <img class="vector-19" src={store_Vector_61} onClick={scrollLeft2} />
                </div>
            </div>
        </>
    )
}

export default Choose_Product