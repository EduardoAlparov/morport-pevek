export default () => {
  const galleryButtons = document.querySelectorAll('.gallery__cell');

  if(galleryButtons.length < 1) {
    return;
  }

  galleryButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
    })
  })
}
