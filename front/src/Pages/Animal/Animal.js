import './Animal.css'

import { Card, SectionHeader } from '../../Componets/index'
import Animal_data from '../../Data/Animal_data'

const Animal = () => {
    const cards = Animal_data.map(card => {
        return <Card image={card.image} name={card.name} />
    })

    return (

        <>
            <section className="animal" id="animal" >
                <SectionHeader>Most Populer</SectionHeader>
                <div className="">
                    <div className="heading">
                        <a href="/Search" className="btn">Search</a>
                    </div>
                </div>
                <div className="box-container">
                    {cards}
                </div>
            </section>
        </>
    )
}

export default Animal
