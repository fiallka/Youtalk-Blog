(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const burger = document.querySelector(".burger-icon");
    const navLinks = document.querySelectorAll(".nav__link");
    const headerButton = document.querySelector(".header__button");

    burger.addEventListener("click", () => {
      body.classList.toggle("body--opened-menu");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        body.classList.remove("body--opened-menu");
      });
    });

    headerButton.addEventListener("click", () => {
      body.classList.remove("body--opened-menu");
    });
  });
  const button = document.querySelector('.button-still');
  const container = document.querySelector('.main__extension');

  button.addEventListener('click', function () {
    container.classList.toggle('show-all');

    if (container.classList.contains('show-all')) {
      button.textContent = 'Свернуть';
    } else {
      button.textContent = 'Ещё';
    }
  });
})();