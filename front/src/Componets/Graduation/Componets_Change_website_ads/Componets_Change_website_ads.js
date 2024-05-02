import './Componets_Change_website_ads.css'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'

const Componets_Change_website_ads = () => {

    const navigate = useNavigate();

    const [file, setFile] = useState(null);

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
                        <span className="details">Picture 1</span>
                        <input
                            type='file'
                            name='monfichier'
                            onChange={(e) => setFile(e.target.files)}
                            multiple
                        />
                    </div>


                    <div className="input-box">
                        <span className="details">Picture 2</span>
                        <input
                            type='file'
                            name='monfichier'
                            onChange={(e) => setFile(e.target.files)}
                            multiple
                        />
                    </div>
                    <div className="input-box">
                        <span className="details">Picture 3</span>
                        <input
                            type='file'
                            name='monfichier'
                            onChange={(e) => setFile(e.target.files)}
                            multiple
                        />
                    </div>
                    <div className="input-box">
                        <span className="details">Picture 4</span>
                        <input
                            type='file'
                            name='monfichier'
                            onChange={(e) => setFile(e.target.files)}
                            multiple
                        />
                    </div>
                    <div className="input-box">
                        <span className="details">Picture 5</span>
                        <input
                            type='file'
                            name='monfichier'
                            onChange={(e) => setFile(e.target.files)}
                            multiple
                        />
                    </div>
                    <div className="input-box">
                        <span className="details">Picture 6</span>
                        <input
                            type='file'
                            name='monfichier'
                            onChange={(e) => setFile(e.target.files)}
                            multiple
                        />
                    </div>
                    <div className="input-box">
                        <span className="details">Picture 7</span>
                        <input
                            type='file'
                            name='monfichier'
                            onChange={(e) => setFile(e.target.files)}
                            multiple
                        />
                    </div>
                    <div className="input-box">
                        <span className="details">Picture 8</span>
                        <input
                            type='file'
                            name='monfichier'
                            onChange={(e) => setFile(e.target.files)}
                            multiple
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