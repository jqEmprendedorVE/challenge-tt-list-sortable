import { br, hr } from '../../../constants/index.js';
import ImageElem from './common/ImageElem.js';

function CardElem(image, text) {
  let element = document.createElement('figure');
  let p = document.createElement('p')

  p.innerHTML = 'Algo de texto de descripción';

  element.appendChild(ImageElement());
  element.appendChild(p);

  return element;
}

export default CardElem;