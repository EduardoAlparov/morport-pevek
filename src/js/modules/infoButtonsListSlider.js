export default () => {
  const infoNav = document.querySelector('.info__nav');

  if(!infoNav) {
    return;
  }

  let iniaitalActiveLink = infoNav.querySelector('.nav__item--active');
  // if(iniaitalActiveLink) {
  //   let iniaitalOffsetItem = iniaitalActiveLink.offsetLeft - 10;
  //   iniaitalActiveLink.closest('.nav__list').scrollLeft = iniaitalOffsetItem;
  // }

  infoNav.querySelectorAll('.nav__item').forEach( item => {
    item.addEventListener('click', (e) => {
      infoNav.querySelectorAll('.nav__item').forEach( i => {
        i.classList.remove('nav__item--active');
      })

      item.classList.add('nav__item--active');

      let offsetItem = item.offsetLeft - 12;

      item.closest('.nav__list').scrollLeft = offsetItem;
    })
  })
}
