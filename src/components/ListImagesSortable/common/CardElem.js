import { br } from '../../../constants/index.js';
import ImageElem from './ImageElem.js';
import { deleteItem } from '../../../domain/ListImagesSortable/ListEvents.js';

function actionElem(className, _onClick) {
  let element = document.createElement('a');
  let i = document.createElement('i')

  i.setAttribute('class', className);
  i.setAttribute('style', 'padding-right: 10px;')

  element.appendChild(i);
  element.onclick = _onClick;

  return element;

}

function CardElem({id, downloadURL, description}) {
  let element = document.createElement('figure');
  let p = document.createElement('p');
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

  p.innerHTML = `<small>${description}</small></br>`;
  p.appendChild(actionElem('fas fa-pen',()=>{}));
  p.appendChild(actionElem('fas fa-trash',()=>{deleteItem(id)}));

  element.appendChild(ImageElem(downloadURL));
  element.appendChild(p);

  return element;
}

export default CardElem;