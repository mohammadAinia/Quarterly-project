import './Componets_Add_Brand.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'

const Componets_Add_Brand = () => {

    const [file, setFile] = useState(null);
    const [Brand_Name, setBrand_Name] = useState('')


    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData()

        formData.append('brand_name', Brand_Name)
        let newArr = [];
        for (let i = 0; i < file.length; i++) {
            formData.append('monfichier', file[i]);
        }
        formData.append('monfichier', newArr);
        // alert(formData.get('monfichier'));

        e.preventDefault()
        axios.post('http://localhost:3001/admin/#', formData)
            .then(res => {
                if (res.data.valid) {
                    alert('The brand has been successfully added to the store')
                    // navigate(-2)

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
                    <div class="input-box">
                        <span class="details">Brand name *</span>
                        <input type="text" name='brand_name' required onChange={e => setBrand_Name(e.target.value)} />

                    </div>


                    <div className="input-box">
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

export default Componets_Add_Brand