export default () => {
  const searchLine = document.querySelector('.search-control');
  const searchInput = searchLine.querySelector('.search-control__input');
  const searchListWrapper = searchLine.querySelector('.search-control__values');


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

  if(searchInput) {
    searchInput.addEventListener('input', (e) => {
      if (e.target.value.length > 0) {
        searchListWrapper.innerHTML = '';

        let newList = document.createElement('div');
        newList.classList.add('search-control__values-list');

        searchListWrapper.append(newList);

        let newElement = document.createElement('a');
        newElement.classList.add('search-control__value');
        newElement.classList.add('select-box__option');
        newElement.innerHTML = e.target.value;
        newList.append(newElement);
      } else {
        searchListWrapper.innerHTML = '';
      }
    })
  }

}
