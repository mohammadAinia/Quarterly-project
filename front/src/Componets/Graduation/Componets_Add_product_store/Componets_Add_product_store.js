import './Componets_Add_product_store.css'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'

const Componets_Add_product_store = () => {
    const navigate = useNavigate()

    const [numberOfSizes, setNumberOfSizes] = useState(1);
    const [sizeInputs, setSizeInputs] = useState([]);
    const [numberOfFeatures, setNumberOfFeatures] = useState(1);
    const [featureInputs, setFeatureInputs] = useState(['']);
    const [numberOfPictures, setNumberOfPictures] = useState(1);
    const [pictures, setPictures] = useState([]);

    const [Brand, setBrand] = useState('')
    const [ShortDesc, setShortDesc] = useState('')
    const [Desc, setDesc] = useState('')
    const [Use, setUse] = useState('')
    const [Ingredients, setIngredients] = useState('')
    const [KindeSize, setKindeSize] = useState('')



    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {

        const formData = new FormData()
        
        formData.append('brand', Brand)
        formData.append('shortDesc', ShortDesc)
        formData.append('desc', Desc)
        formData.append('use', Use)
        formData.append('ingredients', Ingredients)
        formData.append('kindeSize', KindeSize)

        formData.append('numberOfSizes', numberOfSizes);
        formData.append('numberOfFeatures', numberOfFeatures);
        formData.append('numberOfPictures', numberOfPictures);
        formData.append('count_size',sizeInputs.length)
        sizeInputs.forEach((size, index) => {
            formData.append(`size${index + 1}`, size.size);
            formData.append(`quantity${index + 1}`, size.quantity);
            formData.append(`price${index + 1}`, size.price);
        });
        formData.append('count_f',featureInputs.length)
        featureInputs.forEach((feature, index) => {
            formData.append(`feature${index + 1}`, feature);
        });
        formData.append('pic_count',pictures.length)
        pictures.forEach((picture, index) => {
            formData.append(`picture${index + 1}`, picture);
        });


        e.preventDefault()
        axios.post('http://localhost:3001/#/#/', formData, { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    alert('The product has been added successfully')
                    // navigate(-2)

                }
            })
            .catch(err => alert(err))
    }

    const handleNumberOfSizesChange = (e) => {
        const num = parseInt(e.target.value);
        setNumberOfSizes(num);
        setSizeInputs(Array.from({ length: num }, (_, index) => index + 1).map(() => ({ size: '', quantity: '', price: '' })));
    };

    const handleSizeInputChange = (index, key, value) => {
        setSizeInputs(prevInputs => {
            const newInputs = [...prevInputs];
            newInputs[index][key] = value;
            return newInputs;
        });
    };

    const handleNumberOfFeaturesChange = (e) => {
        const num = parseInt(e.target.value);
        setNumberOfFeatures(num);
        setFeatureInputs(Array.from({ length: num }, () => ''));
    };

    const handleFeatureInputChange = (index, value) => {
        const newFeatureInputs = [...featureInputs];
        newFeatureInputs[index] = value;
        setFeatureInputs(newFeatureInputs);
    };

    const handleNumberOfPicturesChange = (e) => {
        const num = parseInt(e.target.value);
        setNumberOfPictures(num);
        setPictures(Array.from({ length: num }, () => null));
    };

    const handlePictureInputChange = (index, file) => {
        const newPictures = [...pictures];
        newPictures[index] = file;
        setPictures(newPictures);
    };
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
                        <span class="details">Brand *</span>
                        <input type="text" name='brand' required onChange={e => setBrand(e.target.value)} />
                    </div>
                    <div class="input-box">
                        <span class="details">short description *</span>
                        <input type="text" name='shortDesc' required onChange={e => setShortDesc(e.target.value)} />
                    </div>

                    <div class="input-box">
                        {/* <span class="details" style={{ "margin-left": "280px", "width": "200px" }}> {Saturday_From + ' ' + Saturday_To}</span> */}
                    </div>
                    <div class="input-box">
                    </div>
                    <div class="input-box">
                        <span class="details">description *</span>
                        <input type="text" name='desc' required onChange={e => setDesc(e.target.value)} />
                    </div>
                    <div class="input-box">
                        <span class="details">use *</span>
                        <input type="text" name='use' required onChange={e => setUse(e.target.value)} />
                    </div>

                    <div class="input-box">
                        {/* <span class="details" style={{ "margin-left": "280px", "width": "200px" }}> {Saturday_From + ' ' + Saturday_To}</span> */}
                    </div>
                    <div class="input-box">
                    </div>
                    <div class="input-box" style={{ "width": "630px" }}>
                        <span class="details">Ingredients *</span>
                        <input type="text" name='ingredients' required onChange={e => setIngredients(e.target.value)} />
                    </div>
                    <div class="input-box">
                        {/* <span class="details">Ingredients *</span> */}
                        {/* <input type="text" name='age' required onChange={e => setSaturday_To(e.target.value)} /> */}
                    </div>

                    <div class="input-box">
                        {/* <span class="details" style={{ "margin-left": "280px", "width": "200px" }}> {Saturday_From + ' ' + Saturday_To}</span> */}
                    </div>
                    <div class="gender-details">
                        <div class="gender-details">
                            <input type="radio" name="number" value={1} id="dot-1" onChange={handleNumberOfSizesChange} />
                            <input type="radio" name="number" value={2} id="dot-2" onChange={handleNumberOfSizesChange} />
                            <input type="radio" name="number" value={3} id="dot-3" onChange={handleNumberOfSizesChange} />
                            <input type="radio" name="number" value={4} id="dot-4" onChange={handleNumberOfSizesChange} />

                            <span class="gender-title">How many sizes is there for the product? *</span>
                            <div class="category" style={{ "width": "500px" }}>
                                <label for="dot-1">
                                    <span class="dot one"></span>
                                    <span class="number" style={{ "color": "black" }}>1</span>
                                </label>
                                <label for="dot-2">
                                    <span class="dot two"></span>
                                    <span class="number" style={{ "color": "black" }}>2</span>
                                </label>
                                <label for="dot-3">
                                    <span class="dot three"></span>
                                    <span class="number" style={{ "color": "black" }}>3</span>
                                </label>
                                <label for="dot-4">
                                    <span class="dot four"></span>
                                    <span class="number" style={{ "color": "black" }}>4</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="input-box">
                        {/* <span class="details" style={{ "margin-left": "280px", "width": "200px" }}> {Saturday_From + ' ' + Saturday_To}</span> */}
                    </div>
                    <div class="input-box">
                    </div>

                    {sizeInputs.map((input, index) => (
                        <div key={index}>

                            <div className="input-box" style={{ "width": "300px" }}>
                                <span className="details">Product size {index + 1} *</span>
                                <input type="number" name={`size-${index}`} required value={input.size} onChange={e => handleSizeInputChange(index, 'size', e.target.value)} />
                            </div>
                            <div className="input-box" style={{ "width": "300px" }}>
                                <span className="details">Quantity of size {index + 1} *</span>
                                <input type="number" name={`quantity-${index}`} required value={input.quantity} onChange={e => handleSizeInputChange(index, 'quantity', e.target.value)} />
                            </div>
                            <div className="input-box" style={{ "width": "300px" }}>
                                <span className="details">Price $ size {index + 1} *</span>
                                <input type="number" name={`price-${index}`} required value={input.price} onChange={e => handleSizeInputChange(index, 'price', e.target.value)} />
                            </div>
                        </div>
                    ))}

                    <div class="input-box">
                        {/* <span class="details" style={{ "margin-left": "280px", "width": "200px" }}> {Saturday_From + ' ' + Saturday_To}</span> */}
                    </div>
                    <div class="input-box">
                    </div>
                    <div class="input-box" style={{ "width": "600px" }}>
                        <span class="details">What kind of sizes? *</span>
                        <select name="kindeSize" idd="cars" required onChange={e => setKindeSize(e.target.value)}>

                            <option value="kg" >Kg</option>
                            <option value="kg" >ML</option>


                        </select>
                    </div>

                    <div class="input-box">
                        {/* <span class="details" style={{ "margin-left": "280px", "width": "200px" }}> {Saturday_From + ' ' + Saturday_To}</span> */}
                    </div>
                    <div class="input-box">
                    </div>
                    <div className="input-box" style={{ width: '600px' }}>
                        <span className="details">How many features of the product ? *</span>
                        <select name="type_size" id="cars" required onChange={handleNumberOfFeaturesChange}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                    </div>

                    <div class="input-box">
                        {/* <span class="details" style={{ "margin-left": "280px", "width": "200px" }}> {Saturday_From + ' ' + Saturday_To}</span> */}
                    </div>

                    {Array.from({ length: numberOfFeatures }).map((_, index) => (
                        <div className="input-box" key={index} style={{ width: '600px' }}>
                            <span className="details">Feature {index + 1} *</span>
                            <input
                                type="text"
                                name={`feature-${index}`}
                                required
                                value={featureInputs[index]}
                                onChange={(e) => handleFeatureInputChange(index, e.target.value)}
                            />
                        </div>
                    ))}

                    <div class="input-box">
                        {/* <span class="details" style={{ "margin-left": "280px", "width": "200px" }}> {Saturday_From + ' ' + Saturday_To}</span> */}
                    </div>
                    <div class="input-box">
                    </div>
                    <div className="input-box" style={{ width: '600px' }}>
                        <span className="details">How many pictures of the product ? *</span>
                        <select name="type_size" id="cars" required onChange={handleNumberOfPicturesChange}>
                            {[...Array(10)].map((_, index) => (
                                <option key={index} value={index + 1}>{index + 1}</option>
                            ))}
                        </select>
                    </div>

                    <div class="input-box">
                        {/* <span class="details" style={{ "margin-left": "280px", "width": "200px" }}> {Saturday_From + ' ' + Saturday_To}</span> */}
                    </div>
                    <div class="input-box">
                    </div>
                    {Array.from({ length: numberOfPictures }).map((_, index) => (
                        <div className="input-box" key={index}>
                            <span className="details">Picture {index + 1} *</span>
                            <input
                                type="file"
                                name={`image-${index}`}
                                onChange={(e) => handlePictureInputChange(index, e.target.files[0])}
                                required
                            />
                        </div>
                    ))}


                </div>


                <div class="button">
                    <button>Add</button>
                </div>

            </form>
        </>
    )
}

export default Componets_Add_product_store