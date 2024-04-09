import './Shop_By_Pet.css'
import Store_Vector from '../../../../Assert/Images/Store_Vector.png'
import store_Vector2 from '../../../../Assert/Images/store_Vector2.png'
import store_Vector3 from '../../../../Assert/Images/store_Vector3.png'
import shop_by_pet_Vector_62 from '../../../../Assert/Images/shop_by_pet_Vector_62.png'
import shop_by_pet_Vector_63 from '../../../../Assert/Images/shop_by_pet_Vector_63.png'
import shop_by_pet_Rectangle_170 from '../../../../Assert/Images/shop_by_pet_Rectangle_170.png'
import shop_by_pet_Line_16 from '../../../../Assert/Images/shop_by_pet_Line_16.png'

import React, { useEffect, useState, useRef } from 'react';
import { Componets_Shop_By_Pet  ,Store_Header } from '../../../../Componets'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Shop_By_Pet = () => {

    const [CategoriesFood, setCategoriesFood] = useState([])
    const [CategoriesTreats, setCategoriesTreats] = useState([])
    const [CategoriesSupplies, setCategoriesSupplies] = useState([])
    const [Name, setName] = useState('')

    const navigate = useNavigate()
    const { id } = useParams()



    useEffect(() => {

        axios.get(`http://localhost:3001/storee/sort_by_animal/${id}`, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    for (let i = 0; i < res.data.result.length; i++) {
                        if(res.data.result[i].prod_type=='Food & Treats')
                        {
                            CategoriesFood.push(res.data.result[i])
                        }
                        else if(res.data.result[i].prod_type=='Litter & Accessories'){
                            CategoriesTreats.push(res.data.result[i])
                        }
                        else {
                            CategoriesSupplies.push(res.data.result[i])
                        }
                    }
                    // setCategoriesFood(res.data.food)
                    // setCategoriesTreats(res.data.litter)
                    // setCategoriesSupplies(res.data.Supplies)
                    setName(id)
                    console.log(res.data.food)
                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })

    },
        [])

    // ***********************************************************************************8

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
                    <Store_Header />

            <div class="shop-by-pet">
                <div class="div">
                <div class="boxshop-by-pet"><img class="line" src={shop_by_pet_Line_16} /></div>
                <div class="boxshop-by-pet2"><img class="line" src={shop_by_pet_Line_16} /></div>
                <div class="boxshop-by-pet3"><img class="line" src={shop_by_pet_Line_16} /></div>
                    <div class="overlap-3">
                        <div class="text-wrapper-10">Food</div>
                        {/* <div class="text-wrapper-11">Shop All</div> */}
                    </div>
                    <div class="overlap-4">
                        <div class="text-wrapper-10">Treats</div>
                        {/* <div class="text-wrapper-11">Shop All</div> */}
                    </div>
                    <div class="overlap-5">
                        <div class="text-wrapper-12">Supplies</div>
                        {/* <div class="text-wrapper-11">Shop All</div> */}
                    </div>



                    {/* ********************************************************************************************************************************************8 */}

                    {/* هنا اسم الحيوان الي ضغط عليه */}
                    <div class="text-wrapper-13">{"Shop " + Name}</div>


                    {/* ********************************************************************************************************************************************8 */}

                    <div class="overlap-6">
                        <p class="p">Buy online same day pick up in one of our 600+ stores! or free shipping over</p>
                        <div class="text-wrapper-14">View Details</div>
                    </div>
                    <img class="line" src="img/line-16.svg" />
                    <img class="line-2" src="img/line-17.svg" />
                    <img class="line-3" src="img/line-18.svg" />

                    {/* ********************************************************************************************************************************************8 */}

                    {/* تسوق حسب ال food */}
                    <div class="frame-2" ref={frameRef}>

                        {CategoriesFood.map((user, i) => (
                            <Componets_Shop_By_Pet
                                key={i}
                                image={`http://localhost:3001/uploads/${user.url_imagee}`}
                                cetagery={user.categ}
                                href={`Product_Assortment/${user.id_c}`} />
                        ))}

                        <Componets_Shop_By_Pet
                            image={shop_by_pet_Rectangle_170}
                            cetagery={"Performatrin Ultra"}
                            href={`Product_Assortment/${1}`}
                        />

                    </div>

                    {/* ********************************************************************************************************************************************8 */}

                    {/* treatتسوق حسب العلاج */}
                    <div class="frame-3" ref={frameRef2}>

                        {CategoriesTreats.map((user, i) => (
                            <Componets_Shop_By_Pet
                                key={i}
                                image={`http://localhost:3001/uploads/${user.url_imagee}`}
                                cetagery={user.categ}
                                href={`Product_Assortment/${user.id_c}`}
                            />
                        ))}

                        <Componets_Shop_By_Pet
                            image={shop_by_pet_Rectangle_170}
                            cetagery={"Performatrin Ultra"}
                            href={'#'}
                        />
                    </div>

                    {/* ********************************************************************************************************************************************8 */}

                    {/*حسب المستلزمات supplies */}
                    <div class="frame-4" ref={frameRef3}>
                        {CategoriesSupplies.map((user, i) => (
                            <Componets_Shop_By_Pet
                                key={i}
                                image={`http://localhost:3001/uploads/${user.url_imagee}`}
                                cetagery={user.categ}
                                href={`Product_Assortment/${user.id_c}`} />
                        ))}

                        <Componets_Shop_By_Pet
                            image={shop_by_pet_Rectangle_170}
                            cetagery={"Performatrin Ultra"}
                            href={'#'}
                        />
                    </div>

                    {/* ********************************************************************************************************************************************8 */}

                    <img class="vector-3" src={shop_by_pet_Vector_62} onClick={scrollRight} />
                    <img class="vector-4" src={shop_by_pet_Vector_62} onClick={scrollRight2} />
                    <img class="vector-5" src={shop_by_pet_Vector_62} onClick={scrollRight3} />
                    <img class="vector-6" src={shop_by_pet_Vector_63} onClick={scrollLeft} />
                    <img class="vector-7" src={shop_by_pet_Vector_63} onClick={scrollLeft2} />
                    <img class="vector-8" src={shop_by_pet_Vector_63} onClick={scrollLeft3} />
                </div>
            </div>
        </>
    )
}

export default Shop_By_Pet