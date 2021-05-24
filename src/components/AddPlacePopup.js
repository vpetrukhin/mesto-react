import React, { useState } from "react";
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ 
  isOpen,
  onClose,
  onAddPlace,
}) {
  
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddPlace(
      {
        name: text,
        link: url,
      }
    )
  }

  return (
    <PopupWithForm
      name="new-item"
      title="Новое место"
      isOpen={isOpen}
      onClosePopup={onClose}
      onSubmit={handleSubmit}
    >
      <input type="text" className="popup__input popup__input_type_new-item" value={text} onChange={handleTextChange} id="newName-input" name="name" placeholder="Название" minLength="2" maxLength="30" required />
      <span className="newName-input-error popup__input-error"></span>
      <input type="url" className="popup__input popup__input_type_new-item" value={url} onChange={handleUrlChange} id="image-input" name="link" placeholder="Ссылка на картинку" required />
      <span className="image-input-error popup__input-error popup__input-error_type_second"></span>
      <button type="submit" className="popup__btn">Создать</button>
    </PopupWithForm>
  )
}

export default AddPlacePopup;