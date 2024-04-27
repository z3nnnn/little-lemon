import logo from '../logos/little lemon smol.jpg'
import { Link } from 'react-router-dom'
import { useRef } from 'react'


export default function  Header() {

    return (
      <header className="header">
          <ul>
              <li>
                <a href="#"><img src={logo} height="55" max-width="100%" alt="Little Lemon Logo"/></a>
            </li>
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#reserve">Reservations</a></li>
              <li><a href="#">Order Online</a></li>
              <li><a href="#">Login</a></li>
          </ul>
      </header>
    )
}




