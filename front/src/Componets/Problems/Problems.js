import './Problems.css'
import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const Problems = (props) => {
    const navigate = useNavigate()
    const [Comment, setComment] = useState('')

    axios.defaults.withCredentials = true
    const handleSubmit = (id) => {
        axios.post(`http://localhost:3001/problim/add_answer/${id}`, { Comment })
            .then(res => {
                if (res.data.valid) {
                    // alert('Published successfully')
                    
                    Swal.fire({
                        title: "Good job!",
                        text: "Published successfully",
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
                        window.location.reload()
                    });
                }
                else {
                    navigate('/login')
                }

            }
            )
            .catch(err => {
                alert(err)
                console.log(err)
            })
    }

    return (
        <>


            <form >
                <div className="box">
                    <h2 style={{ "font-size": "24px" }}>{props.type}</h2>
                    <br />
                    <h2>{props.name}</h2>
                    <br />
                    <p style={{ "font-size": "15px" }}>{props.text}</p> <br />
                    <div class="inputBox">
                        <textarea placeholder="add comment" required onChange={e => setComment(e.target.value)} />
                    </div>
                    <button onClick={e => handleSubmit(props.id1)} style={{ "font-size": "1.4rem", "padding": "0.7rem 2rem" }} className="btn">share</button><br />
                    <Link className="btn" to={props.hreflink}>Comments</Link>

                </div>
            </form>

        </>
    )
}

export default Problems
