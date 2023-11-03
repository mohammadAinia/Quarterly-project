import './General_user.css'
import bunner from '../../../src/Assert/Images/care.jpg'
import bunner2 from '../../../src/Assert/Images/adopt5.jpg'

import { Header } from '../../Componets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faRightToBracket, faPaw, faStoreSlash, faCoins, faFaceSmileWink,
    faClock, faArrowsRotate, faComments
} from '@fortawesome/free-solid-svg-icons'
const General_user = () => {
    return (
        <>
            <Header href1={"/Animal"} a1={"About Pets"} href3={"#"} a3={"FAQs"} log={'/Loginn'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightToBracket} /></div>} />

            <section className="main">
                <div>
                    <h2><span>Keep Your Pet Happy</span></h2>
                    <h3>Join Us</h3>
                    <a href="/Loginn" className="main-btn">Login</a>
                    <a href="/Registration" className="main-btn">Register</a>
                </div>
            </section>



            <section class="about" id="about">

                <h2 style={{ "margin-top": "50px" }} class="deco-title">care them</h2>

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

                <h2 style={{ "margin-top": "990px" }} class="deco-title">Adopt me !</h2>

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
        </>
    )
}

export default General_user
