// document.querySelector('.btn-menu').addEventListener('click', function(e){
//     e.preventDefault();
//     this.classList.toggle('is-active');
// })
(() => {
  const menuOpenBtn = document.querySelector('[data-menu-open]');
  const menuCloseBtn = document.querySelector('[data-menu-close]');

  const mobileMenu = document.querySelector('[data-menu]');
  const body = document.querySelector('body');

  menuOpenBtn.addEventListener('click', openModal);
  menuCloseBtn.addEventListener('click', openModal);

  function openModal() {
    mobileMenu.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
  }
})();