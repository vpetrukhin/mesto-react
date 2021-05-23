import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';


function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
}) {

  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value ,
    });
  }

  return (
    <PopupWithForm
      name="change"
      title="Обновить аватар"
      isOpen={isOpen}
      onClosePopup={onClose}
      onSubmit={handleSubmit}
    >
          <input type="url" className="popup__input popup__input_type_change" ref={inputRef} id="ava-input" name="link" placeholder="Ссылка на аватар" required />
          <span className="ava-input-error popup__input-error popup__input-error_type_second"></span>
          <button type="submit" className="popup__btn">Сохранить</button>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;