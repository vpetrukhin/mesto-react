import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';


function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <div className="popup profile-popup">
        <div className="popup__container">
          <button type="button" className="popup__btn-close" aria-label="Close"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form action="#" className="popup__form" name="popupForm" noValidate>
            <input type="text" className="popup__input" id="name-input" name="name" required placeholder="Имя" minLength="2" maxLength="40" />
            <span className="name-input-error popup__input-error"></span>
            <input type="text" className="popup__input" id="job-input" name="about" required placeholder="Род деятельности"   minLength="2" maxLength="200" />
            <span className="job-input-error popup__input-error popup__input-error_type_second"></span>
            <button type="submit" className="popup__btn" disabled={true}>Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup new-item-popup">
        <div className="popup__container">
          <button type="button" className="popup__btn-close" aria-label="Close"></button>
          <h2 className="popup__title">Новое место</h2>
          <form action="#" className="popup__form popup__form_type_new-item" noValidate>
            <input type = "text" className="popup__input popup__input_type_new-item" id="newName-input" name="name" placeholder="Название" minLength="2" maxLength="30" required />
            <span className="newName-input-error popup__input-error"></span>
            <input type = "url" className="popup__input popup__input_type_new-item" id="image-input" name="link" placeholder="Ссылка на картинку" required />
            <span className="image-input-error popup__input-error popup__input-error_type_second"></span>
            <button type="submit" className="popup__btn" disabled={true}>Создать</button>
          </form>
        </div>
      </div>

      <div className="popup image-popup">
        <div className="image-popup__container">
          <button type="button" className="image-popup__close-btn popup__btn-close"></button>
          <img className="image-popup__img" src="#" alt="#" />
          <h3 className="image-popup__title"></h3>
        </div>
      </div>

      <div className="popup delete-popup">
        <div className="popup__container" >
          <button type="button" className="popup__btn-close" aria-label="Close"></button>
          <h2 className="popup__title popup__title_type_delete">Вы уверенны?</h2>
          <form action="#" className="popup__form popup__form_type_delete" noValidate>
            <button type="button" className="popup__btn">Да</button>
          </form>
        </div>
      </div>

      <div className="popup change-popup">
        <div className="popup__container">
          <button type="button" className="popup__btn-close" aria-label="Close"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form action="#" className="popup__form popup__form_type_change" noValidate>
            <input type="url" className="popup__input popup__input_type_change" id="ava-input" name="link" placeholder="Ссылка на аватар" required />
            <span className = "ava-input-error popup__input-error popup__input-error_type_second"></span>
            <button type="submit" className="popup__btn" disabled={true}>Сохранить</button>
          </form>
        </div>
      </div>

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
