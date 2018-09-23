import { image320 } from '../../../constants/index.js';

function ImageElem(image) {
  if(!image) image = image320;
  let element = document.createElement('img');

  element.setAttribute('src', image);

  return element;
}

export default ImageElem;