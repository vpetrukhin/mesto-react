import React from 'react';

function Card({ title, url, likesCount }) {
  return (
    <article className = "elements__element element" >
      <button type="button" className="element__remove-btn"></button>
      <img className="element__image" src={url} alt={title} />
      <div className="element__footer">
        <h2 className="element__title">{title}</h2>
        <div className="element__like-wrapper">
          <button type="button" className="element__like-btn"></button>
          <span className="element__like-count">{likesCount}</span>
        </div>
      </div>
    </article>
  )
}

export default Card;