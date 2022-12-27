import Swiper, {
  Navigation,
  Pagination,
  Mousewheel,
  FreeMode,
  Parallax,
  Controller,
  Autoplay,
} from 'swiper';

Swiper.use([Navigation, Pagination, FreeMode, Mousewheel, Parallax, Controller, Autoplay ]);

import simpleParallax from 'simple-parallax-js';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const header = document.querySelector(".header");
  const historySlider = document.querySelector(".history-slider");
  const historyList = document.querySelector(".history-slider__list");
  const scrollingBackgroundList = document.querySelector(".scrolling-background__list");
  const parallaxContainer = document.querySelectorAll(".swiper-parallax");
  const historyTimeRange = document.querySelector(".history-time-range");

  if(!historySlider) {
    return;
  } else {
    document.body.classList.add('hide-scrollbar');
    scrollingBackgroundList.style.height = historyList.clientHeight + 'px';
    historyTimeRange.style.height = scrollingBackgroundList.clientHeight + 'px';
  }

  window.addEventListener('resize', () => {
    historyTimeRange.style.height = scrollingBackgroundList.clientHeight + 'px';
  })

  new simpleParallax(scrollingBackgroundList.parentElement, {
    delay: .6,
	  transition: 'cubic-bezier(0,0,0,1)',
    scale: "1",
    orientation: 'up',
  });

  const newStorySwiper = new Swiper('#story-line-swiper', {
    direction: 'vertical',
    spaceBetween: 60,
    freeMode: true,
    slidesPerView: 'auto',
    autoHeight: true,
    preloadImages: true,
    parallax: true,
    watchSlidesProgress: true,
    updateOnWindowResize: true,

    mousewheel: {
      sensitivity: 2.5,
    },

    wrapperClass: 'history-slider__list',
    slideClass: 'history-slider__item',

    on: {
      afterInit: () => {
        parallaxContainer.forEach( element => {
          element.setAttribute("data-swiper-parallax-y", "-10%");
        });
      },

      slideChange: () => {
        if( newStorySwiper.activeIndex == 2 ) {
          historySlider.classList.add('history-slider--accent-background');
        } else if( newStorySwiper.activeIndex == 6 ) {
          historySlider.classList.add('history-slider--card-background');
          historySlider.classList.add('_set-dark-colors');
          header.classList.add('_set-dark-colors');
        }

        if( newStorySwiper.activeIndex < 6 ) {
          historySlider.classList.remove('history-slider--card-background');
          historySlider.classList.remove('_set-dark-colors');
          header.classList.remove('_set-dark-colors');
        }

        if ( newStorySwiper.activeIndex < 2 ) {
          historySlider.classList.remove('history-slider--accent-background');
        }
      }
    }
  });


  if (window.matchMedia("(max-width: 575px)").matches) {
    const imgSwiperFirst = new Swiper('.story-line__item--first', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      freeMode: true,
      updateOnWindowResize: true,

      wrapperClass: 'story-line__col--cascade',
      slideClass: 'story-line__img',
    });

    const imgSwiperSec = new Swiper('.story-line__item--third', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      freeMode: true,
      updateOnWindowResize: true,

      wrapperClass: 'story-line__col--cascade',
      slideClass: 'story-line__img',
    });

    const imgSwiperThird = new Swiper('.story-line__item--five', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      freeMode: true,
      updateOnWindowResize: true,

      wrapperClass: 'story-line__col--cascade',
      slideClass: 'story-line__img',
    });
  }
}
