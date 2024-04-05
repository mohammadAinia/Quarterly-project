import './Store_Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import store_Vector3 from '../../../Assert/Images/store_Vector3.png'
import store_Vector2 from '../../../Assert/Images/store_Vector2.png'




const Store_Header = (props) => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (

        <>
            <header className="header_store">

                <a href="#" className="logo"> <i className="fas fa-paw"></i> PetCare</a>

                <nav className={`navbar ${showMenu ? 'show' : ''}`}>
                    <a href={props.href1}>{props.a1}</a>
                    <a href={props.href2}>{props.a2}</a>

                    <div className="dropdown1">
                        <button className="dropbtn" onClick={toggleMenu}>Shop By Pet <FontAwesomeIcon icon={faCaretDown} /></button>
                        <div className="dropdown-content">
                            <a href={props.href3}>cat</a>
                            <a href={props.href4}>dog</a>
                            <a href={props.href5}>Fish</a>
                        </div>
                    </div>
                    <div className="dropdown2">
                        <button className="dropbtn" onClick={toggleMenu}>Shop By Brand <FontAwesomeIcon icon={faCaretDown} /></button>
                        <div className="dropdown-content">
                            <a href={props.href6}>{props.a6}</a>
                            <a href={props.href7}>{props.a7}</a>
                            <a href={props.href11}>{props.a11}</a>

                        </div>
                    </div>
                    <div className="dropdown3">
                        <a href='#' style={{ color: 'white', fontWeight: '300', fontSize: '20px' }} className="aa">New Arrivals </a>
                        {/* <div className="dropdown-content">
                            <a href={props.href8}>{props.a8}</a>
                            <a href={props.href9}>{props.a9}</a>
                        </div> */}
                    </div>

                    <div className="dropdown4">
                        <a href='/' style={{ color: 'white', fontWeight: '300', fontSize: '20px' }} className="aa">Home </a>
                    </div>

                    <div className="dropdown5">
                        <a href='#' className="aa"><img src={store_Vector3} /> </a>
                        <div class="rectangleheader"></div>

                        <div class="text-wrapper-9header">0</div>
                    </div>

                    <div class="frameheader"><img class="vectorheader" src={store_Vector2} /></div>


                </nav>

                <div className="icons">
                    <a href={props.log}>{props.log2}</a>
                </div>
            </header>
        </>
    )
}

export default Store_Header