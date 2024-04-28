import bread from '../images/four bread.jpg'

function Footer() {
    return(
        <footer className="footer">
            <img src={bread}/>
            <section className="doormat">
                <h2>Doormat<br/>Navigation</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reserve">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
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