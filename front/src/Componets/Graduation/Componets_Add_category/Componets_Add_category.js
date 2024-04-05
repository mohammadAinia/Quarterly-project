import './Componets_Add_category.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header } from '../../../Componets'
import { useNavigate, useParams } from 'react-router-dom'

const Componets_Add_category = () => {

    const [CategoryFromBackEnd, setCategoryFromBackEnd] = useState([])

    useEffect(() => {

        axios.get('http://localhost:3001/admin/show_c', { withCredentials: true })
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

    const [CategoryName, setCategoryName] = useState('')
    const [TypeAnimal, setTypeAnimal] = useState('')
    const [Category, setCategory] = useState('')
    const [file, setFile] = useState(null);

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData()

        formData.append('category_name', CategoryName)
        formData.append('typeAnimal', TypeAnimal)
        formData.append('category', Category)



        let newArr = ['l'];
        for (let i = 0; i < file.length; i++) {
            formData.append('monfichier', file[i]);
        }

        formData.append('monfichier', newArr);
        alert(formData.get('monfichier'));

        e.preventDefault()
        axios.post('http://localhost:3001/admin/add_category', formData)
            .then(res => {
                if (res.data.valid) {
                    alert('The Category has been added successfully')
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
                        <span class="details">Category name *</span>
                        <input type="text" name='category_name' required onChange={e => setCategoryName(e.target.value)} />

                    </div>

                    <div className="input-box" >
                        <span className="details">Category ? *</span>
                        <select name="category" id="cars" required onChange={e => setCategory(e.target.value)}>

                            {CategoryFromBackEnd.map((user, i) => {
                                return (
                                    <option key={i} value={user.categ} >{user.categ}</option>
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
                        <span className="details">Animal Type ? *</span>
                        <select name="typeAnimal" id="cars" required onChange={e => setTypeAnimal(e.target.value)}>
                            <option value="Food">Cat</option>
                            <option value="Tooys">Dog</option>
                            <option value="Treets">Birds</option>
                            <option value="Puppy Essentials">Fish</option>
                            <option value="Dog Carriers & Travel">Reptile</option>
                            <option value="Aquariums & Starter Kits">Rabbit</option>
                        </select>
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

export default Componets_Add_category