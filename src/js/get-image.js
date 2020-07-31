import makeupGallery from './makeup-gallery';
import imgService from './imgService';

const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('input'),
  nextPage: document.querySelector('[next-page]'),
  titleQuery: document.querySelector('.title-query'),
};

refs.form.addEventListener('submit', handleSubmit);
refs.nextPage.addEventListener('click', getNextPage);

function handleSubmit(event) {
  // Предотвращаем поведение по умолчанию
  event.preventDefault();
  document.querySelector('.gallery').innerHTML = '';
  refs.nextPage.classList.remove('is-hidden');
  const textQuery = refs.input.value;
  refs.titleQuery.textContent = textQuery;
  imgService.query = textQuery;
  imgService.resetPage();
  imgService.getImages().then(makeupGallery);
  refs.form.reset();
}

function getNextPage() {
  imgService.getImages().then(makeupGallery);
}
