import './Store.css'
import Store_Vector from '../../../Assert/Images/Store_Vector.png'
import store_Vector2 from '../../../Assert/Images/store_Vector2.png'
import store_Vector3 from '../../../Assert/Images/store_Vector3.png'
import store_Rectangle_116 from '../../../Assert/Images/store_Rectangle_116.png'
import store_Rectangle_117 from '../../../Assert/Images/store_Rectangle_117.png'
import store_Rectangle_118 from '../../../Assert/Images/store_Rectangle_118.png'
import store_Rectangle_119 from '../../../Assert/Images/store_Rectangle_119.png'
import store_Rectangle_120 from '../../../Assert/Images/store_Rectangle_120.png'
import store_Rectangle_136 from '../../../Assert/Images/store_Rectangle_136.png'
import store_Rectangle_137 from '../../../Assert/Images/store_Rectangle_137.png'
import store_Rectangle_138 from '../../../Assert/Images/store_Rectangle_138.png'
import store_Rectangle_141 from '../../../Assert/Images/store_Rectangle_141.png'
import store_Vector4 from '../../../Assert/Images/store_Vector4.svg'
import store_Ellipse_108 from '../../../Assert/Images/store_Ellipse_108.png'
import store_Ellipse_109 from '../../../Assert/Images/store_Ellipse_109.png'
import store_Ellipse_110 from '../../../Assert/Images/store_Ellipse_110.png'
import store_Ellipse_111 from '../../../Assert/Images/store_Ellipse_111.png'
import store_Ellipse_112 from '../../../Assert/Images/store_Ellipse_112.png'
import store_Ellipse_113 from '../../../Assert/Images/store_Ellipse_113.png'
import store_Rectangle_159 from '../../../Assert/Images/store_Rectangle_159.png'
import store_Rectangle_160 from '../../../Assert/Images/store_Rectangle_160.png'
import store_Rectangle_161 from '../../../Assert/Images/store_Rectangle_161.png'
import store_Rectangle_162 from '../../../Assert/Images/store_Rectangle_162.png'
import store_Rectangle_163 from '../../../Assert/Images/store_Rectangle_163.png'
import store_Rectangle_164 from '../../../Assert/Images/store_Rectangle_164.png'
import store_Rectangle_165 from '../../../Assert/Images/store_Rectangle_165.png'
import store_Rectangle_166 from '../../../Assert/Images/store_Rectangle_166.png'
import store_Rectangle_167 from '../../../Assert/Images/store_Rectangle_167.png'
import store_Rectangle_168 from '../../../Assert/Images/store_Rectangle_168.png'
import store_Vector_61 from '../../../Assert/Images/store_Vector_61.png'
import store_Vector_60 from '../../../Assert/Images/store_Vector_60.png'
import store_Rectangle_170 from '../../../Assert/Images/store_Rectangle_170.png'
import store_Rectangle_172 from '../../../Assert/Images/store_Rectangle_172.png'
import store_Rectangle_174 from '../../../Assert/Images/store_Rectangle_174.png'
import store_Rectangle_176 from '../../../Assert/Images/store_Rectangle_176.png'
import store_Rectangle_178 from '../../../Assert/Images/store_Rectangle_178.png'
import store_Rectangle_184 from '../../../Assert/Images/store_Rectangle_184.png'
import store_Rectangle_185 from '../../../Assert/Images/store_Rectangle_185.png'
import store_Rectangle_186 from '../../../Assert/Images/store_Rectangle_186.png'
import store_Rectangle_187 from '../../../Assert/Images/store_Rectangle_187.png'
import store_Rectangle_188 from '../../../Assert/Images/store_Rectangle_188.png'
import store_star_solid_1 from '../../../Assert/Images/store_star_solid_1.png'
import store_Vector_62 from '../../../Assert/Images/store_Vector_62.png'
import store_Vector_locator from '../../../Assert/Images/store_Vector_locator.png'
import store_Vector_62_locator from '../../../Assert/Images/store_Vector_62_locator.png'
import store_Vector_phone from '../../../Assert/Images/store_Vector_phone.png'
import store_Vector_phone2 from '../../../Assert/Images/store_Vector_phone2.png'
import store_Rectangle_229 from '../../../Assert/Images/store_Rectangle_229.png'
import store_Line_11 from '../../../Assert/Images/store_Line_11.png'
import store_Rectangle_230 from '../../../Assert/Images/store_Rectangle_230.png'
import store_Rectangle_231 from '../../../Assert/Images/store_Rectangle_231.png'
import store_Rectangle_232 from '../../../Assert/Images/store_Rectangle_232.png'
import store_Rectangle_233 from '../../../Assert/Images/store_Rectangle_233.png'

import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Componets_Brand, Componets_Categories, Componets_Top_Sellers, Componets_newArrivals, Header, Store_Header } from '../../../Componets'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Store = () => {

    const [NewArrivalInfo, setNewArrivalInfo] = useState([])
    const [Best_Sellers, setBest_Sellers] = useState([])
    const [Top_Rated, setTop_Rated] = useState([])


    // مشان سطر رقم 360
    const [CategoriesInfo, setCategoriesInfo] = useState([])
    const [Brands, setBrands] = useState([])
    const [Trend, setTrend] = useState([])






    const navigate = useNavigate()

    useEffect(() => {

        axios.get('http://localhost:3001/storee/new_arrivle', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {

                    setNewArrivalInfo(res.data.result)
                    setCategoriesInfo(res.data.result2)
                    setBrands(res.data.result3)
                    setTop_Rated(res.data.result4)
                    // setTrend(res.data.result4)
                    setBest_Sellers(res.data.result5)
                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })

    },
        [])

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


    const frameRef = useRef(null);

    const scrollRight = () => {
        if (frameRef.current) {
            frameRef.current.scrollBy({
                left: 300, // Adjust as needed to control the scroll distance
                behavior: 'smooth' // Add smooth scrolling effect
            });
        }
    };
    const scrollLeft = () => {
        if (frameRef.current) {
            frameRef.current.scrollBy({
                left: -300, // Adjust as needed to control the scroll distance
                behavior: 'smooth' // Add smooth scrolling effect
            });
        }
    };

    const frameRef2 = useRef(null);

    const scrollRight2 = () => {
        if (frameRef2.current) {
            frameRef2.current.scrollBy({
                left: 300, // Adjust as needed to control the scroll distance
                behavior: 'smooth' // Add smooth scrolling effect
            });
        }
    };
    const scrollLeft2 = () => {
        if (frameRef2.current) {
            frameRef2.current.scrollBy({
                left: -300, // Adjust as needed to control the scroll distance
                behavior: 'smooth' // Add smooth scrolling effect
            });
        }
    };
    const frameRef3 = useRef(null);

    const scrollRight3 = () => {
        if (frameRef3.current) {
            frameRef3.current.scrollBy({
                left: 300, // Adjust as needed to control the scroll distance
                behavior: 'smooth' // Add smooth scrolling effect
            });
        }
    };
    const scrollLeft3 = () => {
        if (frameRef3.current) {
            frameRef3.current.scrollBy({
                left: -300, // Adjust as needed to control the scroll distance
                behavior: 'smooth' // Add smooth scrolling effect
            });
        }
    };
    const [pageCompletion, setPageCompletion] = useState(0);
    const [circleBeating, setCircleBeating] = useState(false);

    useEffect(() => {
        const updateCompletion = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop =
                window.scrollY ||
                window.pageYOffset ||
                (document.body.scrollTop +
                    (document.documentElement && document.documentElement.scrollTop) ||
                    0);

            const viewportBottom = scrollTop + windowHeight;
            const isScrolledToBottom = viewportBottom >= documentHeight;

            if (isScrolledToBottom) {
                setPageCompletion(100);
                setCircleBeating(true);
            } else {
                const completion = (viewportBottom / documentHeight) * 100;
                setPageCompletion(completion);
                setCircleBeating(false);
            }
        };

        window.addEventListener('scroll', updateCompletion);

        return () => window.removeEventListener('scroll', updateCompletion);
    }, []);

    const scrollToTop = () => {
        const topElement = document.getElementById('top');
        if (topElement) {
            topElement.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <>
            <Store_Header />
            <div class="store">
                <div class="div">

                    <div class="overlap-3">
                        <p class="p">World Cat Day discounts of 60%. Take advantage</p>
                        <p class="p">Soon Syriatel Cash service</p>
                        {/* <div class="text-wrapper-10">View Details</div> */}
                    </div>

                    <div class="overlap-4">
                        <div id='new_Arrivals_loc' class="text-wrapper-12">New Arrivals</div>

                        {/* تسوق المنتجات الجديدة */}
                        <a href={`Product_Assortment/${"new_arrivals"}`}
                            class="text-wrapper-13">Shop New Arrivals</a>

                    </div>

                    <div class="text-wrapper-15">Featured Categories</div>
                    <div class="text-wrapper-16">Top Brand</div>
                    <div class="overlap-5">
                        <div class="text-wrapper-12">Top Rated</div>
                        <div class="text-wrapper-12">Top Rated</div>
                    </div>
                    <div class="text-wrapper-17">Best Sellers</div>
                    <div class="overlap-6">
                        <div class="text-wrapper-18">New Arrivals</div>
                        <div class="text-wrapper-18">New Arrivals</div>
                    </div>

                    {/* *********************************************************************************88 */}
                    {/* ترند البحث */}
                    <div id='top' class="text-wrapper-11">Trending </div>

                    <div class="frame-3_metrend">

                        {Trend.map((user, i) => (

                            <div class="div-wrapper">
                                <a href={`Product_Assortment/${user.trend}`} class="text-wrapper-19">{user.trend}</a>
                            </div>
                        ))}

                        <div class="div-wrapper">
                            <a href="#" class="text-wrapper-19">Dog Toy</a>
                        </div>



                    </div>

                    {/* *********************************************************************************88 */}

                    <img class="rectangle-2" src={store_Rectangle_116} />
                    <img class="rectangle-3" src={store_Rectangle_117} />
                    <img class="rectangle-4" src={store_Rectangle_119} />
                    <img class="rectangle-5" src={store_Rectangle_118} />
                    <img class="rectangle-6" src={store_Rectangle_120} />


                    {/* ********************************************************************************************* */}
                    {/* التسوق حسب السعر */}
                    <a href={`Product_Assortment_copy/${"dog"}/${'toy'}/${'treats'}/${10}`} class="overlap-14">
                        <p class="text-wrapper-23">Dog Toys &amp; Treats Under</p>
                        <div class="overlap-15">
                            <div class="text-wrapper-24">10</div>
                            <div class="text-wrapper-25">$</div>
                        </div>
                    </a>
                    <a href={`Product_Assortment_copy/${"cat"}/${'toy'}/${'treats'}/${10}`} class="overlap-16">
                        <p class="text-wrapper-23">Cat Toys &amp; Treats Under</p>
                        <div class="overlap-15">
                            <div class="text-wrapper-24">10</div>
                            <div class="text-wrapper-25">$</div>
                        </div>
                    </a>
                    <a href={`Product_Assortment_copy/${"dog,cat"}/${'toy'}/${'treats'}/${10}`} class="overlap-17">
                        <p class="text-wrapper-23">Small Pet Toys &amp; Treats Under</p>
                        <div class="overlap-15">
                            <div class="text-wrapper-24">10</div>
                            <div class="text-wrapper-25">$</div>
                        </div>
                    </a>
                    <a href={`Product_Assortment_copy/${"dog"}/${'dogCillars'}/${'Leashes'}/${20}`} class="overlap-18">

                        <p class="text-wrapper-23">Dog Cillars &amp; Leashes Under</p>
                        <div class="overlap-15">
                            <div class="text-wrapper-24">20</div>
                            <div class="text-wrapper-25">$</div>
                        </div>
                    </a>
                    <a href={`Product_Assortment_copy/${"dog,cat"}/${'Bowls'}/${'freeding'}/${20}`} class="overlap-19">
                        <p class="text-wrapper-23">Dog &amp; Cat Bowls &amp; Freeding Under</p>
                        <div class="overlap-15">
                            <div class="text-wrapper-24">20</div>
                            <div class="text-wrapper-25">$</div>
                        </div>
                    </a>
                    <a href={`Product_Assortment_copy/${"dog"}/${'bed'}/${''}/${40}`} class="overlap-20">
                        <div class="text-wrapper-23">Dog Beds Under</div>
                        <div class="overlap-15">
                            <div class="text-wrapper-24">40</div>
                            <div class="text-wrapper-25">$</div>
                        </div>
                    </a>
                    {/* ********************************************************************************************* */}



                    <img class="rectangle-7" src={store_Rectangle_136} />
                    <img class="rectangle-8" src={store_Rectangle_137} />
                    <img class="rectangle-9" src={store_Rectangle_138} />

                    {/* الاسهم خاصة بالمنتجات الواصلة جديد */}
                    <img className="vector-3" src={store_Vector_60} onClick={scrollRight} />
                    <img class="vector-6" src={store_Vector_61} onClick={scrollLeft} />


                    {/* الاسهم الخاصة بالمنتجات الاعلى تقييما */}
                    <img class="vector-4" src={store_Vector_60} onClick={scrollRight2} />
                    <img class="vector-7" src={store_Vector_61} onClick={scrollLeft2} />


                    {/* الاسهم الخاصة بالمنتجات الاعلى مبيعا */}
                    <img class="vector-5" src={store_Vector_60} onClick={scrollRight3} />
                    <img class="vector-8" src={store_Vector_61} onClick={scrollLeft3} />

                    {/* ***********************************************************************************************************************************88 */}

                    {/*   New Arrivals    هنا المنتجات الواصلة جديد */}
                    <div class="frame-2" ref={frameRef}>

                        {
                            NewArrivalInfo.map((user, i) => (
                                <Componets_newArrivals
                                    key={i}
                                    image={`http://localhost:3001/uploads/${user.image_url}`}
                                    brand={user.store_in_name}
                                    price={(user.price) + "$"}
                                    desc={user.short_name}
                                    href={`choose_product/${user.id}`}

                                />
                            ))
                        }


                    </div>

                    {/* *************************************************************************************************************************************/}

                    {/* Top Rated هنا المنتجات الاعلى تقييما */}
                    <div class="frame-3_me" ref={frameRef2}>

                        {
                            Top_Rated.map((user, i) => (
                                <Componets_Top_Sellers
                                    key={i}
                                    img={`http://localhost:3001/uploads/${user.image_url}`}
                                    brand={user.store_in_name}
                                    price={(user.price) + "$"}
                                    desc={user.short_name}
                                    href={`choose_product/${user.id}`}
                                    rate={user.star_count}
                                    comments={user.review_count}
                                    star={user.star_count}
                                />
                            ))
                        }
                    </div>


                    {/* *************************************************************************************************************************************/}



                    {/* Top Sellers هنا المنتجات الاعلى مبيعا */}
                    <div class="frame-4_me" ref={frameRef3}>

                        {
                            Best_Sellers.map((user, i) => (
                                <Componets_Top_Sellers
                                    key={i}
                                    img={`http://localhost:3001/uploads/${user.image_url}`}
                                    brand={user.store_in_name}
                                    price={(user.price) + "$"}
                                    desc={user.short_name}
                                    href={`choose_product/${user.id}`}
                                    rate={user.star_count}
                                    comments={user.comments}
                                    star={user.star_count}


                                />
                            ))
                        }

                    </div>


                    {/* *************************************************************************************************************************************/}

                    {/* قسم التسوق حسب الفئة  */}
                    <div class="store2">

                        {CategoriesInfo.map((user, i) => (
                            <Componets_Categories
                                key={i}
                                img={`http://localhost:3001/uploads/${user.url_imagee}`}
                                name_categories={user.categ}
                                href={`Product_Assortment/${user.id_c}`}
                                href2={`Product_Assortment/${user.id_c}`}
                            />
                        ))}

                        {/* <Componets_Categories
                            img={store_Rectangle_159}
                            name_categories={"Puppy Essentials"}
                            href={`Product_Assortment/${1}`} /> */}

                    </div>

                    {/* *************************************************************************************************************************************/}

                    {/* التسوق حسب نوع الحيوان */}
                    <div class="text-wrapper-14">Shop by Pet</div>
                    <a href={`shop_by_pet/${'dog'}`} class="text-wrapper-34">Dog</a>
                    <a href={`shop_by_pet/${'cat'}`} class="text-wrapper-41">Cat</a>
                    <a href={`shop_by_pet/${'fish'}`} class="text-wrapper-42">Fish</a>
                    <a href={`shop_by_pet/${'bireds'}`} class="text-wrapper-43">Bird</a>
                    <a href={`shop_by_pet/${'rabbit'}`} class="text-wrapper-44">Rabbit</a>
                    <a href={`shop_by_pet/${'reptile'}`} class="text-wrapper-45">Reptile</a>

                    <a href={`shop_by_pet/${'dog'}`}><img class="ellipse" src={store_Ellipse_108} /></a>
                    <a href={`shop_by_pet/${'cat'}`}><img class="ellipse-2" src={store_Ellipse_109} /></a>
                    <a href={`shop_by_pet/${'fish'}`}><img class="ellipse-3" src={store_Ellipse_110} /></a>
                    <a href={`shop_by_pet/${'bireds'}`}><img class="ellipse-4" src={store_Ellipse_111} /></a>
                    <a href={`shop_by_pet/${'rabbit'}`}><img class="ellipse-5" src={store_Ellipse_112} /></a>
                    <a href={`shop_by_pet/${'reptile'}`}><img class="ellipse-6" src={store_Ellipse_113} /></a>



                    {/* *************************************************************************************************************************************/}


                    {/* تسوق حسب البراند */}
                    <div class="store3">

                        {Brands.map((user, i) => (
                            <Componets_Brand
                                key={i}
                                img={`http://localhost:3001/uploads/${user.image_b}`}
                                name_brand={user.name_b}
                                href={`Product_Assortment/${user.name_b}`}
                            />
                        ))}

                        {/* <Componets_Brand href={""}/> */}
                    </div>


                    {/* *************************************************************************************************************************************/}

                    <div class="boxstore">
                        <div class="rectangle">
                            <p class="image-text2">Have a question? Expertise is a click or call away</p>
                            <div>
                                <p class="image-text3">Finde a Store</p>
                                <p class="image-text4">Finde the store nearest you</p>
                                <p class="image-text5"><a href='#'>Store Locator</a></p>
                                <p class="image-text6"><a href='#'> <img src={store_Vector_62} /></a></p>
                                <p class="image-text7"> <img src={store_Vector_locator} /> </p>
                                <p class="image-text8"> <img src={store_Vector_62_locator} /> </p>
                            </div>
                            <div>
                                <p class="image-text9">Contact Us</p>
                                <p class="image-text10">1-800-Pet-VALUE(738-8258)
                                    MON to SAT 8am to 10pm ET
                                    SUN 8am to 9pm ET</p>
                                <p class="image-text11"> <img src={store_Vector_phone} /> </p>
                                <p class="image-text12"> <img src={store_Vector_phone2} /> </p>
                            </div>
                        </div>
                    </div>

                    <div class="boxfooter">
                        <div class="rectangle">
                            <p class="image-text13">OUR FAMILY OF BRANDS</p>

                        </div>
                    </div>
                    <div class="boxfooter2">
                        <div class="rectangle">
                        </div>
                    </div>
                    <div class="imagefooter">
                        <img class="rectangle" src={store_Rectangle_229} />
                        <img class="rectangle2" src={store_Rectangle_230} />
                        <img class="rectangle3" src={store_Rectangle_231} />
                        <img class="rectangle4" src={store_Rectangle_232} />
                        <img class="rectangle5" src={store_Rectangle_233} />


                    </div>

                    <div class="boxfooter3">

                        <div class="rectangle">
                            <div>
                                <p class="image-text14">About Us</p>
                                <p class="image-text15">About PetCare</p>
                                <p class="image-text16">Companions For Change</p>
                                <p class="image-text17">Customer Care Policy</p>
                                <p class="image-text18">Investor Relations</p>
                            </div>
                            <div>
                                <p class="image-text19">Learn More</p>
                                <p class="image-text20">Buy Online, Pick Up In Store</p>
                                <p class="image-text21">AutoShip</p>
                                <p class="image-text22">FAQs</p>
                            </div>
                            <div>
                                <p class="image-text23">Contact</p>
                                <p class="image-text24">Still need some help?</p>
                                <div class="button_footer" style={{ width: 255, height: 83, position: 'absolute', top: 330, left: 1580, background: '#0075C7', borderRadius: 6 }}>
                                    <div class="button_footer2" style={{ width: 255, height: 83, left: 0, top: 20, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 25, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>Contact Us</div>
                                </div>
                            </div>
                            <div>
                                <p class="image-text25"><img src={store_Line_11} /></p>
                                <p class="image-text26">And don’t forget to follow Us</p>
                                <p class="image-text29"><a><FontAwesomeIcon icon={faFacebookF} /> </a></p>
                                <p class="image-text30"><a><FontAwesomeIcon icon={faInstagram} /> </a></p>
                                <p class="image-text31"><a><FontAwesomeIcon icon={faXTwitter} /> </a></p>



                                <p class="image-text27">Copyright 2024 PetCare Syria Inc.</p>
                                <p class="image-text28">Privacy Policy . Accessibility . Terms of Use</p>



                            </div>






                        </div>

                    </div>



                    {/* <div class="boxline"><img class="line" src={store_Line_11} /></div> */}



                </div>
            </div>

            {/* دائرة تعبر عن مستوى تقدم الصفحة */}
            <div
                className={`completion-circle-container ${circleBeating ? 'beat-animation' : ''
                    }`}
            >
                <div
                    className="completion-circle"
                    style={{
                        background: `conic-gradient(#ffcc04 ${pageCompletion}%, #ffffff ${pageCompletion}% 100%)`,
                    }}onClick={scrollToTop}
                ></div>
            </div>
        </>
    )
}
export default Store