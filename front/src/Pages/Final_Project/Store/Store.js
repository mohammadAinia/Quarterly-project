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
import { Componets_newArrivals } from '../../../Componets'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Store = () => {

    const [NewArrivalInfo, setNewArrivalInfo] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        axios.get('http://localhost:3001/storee/new_arrivle', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {

                    setNewArrivalInfo(res.data.result)
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

    return (
        <>
            <div class="store">
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
                        <div class="overlap-wrapper">
                            <div class="overlap-group">
                                <div class="text-wrapper-8">PetCare</div>
                                <img class="img" src={Store_Vector} />
                            </div>
                        </div>
                        <div class="overlap-group-wrapper">
                            <div class="overlap-2">
                                <div class="rectangle"></div>
                                <div class="text-wrapper-9">0</div>
                                <img class="vector-2" src={store_Vector3} />
                            </div>
                        </div>
                    </div>
                    <div class="overlap-3">
                        <p class="p">Buy online same day pick up in one of our 600+ stores! or free shipping over</p>
                        <div class="text-wrapper-10">View Details</div>
                    </div>
                    <div class="text-wrapper-11">Trending Searches</div>
                    <div class="overlap-4">
                        <div class="text-wrapper-12">New Arrivals</div>
                        <div class="text-wrapper-13">Shop New Arrivals</div>
                    </div>
                    <div class="text-wrapper-14">Shop by Pet</div>
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
                    <div class="div-wrapper"><div class="text-wrapper-19">DOG BOOTS</div></div>
                    <div class="overlap-7"><div class="text-wrapper-20">SMART PET DEVICES</div></div>
                    <div class="overlap-8"><div class="text-wrapper-21">CAT LITTER</div></div>
                    <div class="overlap-9"><div class="text-wrapper-21">CAT TREES</div></div>
                    <div class="overlap-10"><div class="text-wrapper-21">DOG CRATES</div></div>
                    <div class="overlap-11"><div class="text-wrapper-22">DOG HARNESSES</div></div>
                    <div class="overlap-12"><div class="text-wrapper-21">DOG FOOD</div></div>
                    <div class="overlap-13"><div class="text-wrapper-21">DOG BEDS</div></div>
                    <img class="rectangle-2" src={store_Rectangle_116} />
                    <img class="rectangle-3" src={store_Rectangle_117} />
                    <img class="rectangle-4" src={store_Rectangle_119} />
                    <img class="rectangle-5" src={store_Rectangle_118} />
                    <img class="rectangle-6" src={store_Rectangle_120} />
                    <div class="overlap-14">
                        <p class="text-wrapper-23">Dog Toys &amp; Treats Under</p>
                        <div class="overlap-15">
                            <div class="text-wrapper-24">10</div>
                            <div class="text-wrapper-25">$</div>
                        </div>
                    </div>
                    <div class="overlap-16">
                        <p class="text-wrapper-23">Cat Toys &amp; Treats Under</p>
                        <div class="overlap-15">
                            <div class="text-wrapper-24">10</div>
                            <div class="text-wrapper-25">$</div>
                        </div>
                    </div>
                    <div class="overlap-17">
                        <p class="text-wrapper-23">Small Pet Toys &amp; Treats Under</p>
                        <div class="overlap-15">
                            <div class="text-wrapper-24">10</div>
                            <div class="text-wrapper-25">$</div>
                        </div>
                    </div>
                    <div class="overlap-18">
                        <p class="text-wrapper-23">Dog Cillars &amp; Leashes Under</p>
                        <div class="overlap-15">
                            <div class="text-wrapper-24">20</div>
                            <div class="text-wrapper-25">$</div>
                        </div>
                    </div>
                    <div class="overlap-19">
                        <p class="text-wrapper-23">Dog &amp; Cat Bowls &amp; Freeding Under</p>
                        <div class="overlap-15">
                            <div class="text-wrapper-24">20</div>
                            <div class="text-wrapper-25">$</div>
                        </div>
                    </div>
                    <div class="overlap-20">
                        <div class="text-wrapper-23">Dog Beds Under</div>
                        <div class="overlap-15">
                            <div class="text-wrapper-24">40</div>
                            <div class="text-wrapper-25">$</div>
                        </div>
                    </div>
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

                        {NewArrivalInfo.map((user, i) => (
                            <Componets_newArrivals
                                key={i}
                                image={`http://localhost:3001/uploads/${user.image_url}`}
                                brand={user.short_name}
                                price={(user.price) + "$"}
                                desc={user.store_in_name}
                                href={`choose_product/${user.id}`}

                            />
                        ))}

                
                    </div>

                    {/* *************************************************************************************************************************************/}

                    {/* Top Rated هنا المنتجات الاعلى تقييما */}
                    <div class="frame-3_me" ref={frameRef2}>
                        <div class="overlap-21">
                            <div class="rectangle-14"></div>
                            <img class="rectangle-11" src={store_Rectangle_141} />
                            <div class="rectangle-15"></div>
                            <div class="text-wrapper-26">TOP RATED</div>
                            <div class="text-wrapper-27">ACANA</div>
                            <div class="text-wrapper-28">$22.99</div>
                            <div class="element">4.6</div>
                            <div class="element2">(36)</div>

                            {/* <div class="text-wrapper-29">Classics Red</div> */}
                            <div class="text-wrapper-33">Meat Recipe Dog Food</div>
                            <div class="rectangle-13"></div>
                            <div class="text-wrapper-31">Available for AutoShip</div>
                            <img class="vector-9" src={store_Vector4} />
                            <div class="frame-3"><div class="text-wrapper-32">view</div></div>
                            {/* <StarRating rating={0} /> */}
                            <div class="star-container">
                                <StarRating rating={2} />

                            </div>
                        </div>
                    </div>


                    {/* *************************************************************************************************************************************/}



                    {/* Top Sellers هنا المنتجات الاعلى مبيعا */}
                    <div class="frame-4_me" ref={frameRef3}>
                        <div class="overlap-22">
                            <div class="rectangle-14"></div>
                            <img class="rectangle-11" src={store_Rectangle_141} />
                            <div class="rectangle-15"></div>
                            <div class="text-wrapper-26">TOP RATED</div>
                            <div class="text-wrapper-27">ACANA</div>
                            <div class="text-wrapper-28">$22.99</div>
                            <div class="element">4.6&nbsp;&nbsp; (36)</div>
                            {/* <div class="text-wrapper-29">Classics Red</div> */}
                            <div class="text-wrapper-33">Meat Recipe Dog Food</div>
                            <div class="rectangle-13"></div>
                            <div class="text-wrapper-31">Available for AutoShip</div>
                            <img class="vector-9" src={store_Vector4} />
                            <div class="frame-3"><div class="text-wrapper-32">view</div></div>
                            <img class="star-solid" src={store_star_solid_1} />
                            <img class="star-solid-2" src={store_star_solid_1} />
                            <img class="star-solid-3" src={store_star_solid_1} />
                            <img class="star-solid-4" src={store_star_solid_1} />
                            <img class="star-solid-5" src={store_star_solid_1} />
                        </div>
                    </div>


                    {/* *************************************************************************************************************************************/}



                    <div class="text-wrapper-34">Dog</div>
                    <div class="text-wrapper-35"><a href={`Product_Assortment/${1}`}>Puppy Essentials</a></div>
                    <div class="text-wrapper-36">Kitten Essentials</div>
                    <p class="dog-collars-leashes"><a href='Product_Assortment'>Dog Collars, Leashes &amp; Harnesses</a></p>
                    <p class="small-pet-food">Small Pet Food, Treats &amp; Hay</p>
                    <div class="text-wrapper-37"><a href='Product_Assortment'>Dog Toys</a></div>
                    <div class="cat-bowls-feeding">Cat Bowls &amp; Feeding</div>
                    <div class="text-wrapper-38"><a href='Product_Assortment'>Dog Treats</a></div>
                    <p class="cat-litter-litter">Cat Litter &amp; Litter Boxes</p>
                    <div class="text-wrapper-39"><a href='Product_Assortment'>Dog Food</a></div>
                    <div class="text-wrapper-40">Cat Food</div>
                    <div class="text-wrapper-41">Cat</div>
                    <div class="text-wrapper-42">Fish</div>
                    <div class="text-wrapper-43">Bird</div>
                    <div class="text-wrapper-44">Rabbit</div>
                    <div class="text-wrapper-45">Reptile</div>

                    <img class="ellipse" src={store_Ellipse_108} />
                    <img class="ellipse-2" src={store_Ellipse_109} />
                    <img class="ellipse-3" src={store_Ellipse_110} />
                    <img class="ellipse-4" src={store_Ellipse_111} />
                    <img class="ellipse-5" src={store_Ellipse_112} />
                    <img class="ellipse-6" src={store_Ellipse_113} />
                    <a href="Product_Assortment">
                        <img className="rectangle-16" src={store_Rectangle_159} alt="Description of the image" />
                    </a>
                    <img class="rectangle-17" src={store_Rectangle_164} />
                    <img class="rectangle-18" src={store_Rectangle_160} />
                    <img class="rectangle-19" src={store_Rectangle_165} />
                    <img class="rectangle-20" src={store_Rectangle_161} />
                    <img class="rectangle-21" src={store_Rectangle_166} />
                    <img class="rectangle-22" src={store_Rectangle_162} />
                    <img class="rectangle-23" src={store_Rectangle_167} />
                    <img class="rectangle-24" src={store_Rectangle_163} />
                    <img class="rectangle-25" src={store_Rectangle_168} />




                    {/* <div class="rectangle-wrapper"><img class="rectangle-26" src={store_Rectangle_170} /></div> */}
                    <div class="rectangle-wrapper">
                        <img class="rectangle-26" src={store_Rectangle_170} />
                        <p class="image-text">ACANA</p>
                    </div>

                    <div class="img-wrapper">
                        <img class="rectangle-26" src={store_Rectangle_184} />
                        {/* <p class="image-text">Your text here</p> */}
                    </div>
                    <div class="overlap-31"><img class="rectangle-26" src={store_Rectangle_172} /></div>
                    <div class="overlap-32"><img class="rectangle-26" src={store_Rectangle_185} /></div>
                    <div class="overlap-33"><img class="rectangle-26" src={store_Rectangle_174} /></div>
                    <div class="overlap-34"><img class="rectangle-26" src={store_Rectangle_186} /></div>
                    <div class="overlap-35"><img class="rectangle-26" src={store_Rectangle_176} /></div>
                    <div class="overlap-36"><img class="rectangle-26" src={store_Rectangle_187} /></div>
                    <div class="overlap-37"><img class="rectangle-26" src={store_Rectangle_178} /></div>
                    <div class="overlap-38"><img class="rectangle-26" src={store_Rectangle_188} /></div>

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
        </>
    )
}
//msmnbskd

export default Store