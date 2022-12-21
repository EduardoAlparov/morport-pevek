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
  const container = document.querySelector(".floating-background");
  const floatingList = document.querySelector(".floating-background__list");

  const historyContent = document.querySelector('.port-history-section__content');
  const historyTitle = document.querySelector('.port-history-section__title');
  const range = document.querySelector('.port-history-section__range');
  const rangeLine = document.querySelector('.port-history-section__line');
  const contentSection = document.querySelector('.port-history-section');

  const storyList = document.querySelector(".story-line__list");

  if (!container) {
    return;
  } else {

  }

  const storySwiper = new Swiper('.story-line',{
    modules: [Navigation, Pagination, Mousewheel, FreeMode, Parallax, Controller, Autoplay],
    direction: 'vertical',
    spaceBetween: 60,
    slidesPerView: 'auto',
    autoHeight: true,
    preloadImages: true,
    allowTouchMove: false,
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
      }
    }
  })


  storySwiper.mousewheel.disable()

  let scrolltriggerStory = ScrollTrigger.create({
    trigger: '#scroll-trigger',
    start: "-50",
    end: "max",
    onToggle: (self) => {
      document.body.classList.add('disable-scroll');
      let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
      document.body.style.paddingRight = paddingOffset;
      storySwiper.mousewheel.enable()
      scrolltriggerStory.disable();
    }
  });


  const floatingSwiper = new Swiper('.floating-background',{
    modules: [Navigation, Mousewheel],
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

  })

  // storySwiper.controller.control = floatingSwiper;

  if (window.matchMedia('(hover: none)').matches) {

  } else {

  }

}
