import React from 'react'
import pasta from '../images/pasta.jpg'

function Reserve() {
  return (
    <div className="reserve">
        <section className="description">
            <h2> Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean Restaurant, focused on the traditional recipes served with a modern twist </p>
            <button>Reserve a Table</button>
        </section>
        <section className="reserveimg">
             <img src={pasta} alt="Picture of table"/>
        </section>

    </div>
  )
}

export default Reserve