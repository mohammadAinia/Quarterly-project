import './General_user.css'
import bunner from '../../../src/Assert/Images/home4.jpg'
import bunner2 from '../../../src/Assert/Images/carousel-2.jpg'

import { Header } from '../../Componets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRightToBracket } from '@fortawesome/free-solid-svg-icons'
const General_user = () => {
    return (
        <>
            <Header href1={"/Animal"} a1={"Animal"} href3={"#"} a3={"Common Problems"} href2={"#"} a2={"Adopt Animal"} log={'/login'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightToBracket} /></div>} />

            <div style={{ "width": " 1900px", "height": " 100%","margin-top":"200px" }} class="container-fluid p-0">
                <div id="header-carousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="w-100" src={bunner} alt="Image" />
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style={{ "max-width": "900px" }} >
                                    <h3 style={{ "fontSize": "30px","margin-left":"00px"}} class="text-white mb-3 d-none d-sm-block">Best Pet Services</h3>
                                    <h1 style={{ "fontSize": "80px",}} class="display-3 text-white mb-3">Keep Your Pet Happy</h1>
                                    <a style={{ "fontSize": "30px","width":"200px"}} href="" class="btn btn-lg btn-primary mt-3 mt-md-4 px-4">sign up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default General_user
