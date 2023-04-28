export default () => {
  const modalCont = document.querySelector('.modal__container');
  const modalTitle = document.querySelector('.modal__title');
  const canHover = window.matchMedia('(any-hover: none)').matches;
  const initialName = modalTitle.innerHTML;

  if (canHover) {
    modalCont.querySelectorAll('.nav__link').forEach(link => {
      if( link.innerHTML === initialName ) {
        let anchor = link.closest('.nav').querySelector('.nav__icon')

        link.classList.add('nav__link--active');
        link.parentElement.prepend(anchor.cloneNode(true));
      }
    })
  }

  if(window.matchMedia("(min-width: 1280px)").matches) {
    modalCont.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('mouseover', (e) => {
        modalTitle.innerHTML = '';
        modalTitle.innerHTML = e.target.innerHTML;
        modalTitle.classList.add("fade-in");

        setTimeout(function () {
          modalTitle.classList.remove("fade-in");
        }, 1000);

        e.target.addEventListener('mouseout', (event) => {
          modalTitle.innerHTML = '';
          modalTitle.innerHTML = initialName;
          modalTitle.classList.add("fade-in");

          setTimeout(function () {
            modalTitle.classList.remove("fade-in");
          }, 1000);
        })
      })
    })
  }
 }
