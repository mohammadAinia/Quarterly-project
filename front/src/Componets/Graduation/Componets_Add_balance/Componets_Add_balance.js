import './Componets_Add_balance.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';


const Componets_Add_balance = () => {

    const [balance, setBalance] = useState(null);
    const navigate = useNavigate();

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/storee/add_to_wallet', {balance})
            .then(res => {
                if (res.data.valid) {
                    // alert('The balance has been added successfully')
                    Swal.fire({
                        title: "Good job!",
                        text: "The balance has been added successfully",
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
                        navigate('/store');
                    });

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