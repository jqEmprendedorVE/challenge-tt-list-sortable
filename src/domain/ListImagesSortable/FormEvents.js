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

const onCompleteNewItem = (uploadTask, database) => {
  let count = typeof listItems !== 'undefined' ? listItems.querySelectorAll("li").length : 0;
  uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
    let newItem = database.ref('items').push();

    newItem.set({
      downloadURL,
      description: descriptionImg.value,
      order: count
    }).then(() => {
      if(['null', 'undefined'].indexOf(typeof listItems) === -1){
        let item = {id: newItem.key,downloadURL, description: descriptionImg.value, order: count};
        listItems.appendChild(Item(CardElem(item), item));
        showCountItem.innerHTML = `<small>${count+1} items listed.</small>`
      } else {
        loadItemsforList(rowMain, List, fb);
      }

      descriptionImg.value = '';
      getImageFromPc.value = '';
      idItem.value = '';
      setDescription.setAttribute('style', 'display:none');
      setImage.setAttribute('style', 'display:block');
      alert('The new item was added in the bottom of list');
    })
  });
} 

export default function initFormEvents(fb) {
  let storage  = fb.storage().ref();
  let database = fb.db()

  btnUploadImg.addEventListener('click', () => {
    idItem.value = '';
    getImageFromPc.click();
  });
  
  btnSave.addEventListener('click', () => {
    const isEdit = idItem.value.length !== 0;
    btnSave.disabled = true;
    let file = getImageFromPc.files[0];
    let uploadTask = storage.child(`items/${file.name}`).put(file);

    if(isEdit){

    } else {
      uploadTask.on('state_changed', 
      ()=>{},
      e=>{console.log(e)},
      onCompleteNewItem(uploadTask, database));
    }
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