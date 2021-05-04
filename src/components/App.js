import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState('');

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard('');
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
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
      }} handleCardClick={handleCardClick}
        />
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

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
