export default () => {
  const schemeWrapper = document.querySelector('.scheme__inner-wrapper')
  const schemeMobileText = document.querySelector('.scheme__mobile-desc')

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

  const getLabel = (labelFor, rootElement = document) =>
  rootElement.querySelector(`label[for="${labelFor}"]`);
}
