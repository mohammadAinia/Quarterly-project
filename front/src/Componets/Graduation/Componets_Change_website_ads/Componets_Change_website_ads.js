import './Componets_Change_website_ads.css'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';

const Componets_Change_website_ads = () => {

    const navigate = useNavigate();

    const [file, setFile] = useState('');

    const [One, setOne] = useState('');
    const [Two, setTwo] = useState('');
    const [Three, setThree] = useState('');
    const [Four, setFour] = useState('');
    const [Five, setFive] = useState('');
    const [Six, setSix] = useState('');
    const [Seven, setSeven] = useState('');
    const [Eight, setEight] = useState('');

    useEffect(() => {

        axios.get('http://localhost:3001/admin/show_all_ads/', { withCredentials: true })
            .then(res => {
                setFile(res.data.result[0].photo_url)
                setOne(res.data.result[0].photo_url)
                setTwo(res.data.result[0].photo_url)
                setThree(res.data.result[0].photo_url)
                setFour(res.data.result[0].photo_url)
                setFive(res.data.result[0].photo_url)
                setSix(res.data.result[0].photo_url)
                setSeven(res.data.result[0].photo_url)
                setEight(res.data.result[0].photo_url)
                // alert(res.data.result[0].photo_url)


            })
            .catch(err => { console.log(err) })
    }, [])



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

        formData.append('onestore', One[0])
        formData.append('towstore', Two[0])
        formData.append('threestore', Three[0])
        formData.append('fourstore', Four[0])
        formData.append('fivestore', Five[0])
        formData.append('sixstore', Six[0])
        formData.append('sevenstore', Seven[0])
        formData.append('eightstore', Eight[0])



        axios.post('http://localhost:3001/admin/add_new_ads', formData)
            .then(res => {
                if (res.data.valid) {
                    // alert('The ads have been modified successfully')
                    // navigate(-1)
                    Swal.fire({
                        title: "Good job!",
                        text: "The ads have been modified successfully",
                        icon: "success",
                        customClass: {
                            container: 'enlarged-alert-container',
                            popup: 'enlarged-alert-popup',
                            title: 'enlarged-alert-title',
                            htmlContainer: 'enlarged-alert-html-container',
                            confirmButton: 'enlarged-alert-confirm-button',
                        },
                        position: 'center',
                        backdrop: false,
                    }).then(() => {
                        navigate(-1);
                    });

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
//uu