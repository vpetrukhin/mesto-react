import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <header class="header" >
        <img src="<%=require('./images/logo.svg')%>" alt="Логотип" class ="header__logo" />
      </header>
      <main class="main">
        <section class="profile">
          <div class="profile__img-wrapper">
            <img src="<%=require('./images/avatar.jpg')%>" alt="Аватар профиля" class="profile__img" />
          </div> 
          <div class="profile__info">
            <h1 class="profile__name">Жак - Ив Кусто</h1>
            <p class="profile__job">Исследователь океана</p>
            <button type="button" class="profile__edit-btn" aria-label="Edit"></button>
          </div>
          <button type="button" class="profile__add-btn"></button>
        </section>

        <section class="elements"></section>
      </main>

      <footer class="footer">
        <p class="footer__copyright">&#169; 2020 Mesto Russia</p>
      </footer>

      <div class="popup profile-popup">
        <div class="popup__container">
          <button type="button" class="popup__btn-close" aria-label="Close"></button>
          <h2 class="popup__title">Редактировать профиль</h2>
          <form action="#" class="popup__form" name="popupForm" novalidate>
            <input type="text" class="popup__input" id="name-input" name="name" required placeholder="Имя" minlength="2" maxlength="40" />
            <span class="name-input-error popup__input-error"></span>
            <input type="text" class="popup__input" id="job-input" name="about" required placeholder="Род деятельности"   minlength="2" maxlength="200" />
            <span class="job-input-error popup__input-error popup__input-error_type_second"></span>
            <button type="submit" class="popup__btn" disabled="true">Сохранить</button>
          </form>
        </div>
      </div>

      <div class="popup new-item-popup">
        <div class="popup__container">
          <button type="button" class="popup__btn-close" aria-label="Close"></button>
          <h2 class="popup__title">Новое место</h2>
          <form action="#" class="popup__form popup__form_type_new-item" novalidate>
            <input type = "text" class="popup__input popup__input_type_new-item" id="newName-input" name="name" placeholder="Название" minlength="2" maxlength="30" required />
            <span class="newName-input-error popup__input-error"></span>
            <input type = "url" class="popup__input popup__input_type_new-item" id="image-input" name="link" placeholder="Ссылка на картинку" required />
            <span class="image-input-error popup__input-error popup__input-error_type_second"></span>
            <button type="submit" class="popup__btn" disabled="true">Создать</button>
          </form>
        </div>
      </div>

      <div class="popup image-popup">
        <div class="image-popup__container">
          <button type="button" class="image-popup__close-btn popup__btn-close"></button>
          <img class="image-popup__img" src="#" alt="#" />
          <h3 class="image-popup__title"></h3>
        </div>
      </div>

      <div class="popup delete-popup">
        <div class="popup__container" >
          <button type="button" class="popup__btn-close" aria-label="Close"></button>
          <h2 class="popup__title popup__title_type_delete">Вы уверенны?</h2>
          <form action = "#" class="popup__form popup__form_type_delete" novalidate>
            <button type="button" class="popup__btn">Да</button>
          </form>
        </div>
      </div>

      <div class="popup change-popup">
        <div class="popup__container">
          <button type="button" class="popup__btn-close" aria-label="Close"></button>
          <h2 class="popup__title">Обновить аватар</h2>
          <form action="#" class="popup__form popup__form_type_change" novalidate>
            <input type="url" class="popup__input popup__input_type_change" id="ava-input" name="link" placeholder="Ссылка на аватар" required />
            <span class = "ava-input-error popup__input-error popup__input-error_type_second"></span>
            <button type="submit" class="popup__btn" disabled="true">Сохранить</button>
          </form>
        </div>
      </div>

      <template id="element">
        <article class="elements__element element">
          <button type="button" class="element__remove-btn"></button>
          <img class="element__image" src="#" alt="#" />
          <div class="element__footer">
            <h2 class="element__title"></h2>
            <div class="element__like-wrapper">
              <button type="button" class="element__like-btn"></button>
              <span class="element__like-count">0</span>
            </div>
          </div>
        </article>
      </template>
    </>
  );
}

export default App;
