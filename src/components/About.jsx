import React from 'react'
import restaurant from '../images/restaurant.jpeg'


function About() {
    return (
        <section className="about">
            <article className="about-descr">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    Experience the taste of Italy at our charming restaurant.
                    Indulge in authentic flavors crafted from fresh ingredients. From classic pasta dishes to savory pizzas, delight your palate with every bite. Buon appetito!
                </p>
            </article>
            <img src={restaurant} alt="History"/>

        </section>
    )
}

export default About;
