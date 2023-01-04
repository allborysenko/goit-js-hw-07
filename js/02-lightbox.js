import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const gallaryMarkup = createGalleryItem(galleryItems);

galleryRef.insertAdjacentHTML("afterbegin", gallaryMarkup);

function createGalleryItem(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<a class="gallery__link" href="${original}">
                    <img class="gallery__image" 
                    src="${preview}" 
                    alt="${description}"
                        </a>`
    })
        .join('');
}

new SimpleLightbox(".gallery a", {
  captionsData: 'alt',
  captionDelay: 250,
});

