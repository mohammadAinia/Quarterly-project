import './Header.css'
const Header = () => {
  return (
    <>
      <header className="header">

        <a href="#" className="logo"> <i className="fas fa-paw"></i> PetCare</a>

        <nav className="navbar">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="/Animal">Animal</a>
          <a href="#contact">Contact</a>
          <a href="/login">Login</a>
        </nav>

        <div className="icons">
          <div id="login-btn" className="fas fa-user"></div>
          <div id="menu-btn" className="fas fa-bars"></div>
          <img src=''/>
        </div>
      </header>
    </>
  )
}

export default Header
