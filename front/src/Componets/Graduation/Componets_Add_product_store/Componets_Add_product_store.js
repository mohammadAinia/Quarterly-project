import './Componets_Add_product_store.css'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'

const Componets_Add_product_store = () => {

    const [CategoryFromBackEnd, setCategoryFromBackEnd] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3001/#/#', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {

                    setCategoryFromBackEnd(res.data.result)

                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })
    }, [])


    const navigate = useNavigate()



    const [numberOfSizes, setNumberOfSizes] = useState(1);
    const [sizeInputs, setSizeInputs] = useState([]);
    const [numberOfFeatures, setNumberOfFeatures] = useState(1);
    const [featureInputs, setFeatureInputs] = useState(['']);
    const [numberOfPictures, setNumberOfPictures] = useState(1);
    const [pictures, setPictures] = useState(['']);

    const [Brand, setBrand] = useState('')
    const [ShortDesc, setShortDesc] = useState('')
    const [Desc, setDesc] = useState('')
    const [Other, setOther] = useState('')
    const [Ingredients, setIngredients] = useState('')
    const [KindeSize, setKindeSize] = useState('')
    const [TypeSpecifications, setTypeSpecifications] = useState('')
    const [TypeAnimal, setTypeAnimal] = useState('')
    const [Category, setCategory] = useState('')
    const [file, setFile] = useState(null);

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {

        // e.preventDefault();

        // pictures.forEach((file, index) => {
        //     console.log(`image${index + 1}:`, file);
        // });

        e.preventDefault();

        const formData = new FormData()

        formData.append('brand', Brand)
        formData.append('shortDesc', ShortDesc)
        formData.append('desc', Desc)
        formData.append('other', Other)
        formData.append('ingredients', Ingredients)
        formData.append('kindeSize', KindeSize)
        formData.append('typeSpecifications', TypeSpecifications)
        formData.append('typeAnimal', TypeAnimal)
        formData.append('category', Category)

        formData.append('numberOfSizes', numberOfSizes);
        formData.append('numberOfFeatures', numberOfFeatures);
        formData.append('numberOfPictures', numberOfPictures);

        formData.append('count_size', sizeInputs.length)
        formData.append('count_f', featureInputs.length)
        formData.append('pic_count', pictures.length)

        let newArr = ['l'];
        for (let i = 0; i < file.length; i++) {
            formData.append('monfichier', file[i]);
        }

        formData.append('monfichier', newArr);
        alert(formData.get('monfichier'));

        sizeInputs.forEach((size, index) => {
            formData.append(`size${index + 1}`, size.size);
            formData.append(`quantity${index + 1}`, size.quantity);
            formData.append(`price${index + 1}`, size.price);
        });

        featureInputs.forEach((feature, index) => {
            formData.append(`feature${index + 1}`, feature);
        });

        pictures.forEach((picture, index) => {
            formData.append(`image${index + 1}`, picture);
        });

        // تجربة طباعة البيانات
        // for (const [key, value] of formData.entries()) {
        //     alert(`${key}: ${value}`);
        // }


        e.preventDefault()
        axios.post('http://localhost:3001/admin/add_prod', formData)
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
                        <span class="details">Other *</span>
                        <input type="text" name='other' required onChange={e => setOther(e.target.value)} />
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
                                <input type="text" name={`size-${index}`} required value={input.size} onChange={e => handleSizeInputChange(index, 'size', e.target.value)} />
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
                            <option value="ML" >ML</option>
                            <option value="XL" >XL</option>
                            <option value="L" >L</option>
                            <option value="XXL" >XXL</option>
                            <option value="XXXL" >XXXL</option>
                            <option value="M" >M</option>
                            <option value="S" >S</option>
                        </select>
                    </div>

                    <div class="input-box">
                        {/* <span class="details" style={{ "margin-left": "280px", "width": "200px" }}> {Saturday_From + ' ' + Saturday_To}</span> */}
                    </div>
                    <div class="input-box">
                    </div>
                    <div className="input-box" style={{ width: '600px' }}>
                        <span className="details">How many specifications of the product ? *</span>
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
                    <div class="input-box">
                    </div>
                    <div className="input-box" style={{ width: '600px' }}>
                        <span className="details">What type of specifications are entered ? *</span>
                        <select name="typeSpecifications" id="cars" required onChange={e => setTypeSpecifications(e.target.value)}>
                            <option value="Feature">Feature</option>
                            <option value="specifications">specifications</option>
                            <option value="Key Benefits">Key Benefits</option>
                            <option value="Contains">Contains</option>
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
                        <span className="details">Type of animal ? *</span>
                        <select name="typeAnima" id="cars" required onChange={e => setTypeAnimal(e.target.value)}>
                            <option value="Cat">Cat</option>
                            <option value="Dog">Dog</option>
                            <option value="Fish">Fish</option>
                            <option value="Birds">Birds</option>
                            <option value="Reptile">Reptile</option>
                            <option value="Small Pet">Small Pet</option>
                        </select>
                    </div>

                    <div class="input-box">
                        {/* <span class="details" style={{ "margin-left": "280px", "width": "200px" }}> {Saturday_From + ' ' + Saturday_To}</span> */}
                    </div>
                    <div class="input-box">
                    </div>
                    <div className="input-box" style={{ width: '600px' }}>
                        <span className="details">Category ? *</span>
                        <select name="category" id="cars" required onChange={e => setCategory(e.target.value)}>

                            {CategoryFromBackEnd.map((user, i) => {
                                return (
                                    <option key={i} value={user.name_catogary} >{user.name_catogary}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div class="input-box">
                        {/* <span class="details" style={{ "margin-left": "280px", "width": "200px" }}> {Saturday_From + ' ' + Saturday_To}</span> */}
                    </div>
                    <div class="input-box">
                    </div>
                    <div className="input-box">
                        <span className="details">Picture *</span>
                        <input
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

export default Componets_Add_product_store