import './header.css'
import logo from './../../assets/logo.png';




const Header = () => {

  return (
    <header>
      <img src={logo} />
      <p>Astronomy Picture <br/> of the Day</p>
    </header>
  )
}

export default Header;
