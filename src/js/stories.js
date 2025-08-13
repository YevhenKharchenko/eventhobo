import Swiper from 'swiper';
import 'swiper/css/bundle';

const storiesDots = document.querySelectorAll('.stories-dot');

let storiesSwiper;

storiesSwiper = new Swiper('.stories-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 16,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      slidesPerView: 3,
      grabCursor: false,
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
  on: {
    init: () => {
      document.querySelector('.stories-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateStoriesDots(this.realIndex);
    },
  },
});

function updateStoriesDots(index) {
  storiesDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

storiesDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    storiesSwiper.slideTo(index);
  });
});
