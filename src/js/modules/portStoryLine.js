import Swiper, {
  Navigation,
  Pagination,
  Mousewheel,
  FreeMode,
  Parallax,
  Controller,
} from 'swiper';

export default () => {
  const container = document.querySelector(".floating-background");
  const floatingList = document.querySelector(".floating-background__list");

  const contentContainer = document.querySelector('.port-history-section__container');
  const range = document.querySelector('.port-history-section__range');
  const rangeLine = document.querySelector('.port-history-section__line');
  const contentSection = document.querySelector('.port-history-section');

  const storyList = document.querySelector(".story-line__list");

  if (!container) {
    return;
  } else {
    const newWidth = storyList.clientWidth  + ( (window.innerWidth - contentContainer.clientWidth));
    floatingList.style.width = newWidth + 'px';
  }

  const storySwiper = new Swiper('.port-history-section__title',{
    modules: [Navigation, Pagination, Mousewheel, FreeMode, Parallax, Controller],
    direction: 'horizontal',
    slidesPerView: "auto",
    speed: 400,
    preloadImages: true,

    longSwipesRatio: 1,
    touchReleaseOnEdges: true,
    resistance: false,
    // threshold: 50,
    nested: true,

    freeMode: {
      enabled: true,
      momentumBounce: false,
      momentumRatio: 0.5,
      momentumVelocityRatio: 0.5,
    },


    mousewheel: {
      releaseOnEdges: true,
      sensitivity: 3,
    },

    wrapperClass: 'story-line',
    slideClass: 'story-line__list',

    breakpoints: {
      768: {
        speed: 700,
      },
      1199: {
        freeMode: {
          enabled: true,
          momentumBounce: true,
          momentumRatio: 1,
          momentumVelocityRatio: 1,
        },
      },
    },

    on: {
      setTranslate: function () {
        contentSection.classList.toggle('port-history-section--accent-background', this.progress >= 0.24);
        contentSection.classList.toggle('port-history-section--card-background', this.progress >= 0.8);

        document.querySelector('.header').classList.toggle('_set-dark-colors', this.progress >= 0.8);
        document.querySelector('.breadcrumbs').classList.toggle('_set-dark-colors', this.progress >= 0.8);
        range.classList.toggle('port-history-section__range--dark', this.progress >= 0.8);

        rangeLine.style.width = (this.progress.toFixed(2) * 100) + "%";
      }
    }
  })

  const floatingSwiper = new Swiper('.floating-background',{
    modules: [Navigation, Mousewheel],
    direction: 'horizontal',
    slidesPerView: "auto",
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
        followFinger: false,
      }
    },

  })

  storySwiper.controller.control = floatingSwiper;

  if (window.matchMedia('(hover: none)').matches) {

  } else {

  }

}
