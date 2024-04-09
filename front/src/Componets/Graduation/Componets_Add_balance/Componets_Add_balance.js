import './Componets_Add_balance.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Componets_Add_balance = () => {

    const [balance, setBalance] = useState(null);
    const navigate = useNavigate();

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/storee/add_to_wallet', {balance})
            .then(res => {
                if (res.data.valid) {
                    alert('The balance has been added successfully')
                    navigate('store')

                }
                else {
                    alert('you dont have permtions ')
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
                        <span class="details">Balance *</span>
                        <input style={{ "width": "500px" }} type="number" name='brand_name' required onChange={e => setBalance(e.target.value)} />
                    </div>

                </div>

                <div class="button">
                    <button>Add</button>
                </div>

            </form>
        </>
    )
}

export default Componets_Add_balance