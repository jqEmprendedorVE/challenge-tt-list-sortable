import { br } from '../../constants/index.js';
import ImageElem from './common/ImageElem.js';

const imageForUpload = 'https://www.schluga.com/fileadmin/_processed_/7/1/csm_Aktiv_im_Sommer_7ca702842a.jpg';

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

  return element;
}

function textArea() {
  let element = document.createElement('textarea');

  element.setAttribute('name', 'post');
  element.setAttribute('maxlength', 300);
  element.setAttribute('cols',43);
  element.setAttribute('rows', 7);
  element.setAttribute('placeholder', 'Describe this picture...');
  element.setAttribute('style', 'margin-top: 8px;border-radius: 3px;font-family: "Raleway";')

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
  divSetDescription.appendChild(ImageElem(null,'prevImgForm'));
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