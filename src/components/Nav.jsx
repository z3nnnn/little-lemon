import React from 'react';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../logos/little lemon smol.jpg'



export default function Nav() {
  return (
    <header className="header">
      <ul>
        <li>
          <Link to="/">
            <img src={logo} height="55" max-width="100%" alt="Little Lemon Logo" />
          </Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <NavLink to="/reservation">Reservations</NavLink>
        </li>
        <li>
          <Link to="/">Order Online</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </header>
  );
}




