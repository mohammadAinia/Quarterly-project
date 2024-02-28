import React, { useEffect, useState } from 'react';
import './Loading_page.css';
import { useNavigate } from 'react-router-dom';

import loading_Vector from '../../../src/Assert/Images/loading_Vector.png'
import loading_Vector2 from '../../../src/Assert/Images/loading_Vector2.png'
import loading_Vector3 from '../../../src/Assert/Images/loading_Vector3.png'
import loading_Vector4 from '../../../src/Assert/Images/loading_Vector4.png'
import loading_Vector5 from '../../../src/Assert/Images/loading_Vector5.png'
import loading_Vector6 from '../../../src/Assert/Images/loading_Vector6.png'
import loading_Vector7 from '../../../src/Assert/Images/loading_Vector7.png'
import loading_Vector44 from '../../../src/Assert/Images/loading_Vector44.png'
import loading_Vector45 from '../../../src/Assert/Images/loading_Vector45.png'
import loading_Vector39 from '../../../src/Assert/Images/loading_Vector39.png'
import loading_Vector38 from '../../../src/Assert/Images/loading_Vector38.png'
import loading_Vector40 from '../../../src/Assert/Images/loading_Vector40.png'
import loading_Vector43 from '../../../src/Assert/Images/loading_Vector43.png'
import loading_Vector41 from '../../../src/Assert/Images/loading_Vector41.png'
import loading_Vector42 from '../../../src/Assert/Images/loading_Vector42.png'

const Loading_page = () => {


    const [loading, setLoading] = useState(true);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        if (!loading) {
            // Simulate delay before showing the word
            const timer = setTimeout(() => {
                setShowText(true);
            }, 2300); // Adjust the delay time as needed

            return () => clearTimeout(timer);
        }
    }, [loading]);
    const navigate = useNavigate()


    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            navigate('/start')
        }, 6500); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    const randomLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const [randomText, setRandomText] = useState('');
    const [flashColor, setFlashColor] = useState('black');


    useEffect(() => {
        if (!showText) {
            // Simulate changing letters constantly
            const timer = setInterval(() => {
                const newText = Array.from({ length: 7 }, () => randomLetters.charAt(Math.floor(Math.random() * randomLetters.length))).join('');
                setRandomText(newText);
            }, 50); // Adjust the interval time as needed

            return () => clearInterval(timer);
        }
    }, [showText]);

    useEffect(() => {
        if (showText) {
            // Start flashing animation after the word is shown
            const timer = setInterval(() => {
                setFlashColor(color => (color === 'black' ? 'white' : 'black'));
            }, 300); // Adjust the interval time as needed

            return () => clearInterval(timer);
        }
    }, [showText]);


    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 200); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);


    const [loading2, setLoading2] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading2(false);
        }, 300); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);
    const [loading3, setLoading3] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading3(false);
        }, 400); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    const [loading4, setLoading4] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading4(false);
        }, 500); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    const [loading5, setLoading5] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading5(false);
        }, 600); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    const [loading6, setLoading6] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading6(false);
        }, 700); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    const [loading7, setLoading7] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading7(false);
        }, 800); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);
    const [loading8, setLoading8] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading8(false);
        }, 900); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    const [loading9, setLoading9] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading9(false);
        }, 1000); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    const [loading10, setLoading10] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading10(false);
        }, 1100); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    const [loading11, setLoading11] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading11(false);
        }, 1200); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    const [loading12, setLoading12] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading12(false);
        }, 1300); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    const [loading13, setLoading13] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading13(false);
        }, 1400); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    const [loading14, setLoading14] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading14(false);
        }, 1500); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    const [loading15, setLoading15] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading15(false);
        }, 1600); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    const [loading16, setLoading16] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading16(false);
        }, 1700); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    const [loading17, setLoading17] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading17(false);
        }, 1800); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    const [loading18, setLoading18] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading18(false);
        }, 1900); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    const [loading19, setLoading19] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading19(false);
        }, 2000); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);

    const [loading20, setLoading20] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setLoading20(false);
        }, 2100); // Adjust the delay time as needed

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className={`loading ${!showText ? 'fade-out' : ''}`}>
            <div className='overlap-wrapper'>
                <div className='overlap'>
                    <div className='overlap-group'>
                        <div className={`rectangle ${loading2 ? 'rectangle-hidden' : ''}`}></div>
                        <div className={`div ${loading3 ? 'div-hidden' : ''}`}></div>
                        <div className={`rectangle-2 ${loading ? 'rectangle-2-hidden' : ''}`}></div>
                        <img className={`vector ${loading18 ? 'vector-hidden' : ''}`} src={loading_Vector43} />
                        <img className={`img ${loading17 ? 'img-hidden' : ''}`} src={loading_Vector45} />
                        <img className={`vector-2 ${loading19 ? 'vector-2-hidden' : ''}`} src={loading_Vector44} />
                        <img className={`vector-3 ${loading16 ? 'vector-3-hidden' : ''}`} src={loading_Vector42} />
                        <img className={`vector-4 ${loading13 ? 'vector-4-hidden' : ''}`} src={loading_Vector39} />
                        <img className={`vector-5 ${loading14 ? 'vector-5-hidden' : ''}`} src={loading_Vector40} />
                        <img className={`vector-6 ${loading15 ? 'vector-6-hidden' : ''}`} src={loading_Vector41} />
                        <img className={`vector-7 ${loading20 ? 'vector-7-hidden' : ''}`} src={loading_Vector38} />
                        <div className={`text-wrapper ${loading ? 'text-hidden' : ''} ${showText ? 'finished' : ''}`} style={{ color: flashColor }}>
                            {/* Show random letters until transitioning to "Welcome" */}
                            {showText ? 'Welcome !' : randomText}
                        </div>

                        <img className={`vector-8 ${loading10 ? 'vector-8-hidden' : ''}`} src={loading_Vector7} />
                        <img className={`vector-9 ${loading9 ? 'vector-9-hidden' : ''}`} src={loading_Vector6} />
                        <img className={`vector-10 ${loading7 ? 'vector-10-hidden' : ''}`} src={loading_Vector4} />
                        <img className={`vector-11 ${loading8 ? 'vector-11-hidden' : ''}`} src={loading_Vector5} />
                        <img className={`vector-12 ${loading6 ? 'vector-12-hidden' : ''}`} src={loading_Vector} />

                        <div className={`ellipse ${loading11 ? 'ellipse-hidden' : ''}`}></div>
                        <div className={`ellipse-2 ${loading11 ? 'ellipse-2-hidden' : ''}`}></div>
                        <div className={`ellipse-3 ${loading11 ? 'ellipse-3-hidden' : ''}`}></div>
                        <div className={`ellipse-4 ${loading11 ? 'ellipse-4-hidden' : ''}`}></div>
                        <div className={`ellipse-5 ${loading11 ? 'ellipse-5-hidden' : ''}`}></div>
                        <div className={`ellipse-6 ${loading11 ? 'ellipse-6-hidden' : ''}`}></div>
                        <div className={`ellipse-7 ${loading11 ? 'ellipse-7-hidden' : ''}`}></div>
                        <div className={`ellipse-8 ${loading11 ? 'ellipse-8-hidden' : ''}`}></div>
                        <div className={`ellipse-9 ${loading11 ? 'ellipse-9-hidden' : ''}`}></div>
                        <div className={`ellipse-10 ${loading11 ? 'ellipse-10-hidden' : ''}`}></div>
                        <div className={`ellipse-11 ${loading11 ? 'ellipse-11-hidden' : ''}`}></div>
                    </div>
                    <img className={`vector-13 ${loading5 ? 'vector-13-hidden' : ''}`} src={loading_Vector2} />
                    <img className={`vector-14 ${loading4 ? 'vector-14-hidden' : ''}`} src={loading_Vector3} />
                    <div className={`ellipse-12 ${loading12 ? 'ellipse-12-hidden' : ''}`}></div>
                    <div className={`ellipse-13 ${loading12 ? 'ellipse-13-hidden' : ''}`}></div>
                    <div className={`ellipse-14 ${loading12 ? 'ellipse-14-hidden' : ''}`}></div>
                    <div className={`ellipse-15 ${loading12 ? 'ellipse-15-hidden' : ''}`}></div>
                    <div className={`ellipse-16 ${loading12 ? 'ellipse-16-hidden' : ''}`}></div>
                    <div className={`ellipse-17 ${loading12 ? 'ellipse-17-hidden' : ''}`}></div>
                    <div className={`ellipse-18 ${loading12 ? 'ellipse-18-hidden' : ''}`}></div>
                    <div className={`ellipse-19 ${loading12 ? 'ellipse-19-hidden' : ''}`}></div>
                    <div className={`ellipse-20 ${loading12 ? 'ellipse-20-hidden' : ''}`}></div>
                    <div className={`ellipse-21 ${loading12 ? 'ellipse-21-hidden' : ''}`}></div>
                    <div className={`ellipse-22 ${loading12 ? 'ellipse-22-hidden' : ''}`}></div>
                    <div className={`ellipse-23 ${loading12 ? 'ellipse-23-hidden' : ''}`}></div>
                </div>
            </div>
        </div>
    );
}

export default Loading_page;
