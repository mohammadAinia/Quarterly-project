import './Add_common.css'
import { Header, Profilee } from '../../../Componets/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Add_common = () => {

    const navigate = useNavigate()
    const [Title, setTitle] = useState('')
    const [Details, setDetails] = useState('')



    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()

        axios.post('http://localhost:3001/problim/update_problem', { Title, Details })
            .then(res => {
                if (res.data.valid) {
                    alert('Added successfully')
                }
                else {
                    navigate('/login')

                }
            })
            .catch(err => alert(err))


    }

    return (
        <>
            <div class="container">
                <div class="title">Add</div>
                <div class="content" style={{ "width": "450px" }}>
                    <form onSubmit={handleSubmit}>
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details">Title </span>
                                <input type="text" required onChange={e => setTitle(e.target.value)} />
                            </div>
                            <div class="input-box">
                                <span class="details">Details </span>
                                <input type="text" required onChange={e => setDetails(e.target.value)} />
                            </div>
                        </div>
                        <div class="button">
                            <button>Add</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Add_common
