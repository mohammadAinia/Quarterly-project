import './Componets_Categories.css'

const Componets_Categories = (props) => {
    return (
        <>
            <div class="over">
                <a href={props.href2}>
                    <img className="rectangle-16" src={props.img} alt="Description of the image" />
                </a>
                <div class="text-wrapper-35">
                    <a href={props.href}>{props.name_categories}</a>
                </div>
            </div>
        </>
    )
}

export default Componets_Categories