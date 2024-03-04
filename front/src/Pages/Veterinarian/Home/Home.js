import './Home.css'
import { useEffect, useState } from 'react'
import { Card, Bunner, Problems, Header, SectionHeader, Animal_info, Button, Add_proplem } from '../../../Componets/index'
import axios from 'axios'
import rightt from '../../../Assert/Images/right.png'
import one from '../../../Assert/Images/1.png'
import two from '../../../Assert/Images/2.png'
import three from '../../../Assert/Images/3.png'
import four from '../../../Assert/Images/4.png'
import five from '../../../Assert/Images/5.png'
import six from '../../../Assert/Images/6.png'
import seven from '../../../Assert/Images/7.png'
import eight from '../../../Assert/Images/8.png'
import nine from '../../../Assert/Images/9.png'
import { useNavigate } from 'react-router-dom'
import left from '../../../Assert/Images/left.png'
import adv2 from '../../../Assert/Images/adv2.jpg'
import cat_day from '../../../Assert/Images/cat_day.jpg'


import animal_image from '../../../Assert/Images/—Pngtree—parrot_1001948.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNotesMedical, faRightFromBracket, faBell, faHouse, faMessage, faLink, faSyringe } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [name, setName] = useState('')
    const [Animall_info, setAnimal_info] = useState([])
    const [Problim_info, setProblim_info] = useState([])
    const [Events, setEvent] = useState([])
    const [Isnotefi, setIsnotefi] = useState('')


    const navigate = useNavigate()

    useEffect(() => {

        axios.get('http://localhost:3001/vet/home_vet', { withCredentials: true })
            .then(res => {
                if (res.data.valid) {
                    setName(res.data.username)
                    setAnimal_info(res.data.result)
                    setProblim_info(res.data.resultt)
                    setEvent(res.data.resulttt)
                    setIsnotefi(res.data.resultttt)
                }
                else {
                    navigate('/login')
                }
            })
            .catch(err => { console.log(err) })

    },
        [])

    const ads = [one, two, three, four, five, six, seven, eight, nine];

    const [backgroundImages, setBackgroundImages] = useState([
        (cat_day),
        (adv2),
        // Add more background images as needed
    ]);

    const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentBackgroundIndex(prevIndex =>
                prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    const handleLeftClick = () => {
        setCurrentBackgroundIndex(prevIndex =>
            prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
        );
    };

    const handleRightClick = () => {
        setCurrentBackgroundIndex(prevIndex =>
            prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
    };
    return (
        <>

            <Header href1={"/Adopt_vet"} a1={"Adopt"} href2={"/common_vete"} a2={"FAQs"} href5={"/requst"} a5={<FontAwesomeIcon icon={faLink} />} href6={"all_advice"} a6={<FontAwesomeIcon icon={faNotesMedical} />} href7={"all_vaccine"} a7={<FontAwesomeIcon icon={faSyringe} />} href3={"all_follow"} a3={"All Follow"} href4={"/Forum_vet"} a4={"Forum"} href8={"/chat_vet"} a8={<FontAwesomeIcon icon={faMessage} />} href9={"/Notifications_vet"} a9={<FontAwesomeIcon icon={faBell} />} href10={"profile_vet"} a10={<div id="login-btn" className="fas fa-user"></div>} href11={"My_appointments_vet"} a11={"My appointments"} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />



            <div class="framee2">
                <div class="overlap-group-wrapperr2">
                    <div class="overlap-groupp2" style={{ backgroundImage: `url(${backgroundImages[currentBackgroundIndex]})` }}>
                        <img class="imgg2" src={left} onClick={handleLeftClick} />
                        <img class="imgg-22" src={rightt} onClick={handleRightClick} />
                    </div>
                </div>
            </div>



            <div class="advice">
                <div class="div">
                    {/* <div class="advice_box">
            <img class="advice_vector" src={advice7} />
          </div>
          <div class="overlap">
            <div class="rectangle">
              <p class="text-wrapper">It is recommended to take your animal and walk it for 10 minutes </p>
            </div>
            <img class="vector" src={advice1} />
          </div> */}
                    {Events.map((user, i) => {
                        return (
                            <div key={i}>
                                <Bunner
                                    p={user.disc}
                                />
                            </div>
                        )
                    })}

                </div>
            </div>


            {/* <section className="bbanner" style={{ "margin-top": "2000px" }}>
                <div className="row">
                    <div style={{ "margin-top": "170px", "margin-left": "260px" }} className="content">
                        <h3>{"Welcome   " + name}</h3>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className='nav'>

                            <h3 style={{ "margin-left": "10px" }}>     New events</h3>

                            {Events.map((user, i) => {
                                return (
                                    <div key={i}>
                                        <Bunner p1={user.one}
                                            p2={user.disc}
                                        />
                                    </div>
                                )
                            })}

                        </div>
                        <p style={{ "color": "red" }}>{Isnotefi}</p>
                    </div>
                    <div className="image">
                    </div>
                </div>
            </section> */}


            <section className="animal" id="animal">
                <SectionHeader>Your Animals</SectionHeader>
                <div className="box-container">
                    {Animall_info.map((user, i) => (
                        <Card
                            key={i}
                            image={`http://localhost:3001/uploads/${user.urlImage}`}
                            name={user.name}
                            href_link={`Animal_info_id/${user.id}`}
                            link={"see details"}
                            id={user.id}
                        />
                    ))}
                </div>
            </section>

            <Add_proplem href={"my_problem_vet"} />

            {/* <section className="pricing" id="pricing">
                <h2 className="heading">Forum</h2>

                <div className="box-container" >
                    {Problim_info.map((user, i) => {
                        return (
                            <div key={i}>
                                <Problems name={user.title} text={user.disc} type={user.animal_type} hreflink={`Problem_id/${user.id}`} id1={user.id} />
                            </div>
                        )
                    })}
                </div>
            </section> */}
        </>
    )
}

export default Home
