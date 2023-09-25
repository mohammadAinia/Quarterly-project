import './Comments.css'

const Comments = (props) => {
    return (
        <>
            <div className="input-box">
                <span className="details">{props.name}</span>
                <textarea style={{
                    "height": "80px", "width": "100%", "outline": "none",
                    "font-size": "16px", "border-radius": "5px", "padding-left": "15px",
                    "border": "1px solid #ccc", "border-color": "#f18221", "border-bottom-width": "2px", "transition": "all 0.3s ease"
                }} required readOnly value={props.text} />
            </div>
        </>
    )
}

export default Comments
