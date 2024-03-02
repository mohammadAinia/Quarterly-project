import './Report.css'
import React from 'react'
import report_Vector47 from '../../../Assert/Images/report_Vector47.png'
import report_Vector48 from '../../../Assert/Images/report_Vector48.png'
import report_Vector_49 from '../../../Assert/Images/report_Vector_49.png'
import report_Vector51 from '../../../Assert/Images/report_Vector51.png'
import report_Vector50 from '../../../Assert/Images/report_Vector50.png'
import report_Vector46 from '../../../Assert/Images/report_Vector46.png'
import report_Line2 from '../../../Assert/Images/report_Line2.png'

const Report = () => {
    return (
        <>
            <div class="report">
                <div class="div">
                    <div class="overlap">
                        <img class="ellipse" src="img/ellipse-52.png" />
                        <div class="ellipse-2"></div>
                    </div>
                    <div class="overlap-group">
                        <div class="overlap-2">
                            <div class="overlap-3">
                                <div class="rectangle"></div>
                                <img class="vector" src={report_Vector47} />
                                <div class="text-wrapper">ABOUT</div>
                            </div>
                            <div class="text-wrapper-2">Name :</div>
                            <div class="text-wrapper-3">Height :</div>
                            <div class="text-wrapper-4">caty</div>
                            <div class="text-wrapper-5">30 cm</div>
                        </div>
                        <div class="overlap-4">
                            <div class="overlap-group-2">
                                <div class="rectangle"></div>
                                <img class="vector" src={report_Vector48} />
                                <div class="text-wrapper-6">Health record</div>
                            </div>
                            <div class="overlap-5">
                                <div class="text-wrapper-7">Age :</div>
                                <div class="text-wrapper-8">2022/2/2</div>
                            </div>
                            <div class="overlap-6">
                                <div class="text-wrapper-7">Color :</div>
                                <div class="text-wrapper-9">White</div>
                            </div>
                        </div>
                        <img class="line" src={report_Line2} />
                    </div>
                    <div class="overlap-7">
                        <div class="rectangle"></div>
                        <img class="vector" src={report_Vector_49} />
                        <div class="text-wrapper-10">Vaccines</div>
                    </div>
                    <div class="overlap-8">
                        <div class="rectangle"></div>
                        <img class="vector" src={report_Vector51} />
                        <div class="text-wrapper-11">pharmaceutical</div>
                    </div>
                    <div class="overlap-9">
                        <img class="img" src={report_Vector50} />
                        <div class="ellipse-3"></div>
                    </div>
                    <div class="overlap-90" ></div>
                    <div class="text-wrapper-12">Report</div>
                    <div class="frame"><div class="text-wrapper-13">Gellary</div></div>
                    <div class="div-wrapper"><div class="text-wrapper-13">Print</div></div>
                    <div class="overlap-10">
                        <div class="text-wrapper-7">Type :</div>
                        <div class="text-wrapper-14">cat</div>
                    </div>
                    <div class="text-wrapper-15">weight :</div>
                    <div class="text-wrapper-16">Gender :</div>
                    <div class="overlap-11">
                        <div class="text-wrapper-17">Place :</div>
                        <div class="text-wrapper-18">Al-Nabek</div>
                    </div>
                    <p class="p">The cat suffered a skin allergy in 2020 and was treated with Brufen</p>
                    <p class="text-wrapper-19">Feline Viral Rhinotracheitis (FVR) in 2021/1/1</p>
                    <div class="text-wrapper-20">Antifungals</div>
                    <div class="text-wrapper-21">7 kg</div>
                    <div class="text-wrapper-22">Male</div>
                </div>
            </div>
        </>
    )
}

export default Report