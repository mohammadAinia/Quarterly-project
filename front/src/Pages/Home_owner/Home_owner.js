import { useEffect, useState } from 'react'
import { Card, Bunner, Problems, Header, SectionHeader, Animal_info, Button, Add_proplem } from '../../Componets/index'
import './Home_owner.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import one from '../../Assert/Images/1.png'
import two from '../../Assert/Images/2.png'
import three from '../../Assert/Images/3.png'
import four from '../../Assert/Images/4.png'
import five from '../../Assert/Images/5.png'
import six from '../../Assert/Images/6.png'
import seven from '../../Assert/Images/7.png'
import eight from '../../Assert/Images/8.png'
import nine from '../../Assert/Images/9.png'
import rightt from '../../Assert/Images/right.png'
import left from '../../Assert/Images/left.png'
import cat_day from '../../Assert/Images/cat_day.jpg'
import adv2 from '../../Assert/Images/adv2.jpg'
import advstorePolygon_5 from '../../Assert/Images/advstorePolygon_5.png'
import advstorePolygon_4 from '../../Assert/Images/advstorePolygon_4.png'
import advstorePolygon_3 from '../../Assert/Images/advstorePolygon_3.png'
import advstoreVector_54 from '../../Assert/Images/advstoreVector_54.png'
import advstorePolygon_2 from '../../Assert/Images/advstorePolygon_2.png'
import advstoreVector_55 from '../../Assert/Images/advstoreVector_55.png'
import advstoreVector_52 from '../../Assert/Images/advstoreVector_52.png'
import advstorePolygon_1 from '../../Assert/Images/advstorePolygon_1.png'
import advstoreVector_53 from '../../Assert/Images/advstoreVector_53.png'
import advstorePolygon_8 from '../../Assert/Images/advstorePolygon_8.png'
import advstorePolygon_7 from '../../Assert/Images/advstorePolygon_7.png'
import advstorePolygon_6 from '../../Assert/Images/advstorePolygon_6.png'
import advstoreVector_59 from '../../Assert/Images/advstoreVector_59.png'
import advstoreVector_58 from '../../Assert/Images/advstoreVector_58.png'
import ADVSTORELine_5 from '../../Assert/Images/ADVSTORELine_5.png'
import advstoreLine_9 from '../../Assert/Images/advstoreLine_9.png'
import advstoreVector__52 from '../../Assert/Images/advstoreVector__52.png'
import advstoreePolygon_1 from '../../Assert/Images/advstoreePolygon_1.png'
import advstoreeVector_56 from '../../Assert/Images/advstoreeVector_56.png'
import advstoreeVector_57 from '../../Assert/Images/advstoreeVector_57.png'












import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faBell, faHouse, faMessage, faUserDoctor, faStethoscope } from '@fortawesome/free-solid-svg-icons'

const Home_owner = () => {
  const [name, setName] = useState('')
  const [Animall_info, setAnimal_info] = useState([])
  const [Problim_info, setProblim_info] = useState([])
  const [Advice, setAdvice] = useState([])
  const [Isnotefi, setIsnotefi] = useState('')

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



  const navigate = useNavigate()

  useEffect(() => {

    axios.get('http://localhost:3001/user/', { withCredentials: true })
      .then(res => {
        if (res.data.valid) {
          setName(res.data.username)
          setAnimal_info(res.data.result)
          setProblim_info(res.data.resultt)
          setAdvice(res.data.resulttt)
          setIsnotefi(res.data.resultttt)
        }
        else {
          navigate('/login')
        }
      })
      .catch(err => { console.log(err) })

  },
    [])

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
      <Header href1={"/Adopt"} a1={"Adopt"} href2={"/common_users"} a2={"FAQs"} href5={"/Add_Animal"} a5={<FontAwesomeIcon icon={faPlus} />} href6={"all_doc"} a6={<FontAwesomeIcon icon={faStethoscope} />} href3={"/Animal_infoo"} a3={"My Animals"} href4={"/All_problem"} a4={"Forum"} href7={"/chat"} a7={<FontAwesomeIcon icon={faMessage} />} href8={"/Notifications"} a8={"Notifications"} href9={"/profile"} a9={"profile"} href10={"/"} a10={<FontAwesomeIcon icon={faHouse} />} href11={"My_appointments"} a11={"My appointments"} log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>} />

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
          {Advice.map((user, i) => {
            return (
              <div key={i}>
                <Bunner
                  p={user.gen_tip}
                />
              </div>
            )
          })}

        </div>
      </div>



      {/* <div className="row">
          <div style={{ "margin-top": "170px", "margin-left": "260px" }} className="content">
            <h3 style={{ "fontSize": "30px" }}>{"Welcome   " + name}</h3>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='nav'>

              <h3 style={{ "margin-left": "10px", "fontSize": "28px" }}>     your advice</h3>

              {Advice.map((user, i) => {
                return (
                  <div style={{ "fontSize": "40px" }} key={i}>
                    <Bunner p1={user.one}
                      p2={user.gen_tip}
                    />
                  </div>
                )
              })}

            </div>
            <p style={{ "color": "black" }}>{Isnotefi}</p>
          </div>
          <div style={{ "padding-right": "60px" }} className="image">
          </div>
        </div> */}

      <div className="madicals">
        <div className="div">
          <div className="overlap">
            <div className="overlap-group">
              <img className="streamline-pet-paw" alt="Streamline pet paw" src={three} />
              <div className="frame">
                <div className="overlap-group-2">
                  <div className="ellipse" />
                  <div className="ellipse-2" />
                  <div className="ellipse-3" />
                  <div className="ellipse-4" />
                  <div className="ellipse-5" />
                  <div className="ellipse-6" />
                  <div className="ellipse-7" />
                  <img className="vector" alt="Vector" src={one} />
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-2">
                  <div className="ellipse-8" />
                  <div className="ellipse-9" />
                  <img className="img" alt="Ellipse" src={eight} />
                </div>
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-2">
                  <div className="ellipse-8" />
                  <div className="ellipse-9" />
                  <img className="img" alt="Ellipse" src={six} />
                </div>
              </div>
              <img className="noto-cat-face" alt="Noto cat face" src={four} />
            </div>
            <div className="div-wrapper">
              <div className="overlap-2">
                <div className="ellipse-8" />
                <div className="ellipse-9" />
                <img className="img" alt="Ellipse" src={nine} />
              </div>
            </div>
            <div className="frame-2">
              <div className="overlap-2">
                <div className="ellipse-8" />
                <div className="ellipse-9" />
                <img className="img" alt="Ellipse" src={seven} />
              </div>
            </div>
          </div>
          <img className="streamline-pet-paw-2" alt="Streamline pet paw" src={two} />
          <img className="emojione-bird" alt="Emojione bird" src={five} />
          <div className="text-wrapper">Veterinary clinics</div>
          <p className="p">Book an appointment for your animal</p>
          <div className="frame-3">
            <a className="text-wrapper-2" href='clinic'>Booking</a>
            {/* <div className="text-wrapper-2">Booking</div> */}
          </div>
        </div>
      </div>

      {/* <section className="animal" id="animal" >
        <SectionHeader>Your Animals</SectionHeader>
        <div className="">
          <div className="heading">
          </div>
        </div>
        <div className="box-container">

          {Animall_info.map((user, i) => {
            return (
              <div key={i}>
                <Card image={'http://localhost:3001/uploads/' + user.urlImage} name={user.name} href_link={`Animal_info_id/${user.id}`} link={"see details"} id={user.id} />
              </div>
            )
          })}
        </div>
      </section> */}


      <div class="adv-store">
        <div class="div">
          <div class="overlap">
            <div class="overlap-group">
              <div class="ellipse"></div>
              <div class="ellipse-2"></div>
              <div class="ellipse-3"></div>
              <img class="vector" src={advstoreVector_54} />
              <img class="polygon" src={advstorePolygon_2} />
              <div class="ellipse-4"></div>
              <div class="ellipse-5"></div>
              <img class="img" src={advstoreVector_55} />
              <img class="vector-2" src={advstoreVector_52} />
              <img class="polygon-2" src={advstorePolygon_1} />
              <div class="ellipse-6"></div>
              <div class="ellipse-7"></div>
              <img class="vector-3" src={advstoreVector_55} />
              <img class="vector-4" src={advstoreVector__52} />
              <img class="polygon-3" src={advstoreePolygon_1} />
              <div class="ellipse-8"></div>
              <div class="ellipse-9"></div>
              <img class="vector-5" src={advstoreVector_53} />
              <div class="ellipse-10"></div>
              <div class="ellipse-11"></div>
              <div class="ellipse-12"></div>
              <div class="ellipse-13"></div>
              <div class="ellipse-14"></div>
              <div class="ellipse-15"></div>
              <div class="ellipse-16"></div>
              <div class="ellipse-17"></div>
              <div class="ellipse-18"></div>
              <div class="ellipse-19"></div>
              <div class="ellipse-20"></div>
              <div class="ellipse-21"></div>
              <div class="ellipse-22"></div>
              <div class="ellipse-23"></div>
              <div class="ellipse-24"></div>
              <img class="line" src={ADVSTORELine_5} />
              <img class="line-2" src={ADVSTORELine_5} />
              <img class="line-3" src={advstoreLine_9} />
              <img class="line-4" src={advstoreLine_9} />
              {/* <img class="frame" src={advstoreeVector_59} /> */}
              <div class="rectangle"></div>
              <img class="vector-6" src={advstoreVector_59} />
              <img class="vector-7" src={advstoreVector_58} />
              <div class="rectangle-2"></div>
              <div class="rectangle-3"></div>
              <div class="rectangle-4"></div>
              <div class="rectangle-5"></div>
              <div class="rectangle-6"></div>
              <div class="ellipse-25"></div>
              <div class="ellipse-26"></div>
              <div class="ellipse-27"></div>
              <div class="ellipse-28"></div>
{/* 
              <div class="rectanglee"></div>
              <img class="vector-66" src={advstoreVector_59} />
              <img class="vector-77" src={advstoreVector_58} />
              <div class="rectangle-22"></div>
              <div class="rectangle-33"></div>
              <div class="rectangle-44"></div>
              <div class="rectangle-55"></div>
              <div class="rectangle-66"></div>
              <div class="ellipse-255"></div>
              <div class="ellipse-266"></div>
              <div class="ellipse-277"></div>
              <div class="ellipse-288"></div> */}
            </div>
            <img class="polygon-4" src={advstorePolygon_3} />
            <img class="polygon-5" src={advstorePolygon_4} />
            <img class="polygon-6" src={advstorePolygon_5} />
          </div>
          <div class="overlap-2">
            <div class="ellipse-29"></div>
            <div class="ellipse-30"></div>
            <div class="ellipse-31"></div>
          </div>
          <div class="overlap-3">
            <div class="ellipse-32"></div>
            <div class="ellipse-33"></div>
            <div class="ellipse-34"></div>
          </div>
          <div class="overlap-4">
            <div class="ellipse-35"></div>
            <div class="ellipse-36"></div>
            <div class="ellipse-37"></div>
            <div class="ellipse-38"></div>
          </div>
          <div class="ellipse-39"></div>
          <div class="ellipse-40"></div>
          <div class="ellipse-41"></div>
          <div class="ellipse-42"></div>
          <div class="ellipse-43"></div>
          <div class="ellipse-44"></div>
          <div class="ellipse-45"></div>
          <div class="ellipse-46"></div>
          <div class="ellipse-47"></div>
          <div class="ellipse-48"></div>
          <div class="ellipse-49"></div>
          <div class="ellipse-50"></div>
          <div class="ellipse-51"></div>
          <div class="ellipse-52"></div>
          <div class="ellipse-53"></div>
          <div class="overlap-5">
            <img class="line-5" src={ADVSTORELine_5} /> <img class="line-6" src={advstoreLine_9} />
          </div>
          <div class="overlap-6">
            <img class="line-5" src={ADVSTORELine_5} /> <img class="line-6" src={advstoreLine_9} />
          </div>
          <img class="polygon-7" src={advstorePolygon_6} />
          <img class="polygon-8" src={advstorePolygon_7} />
          <img class="polygon-9" src={advstorePolygon_8} />
          <div class="overlap-7">
            <img class="vector-8" src={advstoreeVector_56} /> <img class="vector-9" src={advstoreeVector_57}/>
          </div>
          <div class="shopping-online">Shopping<br />Online</div>
          <div class="div-wrapper"><a href='store' class="text-wrapper">Shop now</a></div>
        </div>
      </div>



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

      <Add_proplem href={"my_problem"} />

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

export default Home_owner
