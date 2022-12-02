export default () => {
  const canHover = window.matchMedia('(hover: hover)').matches;

  if(document.querySelectorAll('.nav__link').length < 1) {
    return;
  }

  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('mouseover', (e) => {

      if(!canHover && e.target.closest('.modal__nav')) {
        return;
      }

      e.target.closest('.nav').querySelector('.nav__icon').style.top = `${e.target.offsetTop}px`;
      e.target.closest('.nav').querySelector('.nav__icon').style.opacity = '1';

      link.addEventListener('mouseout', (e) => {
        e.target.closest('.nav').querySelector('.nav__icon').style.opacity = '0';
      })
    })
  })
}
