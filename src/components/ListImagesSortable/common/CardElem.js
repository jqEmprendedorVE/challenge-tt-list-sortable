import { br } from '../../../constants/index.js';
import ImageElem from './ImageElem.js';

function CardElem({downloadURL, description}) {
  let element = document.createElement('figure');
  let p = document.createElement('p')
  let style = `
    width: 100%;
    height: 100%;
    margin-top: 0px;
    margin-left: 0px;
    margin-bottom: 0px;
    margin-right: 0px;
    max-width: 320px;
    border-radius: 3px;
    padding: 10px;
    border: 1px solid #c6c6c6;
    margin-bottom: 20px;
  `;

  element.setAttribute('style', style);

  p.innerHTML = `<small>${description}</small><small><br><a><i class="fas fa-pen"></i></a>&nbsp;&nbsp;&nbsp;<a><i class="fas fa-trash"></i></a></small>`;

  element.appendChild(ImageElem(downloadURL));
  element.appendChild(p);

  return element;
}

export default CardElem;