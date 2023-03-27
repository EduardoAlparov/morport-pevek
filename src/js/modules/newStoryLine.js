import Swiper, {
  Navigation,
  Pagination,
  Mousewheel,
  FreeMode,
  Parallax,
  Controller,
  Autoplay,
} from 'swiper';

Swiper.use([ Navigation, Pagination, FreeMode, Mousewheel, Parallax, Controller, Autoplay ]);

import Scrollbar, { ScrollbarPlugin }  from 'smooth-scrollbar';

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

import { jarallax } from "jarallax";

export default () => {
  const header = document.querySelector(".header");
  const historySlider = document.querySelector(".history-slider");
  const historyLineItems = document.querySelectorAll('.story-line__item');
  const historyNav = document.querySelector('.story-nav');
  const historyNavList = document.querySelector('.story-nav__list');
  const titleriggers = document.querySelectorAll("._set-title-background");
  const accentTriggers = document.querySelectorAll("._set-accent-background");
  const whiteTriggers = document.querySelectorAll("._set-white-background");

  if(!historySlider) {
    return;
  }

  // -start- transform with transition and with custom scrolls instead of browser scrollbar
  class DisableScrollPlugin extends ScrollbarPlugin {
    static pluginName = 'disableScroll';

    static defaultOptions = {
      direction: '',
    };

    transformDelta(delta) {
      if (this.options.direction) {
        delta[this.options.direction] = 0;
      }

      return { ...delta };
    }
  }

  Scrollbar.use(DisableScrollPlugin);

  const scrollbar = Scrollbar.init(historySlider, {
    damping: 0.05,
    renderByPixels: true,
    alwaysShowTracks: false,
    plugins: {
      disableScroll: {
        direction: 'x',
      },
    },
  });
  // -end- transform with transition and with custom scrolls instead of browser scrollbar

  // -start- hide header then scroll up and changing background color
  scrollbar.addListener((status) => {
    header.classList.toggle('header--hidden', (scrollbar.offset.y >= 1));
    historyNav.classList.toggle('story-nav--visible', (scrollbar.offset.y >= 1));

    titleriggers.forEach(tt => {
      if(isElementInViewportFull(tt)) {
        historySlider.classList.remove('history-slider--white-background');
        historySlider.classList.remove('history-slider--accent-background');
      }
    });

    accentTriggers.forEach(at => {
      if(isElementInViewportFull(at)) {
        historySlider.classList.add('history-slider--accent-background');
        historySlider.classList.remove('history-slider--white-background');
      }
    });

    whiteTriggers.forEach(wt => {
      if(isElementInViewportFull(wt)) {
        historySlider.classList.add('history-slider--white-background');
      }
    });
  });
  // -end- hide header then scroll up and changing background color

  // -start- render mobile paginations items
  historyLineItems.forEach(storyItem => {
    let liItem = document.createElement('li');
    liItem.classList.add('story-nav__item');
    liItem.innerText = storyItem.querySelector('.article-story__year').firstElementChild.textContent;
    historyNavList.append(liItem);
  });
  // -end- render mobile paginations items

  // -start- swiper for horizontal direction images on mobile
  if (window.matchMedia("(max-width: 575px)").matches) {
    const imgSwiper = new Swiper('.story-line__item--mobile-slider', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      freeMode: true,
      updateOnWindowResize: true,
      watchSlidesProgress: true,

      wrapperClass: 'story-line__col--cascade',
      slideClass: 'story-line__img',
    });
  } else {
    jarallax(document.querySelectorAll('.jarallax-one'), {
      speed: 0.2,
      imgSize: '85% auto',
      imgPosition: 'top 200px left',
    });

    jarallax(document.querySelectorAll('.jarallax-two'), {
      speed: 0.2,
      imgSize: 'cover',
      imgPosition: 'bottom center',
    });
  }
  // -end- swiper for horizontal direction images on mobile

  // -start- swiper for year mobile pagination
  const paginationSwiper =  new Swiper('.story-nav__body', {
    spaceBetween: 10,
    slidesPerView: 'auto',
    allowTouchMove: false,
    watchSlidesProgress: true,
    updateOnWindowResize: true,

    slideClass: 'story-nav__item',
    slideActiveClass: 'story-nav__item--active',

    breakpoints: {
      767: {
        enabled: false
      },
    }
  });

  paginationBehavior();

  window.addEventListener('resize', function() {
    paginationBehavior()
  })

  function paginationBehavior() {
    if (window.matchMedia("(max-width: 767px)").matches) {
      let currentItem;
      scrollbar.addListener((status) => {
        historyLineItems.forEach( item => {
          if(isElementInViewportFull(item)) {
            if(item === currentItem) {
              return;
            } else {
              let navItems = document.querySelectorAll('.story-nav__item');
              navItems.forEach( navItem => {
                navItem.classList.remove('story-nav__item--active');

                if(navItem.textContent === item.querySelector('.article-story__year').firstElementChild.textContent) {
                  navItem.classList.add('story-nav__item--active');
                }
              })
            }

            currentItem = item;

            paginationSwiper.slides.forEach(slide => {
              if(slide.classList.contains('story-nav__item--active')) {
                paginationSwiper.slideTo(paginationSwiper.slides.indexOf(slide), 200);
              }
            })
          }

        })

      });
    }
  }
  // -end- swiper for year mobile pagination

  // is dom element full-size in viewport:
  function isElementInViewportFull(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
