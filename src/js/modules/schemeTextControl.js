export default () => {
  const schemeWrapper = document.querySelector('.scheme__inner-wrapper');
  const schemeMobileText = document.querySelector('.scheme__mobile-desc');
  const schemeButton = document.querySelectorAll('.scheme__button');

  if(schemeWrapper && (window.matchMedia("(max-width: 991px)").matches)) {
    schemeWrapper.querySelectorAll('input[type="radio"]').forEach(input => {
      input.addEventListener('input', () => {
        if(getLabel(input.id).classList.contains('scheme__mask')) {
          schemeMobileText.innerHTML = '';
          schemeMobileText.innerHTML = getLabel(input.id).parentElement.querySelector('.scheme__desc-wrapper').outerHTML;
        }
      })
    })
  }

  if(schemeWrapper && !(matchMedia('(hover: none)').matches)) {
    schemeButton.forEach(btn => {
      btn.addEventListener('mouseover', () => {
        // btn.closest('.scheme__mask-wrapper').querySelector('.scheme__mask').style.opacity = '1';
        btn.closest('.scheme__mask-wrapper').querySelector('.scheme__mask').classList.add('_visible');

        btn.addEventListener('mouseout', () => {
          // btn.closest('.scheme__mask-wrapper').querySelector('.scheme__mask').style.opacity = '0';
          btn.closest('.scheme__mask-wrapper').querySelector('.scheme__mask').classList.remove('_visible');
        })
      })
    })
  }

  const getLabel = (labelFor, rootElement = document) =>
  rootElement.querySelector(`label[for="${labelFor}"]`);
}
