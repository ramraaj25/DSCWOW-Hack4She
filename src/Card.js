import React from 'react'
import './Card.css'

const Card = ({ title, description, imageSrc }) => {
    const bgStyle = {
        backgroundImage: `url(${imageSrc})`
    }
    return (
        <div className='card'>
            <div className='card__imgContainer'>
                <img className='card__image' src={imageSrc} />
            </div>
            <div className='card__info'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card
