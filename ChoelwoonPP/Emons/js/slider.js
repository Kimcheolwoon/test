var swiper = new Swiper(".swiper1", {
  slidesPerView: 2,
  spaceBetween: 10,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    freeMode: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 10,
      freeMode: true,
      slidesPerGroup: 2,
      scrollbar : {
        el : '.swiper-scrollbar',
        draggable: true,
    },

    },
    760: {
      slidesPerView: 3,
      spaceBetween: 10,
      freeMode: true,
      slidesPerGroup: 2,
      scrollbar : {
        el : '.swiper-scrollbar',
        draggable: true,
      },

    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
       freeMode: true,
       scrollbar : {
        el : '.swiper-scrollbar',
        draggable: true,
      },
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});
var swiper = new Swiper(".swiper2", {
  slidesPerView: 2,
  spaceBetween: 10,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    freeMode: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 2.1,
      spaceBetween: 10,
      freeMode: true,
      slidesPerGroup: 2,
      scrollbar : {
        el : '.swiper-scrollbar',
        draggable: true,
      },
    },
    760: {
      slidesPerView: 3.3,
      spaceBetween: 10,
      freeMode: true,
      scrollbar : {
        el : '.swiper-scrollbar',
        draggable: true,
      },

    },
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 20,
      freeMode: true,
      scrollbar : {
        el : '.swiper-scrollbar',
        draggable: true,
      },
    },
  },
  	// 스크롤바 설정하기

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});

