import './Store_Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faCaretDown, faWallet, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import store_Vector3 from '../../../Assert/Images/store_Vector3.png'
import store_Vector2 from '../../../Assert/Images/store_Vector2.png'
import store_wallet_solid from '../../../Assert/Images/store_wallet_solid.svg'
import Componets_Top_Sellers from '../Componets_Top_Sellers/Componets_Top_Sellers';
import store_Vector4 from '../../../Assert/Images/store_Vector4.svg'
import store_star_solid_1 from '../../../Assert/Images/store_star_solid_1.png'
import Componets_Header_Search from '../Componets_Header_Search/Componets_Header_Search';





const Store_Header = (props) => {

    const [NumberItem, setNumberItem] = useState(0)
    const [Many, setMany] = useState(0)
    const [Brands, setBrands] = useState([])
    const [Product_Search, setProduct_Search] = useState([])
    const [filteredProduct, setFilteredProduct] = useState([]);
    const [Search_result, setSearch_result] = useState('')





    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/storee/hedar', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setNumberItem(res.data.result[0].c);
                    setMany(res.data.result1[0].charge_w);

                    // هدول التنين حطن نفس النتيجة
                    // setProduct_Search(res.data.result3)
                    // setFilteredProduct(res.data.result3)
                } else {
                    navigate('/login');
                }
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3001/storee/set_data', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    // هدول التنين حطن نفس النتيجة
                    setBrands(res.data.result2)
                    setProduct_Search(res.data.result3)
                    setFilteredProduct(res.data.result3)
                } else {
                    navigate('/login');
                }
            })
            .catch(err => console.log(err));
    }, []);

    const handleSearchInputChange = (event) => {
        const { value } = event.target;
        setSearch_result(value);

        // Filter clinics based on search input
        const filtered = Product_Search.filter(p =>
            p.store_in_name.toLowerCase().includes(value.toLowerCase()) ||  // Partial brand match
            p.short_name.toLowerCase().includes(value.toLowerCase())  // Match name
        );
        setFilteredProduct(filtered);
    };


    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (

        <>
            <header className="header_store">

                <div onClick={() => navigate('/')} className="logo"> <i className="fas fa-paw"></i> PetCare</div>

                <nav className={`navbar ${showMenu ? 'show' : ''}`}>
                    <a href={props.href1}>{props.a1}</a>
                    <a href={props.href2}>{props.a2}</a>

                    <div className="dropdown1">
                        <button className="dropbtn" onClick={toggleMenu}>Shop By Pet <FontAwesomeIcon icon={faCaretDown} /></button>
                        <div className="dropdown-content">
                            <a href={`shop_by_pet/${'cat'}`}>cat</a>
                            <a href={`shop_by_pet/${'dog'}`}>dog</a>
                            <a href={`shop_by_pet/${'fish'}`}>Fish</a>
                            <a href={`shop_by_pet/${'bireds'}`}>Bireds</a>
                            <a href={`shop_by_pet/${'rabbit'}`}>Rabbit</a>
                            <a href={`shop_by_pet/${'reptile'}`}>Reptile</a>

                        </div>
                    </div>

                    {/* ******************************************************************************/}

                    {/* تسوق البراندات */}
                    <div className="dropdown2">
                        <button className="dropbtn" onClick={toggleMenu}>Shop By Brand <FontAwesomeIcon icon={faCaretDown} /></button>
                        <div className="dropdown-content">
                            {/* {Brands.map((user, i) => (
                                <a href={`Product_Assortment/${user.name_b}`}>{user.name_b}</a>
                            ))} */}
                        </div>
                    </div>

                    {/* *******************************************************************************/}


                    <div className="dropdown3">
                        <a href='#new_Arrivals_loc' style={{ color: 'white', fontWeight: '300', fontSize: '20px' }} className="aa">New Arrivals </a>
                        {/* <div className="dropdown-content">
                            <a href={props.href8}>{props.a8}</a>
                            <a href={props.href9}>{props.a9}</a>
                        </div> */}
                    </div>

                    <div className="dropdown4">
                        <div onClick={() => navigate('/store')} style={{ color: 'white', fontWeight: '300', fontSize: '20px' }} className="aa">Home </div>
                    </div>

                    <div className="dropdown5">
                        <div className="aa" onClick={() => navigate('/cart')}><FontAwesomeIcon icon={faCartShopping} /> </div>
                        <div class="rectangleheader"></div>

                        <div class="text-wrapper-9header">{NumberItem}</div>
                    </div>

                    <div className="dropdown6">
                        <div onClick={() => navigate('/Add_balance')} className='aa'><FontAwesomeIcon icon={faWallet} /></div>
                        <div class="rectangleheader2"></div>

                        <div class="text-wrapper-9header2">{Many} $</div>
                    </div>

                    {/* *******************************************************************************/}
                    {/* مربع البحث */}
                    <div className="dropdown7">
                        {/* <div class="frameheader"><img class="vectorheader" src={store_Vector2} /></div> */}
                        <div class="vectorheader"  ><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                        <input onClick={toggleMenu} onChange={handleSearchInputChange} placeholder='Search' class="frameheader" type='text' />
                        <div className="dropdown-content2">

                            <div class="frame-4_me">

                                {Search_result !== '' ? (
                                    filteredProduct.length > 0 ? (
                                        // Display filtered products
                                        filteredProduct.map((user, i) => (
                                            <Componets_Header_Search
                                                key={i}
                                                img={`http://localhost:3001/uploads/${user.image_url}`}
                                                brand={user.store_in_name}
                                                price={(user.price) + "$"}
                                                desc={user.short_name}
                                                href={`choose_product/${user.id}`}
                                                rate={user.review_count}
                                                comments={user.comments}
                                                star={user.star_count}
                                            />
                                        ))
                                    ) : (
                                        // No matching products found
                                        <div className="empty_search2">Sorry, there are no products matching your search</div>
                                    )
                                ) : (
                                    // Empty search result
                                    <div className="empty_search">Search to show results</div>
                                )}

                            </div>
                        </div>
                    </div>

                    {/* *******************************************************************************/}
                </nav>

                <div className="icons">
                    <a href={props.log}>{props.log2}</a>
                </div>
            </header>
        </>
    )
}

export default Store_Header