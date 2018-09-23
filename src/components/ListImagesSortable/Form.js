import { br } from '../../constants/index.js';
import ImageElem from './common/ImageElem.js';

const imageForUpload = 'https://www.schluga.com/fileadmin/_processed_/7/1/csm_Aktiv_im_Sommer_7ca702842a.jpg';

function btnUploadImg() {
  let element = document.createElement('button');

  element.setAttribute('class', 'button -primary');
  element.innerHTML = 'Upload image';

  return element;
}

function textArea() {
  let element = document.createElement('textarea');

  element.setAttribute('name', 'post');
  element.setAttribute('maxlength', 300);
  element.setAttribute('cols',43);
  element.setAttribute('rows', 10);

  return element;

}

function btnSave() {
  let element = document.createElement('button');

  element.setAttribute('class', 'button -success');
  element.innerHTML = 'Add image to list';

  return element;
}

function Form() {
  let element = document.createElement('div');
  element.setAttribute('class', 'col-6');

  const h2 = '<h2>Upload an Image</h2>';
  const p = '<p><small>Select an image from your pc, set a description and save.</small></p>';

  element.innerHTML = `${h2}${p}`;
  element.appendChild(ImageElem());
  element.appendChild(btnUploadImg());
  element.appendChild(br());
  element.appendChild(ImageElem(imageForUpload));
  element.appendChild(textArea());
  element.appendChild(btnSave());


  return element;

}

export default Form;