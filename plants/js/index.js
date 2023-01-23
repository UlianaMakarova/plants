window.onload = function(){
console.log('Максимальное количество баллов: 75\n');
console.log('Невыполненные пункты:');
console.log('Не успела к дедлайну выполнить адаптивное меню');
}


//Меню бургер открыть
const iconMenu = document.querySelector('.hamburger');
const menuBody = document.querySelector('.hamburger-nav');

if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });

const menuLinks = document.querySelectorAll('.hamburger-nav-link');
    // Для каждого элемента меню при клике вызываем ф-ию
    menuLinks.forEach(menuLinks => {
      menuLinks.addEventListener("click", closeOnClick);
    });
    
    // Закрытие попапа при клике на меню
    function closeOnClick() {
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
    }
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    //Закрытие меню при клике вне меню
    main.addEventListener('click', outsideEvtListener);
    footer.addEventListener('click', outsideEvtListener);

    function outsideEvtListener(evt) {
    if (evt.target === menuBody || menuBody.contains(evt.target)) {
        // клик внутри
        return;
    }
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
    }
}