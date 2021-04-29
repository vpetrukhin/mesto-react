import React from 'react';


function PopupWithForm({
  name,
  title,
  isOpen,
  onClosePopup,
  children
}) {

  let openPopupSelector;

  isOpen ? openPopupSelector = 'popup_opened' : openPopupSelector = '';

  return (
    <div className = {`popup ${name}-popup ${openPopupSelector}`}>
        <div className="popup__container">
          <button className="popup__btn-close" onClick={onClosePopup} type="button" aria-label="Close"></button>
          <h2 className="popup__title">{title}</h2>
          <form action="#" className={`popup__form popup__form_type_${name}`} name="popupForm" noValidate >
            {children}
          </form>
        </div>
      </div>
  )
}

export default PopupWithForm;