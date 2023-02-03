document.addEventListener('DOMContentLoaded', () => {
  const popupOpenButton = document.getElementById('reserve-btn');
  const popupCloseButton = document.getElementById('reserve-close-btn');
  const popup = document.querySelector('.popup');
  const openPopup = () => {
    popup.classList.add('popup_opened')
  }
  const closePopup = () => {
    popup.classList.remove('popup_opened')
  }
  popupOpenButton.addEventListener('click', openPopup);
  popupCloseButton.addEventListener('click', closePopup);
});