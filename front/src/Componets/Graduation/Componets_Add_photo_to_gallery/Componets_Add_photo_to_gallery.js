import './Componets_Add_photo_to_gallery.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import React from 'react'

const Componets_Add_photo_to_gallery = () => {
    const navigate = useNavigate();
    const { id } = useParams()
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

        axios.post(`http://localhost:3001/gallery/add_new_photo/${id}`, formData)
            .then(res => {
                if (res.data.valid) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Images have been added successfully",
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
                    <div className="input-box" style={{ "width": "400px" }}>
                        <span className="details">Picture *</span>
                        <input
                            required
                            type='file'
                            name='monfichier'
                            onChange={(e) => setFile(e.target.files)}
                            multiple
                        />
                    </div>

                </div>

                <div class="button">
                    <button>Add</button>
                </div>

            </form>
        </>
    )
}

export default Componets_Add_photo_to_gallery