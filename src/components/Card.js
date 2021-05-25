import React from 'react';
import UserContext from '../contexts/CurrentUserContext';

function Card({ 
  card,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {

  const currentUser = React.useContext(UserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `element__remove-btn ${isOwn ? 'element_remove-btn_visible' : 'element_remove-btn_hidden'}`
  );

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `
    element__like-btn ${isLiked ? 'element__like-btn_active' : ''}
  `;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <article className = "elements__element element" >
      <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
      <img className="element__image" onClick={handleClick} src={card.link} alt={card.title} />
      <div className="element__footer">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-wrapper">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <span className="element__like-count">{card.likes.length}</span>
        </div>
      </div>
    </article>
  )
}

export default Card;