import React, { useState } from 'react';
import './Bunner.css'; // Import CSS file
import advice7 from '../../Assert/Images/advice6_Vector.png';
import advice1 from '../../Assert/Images/Advice_Vector27.png';

const Bunner = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <div className="advice_box">
                <div className={`advice_vector ${isHovered ? 'shake-animation' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img src={advice7} alt="Advice Lamp" />
                </div>
            </div>
            <div className="overlap" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="rectangle">
                    <p className="text-wrapper">{props.p}</p>
                </div>
                <img className="vector move-animation" src={advice1} alt="Vector Image" />
            </div>
        </>
    );
};

export default Bunner;
