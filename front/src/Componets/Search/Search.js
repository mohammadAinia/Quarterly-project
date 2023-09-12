import { useState } from 'react'
import './Search.css'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import axios from 'axios'

const Search = (props) => {

    const navigate = useNavigate()
    const [Name_animal, setName_animal] = useState('')

    axios.defaults.withCredentials = true
    const handleSearch = async (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/user/search', { Name_animal })
            .then(res => {navigate('/Animal_info')})
            .catch(err => { console.log(err) })
    }
    return (
        <>
            <Header href1={"/Animal"} a1={"Animal"} href3={"#"} a3={"Common Problems"} href2={"#"} a2={"Adopt Animal"} href4={"/login"} a4={"Login"} />

            <div className="container">
                <div className="title">{props.title}</div>
                <div className="content">
                    <form action="#" onSubmit={handleSearch}>
                        <div className="user-details">
                            <div className="input-box">
                                <input style={{ "width": "300px" }} type="text" placeholder={props.placeholder} required onChange={e => setName_animal(e.target.value)} />
                            </div>
                        </div>
                        <div className="button">
                            <button>{props.value}</button>
                        </div>
                        <div className="button">
                            <a style={{ "width": "150px" }} href={props.href}>{props.a}</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Search
