import {Link} from 'react-router-dom'

function BottomBar() {
  return (
    <nav className="bottom-nav shadow-lg" >
    <ul className="nav-links">
        <li> <Link to="/"><i className="fa-solid fa-house"></i></Link> <p>Home</p> </li>
        <li> <Link to="/categories"><i className="fa-solid fa-border-all"></i></Link> <p>Categories</p> </li>
        <li> <Link to="/deals"><i className="fa-solid fa-percent"></i></Link> <p>Deals</p> </li>
        <li> <Link to="/contact"><i className="fa-solid fa-headset"></i></Link> <p>Contact</p> </li>
    </ul>
  </nav>
  )
}

export default BottomBar