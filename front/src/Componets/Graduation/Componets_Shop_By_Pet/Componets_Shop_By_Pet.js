import './Componets_Shop_By_Pet.css'


const Componets_Shop_By_Pet = (props) => {
    return (

        <>
            <div class="overlap-7">
                <img class="rectangle-3" src={props.image} />
                <a href={props.href} class="text-wrapper-15">{props.cetagery}</a>
            </div>
        </>
    )
}

export default Componets_Shop_By_Pet