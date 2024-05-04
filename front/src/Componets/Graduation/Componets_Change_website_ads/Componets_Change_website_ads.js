import './Componets_Change_website_ads.css'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'

const Componets_Change_website_ads = () => {

    const navigate = useNavigate();

    const [file, setFile] = useState(null);

    const [One, setOne] = useState(null);
    const [Two, setTwo] = useState(null);
    const [Three, setThree] = useState(null);
    const [Four, setFour] = useState(null);
    const [Five, setFive] = useState(null);
    const [Six, setSix] = useState(null);
    const [Seven, setSeven] = useState(null);
    const [Eight, setEight] = useState(null);



    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault();

        
        const formData = new FormData()

        let newArr = [];
        for (let i = 0; i < file.length; i++) {
            formData.append('monfichier', file[i]);
        }
        formData.append('monfichier', newArr);
        // alert(formData.get('monfichier'));

        formData.append('onestore', One)
        formData.append('towstore', Two)
        formData.append('threestore', Three)
        formData.append('fourstore', Four)
        formData.append('fivestore', Five)
        formData.append('sixstore', Six)
        formData.append('sevenstore', Seven)
        formData.append('eightstore', Eight)



        axios.post('http://localhost:3001/#/#', formData)
            .then(res => {
                if (res.data.valid) {
                    alert('The ads have been modified successfully')
                    navigate(-1)

                }
            })
            .catch(err => alert(err))
    }
    return (

        <>
            <form onSubmit={handleSubmit} enctype="multipart/form-data">

                <div class="user-details">

                    <div class="input-box">
                        {/* <span class="details" style={{ "margin-left": "280px", "width": "200px" }}> {Saturday_From + ' ' + Saturday_To}</span> */}
                    </div>
                    <div class="input-box">
                    </div>
                    <div className="input-box">
                        <span className="details">Many ads in one place (variable ad) on the home page</span>
                        <input
                            type='file'
                            name='monfichier'
                            onChange={(e) => setFile(e.target.files)}
                            multiple
                        />
                    </div>


                    <div className="input-box">
                        <span className="details">Picture 1 in store</span>
                        <input
                            type='file'
                            name='monfichier'
                            onChange={(e) => setOne(e.target.files)}
                            
                        />
                    </div>
                    <div className="input-box">
                        <span className="details">Picture 2 in store</span>
                        <input
                            type='file'
                            name='monfichier'
                            onChange={(e) => setTwo(e.target.files)}
                            
                        />
                    </div>
                    <div className="input-box">
                        <span className="details">Picture 3 in store</span>
                        <input
                            type='file'
                            name='monfichier'
                            onChange={(e) => setThree(e.target.files)}
                            
                        />
                    </div>
                    <div className="input-box">
                        <span className="details">Picture 4 in store</span>
                        <input
                            type='file'
                            name='monfichier'
                            onChange={(e) => setFour(e.target.files)}
                            
                        />
                    </div>
                    <div className="input-box">
                        <span className="details">Picture 5 in store</span>
                        <input
                            type='file'
                            name='monfichier'
                            onChange={(e) => setFive(e.target.files)}
                            
                        />
                    </div>
                    <div className="input-box">
                        <span className="details">Picture 6 in store</span>
                        <input
                            type='file'
                            name='monfichier'
                            onChange={(e) => setSix(e.target.files)}
                            
                        />
                    </div>
                    <div className="input-box">
                        <span className="details">Picture 7 in store</span>
                        <input
                            type='file'
                            name='monfichier'
                            onChange={(e) => setSeven(e.target.files)}
                            
                        />
                    </div>
                    <div className="input-box">
                        <span className="details">Picture 8 in store</span>
                        <input
                            type='file'
                            name='monfichier'
                            onChange={(e) => setEight(e.target.files)}
                            
                        />
                    </div>

                </div>

                <div class="button">
                    <button>Update</button>
                </div>

            </form>
        </>
    )
}

export default Componets_Change_website_ads