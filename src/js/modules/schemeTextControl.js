export default () => {
  const schemeWrapper = document.querySelector('.scheme__inner-wrapper');
  const schemeMobileText = document.querySelector('.scheme__mobile-desc');
  const schemeButton = document.querySelectorAll('.scheme__button');
  const emptyInput = document.getElementById('empty');

  if(schemeWrapper && (window.matchMedia("(max-width: 991px)").matches)) {
    schemeWrapper.querySelectorAll('input[type="radio"]').forEach(input => {
      input.addEventListener('change', () => {
        if(getLabel(input.id).classList.contains('scheme__mask')) {
          schemeMobileText.innerHTML = '';
          schemeMobileText.innerHTML = getLabel(input.id).parentElement.querySelector('.scheme__desc-wrapper').outerHTML;
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
