import React from 'react'
import './styles.scss'

export const WishTypeCard = ({imgSrc, altText, title, subtitle}) => (
  <div className="wishCard containerVertical">
    <img src={imgSrc} alt={altText} className="wish-card-image"/>
    <span className="card-title">{title}</span>
    <span className="card-subtitle">{subtitle}</span>
  </div>
)
