import './Animal.css'
import animal_1 from '../../../src/Assert/Images/cat.jpg'
import animal_2 from '../../../src/Assert/Images/dog.jpg'
import animal_3 from '../../../src/Assert/Images/parrot.jpg'
import animal_4 from '../../../src/Assert/Images/fish.jpg'


const Animal = () => {
    return (
        <>
            <section className="animal" id="animal" >

                <h2 className="heading">most animals</h2>
                <div className="">
                    <div className="heading">
                        <a href="/Search" className="btn">Search</a>
                    </div>
                </div>

                <div className="box-container">
                    <div className="box">
                        <img src={animal_1} alt="" />
                        <div className="content">
                            <h3>Cat</h3>
                            <a href="#" className="btn">see datails</a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={animal_2} alt="" />
                        <div className="content">
                            <h3>Dog</h3>
                            <a href="#" className="btn">see datails</a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={animal_3} alt="" />
                        <div className="content">
                            <h3>Parrot</h3>
                            <a href="/Parrot_info" className="btn">see datails</a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={animal_4} alt="" />
                        <div className="content">
                            <h3>Fish</h3>
                            <a href="#" className="btn">see datails</a>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Animal
