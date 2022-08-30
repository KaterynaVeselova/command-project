// const swiper = new Swiper('.hero__swiper', {
//   // Optional parameters
//  //  direction: 'vertical',
//   loop: true,

//   // If we need pagination
// //   pagination: {
// //     el: '.swiper__pagination',
// //   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.hero-swiper-next',
//     prevEl: '.hero-swiper-prev',
//   },

//   // And if we need scrollbar
// //   scrollbar: {
// //     el: '.swiper__scrollbar',
// //   },
// });


window.addEventListener('load', () =>{
    //buttons
    const left = document.querySelector('.hero-swiper-prev');
    const right = document.querySelector('.hero-swiper-next');
    //carusel
    const slider = document.querySelector('.swiper-slide');
    const images = document.querySelectorAll('.swiper-slide img');

    //counter
    let counter = 0;
    const stepSize = images[0].clientWidth;
    
    slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;

    right.addEventListener ('click',() => {
        counter >= images.length -1 ?  (counter = -1) : null;
        slider.classList.add('transformAnimation');
        counter++;
        slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
 
    });    
    left.addEventListener ('click',() => {
        if (counter <= 0) counter = images.length;         
        slider.classList.add('transformAnimation');
        counter--;
        slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    });

    slider.addEventListener ('transitionend', event => {
        console.log(1);
    });
});