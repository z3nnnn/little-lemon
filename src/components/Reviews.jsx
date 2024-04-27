import React from 'react'
import czech from '../logos/czech-republic.png'
import USA from '../logos/united-states.png'
import uk from '../logos/united-kingdom.png'
import kr from '../logos/south-korea.png'

export default function Reviews() {
  return (
    <div className="review">
      <section className="review-heading">
        <h2>Testimonials</h2>
      </section>
      <section className="review-cards">
        <article className="review-card">
          <h3>4.4/5</h3>
          <section className="country">
            <img src={czech} alt="Czech Republic"/>
            <p>Alexj</p>
          </section>
          <h4>"Great Taste"</h4>
        </article>
        <article className="review-card">
          <h3>4.5/5</h3>
          <section className="country">
            <img src={USA} alt="USA"/>
            <p>Bob</p>
          </section>
          <h4>"My Favorite"</h4>
        </article>
        <article className="review-card">
          <h3>4.6/5</h3>
          <section className="country">
            <img src={uk} alt="United Kingdom"/>
            <p>Henry</p>
          </section>
          <h4>"Heavenly"</h4>
        </article>
        <article className="review-card">
          <h3>4.1/5</h3>
          <section className="country">
            <img src={kr} alt="Korea"/>
            <p>Jung</p>
          </section>
          <h4>"Delicious"</h4>
        </article>
      </section>

    </div>
  )
}
