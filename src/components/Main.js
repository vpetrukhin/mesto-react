import React from 'react';


function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar
}) {
  return (
    <main className="main">
      <section className="profile">
        <div className = "profile__img-wrapper" onClick={onEditAvatar} >
          <img src="#" alt="Аватар профиля" className="profile__img" />
        </div> 
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <p className="profile__job">Исследователь океана</p>
          <button className="profile__edit-btn" onClick={onEditProfile} type="button" aria-label="Edit"></button>
        </div>
        <button className="profile__add-btn" onClick={onAddPlace} type="button"></button>
      </section>

      <section className="elements"></section>
    </main>

  )
}

export default Main;