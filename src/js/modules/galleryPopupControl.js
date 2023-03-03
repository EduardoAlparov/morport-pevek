import { Fancybox } from '@fancyapps/ui/dist/fancybox/fancybox.esm.js';

export default () => {
  const galleryButtons = document.querySelectorAll('.gallery__cell');

  if(galleryButtons.length < 1) {
    return;
  }

  console.log('fancybox');


  Fancybox.bind('[data-fancybox="gallery"]', {
    compact: false,
    idle: false,

    animated: false,
    showClass: false,
    hideClass: false,

    dragToClose: false,

    Images: {
      // Disable animation from/to thumbnail on start/close
      zoom: false,
    },

    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ['close'],
      },
    },

    Thumbs: {
      type: 'classic',
      Carousel: {
        center: function () {
          return this.contentDim > this.viewportDim;
        },
      },
    },

    Carousel: {
      // Remove the navigation arrows
      Navigation: false,
    },
  });
}
