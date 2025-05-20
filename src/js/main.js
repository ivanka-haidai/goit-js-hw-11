
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {getImagesByQuery} from "./pixabay-api";
import {createGallery, clearGallery, showLoader, hideLoader} from "./render-functions";

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();
  clearGallery();
showLoader();
  try {
    const searchQuery = event.target.elements['search-text'].value.trim();
    const response = await getImagesByQuery(searchQuery);
    if (response.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 3000,
      });
      return;
    }
    createGallery(response.hits);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
      timeout: 3000,
    });
  } finally {
    
    hideLoader();
  }
}