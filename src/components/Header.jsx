import logo from '../logos/little lemon smol.jpg'


export default function  Header() {
    return (
      <header className="header">
          <ul>
              <li><a href=""><img src={logo} height="55" max-width="100%" alt="Little Lemon Logo"/></a></li>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Menu</a></li>
              <li><a href="">Reservations</a></li>
              <li><a href="">Order Online</a></li>
              <li><a href="">Login</a></li>
          </ul>
      </header>
    )
}




