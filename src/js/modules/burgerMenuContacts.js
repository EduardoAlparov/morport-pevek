import { Carousel } from "@fancyapps/ui";

export default () => {
  if (window.matchMedia("(min-width: 1199px)").matches) {

  } else {
    const myCarouselContacts = new Carousel(document.querySelector(".modal__contacts--mobile"), {
      infinite: false,
      fill: false,
      Dots: false,
      friction: 0.94,
      center: false,
      Navigation: false,
      slidesPerPage: 1,
      slidesToSlide: 1,

      classNames: {
        track: "contacts__list",
        slide: "contacts__item",
      }
    });
  }
}
