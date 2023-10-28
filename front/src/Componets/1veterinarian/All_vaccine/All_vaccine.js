import './All_vaccine.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const All_vaccine = (props) => {
    return (
        <>
            <div className="input-box">
                <span className="details">Name</span>
                <textarea style={{
                     "outline": "none",
                    "font-size": "16px", "border-radius": "5px", "padding-left": "15px",
                    "border": "1px solid #ccc", "border-color": "#f18221", "border-bottom-width": "2px", "transition": "all 0.3s ease"
                }} required readOnly value={props.text} />
            </div>
        </>
    )
}

export default All_vaccine
