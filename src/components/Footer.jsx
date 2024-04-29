import bread from '../images/four bread.jpg'
import { Link }from 'react-router-dom'

function Footer() {
    return(
        <footer className="footer">
            <img src={bread}/>
            <section className="doormat">
                <h2>Doormat<br/>Navigation</h2>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/">
                        <li>About</li>
                    </Link>
                    <Link to="/">
                        <li>Menu</li>
                    </Link>
                    <Link to="/reservation">
                        <li>Reservations</li>
                    </Link>
                    <Link to="/">
                        <li>Order Online</li>
                    </Link>
                    <Link to="/">
                        <li>Login</li>
                    </Link>
                </ul>
            </section>
            <section className="contact">
                <h2>Contact<br/><br/></h2>
                <ul>
                    <li>
                        1920 Auburn Dr.
                    </li>
                    <li>
                        (555) 219-3901
                    </li>
                    <li>
                        greg@littlelemon.com
                    </li>
                </ul>

            </section>
            <section className="social-media">
                <h2>Social Media<br/><br/></h2>
                <ul>
                    <li>
                        Facebook
                    </li>
                    <li>
                        Twitter
                    </li>
                    <li>
                        Instagram
                    </li>
                    <li>
                        Snapchat
                    </li>
                </ul>
            </section>

        </footer>
    )
}

export default Footer;