import { br } from '../../constants/index.js';
import ImageElem from './common/ImageElem.js';

function btnUploadImg() {
  let element = document.createElement('button');

  element.setAttribute('id', 'btnUploadImg');
  element.setAttribute('class', 'button -primary');
  element.innerHTML = 'Upload image';

  return element;
}

function btnSave() {
  let element = document.createElement('button');

  element.setAttribute('id', 'btnSave');
  element.setAttribute('class', 'button -success');
  element.innerHTML = 'Add image to the list';
  element.disabled = true;

  return element;
}

function textArea() {
  let element = document.createElement('textarea');

  element.setAttribute('id', 'descriptionImg');
  element.setAttribute('maxlength', 300);
  element.setAttribute('cols',43);
  element.setAttribute('rows', 7);
  element.setAttribute('placeholder', 'Describe this picture...');
  element.setAttribute('style', 'margin-top: 8px;margin-bottom: 6px;border-radius: 3px;font-family: "Raleway";max-width: 314px;')

  return element;

}

function inputId() {
  let element = document.createElement('input');

  element.setAttribute('id', 'idItem');
  element.setAttribute('type', 'hidden');
  return element;
}

function inputFile() {
  let element = document.createElement('input');

  element.setAttribute('id','getImageFromPc');
  element.setAttribute('type','file');
  element.setAttribute('accept','image/x-png,image/gif,image/jpeg');
  element.setAttribute('style','display:none');

  return element;
}

function Form() {
  let element = document.createElement('div');
  let divSetImage = document.createElement('div');
  let divSetDescription = document.createElement('div');
  let formItems = document.createElement('form');

  element.setAttribute('class', 'col-6');

  formItems.appendChild

  divSetImage.setAttribute('id', 'setImage');
  divSetImage.setAttribute('style', 'display:block');
  divSetImage.appendChild(ImageElem());
  divSetImage.appendChild(btnUploadImg());

  divSetDescription.setAttribute('id', 'setDescription');
  divSetDescription.setAttribute('style', 'display:none');
  divSetDescription.appendChild(inputId());
  divSetDescription.appendChild(ImageElem(null,'prevImgForm', 'cursor: pointer;max-width: 320px;max-height: 320px;'));
  divSetDescription.appendChild(br());
  divSetDescription.appendChild(inputFile());
  divSetDescription.appendChild(textArea());
  divSetDescription.appendChild(btnSave());

  const h2 = '<h2>Upload an Image</h2>';
  const p = '<p><small>Select an image from your pc, set a description and save.</small></p>';

  element.innerHTML = `${h2}${p}`;
  element.appendChild(divSetImage);
  element.appendChild(br());
  element.appendChild(divSetDescription);


  return element;

}

export default Form;