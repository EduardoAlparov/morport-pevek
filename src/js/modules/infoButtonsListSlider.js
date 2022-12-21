export default () => {
  const infoNav = document.querySelector('.info__nav');

  if(!infoNav) {
    return;
  }

  infoNav.querySelectorAll('.nav__item').forEach( item => {
    item.addEventListener('click', (e) => {
      infoNav.querySelectorAll('.nav__item').forEach( i => {
        i.classList.remove('nav__item--active');
      })

      item.classList.add('nav__item--active');

      let offsetItem = item.offsetLeft;

      item.closest('.nav__list').scrollLeft = offsetItem;
    })
  })
}
