import React from 'react';

function ImagePopup(props) {
  return (
    <div className="popup image-popup">
      <div className="image-popup__container">
        <button type="button" className="image-popup__close-btn popup__btn-close"></button>
        <img className="image-popup__img" src="#" alt="#" />
        <h3 className="image-popup__title"></h3>
      </div>
    </div>
  )
}

export default ImagePopup;