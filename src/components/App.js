import React, { useEffect, useState } from 'react';
import api from '../utils/Api';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import UserContext from '../context/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';


function App() {

  // Стейт-переменные
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  // Вспомогательные переменные
  let imagePopup = '';

  useEffect(() => {
    api.getInfoUser()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(`Ошибка ${err}`))
  }, [])


  // Функции
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const handleUpdateUser = ({ name, about }) => {
    api.changeUserInfo({ name, about })
      .then((userData) => { 
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка ${err}`))
  }

  selectedCard ? imagePopup=<ImagePopup card={selectedCard} onClose={closeAllPopups}/> : imagePopup='';
  
  return (
    <div className="page">
      <Header />
      <UserContext.Provider value={currentUser}>
        <Main onEditProfile={() => {
          setIsEditProfilePopupOpen(true);
        }} onAddPlace={() => {
          setIsAddPlacePopupOpen(true);
        }} onEditAvatar={() => {
          setIsEditAvatarPopupOpen(true);
        }} handleCardClick={handleCardClick}
          />
        <Footer />
  
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
  
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
    
        {imagePopup}
      </UserContext.Provider>
    </div>
  );
}

export default App;
