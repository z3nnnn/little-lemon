import React from 'react'
import FoodCard from './FoodCard'
import saladImg from '../images/salad.jpg'
import bruschettaImg from '../images/bruschetta.jpg'
import dessertImg from '../images/lemon_dessert.jpeg'

export default function Menu() {
  return (
    <div className="menu">
      <section className="menu-descr">
         <h2>This Week's Specials</h2>
         <button>Online Menu</button>
      </section>
     <section className="menu-cards">
        <FoodCard
          imgSrc={saladImg}
          imgAlt="Greek Salad"
          cardTitle="Greek Salad"
          cardPrice="$12.99"
          cardDescr="Fresh Greek salad: crisp lettuce, juicy tomatoes, cucumbers, olives, feta cheese, dressed in zesty vinaigrette."
          />
        <FoodCard
          imgSrc={bruschettaImg}
          imgAlt="Buschetta"
          cardTitle="Buschetta"
          cardPrice="$5.99"
          cardDescr="
          Savor bruschetta: crispy bread topped with vibrant tomatoes, garlic, basil, olive oil, and balsamic glaze."
          />

        <FoodCard
          imgSrc={dessertImg}
          imgAlt="Lemon Delight"
          cardTitle="Lemon Dessert"
          cardPrice="$5.00"
          cardDescr="Indulge in Italian lemon dessert: zesty lemon curd layered between delicate sponge cake, finished with mascarpone."
          />
     </section>
    </div>

  )
}
