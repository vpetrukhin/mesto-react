import React from 'react';

function ImagePopup(props) {

  let openPopupSelector;

  props.card ? openPopupSelector='popup_opened' : openPopupSelector='';

  return (
    <div className={`popup image-popup ${openPopupSelector}`}>
      <div className="image-popup__container">
        <button className="image-popup__close-btn popup__btn-close" onClick={props.onClose} type="button"></button>
        <img className="image-popup__img" src={props.card.url} alt={props.card.title} />
        <h3 className="image-popup__title">{props.card.title}</h3>
      </div>
    </div>
  )
}

export default ImagePopup;