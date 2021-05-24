import React from 'react';
import Card from './Card';
import  UserContext from '../contexts/CurrentUserContext';


function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  handleCardClick,
  cards,
  onCardLike,
  onCardDelete
}) {

  const currentUser = React.useContext(UserContext);

  let user;

  if (currentUser) {
    user = currentUser;
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
            onCardLike={() => onCardLike(item)}
            onCardDelete={() => onCardDelete(item)}
          />)
        }
      </section>
    </main>

  )
}

export default Main;