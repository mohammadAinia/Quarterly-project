import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faBell } from '@fortawesome/free-solid-svg-icons'
const Header = (props) => {
  return (
    <>
      <header className="header">

        <a href="#" className="logo"> <i className="fas fa-paw"></i> PetCare</a>

        <nav className="navbar">
          <a href={props.href1}>{props.a1}</a>
          <a href={props.href2}>{props.a2}</a>
          <a href={props.href3}>{props.a3}</a>
          <a href={props.href4}>{props.a4}</a>
          <a style={{"fontSize":"20px"}} href={props.href5}>{props.a5}</a>
          <a style={{"fontSize":"18.5px"}} href={props.href6}>{props.a6}</a>
          <a style={{"fontSize":"20px"}} href={props.href7}>{props.a7}</a>
          <a style={{"fontSize":"20px"}} href={props.href8}>{props.a8}</a>
          <a style={{"fontSize":"20px"}} href={props.href9}>{props.a9}</a>
          <a style={{"fontSize":"20px"}} href={props.href10}>{props.a10}</a>

        </nav>

        <div className="icons">
          <a href={props.log}>{props.log2}</a>
        </div>
      </header>
    </>
  )
}

export default Header
