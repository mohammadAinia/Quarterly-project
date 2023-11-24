import './General_user.css'
import bunner from '../../../src/Assert/Images/comu.png'
import bunner2 from '../../../src/Assert/Images/adopt5.png'
import bunner3 from '../../../src/Assert/Images/vetclinic.png'
import bunner4 from '../../../src/Assert/Images/contact.png'


import { Header } from '../../Componets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faRightToBracket, faPaw, faStoreSlash, faCoins, faFaceSmileWink, faBolt,
    faClock, faArrowsRotate, faComments, faHandHoldingHeart, faHouseCircleCheck,
    faUsers, faArrowRightArrowLeft, faPaperPlane
} from '@fortawesome/free-solid-svg-icons'
const General_user = () => {
    return (
        <>
            <Header href1={"/Animal"} a1={"About Pets"} href3={"FAQs"} a3={"FAQs"} log={'/Loginn'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightToBracket} /></div>} />

            <section className="main">
                <div>
                    <h2><span>Keep Your Pet Happy</span></h2>
                    <h3>Join Us</h3>
                    <a href="/Loginn" className="main-btn">Login</a>
                    <a href="/Registration" className="main-btn">Register</a>
                </div>

            </section>

            <section class="about" id="about">

                <h2 style={{ "margin-top": "120px", "margin-left": "30px" }} class="deco-title">care them</h2>

                <div class="box-container">

                    <div class="image">
                        <img src={bunner} alt="" />
                    </div>

                    <div class="content">
                        <h3 class="title">Take better care of your pet</h3>
                        <p>The website provides adoption services easily and conveniently</p>

                        <div class="icons-container">
                            <div class="icons">
                                <i><FontAwesomeIcon icon={faClock} /></i>
                                <h3>Vaccine reminders</h3>
                            </div>
                            <div class="icons">
                                <i><FontAwesomeIcon icon={faArrowsRotate} /></i>
                                <h3>Daily tips</h3>
                            </div>
                            <div class="icons">
                                <i><FontAwesomeIcon icon={faComments} /></i>
                                <h3>Request a consultation</h3>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <section class="about" id="about">

                <h2 style={{ "margin-top": "980px", "margin-left": "30px" }} class="deco-title">Adopt me !</h2>

                <div class="box-container">

                    <div class="image">
                        <img src={bunner2} alt="" />
                    </div>

                    <div class="content">
                        <h3 class="title">find your best companion</h3>
                        <p>The website provides adoption services easily and conveniently</p>

                        <div class="icons-container">
                            <div class="icons">
                                <i><FontAwesomeIcon icon={faStoreSlash} /></i>
                                <h3>DON'T SHOP</h3>
                            </div>
                            <div class="icons">
                                <i><FontAwesomeIcon icon={faFaceSmileWink} /></i>
                                <h3>Gonna be your best friend</h3>
                            </div>
                            <div class="icons">
                                <i><FontAwesomeIcon icon={faCoins} /></i>
                                <h3>DON'T BUY</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="about" id="about">

                <h2 style={{ "margin-top": "1780px", "font-size": "70px","margin-left": "30px" }} class="deco-title">communication</h2>

                <div class="box-container">

                    <div class="image">
                        <img style={{ "margin-left": "30px" }} src={bunner3} alt="" />
                    </div>

                    <div class="content">
                        <h3 class="title">Contact veterinarians</h3>
                        <p>The site allows you to communicate with doctors<br /> and monitor your animal’s
                            condition by a veterinarian</p>

                        <div class="icons-container">
                            <div class="icons">
                                <i><FontAwesomeIcon icon={faHandHoldingHeart} /></i>
                                <h3>Follow your pet</h3>
                            </div>
                            <div class="icons">
                                <i><FontAwesomeIcon icon={faHouseCircleCheck} /></i>
                                <h3>Communicate from home</h3>
                            </div>
                            <div class="icons">
                                <i><FontAwesomeIcon icon={faBolt} /></i>
                                <h3>Speed of communication</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="about" id="about">

                <h2 style={{ "margin-top": "2590px","font-size": "70px", "margin-left": "30px" }} class="deco-title">cooperation</h2>

                <div class="box-container">

                    <div class="image">
                        <img src={bunner4} alt="" />
                    </div>

                    <div class="content">
                        <h3 class="title">Connect with your community</h3>
                        <p>You can ask questions or problems you face,<br /> and get answers from veterinarians or users</p>

                        <div class="icons-container">
                            <div class="icons">
                                <i><FontAwesomeIcon icon={faArrowRightArrowLeft} /></i>
                                <h3>Exchange of experiences</h3>
                            </div>
                            <div class="icons">
                                <i><FontAwesomeIcon icon={faUsers} /></i>
                                <h3>A united community</h3>
                            </div>
                            <div class="icons">
                                <i><FontAwesomeIcon icon={faPaperPlane} /></i>
                                <h3>Easier communication</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="footer">

                <div style={{ "margin-left": "200px" }} class="box-container">

                    <div class="box">
                        <h3><i class="fas fa-paw"></i> PetCare</h3>
                        <p>University of Kalamoon.</p>
                        {/* <p class="links"><i class="fas fa-clock"></i>monday - friday</p>
                        <p class="days">7:00AM - 11:00PM</p> */}
                    </div>

                    <div class="box">
                        <h3>Contact Info</h3>
                        <a href="#" class="links"><i class="fas fa-phone"></i> 0992288581</a>
                        <a href="mailto:mmyyttt@gmail.com" class="links"><i class="fas fa-envelope"></i> petcare@gmail.com</a>
                        <a href="#" class="links"><i class="fas fa-map-marker-alt"></i> Deir Atiya, Syria</a>
                    </div>
                    <div class="box">
                        <h3>Social Media</h3>
                        <div class="share">
                            <a style={{ "fontSize": "30px", "padding": "10px" }} href="https://www.facebook.com/mmyyyttt/" class="fab fa-facebook-f"></a>
                            <a style={{ "fontSize": "30px", "padding": "10px" }} href="https://www.instagram.com/7mody_ai/?next=%2F" class="fab fa-instagram"></a>
                        </div>
                    </div>

                </div>

                <div style={{ "color": "white" }}  class="credit">&copy; 2023 Quarterly project , Developed by <a href="#" class="link">Ainia , Nafory , Najdat</a></div>

            </section>
        </>
    )
}

export default General_user

