import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className = "elements__element element" >
      <button type="button" className="element__remove-btn"></button>
      <img className="element__image" onClick={handleClick} src={props.url} alt={props.title} />
      <div className="element__footer">
        <h2 className="element__title">{props.title}</h2>
        <div className="element__like-wrapper">
          <button type="button" className="element__like-btn"></button>
          <span className="element__like-count">{props.likesCount}</span>
        </div>
      </div>
    </article>
  )
}

export default Card;