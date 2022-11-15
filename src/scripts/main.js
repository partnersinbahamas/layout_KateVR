'use strict';

// const Swiper = require('swiper');

// const swiper = new Swiper('.swiper', {
//   loop: true,

//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },

//   navigation: {
//     // nextEl: '.swiper-button-next',
//     // prevEl: '.swiper-button-prev',
//   },

//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },

//   parserOptions: {
//     sourceType: 'module',
//   },
// });

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const forms = document.querySelectorAll('.form');

const formField = document.querySelector('.form__field');

formField.addEventListener('submit', (event) => {
  event.preventDefault();

  forms.forEach((form) => {
    form.value = '';
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__content--with-menu');
  } else {
    document.body.classList.remove('page__content--with-menu');
  }
});
