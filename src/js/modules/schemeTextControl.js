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

export default () => {
  const schemeWrapper = document.querySelector('.scheme__inner-wrapper');
  const schemeMobileText = document.querySelector('.scheme__mobile-desc');
  const schemeButton = document.querySelectorAll('.scheme__button');
  const emptyInput = document.getElementById('empty');
  const schemeItemsSliders = document.querySelectorAll('.js-swiper-slider');

  if(!schemeItemsSliders.length) return;
  
  schemeItemsSliders.forEach(item => {
    const schemeItemsSwiper = new Swiper(item, {
      spaceBetween: 4,
      slidesPerView: 'auto',

      navigation: {
        hideOnClick: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  })

  if(schemeWrapper && (window.matchMedia("(max-width: 991px)").matches)) {
    schemeWrapper.querySelectorAll('input[type="radio"]').forEach(input => {
      input.addEventListener('change', () => {
        if(getLabel(input.id).classList.contains('scheme__mask')) {
          schemeMobileText.innerHTML = '';
          schemeMobileText.innerHTML = getLabel(input.id).parentElement.querySelector('.scheme__desc-wrapper').outerHTML;

          let schemeItemsSliders = document.querySelectorAll('.js-swiper-slider');
          schemeItemsSliders.forEach(item => {
            const schemeItemsSwiper = new Swiper(item, {
              spaceBetween: 4,
              slidesPerView: 'auto',
        
              navigation: {
                hideOnClick: true,
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            })
          })
        
        }
      })
    })

    schemeWrapper.addEventListener('click', (e) => {
      if (e.target.closest('.scheme__pseudo-button')) {
        emptyInput.checked = true;
        schemeMobileText.innerHTML = '';
      }
    })
  }

  if(schemeWrapper && !(matchMedia('(hover: none)').matches)) {
    schemeButton.forEach(btn => {
      btn.addEventListener('mouseover', () => {
        btn.closest('.scheme__mask-wrapper').querySelector('.scheme__mask').classList.add('_visible');

        btn.addEventListener('mouseout', () => {
          btn.closest('.scheme__mask-wrapper').querySelector('.scheme__mask').classList.remove('_visible');
        })
      })
    })
  }

  const getLabel = (labelFor, rootElement = document) =>
  rootElement.querySelector(`label[for="${labelFor}"]`);
}
