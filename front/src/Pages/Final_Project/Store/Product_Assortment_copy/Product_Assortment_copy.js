import './Product_Assortment.css'
import store2_star_solid_1 from '../../../../Assert/Images/store2_star_solid_1.png'
import Store_Vector from '../../../../Assert/Images/Store_Vector.png'
import store_Vector2 from '../../../../Assert/Images/store_Vector2.png'
import store_Vector3 from '../../../../Assert/Images/store_Vector3.png'
import choose2_a_Line_13 from '../../../../Assert/Images/choose2_a_Line_13.png'
import { Componets_Product_Assortment, Store_Header } from '../../../../Componets'
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Product_Assortment_copy = () => {

    const { animal, cate, u, price } = useParams()
    const [Product, setProduct] = useState([])
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [Brand, setBrand] = useState([])
    const [selectedMethods, setSelectedMethods] = useState([]);
    const [selectedSortOption, setSelectedSortOption] = useState('priceLow');
    const [name, setName] = useState('')


    const navigate = useNavigate()
    const addBrand = (newBrand) => {
        setBrand(prevBrand => [...prevBrand, newBrand]);
    };

    useEffect(() => {
        // Fetch all products when the component mounts
        axios.get(`http://localhost:3001/storee/gey_by/${animal}/${cate}/${u}/${price}`, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {

                    setProduct(res.data.result1);

                    setName(res.data.result1[0].category)
                    const extractedNames = res.data.result1.map(item => item.store_in_name);
                    const uniqueNames = [...new Set(extractedNames)]; // Filter out duplicates
                    setBrand(uniqueNames);

                    // جيب جميع البراندات لجميع المنتجات حسب الفئة المختارة التي ستعرض بهذه الصفحة
                    // setBrand(res.data.result1)

                    // Product.push(res.data.result1[i].store_in_name)






                } else {
                    navigate('/login');
                }
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch(err => {
                console.log(err);
                setLoading(false); // Set loading to false in case of error
            });
    }, [animal, cate, u, price]);
    console.log(Brand)


    // تابع التصفية حسب البراند
    const handleBrandSelect = (brand) => {
        const index = selectedBrands.indexOf(brand);
        if (index === -1) {
            setSelectedBrands([...selectedBrands, brand]);
        } else {
            const updatedBrands = [...selectedBrands];
            updatedBrands.splice(index, 1);
            setSelectedBrands(updatedBrands);
        }
    };

    // تابع التصفية حسب الطريقة
    const handleMethodSelect = (method) => {
        const index = selectedMethods.indexOf(method);
        if (index === -1) {
            setSelectedMethods([...selectedMethods, method]);
        } else {
            const updatedMethods = [...selectedMethods];
            updatedMethods.splice(index, 1);
            setSelectedMethods(updatedMethods);
        }
    };

    const handleSortSelect = (event) => {
        setSelectedSortOption(event.target.value);
    };

    // هذا يعرض المنتجات جميعها او يصفي حسب البراند
    let filteredProducts = selectedBrands.length > 0 ? Product.filter(product => selectedBrands.includes(product.store_in_name)) : Product;

    // هذا يفلتر حسب المنتجات الجديد و الاعلى تقييما
    if (selectedMethods.includes("topRated")) {
        // Find the maximum star count among the filtered products
        const maxStarCount = Math.max(...filteredProducts.map(product => product.star_count));
        // Filter products with the maximum star count
        filteredProducts = filteredProducts.filter(product => product.star_count === maxStarCount);
    }
    if (selectedMethods.includes("newProducts")) {
        // Calculate the date one month ago from the current date
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

        // Filter products that were added within the last month
        filteredProducts = filteredProducts.filter(product => {
            // Convert the date_added string to a Date object
            const dateAdded = new Date(product.date_added);
            // Return true if the product's date_added is after one month ago
            return dateAdded > oneMonthAgo;
        });
    }
    // هنا فلترة حسب عدد النجوم 
    for (let i = 1; i <= 5; i++) {
        if (selectedMethods.includes(i)) {
            filteredProducts = filteredProducts.filter(product => product.star_count === i);
        }
    }

    let sortedProducts = [...filteredProducts]; // Make a copy of filteredProducts to preserve original data
    if (selectedSortOption === 'priceLow') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSortOption === 'priceHigh') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

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
            <Store_Header />
            <div class="product-assortment">
                <div class="div">

                    {/* اسم الفئة المختارة */}
                    <div class="text-wrapper-21">{name}</div>

                    {/* <div class="overlap">
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
                    </div> */}

                    <div class="box100"><img class="line" src={choose2_a_Line_13} /></div>
                    <div class="box101"><img class="line" src={choose2_a_Line_13} /></div>
                    <div class="box102"><img class="line" src={choose2_a_Line_13} /></div>

                    {/* *********************************************************************************************************** */}

                    {/* عناصر التصفية حسب البراند */}
                    <div class="frame-3_me2">

                        {Brand.map((brand, i) => (
                            <div key={i}>
                                <input
                                    className="rectangle-2"
                                    type='checkbox'
                                    value={brand}
                                    id={`brand${i}`} // Use a unique id for each input
                                    onChange={() => handleBrandSelect(brand)} // Pass brand instead of index
                                    checked={selectedBrands.includes(brand)} // Check if the selectedBrands array includes the current brand
                                />
                                <label htmlFor={`brand${i}`} className="text-wrapper-10">{brand}</label>
                            </div>
                        ))}

                        {/* عنصر من عندي */}
                        {/* <div>
                            <div for="brand1" class="text-wrapper-10">ACANA (23)</div>
                            <input
                                className="rectangle-2"
                                type='checkbox'
                                value={"acana"}
                                id={'brand'} // Use a unique id for each input
                                onChange={() => handleBrandSelect("acana")}
                                checked={selectedBrands.includes("acana")}
                            />
                        </div> */}


                    </div>

                    {/* عناصر التصفية حسب الطريقة */}
                    <div class="frame-3_me23">

                        <div>
                            <div for='one' class="text-wrapper-16">Top Rated</div>
                            <input
                                className="rectangle-8"
                                type='checkbox'
                                value={"topRated"}
                                id='one'
                                onChange={() => handleMethodSelect("topRated")}
                                checked={selectedMethods.includes("topRated")}
                            />
                        </div>

                        <div>
                            <div for='four' class="text-wrapper-16">New</div>
                            <input
                                className="rectangle-8"
                                type='checkbox'
                                value={"newProducts"}
                                id='four'
                                onChange={() => handleMethodSelect("newProducts")}
                                checked={selectedMethods.includes("newProducts")}
                            />
                        </div>

                    </div>


                    {/* عناصر التصفية حسب نجوم التقييم */}

                    {/* نجمة واحدة */}
                    <input
                        class="rectangle-9"
                        type='checkbox'
                        value={1}
                        onChange={() => handleMethodSelect(1)}
                        checked={selectedMethods.includes(1)}
                    />
                    <div class="star-container">
                        <StarRating rating={1} />
                    </div>

                    {/* نجمتين */}
                    <input
                        class="rectangle-11"
                        type='checkbox'
                        value={2}
                        onChange={() => handleMethodSelect(2)}
                        checked={selectedMethods.includes(2)}
                    />
                    <div class="star-container2">
                        <StarRating rating={2} />
                    </div>

                    {/* ثلاث نجوم */}
                    <input
                        class="rectangle-13"
                        type='checkbox'
                        value={3}
                        onChange={() => handleMethodSelect(3)}
                        checked={selectedMethods.includes(3)}
                    />
                    <div class="star-container3">
                        <StarRating rating={3} />
                    </div>

                    {/* اربع نجوم */}
                    <input
                        class="rectangle-15"
                        type='checkbox'
                        value={4}
                        onChange={() => handleMethodSelect(4)}
                        checked={selectedMethods.includes(4)}
                    />
                    <div class="star-container4">
                        <StarRating rating={4} />
                    </div>

                    {/* خمس نجوم */}
                    <input
                        class="rectangle-16"
                        type='checkbox'
                        value={5}
                        onChange={() => handleMethodSelect(5)}
                        checked={selectedMethods.includes(5)}
                    />
                    <div class="star-container5">
                        <StarRating rating={5} />
                    </div>

                    {/* *********************************************************************************************************** */}

                    <div class="div-wrapper">
                        <p class="p">World Cat Day discounts of 60%. Take advantage</p>
                        <p class="p">Soon Syriatel Cash service</p>
                    </div>
                    <img class="line" src="img/line-13.svg" />
                    <img class="line-2" src="img/line-14.svg" />
                    <img class="line-3" src="img/line-15.svg" />

                    <div class="text-wrapper-20">Brand</div>






                    <div class="text-wrapper-23">Shop your way</div>
                    <div class="text-wrapper-24">Rating</div>

                    {/* *********************************************************************************************************** */}

                    {/* مربع اختيار ترتيب العناصر حسب ... */}
                    <div>
                        <div htmlFor='sort' className="text-wrapper-22">Sort By</div>
                        <select className="rectangle-17" id="sort" onChange={handleSortSelect} value={selectedSortOption}>
                            <option value="priceLow">Price low</option>
                            <option value="priceHigh">Price high</option>
                        </select>
                    </div>

                    {/* *********************************************************************************************************** */}

                    {/* المنتجات */}
                    <div class="frame-3_meee">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            sortedProducts.map((product, i) => (
                                <Componets_Product_Assortment
                                    key={i}
                                    img={`http://localhost:3001/uploads/${product.image_url}`}
                                    brand={product.store_in_name}
                                    avg_review={product.review_count}
                                    total_comments={"(" + product.comments + ")"}
                                    price={product.price + ' $'}
                                    desc={product.short_name}
                                    href={`choose_product/${product.id}`}
                                    num_star={product.star_count}
                                />
                            ))
                        )}

                        {/* < Componets_Product_Assortment
                            img={store2_star_solid_1}
                            brand={"acana"}
                            avg_review={3.1}
                            total_comments={"(" + "55" + ")"}
                            price={("54") + ' $'}
                            desc={"shampoo"}
                            href={`##/${1}`}
                            num_star={5}
                        /> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product_Assortment_copy