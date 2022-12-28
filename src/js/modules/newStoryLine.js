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

export default () => {
  const header = document.querySelector(".header");
  const historySlider = document.querySelector(".history-slider");
  const historyList = document.querySelector(".history-slider__list");
  const scrollingBackgroundList = document.querySelector(".scrolling-background__list");
  const parallaxContainer = document.querySelectorAll(".swiper-parallax");
  const historyTimeRange = document.querySelector(".history-time-range");
  const storyMobileNav = document.querySelector(".story-line__navigation");

  if(!historySlider) {
    return;
  } else {
    scrollingBackgroundList.style.height = historyList.clientHeight + 'px';
    historyTimeRange.style.height = scrollingBackgroundList.clientHeight + 'px';
  }

  const newStorySwiper = new Swiper('#story-line-swiper', {
    observer: true,
    observeParents: true,
    direction: 'vertical',
    spaceBetween: 60,
    freeMode: true,
    slidesPerView: 'auto',
    autoHeight: true,
    preloadImages: true,
    parallax: true,
    updateOnWindowResize: true,
    loop: false,
    grabCursor: false,

    mousewheel: {
      sensitivity: 1.5,
    },

    breakpoints: {
      1199: {
        mousewheel: {
          sensitivity: 2.5,
        },
      },
    },

    on: {
      init: function() {
        this.update();

        if (window.matchMedia("(max-width: 991px)").matches) {
          parallaxContainer.forEach( element => {
            element.setAttribute("data-swiper-parallax-y", "-5%");
          });
        } else {
          parallaxContainer.forEach( element => {
            element.setAttribute("data-swiper-parallax-y", "-10%");
          });
        }
      },

      resize: function() {
        historyTimeRange.style.height = scrollingBackgroundList.clientHeight + 'px';

        if (window.matchMedia("(max-width: 991px)").matches) {
          parallaxContainer.forEach( element => {
            element.setAttribute("data-swiper-parallax-y", "-5%");
          });
        } else {
          parallaxContainer.forEach( element => {
            element.setAttribute("data-swiper-parallax-y", "-10%");
          });
        }

        if (window.matchMedia("(max-width: 768px)").matches) {
          const paginationSwiper =  new Swiper('.story-line__navigation-wrapper', {
            observer: true,
            observeParents: true,
            spaceBetween: 10,
            slidesPerView: 'auto',
            watchSlidesProgress: true,
            updateOnWindowResize: true,
            slideToClickedSlide: true,

            breakpoints: {
              574: {
                spaceBetween: 20,
              },
            },

            on: {
              init: function() {
                this.update();
              }
            }
          });

          paginationSwiper.controller.control = newStorySwiper;
          newStorySwiper.controller.control = paginationSwiper;
        }

        if (window.matchMedia("(max-width: 575px)").matches) {
          const imgSwiperFirst = new Swiper('.story-line__item--first', {
            observer: true,
            observeParents: true,
            slidesPerView: 'auto',
            spaceBetween: 20,
            freeMode: true,
            updateOnWindowResize: true,

            wrapperClass: 'story-line__col--cascade',
            slideClass: 'story-line__img',
          });

          const imgSwiperSec = new Swiper('.story-line__item--third', {
            observer: true,
            observeParents: true,
            slidesPerView: 'auto',
            spaceBetween: 20,
            freeMode: true,
            updateOnWindowResize: true,

            wrapperClass: 'story-line__col--cascade',
            slideClass: 'story-line__img',
          });

          const imgSwiperThird = new Swiper('.story-line__item--five', {
            observer: true,
            observeParents: true,
            slidesPerView: 'auto',
            spaceBetween: 20,
            freeMode: true,
            updateOnWindowResize: true,

            wrapperClass: 'story-line__col--cascade',
            slideClass: 'story-line__img',
          });
        }
      },

      slideChange: () => {
        if (window.matchMedia("(max-width: 767px)").matches) {
          if(newStorySwiper.activeIndex >= 1) {
            header.classList.add('header--hidden');
            storyMobileNav.classList.add('story-line__navigation--visible');
          } else if(newStorySwiper.activeIndex < 1) {
            header.classList.remove('header--hidden');
            storyMobileNav.classList.remove('story-line__navigation--visible');
          }

          if((newStorySwiper.activeIndex + 1 ) == newStorySwiper.slides.length) {
            header.classList.remove('header--hidden');
            storyMobileNav.classList.remove('story-line__navigation--visible');
          }
        }

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
}
