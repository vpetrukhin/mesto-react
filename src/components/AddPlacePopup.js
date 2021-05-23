import React from "react";
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ 
  isOpen,
  onClose,
}) {
  

  return (
    <PopupWithForm name="new-item" title="Новое место" isOpen={isOpen} onClosePopup={onClose} >
      <input type = "text" className="popup__input popup__input_type_new-item" id="newName-input" name="name" placeholder="Название" minLength="2" maxLength="30" required />
      <span className="newName-input-error popup__input-error"></span>
      <input type = "url" className="popup__input popup__input_type_new-item" id="image-input" name="link" placeholder="Ссылка на картинку" required />
      <span className="image-input-error popup__input-error popup__input-error_type_second"></span>
      <button type="submit" className="popup__btn" disabled={true}>Создать</button>
    </PopupWithForm>
  )
}

export default AddPlacePopup;