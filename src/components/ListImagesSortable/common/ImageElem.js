import { image320 } from '../../../constants/index.js';

function ImageElem(image, id) {
  if(!image) image = image320;
  let element = document.createElement('img');

  element.setAttribute('src', image);

  if(id)
    element.setAttribute('id',id)

  return element;
}

export default ImageElem;