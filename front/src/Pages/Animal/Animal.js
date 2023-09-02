import './Animal.css'
import animal_1 from '../../../src/Assert/Images/animal_1.jpg'
import animal_2 from '../../../src/Assert/Images/animals_2.jpg'
import animal_3 from '../../../src/Assert/Images/animals_3.jpg'
import animal_4 from '../../../src/Assert/Images/animals_4.jpg'


const Animal = () => {
    return (
        <>
            <section className="animal" id="animal" style={{"margin-top":"900px" , "margin-bottom":"70px"}}>

                <h2 className="heading">animals</h2>

                <div className="box-container">
                    <div className="box">
                        <img src={animal_1} alt=""/>
                            <div className="content">
                                <h3>cameleon</h3>
                                <a href="#" className="btn">see datails</a>
                            </div>
                    </div>

                    <div className="box">
                        <img src={animal_2} alt=""/>
                            <div className="content">
                                <h3>zebra</h3>
                                <a href="#" className="btn">see datails</a>
                            </div>
                    </div>

                    <div className="box">
                        <img src={animal_3} alt=""/>
                            <div className="content">
                                <h3>giraffe</h3>
                                <a href="#" className="btn">see datails</a>
                            </div>
                    </div>

                    <div className="box">
                        <img src={animal_4} alt=""/>
                            <div className="content">
                                <h3>monkey</h3>
                                <a href="#" className="btn">see datails</a>
                            </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Animal
