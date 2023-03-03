import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";

export default () => {
  if(!document.querySelector('.technic')) {
    return;
  }

  const container = document.getElementById("techCarousel");
  const mobileContainer = document.getElementById("techCarouselMob");

  if (window.matchMedia("(min-width: 767px)").matches) {
    let options = {
      infinite: false,
      Dots: false,
      center: false,
      animated: true,
      slidesPerPage: 'auto',

      Navigation: {
        prevTpl: '<svg width="11" height="18" viewBox="0 0 11 18" tabindex="-1" stroke="#0a1631" xmlns="http://www.w3.org/2000/svg"><path d="M10 1L2 9L10 17" stroke-width="2"/></svg>',
        nextTpl: '<svg width="11" height="18" viewBox="0 0 11 18" tabindex="-1" stroke="#0a1631" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L9 9L0.999999 1" stroke-width="2"/></svg>',

        classes: {
          container: "technic__slider-control",
          button: "technic__slider-button",
          isNext: "technic__slider-button--prev",
          isPrev: "technic__slider-button--next",
        }
      },

      classes: {
        viewport: "technic__slider",
        track: "technic__slider-wrapper",
        slide: "technic__slide",
        slideSelected: "technic__slide--selected",
      },
    }

    new Carousel(container, options);

  } else {
    let options = {
      infinite: false,
      friction: 0.95,
      Dots: false,
      Navigation: false,
      fill: false,
      center: false,
      slidesPerPage: 1,

      classes: {
        viewport: "mobile-carousel__slider",
        track: "mobile-carousel__slider-wrapper",
        slide: "mobile-carousel__slide",
        slideSelected: "mobile-carousel__slide--selected",
      }
    };

    let myCarousel = new Carousel(mobileContainer, options);
  }
}
