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
  const storyList = document.querySelector(".story-line__list");
  const container = document.querySelector(".floating-background");
  const floatingList = document.querySelector(".floating-background__list");
  const rangeLine = document.querySelector('.time-range__body');
  const historySection = document.querySelector('.port-history-section');
  const header = document.querySelector('.header');

  if (!container) {
    return;
  } else {
    floatingList.style.height = storyList.offsetHeight + 'px';
    rangeLine.style.height = floatingList.offsetHeight + 500 + 'px';
  }

  const storySwiper = new Swiper('.story-line',{
    modules: [Navigation, Pagination, Mousewheel, FreeMode, Parallax, Controller, Autoplay],
    direction: 'vertical',
    spaceBetween: 60,
    slidesPerView: 'auto',
    autoHeight: true,
    preloadImages: true,
    allowTouchMove: false,
    watchSlidesProgress: true,
    speed: 50,

    mousewheel: {
      releaseOnEdges: true,
      sensitivity: 1,
      thresholdDelta: 50
    },

    wrapperClass: 'story-line__list',
    slideClass: 'story-line__item',

    breakpoints: {
      1199: {
        freeMode: true,
      },
    },


    on: {
      scroll: () => {
        if(storySwiper.isBeginning) {
          setTimeout(() => {
            document.body.style.paddingRight = '0px';
            document.body.classList.remove('disable-scroll');
            // scrolltriggerStory.enable(true);
          }, 500);
        }
        if(storySwiper.isEnd) {
          setTimeout(() => {
            document.body.style.paddingRight = '0px';
            document.body.classList.remove('disable-scroll');
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

  storySwiper.mousewheel.disable()

  let scrolltriggerStory = ScrollTrigger.create({
    trigger: '#scroll-trigger',
    start: "-50",
    end: "max",
    onToggle: (self) => {
      storySwiper.mousewheel.enable()
    },
  });

  const floatingSwiper = new Swiper('.floating-background',{
    modules: [Navigation, Mousewheel, FreeMode, Controller],
    direction: 'vertical',
    slidesPerView: 'auto',
    speed: 400,
    freeMode: true,
    preloadImages: true,

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

    on: {
      transitionEnd: () => {
        console.log(floatingSwiper.translate);
      }
    }
  });

  storySwiper.controller.control = floatingSwiper;
}
