import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const gallaryMarkup = createGalleryItem(galleryItems);

galleryRef.insertAdjacentHTML("afterbegin", gallaryMarkup);

galleryRef.addEventListener('click', onImageClick);

function createGalleryItem(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a>
        </div>`
    })
        .join('');
}

function onImageClick(event) {
event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const value = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${value}" width="800" height="600">`);
  instance.show();
}
