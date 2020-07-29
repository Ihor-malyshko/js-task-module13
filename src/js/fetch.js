// const page = 1;
// const query = 'pen';

function getImages(query = 'pen', page = 1) {
  const myKey = '17697395-d82fa808be968b3a5a71f0627';

  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${myKey}`;

  return fetch(url)
    .then(res => res.json())
    .then(({ hits }) => hits);
}

export default getImages;
