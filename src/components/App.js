import React, { useEffect, useState } from 'react';
import api from '../utils/Api';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import UserContext from '../context/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';


function App() {

  // Стейт-переменные
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);


  // Вспомогательные переменные
  let imagePopup = '';
  let user;

  if (currentUser) {
    user = currentUser;
  }

  useEffect(() => {
    api.getInfoUser()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(`Ошибка ${err}`))
  }, [])

  useEffect(() => {
    api.getCardInfo()
      .then(res => {
        setCards(res);
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

  const handleUpdateAvatar = ({ avatar }) => {
    api.updateAvatar(avatar)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
  }

  const handleCardLike = (card) => {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === user._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  const handleCardDelete = () => {

  }

  selectedCard ? imagePopup=<ImagePopup card={selectedCard} onClose={closeAllPopups}/> : imagePopup='';
  
  return (
    <div className="page">
      <Header />
      <UserContext.Provider value={currentUser}>
        <Main 
          onEditProfile={() => {setIsEditProfilePopupOpen(true);}}
          onAddPlace={() => {setIsAddPlacePopupOpen(true);}}
          onEditAvatar={() => {setIsEditAvatarPopupOpen(true);}}
          handleCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
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
  
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
    
        {imagePopup}
      </UserContext.Provider>
    </div>
  );
}

export default App;
