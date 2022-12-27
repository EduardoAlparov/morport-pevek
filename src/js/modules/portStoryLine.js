import Swiper, {
  Navigation,
  Pagination,
  Mousewheel,
  FreeMode,
  Parallax,
  Controller,
  Autoplay,
} from 'swiper';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default () => {

  const historyPageWrapper = document.querySelector(".page-wrapper");
  const storyList = document.querySelector(".story-line__list");
  const container = document.querySelector(".floating-background");
  const floatingList = document.querySelector(".floating-background__list");
  const rangeLine = document.querySelector('.time-range__body');
  const historySection = document.querySelector('.port-history-section');
  const historyEmpty= document.querySelector('.port-history-section__empty-block');
  const header = document.querySelector('.header');

  if (!container) {
    return;
  } else {
    window.scrollTo(0, 0);
    historyPageWrapper.classList.add('history-swiper-enable')
    floatingList.style.height = storyList.offsetHeight + 'px';
    rangeLine.style.height = floatingList.offsetHeight + 500 + 'px';
  }


  const storySwiper = new Swiper('.story-line',{
    modules: [Navigation, Pagination, Mousewheel, FreeMode, Parallax, Controller, Autoplay],
    direction: 'vertical',
    spaceBetween: 60,
    centeredSlides: true,
    freeMode: true,
    slidesPerView: 'auto',
    autoHeight: true,
    preloadImages: true,
    watchSlidesProgress: true,
    parallax: true,
    speed: 200,
    updateOnWindowResize: true,

    mousewheel: {
      // releaseOnEdges: true,
      sensitivity: 2,
      // thresholdDelta: 50
    },

    wrapperClass: 'story-line__list',
    slideClass: 'story-line__item',

    breakpoints: {
      1199: {
        freeMode: true,
        // slidesPerView: 1,
        allowTouchMove: false,
      },
    },

    on: {
      slideChange: () => {
        if(storySwiper.isEnd) {
          console.log('end');
          window.removeEventListener('wheel', fn);
          window.removeEventListener('mousewheel', fn);
          window.removeEventListener('DOMMouseScroll', fn);
          window.removeEventListener('touchstart', fn);
          window.removeEventListener('touchmove', fn);

          setTimeout(() => {
            storySwiper.mousewheel.disable();
            historyPageWrapper.classList.remove('history-swiper-enable');
          }, 500);
        }

        if( storySwiper.activeIndex == 2 ) {
          historySection.classList.add('port-history-section--accent-background');
        } else if( storySwiper.activeIndex == 5 ) {
          historySection.classList.add('port-history-section--card-background');
          historySection.classList.add('_set-dark-colors');
          header.classList.add('_set-dark-colors');
        }

        if( storySwiper.activeIndex < 5 ) {
          historySection.classList.remove('port-history-section--card-background');
          historySection.classList.remove('_set-dark-colors');
          header.classList.remove('_set-dark-colors');
        }

        if ( storySwiper.activeIndex < 2 ) {
          historySection.classList.remove('port-history-section--accent-background');
        }
      }
    }
  });

  storySwiper.mousewheel.disable();

  const paginationSwiper =  new Swiper('.story-line__navigation-wrapper', {
    modules: [Navigation, Pagination, Mousewheel, FreeMode, Parallax, Controller, Autoplay],
    spaceBetween: 10,
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    updateOnWindowResize: true,

    breakpoints: {
      574: {
        spaceBetween: 20,
      },
    },

    on: {
      click: () => {
        console.log(paginationSwiper.clickedIndex);
      }
    }
  });

  paginationSwiper.controller.control = storySwiper;
  storySwiper.controller.control = paginationSwiper;

  setTimeout(() => {
    let scrolltriggerStory = ScrollTrigger.create({
      trigger: '#scroll-trigger',
      endTrigger: '#end-trigger',
      onUpdate: (self) => {
        if(ScrollTrigger.isInViewport(historyEmpty)) {
          window.addEventListener('wheel', fn, {passive: false});
          window.addEventListener('mousewheel', fn, {passive: false});
          window.addEventListener('DOMMouseScroll', fn, {passive: false});
          window.addEventListener('touchstart', fn, {passive: false});
          window.addEventListener('touchmove', fn, {passive: false});

          setTimeout(() => {
            scrolltriggerStory.disable();
            storySwiper.mousewheel.enable();
          }, 500);
        }
      },
    });

  }, 1000);

  const floatingSwiper = new Swiper('.floating-background',{
    modules: [Navigation, Mousewheel, FreeMode, Controller],
    direction: 'vertical',
    slidesPerView: 'auto',
    speed: 400,
    freeMode: true,
    preloadImages: true,
    updateOnWindowResize: true,

    wrapperClass: 'floating-background__slider',
    slideClass: 'floating-background__list',

    mousewheel: {
      releaseOnEdges: true,
      sensitivity: 3
    },

    breakpoints: {
      768: {
        speed: 700,
        followFinger: true,
      }
    },

  });

  storySwiper.controller.control = floatingSwiper;

  function fn(e) {
    e.preventDefault();
  }

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
