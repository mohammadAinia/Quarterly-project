import './Button.js'

const Button = (props) => {
    return (
        <>
            <div className="heading">
                <a href={props.href} className="btn">{props.value}</a>
            </div>
        </>
    )
}

export default Button
