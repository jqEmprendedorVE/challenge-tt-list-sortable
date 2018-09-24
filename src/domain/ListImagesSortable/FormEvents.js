import CardElem from '../../components/ListImagesSortable/common/CardElem.js';
import { Item } from '../../components/ListImagesSortable/List.js';
import { loadItemsforList } from './ListEvents.js';
import { List } from '../../components/ListImagesSortable/List.js';


function readURL() {
  if (getImageFromPc.files && getImageFromPc.files[0]) {
    let file = getImageFromPc.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
      prevImgForm.setAttribute('src', e.target.result);
    };

    if(file)
      reader.readAsDataURL(file);
  }
}

const error = error => {};

export default function initFormEvents(fb) {
  let storage  = fb.storage().ref();
  let database = fb.db()

  btnUploadImg.addEventListener('click', () => {
    getImageFromPc.click();
  });
  
  btnSave.addEventListener('click', () => {
    let file = getImageFromPc.files[0];
    let uploadTask = storage.child(`items/${file.name}`).put(file);

    uploadTask.on('state_changed', 
    null,
    null,
    () => {
      uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
        database.ref('items/').push({
          downloadURL,
          description: descriptionImg.value
        }).then(() => {
          if(['null', 'undefined'].indexOf(typeof listItems) === -1){
            let count = listItems.querySelectorAll("li").length + 1
            let item = {downloadURL, description: descriptionImg.value, order: count};
            listItems.appendChild(Item(CardElem(item), item));
            showCountItem.innerHTML = `<small>${count} items listed.</small>`
          } else {
            loadItemsforList(rowMain, List, fb);
          }

          descriptionImg.value = '';
          getImageFromPc.value = '';
          setDescription.setAttribute('style', 'display:none');
          setImage.setAttribute('style', 'display:block');
        })
      });
    });
  });

  descriptionImg.addEventListener('keyup', () => {
    btnSave.disabled = descriptionImg.value.length === 0;
  });

  prevImgForm.addEventListener('click', () => {
    getImageFromPc.click();
  })

  getImageFromPc.addEventListener('change', (e) => {
    readURL();
    setImage.setAttribute('style', 'display:none');
    setDescription.setAttribute('style', 'display:block');
  })
};