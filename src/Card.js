import React from 'react'
import { useHistory } from 'react-router-dom'
import './Card.css'

const Card = ({ title, description, imageSrc }) => {
    const bgStyle = {
        backgroundImage: `url(${imageSrc})`
    }
    const history = useHistory();
    const handleClick = () => {
        history.push('/blog')
    }
    return (
        <div className='card' onClick={handleClick}>
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
