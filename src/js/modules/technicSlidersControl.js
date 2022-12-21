
import { Carousel } from "@fancyapps/ui";

export default () => {

  if(!document.querySelector('.technic')) {
    return;
  }

  if (window.matchMedia("(min-width: 767px)").matches) {

    let myCarousel = new Carousel(document.querySelector(".technic__body"), {
      infinite: false,
      Dots: false,
      center: false,
      // fill: false,
      friction: 0.85,
      slidesPerPage: 'auto',

      Navigation: {
        prevTpl: '<svg width="11" height="18" viewBox="0 0 11 18" tabindex="-1" stroke="#0a1631" xmlns="http://www.w3.org/2000/svg"><path d="M10 1L2 9L10 17" stroke-width="2"/></svg>',
        nextTpl: '<svg width="11" height="18" viewBox="0 0 11 18" tabindex="-1" stroke="#0a1631" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L9 9L0.999999 1" stroke-width="2"/></svg>',

        classNames: {
          main: "technic__slider-control",
          button: "technic__slider-button",
          next: "technic__slider-button--prev",
          prev: "technic__slider-button--next",
        }
      },

      classNames: {
        viewport: "technic__slider",
        track: "technic__slider-wrapper",
        slide: "technic__slide",
        slideSelected: "technic__slide--selected",
      },
    });


  } else {

    let myCarousel = new Carousel(document.querySelector(".mobile-carousel__body"), {
      infinite: false,
      friction: 0.95,
      Dots: false,
      Navigation: false,
      fill: false,
      center: false,
      slidesPerPage: 1,
      classNames: {
        viewport: "mobile-carousel__slider",
        track: "mobile-carousel__slider-wrapper",
        slide: "mobile-carousel__slide",
        slideSelected: "mobile-carousel__slide--selected",
      }
    });
  }
}
