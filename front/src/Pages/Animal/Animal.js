import './Animal.css'
import { Button, Card, Header, SectionHeader } from '../../Componets/index'
import Animal_data from '../../Data/Animal_data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faRightToBracket, faPaw, faStoreSlash, faCoins, faFaceSmileWink, faBolt,
    faClock, faArrowsRotate, faComments, faHandHoldingHeart, faHouseCircleCheck,
    faUsers, faArrowRightArrowLeft, faPaperPlane
} from '@fortawesome/free-solid-svg-icons'
const Animal = () => {
    const cards = Animal_data.map(card => {
        return <Card image={card.image} name={card.name} href={card.href} a={"See details"} />
    })

    return (

        <>

            <Header href1={"/Animal"} a1={"About Pets"} href3={"FAQs"} a3={"FAQs"} log={'/Loginn'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightToBracket} /></div>} />

            <section className="animal" id="animal" >
                <SectionHeader>Most Pobuler</SectionHeader>
                <div className="">
                    {/* <Button href="/Search" value="Search"/> */}
                </div>
                <div className="box-container">
                    {cards}
                </div>
            </section>
        </>
    )
}

export default Animal
