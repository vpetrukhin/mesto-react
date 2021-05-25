import React from 'react';

function ImagePopup({
  card,
  onClose
}) {
  const popupClassNames = `popup image-popup ${card ? 'popup_opened' : ''}` 

  return (
    <div className={popupClassNames}>
      <div className="image-popup__container">
        <button className="image-popup__close-btn popup__btn-close" onClick={onClose} type="button"></button>
        <img className="image-popup__img" src={card.link} alt={card.name} />
        <h3 className="image-popup__title">{card.name}</h3>
      </div>
    </div>
  )
}

export default ImagePopup;