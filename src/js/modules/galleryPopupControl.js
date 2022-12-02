import { Carousel } from "@fancyapps/ui";

export default () => {
  const galleryButtons = document.querySelectorAll('.gallery__cell');
  const galleryPopup = document.querySelector('.gallery-popup');
  const prevBtn = document.querySelector('.gallery-popup__button--prev');
  const nextBtn = document.querySelector('.gallery-popup__button--next');

  if(galleryButtons.length < 1) {
    return;
  }

  galleryButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      galleryPopup.classList.add('gallery-popup--opened');

      galleryPopup.addEventListener('click', (e) => {
        if (e.target.closest('.gallery-popup__close-button')) {
          galleryPopup.classList.remove('gallery-popup--opened');
        }
      })
    })
  })

  const myCarouselGallery = new Carousel(document.querySelector(".gallery-popup__container"), {
    Navigation: false,
    infinite: false,
    friction: 0.95,
    center: true,
    slidesPerPage: 1,
    Dots: false,

    classNames: {
      viewport: "gallery-popup__carousel",
      track: "gallery-popup__carousel-list",
      slide: "gallery-popup__carousel-item",
      slideSelected: "gallery-popup__carousel-item--selected",
    }
  });

  //
  prevBtn.addEventListener('click', () => {
    myCarouselGallery.slidePrev();
  })

  nextBtn.addEventListener('click', () => {
    myCarouselGallery.slideNext();
  })
}
