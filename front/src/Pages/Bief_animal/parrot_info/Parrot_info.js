import './Parrot_info.css'
import bunner from '../../../../src/Assert/Images/—Pngtree—parrot_1001948.png'
const Parrot_info = () => {
    return (
        <>
            <section className="banner">

                <div className="row">

                    <div className="content">
                        <h3>Parrot Animal</h3>
                        <p>The parrot bird, known scientifically as: (Psittaciformes), is the smartest bird on the planet.
                            It is distinguished by its green, blue, and yellow color. This bird can imitate a group of
                            sounds and words.
                            This is what made it popular with everyone, as it can imitate about 800 words.</p>
                    </div>

                    <div className="image">
                        <img src={bunner} alt="" />
                    </div>

                </div>

            </section>
        </>
    )
}

export default Parrot_info
