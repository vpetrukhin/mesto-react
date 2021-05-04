import React, { useEffect, useState } from 'react';
import api from '../utils/Api';
import Card from './Card';


function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  handleCardClick
}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);


  useEffect(() => {
    api.getInfoUser()
      .then(data => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => console.log(`Ошибка ${err}`))
  })


  useEffect(() => {
    api.getCardInfo()
      .then(res => {
        setCards(res.map(item => ({
          title: item.name,
          url: item.link,
          likesCount: item.likes.length,
          cardId: item._id,
        })))
        
      })
      .catch((err) => console.log(`Ошибка ${err}`))
  }, [])

  return (
    <main className="main">
      <section className="profile">
        <div className = "profile__img-wrapper" onClick={onEditAvatar}>
          <img src={`${userAvatar}`} alt="Аватар профиля" className="profile__img" />
        </div> 
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__job">{userDescription}</p>
          <button className="profile__edit-btn" onClick={onEditProfile} type="button" aria-label="Edit"></button>
        </div>
        <button className="profile__add-btn" onClick={onAddPlace} type="button"></button>
      </section>

      <section className="elements">
        {
          cards.map((item) => <Card key={item.cardId} {...item} onCardClick={handleCardClick} card={item} />)
        }
      </section>
    </main>

  )
}

export default Main;