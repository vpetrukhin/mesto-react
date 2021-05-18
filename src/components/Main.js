import React, { useEffect, useState } from 'react';
import api from '../utils/Api';
import Card from './Card';
import  UserContext from '../context/CurrentUserContext';


function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  handleCardClick
}) {

  const currentUser = React.useContext(UserContext);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getCardInfo()
      .then(res => {
        setCards(res);
      })
      .catch((err) => console.log(`Ошибка ${err}`))
  }, [])

  let user;

  if (currentUser) {
    user = currentUser;
  }

  // Функции
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === user._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  

  return (
    <main className="main">
      <section className="profile">
        <div className = "profile__img-wrapper" onClick={onEditAvatar}>
          <img src={`${user.avatar}`} alt="Аватар профиля" className="profile__img" />
        </div> 
        <div className="profile__info">
          <h1 className="profile__name">{user.name}</h1>
          <p className="profile__job">{user.about}</p>
          <button className="profile__edit-btn" onClick={onEditProfile} type="button" aria-label="Edit"></button>
        </div>
        <button className="profile__add-btn" onClick={onAddPlace} type="button"></button>
      </section>

      <section className="elements">
        {
          cards.map((item) => 
          <Card 
            key={item._id}
            card={item}
            onCardClick={handleCardClick}
            onCardLike={() => handleCardLike(item)}
          />)
        }
      </section>
    </main>

  )
}

export default Main;