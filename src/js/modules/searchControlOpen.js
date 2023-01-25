export default () => {
  const searchLine = document.querySelector('.search-control');
  const searchInput = searchLine.querySelector('.search-control__input');
  const searchListWrapper = searchLine.querySelector('.search-control__values-list');

  searchLine.closest('.page-wrapper').addEventListener('click', (e) => {
    if (e.target.closest('.search-control__btn') &&
    !e.target.closest('.search-control__btn').disabled &&
    !searchLine.classList.contains('search-control--opened')) {
      searchLine.classList.remove('search-control--closed');
      searchLine.classList.add('search-control--opened');

      e.target.closest('.search-control__btn').disabled = true;

      setTimeout(() => {
        e.target.closest('.search-control__btn').disabled = false;
      }, 600);

    } else if ((e.target.closest('.search-control__btn') &&
    searchLine.classList.contains('search-control--opened') &&
    !e.target.closest('.search-control__btn').disabled) |
    !e.target.closest('.search-control')) {
      searchInput.value = '';
      searchListWrapper.innerHTML = '';
      searchLine.classList.add('search-control--closed');

      if (e.target.closest('.search-control__btn')) {
        e.target.closest('.search-control__btn').disabled = true;

        setTimeout(() => {
          e.target.closest('.search-control__btn').disabled = false;
        }, 600);
      }


      setTimeout(() => {
        searchLine.classList.remove('search-control--opened');
      }, 400);
    }
  })
}
