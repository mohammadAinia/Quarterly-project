import './Componets_Brand.css'

const Componets_Brand = (props) => {
    return (
        <>
            <a href={props.href} class="rectangle-wrapper">
                <img class="rectangle-26" src={props.img} />
                <p class="image-text">{props.name_brand}</p>
            </a>
        </>
    )
}

export default Componets_Brand