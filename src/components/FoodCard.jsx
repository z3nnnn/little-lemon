import React from 'react'

export default function FoodCard({
    imgSrc,
    imgAlt,
    cardTitle,
    cardPrice,
    cardDescr,
}) {
  return (
    <div className="card-container">
        <img src={imgSrc} alt={imgAlt} className="card-img" />
        <section className="card-top">
          <h3 className="card-title">{cardTitle}</h3>
          <h3 className="card-price">{cardPrice}</h3>
        </section>
        <p className="card-descr">{cardDescr}</p>
        <p className="delivery">Order Delivery</p>
    </div>
  )
}
