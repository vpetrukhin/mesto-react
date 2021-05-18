import React from 'react';
import UserContext from '../context/CurrentUserContext';

function Card(props) {

  const currentUser = React.useContext(UserContext);

  let user;

  if (currentUser) {
    user = currentUser;
  }

  const isOwn = props.card.owner._id === user._id;
  const cardDeleteButtonClassName = (
    `element_remove-btn ${isOwn ? 'element_remove-btn_visible' : 'element_remove-btn_hidden'}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  return (
    <article className = "elements__element element" >
      <button type="button" className={cardDeleteButtonClassName}></button>
      <img className="element__image" onClick={handleClick} src={props.card.link} alt={props.card.title} />
      <div className="element__footer">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-wrapper">
          <button type="button" className="element__like-btn" onClick={handleLikeClick}></button>
          <span className="element__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </article>
  )
}

export default Card;