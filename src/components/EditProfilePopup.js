import React, { useContext, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import UserContext from '../contexts/CurrentUserContext';

function EditProfilePopup({
  isOpen,
  onClose,
  onUpdateUser
}) {

  const currentUser = useContext(UserContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(
      {
        name,
        about: description,
      }
    );
  }

  useEffect(() => {
    if (currentUser instanceof Object) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser])


  return (
    <PopupWithForm
      name='profile' 
      title='Редактировать профиль' 
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClosePopup={onClose}>
        <input type="text" className="popup__input" value={name} onChange={handleNameChange} id="name-input" name="name" required placeholder="Имя" minLength="2" maxLength="40" />
        <span className="name-input-error popup__input-error"></span>
        <input type="text" className="popup__input" value={description} onChange={handleDescriptionChange} id="job-input" name="about" required placeholder="Род деятельности"  minLength="2" maxLength="200" />
        <span className="job-input-error popup__input-error popup__input-error_type_second"></span>
        <button type="submit" className="popup__btn">Сохранить</button>
    </PopupWithForm>
  )
}

export default EditProfilePopup;