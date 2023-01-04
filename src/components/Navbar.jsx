import {Link} from 'react-router-dom'
import logo from '../shared/logo.png'
function Navbar() {
  return (
    <nav className="navbar bg-danger">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="" width="100" height="50"/>
      </Link>
      <div className="float-end location"> <i className="fa-solid fa-location-pin"></i> Alirajpur</div>
    </div>
  </nav>
  )
}

export default Navbar