// img.dataSource = bigImage
import galleryTemplate from '../templates/gallery.hbs';

function makeupGallery(items) {
  const makeup = galleryTemplate(items);
  document.querySelector('.gallery').insertAdjacentHTML('beforeend', makeup);
}

export default makeupGallery;
