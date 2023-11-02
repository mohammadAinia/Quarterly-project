import { Animal_info, Header } from '../../../Componets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNotesMedical, faRightFromBracket, faBell, faHouse, faMessage, faLink, faSyringe } from '@fortawesome/free-solid-svg-icons'

const Dog_info = () => {
  return (
    <>

      <Header href1={"/Animal"} a1={"About Pets"} href3={"#"} a3={"FAQs"}  log={'/#'} log2={<div id="login-btn"><FontAwesomeIcon icon={faRightFromBracket} /></div>}/>
      <Animal_info header={"Dogs"} image={""} p={"A mammal from the canidae family. Dajan is an animal and became a human 14000 to 150000 years ago. This animal is usually described as loyal, and is called “man’s best friend” because of its great ability to remember its owner, even after a long break from him. There are many breeds of different natures and tasks, including: the hunting dog, the field dog, the shepherd’s dog, the guard dog, the police dog, the gray hound, the dog accompanying the blind, and the sled dog. Which is used to pull carts on ice to this day."} />

    </>
  )
}

export default Dog_info
