import Swiper from 'swiper';
import 'swiper/css/bundle';

const simulationDots = document.querySelectorAll('.simulation-dot');

let simulationSwiper;

simulationSwiper = new Swiper('.simulation-swiper-container', {
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
      document
        .querySelector('.simulation-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updateSimulationDots(this.realIndex);
    },
  },
});

function updateSimulationDots(index) {
  simulationDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

simulationDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    simulationSwiper.slideTo(index);
  });
});
