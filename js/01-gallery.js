import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);
galleryContainer.addEventListener('click', ImgClick);


function createMarkup(items) {
  return items.map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}


const instance = basicLightbox.create(
    `<img width="1280" height="auto" src="">`,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', onEscKeyClick);
      },
      onClose: (instance) => {
        window.removeEventListener('keydown', onEscKeyClick);
      },
    }
  );
  
  function ImgClick(e) {
    e.preventDefault();
    const datasetSource = e.target.dataset.source;
    if (!datasetSource) return;
    instance.element().querySelector('img').src = datasetSource;
    instance.show();
  }
  
  function onEscKeyClick(e) {
    if (e.code !== 'Escape') return;
    instance.close();
  }






