import './Header.css'

const Header = (props) => {
  return (
    <>
      <header className="header">

        <a href="/" className="logo"> <i className="fas fa-paw"></i> PetCare</a>

        <nav className="navbar">
          <a href={props.href1}>{props.a1}</a>
          <a href={props.href2}>{props.a2}</a>
          <a href={props.href3}>{props.a3}</a>
          <a href={props.href4}>{props.a4}</a>
          <a href={props.href5}>{props.a5}</a>
          <a href={props.href6}>{props.a6}</a>
          <a href={props.href7}>{props.a7}</a>

        </nav>

        <div className="icons">
        <a href='/login'><div id="login-btn" className="fas fa-user"></div></a>
          <div id="menu-btn" className="fas fa-bars"></div>
          <img src=''/>
        </div>
      </header>
    </>
  )
}

export default Header
