import './Problem_id.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header, Problem_id_comp ,Comments} from '../../Componets'
import { useNavigate, useParams } from 'react-router-dom'


const Problem_id = (props) => {

    const [Problim_info, setProblim_info] = useState('')
    const [Comment, setComments] = useState('')

    const { id } = useParams()

    useEffect(() => {

        axios.get(`http://localhost:3001/#/${id}`)
            .then(res => {
                setProblim_info(res.result)
                setComments(res.resultt)

            })
            .catch(err => { console.log(err) })
    }, [])


    return (
        <>

            <section className="pricing" id="pricing">
                <h2 className="heading">Proplem</h2>

                <div className="box-container">
                    {Problim_info.map((user, i) => {
                        return (
                            <div key={i}>
                                <Problem_id_comp name={user.title} type={user.disc} text={user.animal_type} id1={user.id_problim} />
                            </div>
                        )
                    })}
                </div>
            </section>

            <div>
                <div className="container" style={{ "margin-top": "50px", "margin-bottom": "70px" }}>
                    <div className="title">Comments</div>
                    <div className="content">
                        <form action="#" >
                            <div className="user-details">
                                {Comment.map((user, i) => {
                                    return (
                                        <div key={i}>
                                            <Comments name={user.publisher} text={user.answer}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Problem_id