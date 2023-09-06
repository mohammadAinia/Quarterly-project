import './Animal.css'
// import animal_1 from '../../../src/Assert/Images/cat.jpg'
// import animal_2 from '../../../src/Assert/Images/dog.jpg'
// import animal_3 from '../../../src/Assert/Images/parrot.jpg'
// import animal_4 from '../../../src/Assert/Images/fish.jpg'
import { Card  } from '../../Componets'
import Animal_data from '../../Data/Animal_data'

const Animal = () => {
    const cards =  Animal_data.map(card=>{
        return <Card image={card.img} name={card.name}/>
    })
    
    return (
        <>
            <section className="animal" id="animal" >

                <h2 className="heading">most animals</h2>
                <div className="">
                    <div className="heading">
                        <a href="/Search" className="btn">Search</a>
                    </div>
                </div>
                {cards}

            </section>
        </>
    )
}

export default Animal
