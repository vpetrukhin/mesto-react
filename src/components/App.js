import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={() => {
        setIsEditProfilePopupOpen(true);
      }} onAddPlace={() => {
        setIsAddPlacePopupOpen(true);
      }} onEditAvatar={() => {
        setIsEditAvatarPopupOpen(true);
      }} />
      <Footer />

      <PopupWithForm name='profile' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClosePopup={closeAllPopups} >
        <input type="text" className="popup__input" id="name-input" name="name" required placeholder="Имя" minLength="2" maxLength="40" />
        <span className="name-input-error popup__input-error"></span>
        <input type="text" className="popup__input" id="job-input" name="about" required placeholder="Род деятельности"   minLength="2" maxLength="200" />
        <span className="job-input-error popup__input-error popup__input-error_type_second"></span>
        <button type="submit" className="popup__btn" disabled={true}>Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="new-item" title="Новое место" isOpen={isAddPlacePopupOpen} onClosePopup={closeAllPopups} >
        <input type = "text" className="popup__input popup__input_type_new-item" id="newName-input" name="name" placeholder="Название" minLength="2" maxLength="30" required />
        <span className="newName-input-error popup__input-error"></span>
        <input type = "url" className="popup__input popup__input_type_new-item" id="image-input" name="link" placeholder="Ссылка на картинку" required />
        <span className="image-input-error popup__input-error popup__input-error_type_second"></span>
        <button type="submit" className="popup__btn" disabled={true}>Создать</button>
      </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверенны?">
        <button type="button" className="popup__btn">Да</button>
      </PopupWithForm>

      <PopupWithForm name="change" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClosePopup={closeAllPopups}>
        <input type="url" className="popup__input popup__input_type_change" id="ava-input" name="link" placeholder="Ссылка на аватар" required />
        <span className = "ava-input-error popup__input-error popup__input-error_type_second"></span>
        <button type="submit" className="popup__btn" disabled={true}>Сохранить</button>
      </PopupWithForm>

      <template id="element">
        <article className="elements__element element">
          <button type="button" className="element__remove-btn"></button>
          <img className="element__image" src="#" alt="#" />
          <div className="element__footer">
            <h2 className="element__title"></h2>
            <div className="element__like-wrapper">
              <button type="button" className="element__like-btn"></button>
              <span className="element__like-count">0</span>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
