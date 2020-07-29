import makeupGallery from './makeup-gallery';
import getImage from './fetch';

let query = '';
let page = 1;

const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('input'),
  nextPage: document.querySelector('[next-page]'),
  titleQuery: document.querySelector('.title-query'),
};

// console.dir(refs.search);
refs.form.addEventListener('submit', handleSubmit);
refs.nextPage.addEventListener('click', getNextPage);

function handleSubmit(event) {
  // Предотвращаем поведение по умолчанию
  event.preventDefault();
  query = refs.input.value;
  refs.titleQuery.textContent = query;
  document.querySelector('.gallery').innerHTML = '';
  getImage(query).then(makeupGallery);
  refs.form.reset();
}

function getNextPage() {
  page++;
  getImage(query, page).then(makeupGallery);
}
