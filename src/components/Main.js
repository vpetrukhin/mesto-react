import React from 'react';


function Main(props) {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__img-wrapper">
          <img src="#" alt="Аватар профиля" className="profile__img" />
        </div> 
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <p className="profile__job">Исследователь океана</p>
          <button type="button" className="profile__edit-btn" aria-label="Edit"></button>
        </div>
        <button type="button" className="profile__add-btn"></button>
      </section>

      <section className="elements"></section>
    </main>
  )
}

export default Main;