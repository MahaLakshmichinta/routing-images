// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="img-wave"
      />
      <h1 className="heading-wave">Wave</h1>
    </div>
    <ul className="list-items-container">
      <li className="link-item">
        <Link to="/">Home</Link>
      </li>
      <li className="link-item">
        <Link to="/about">About</Link>
      </li>
      <li className="link-item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)
export default Header
