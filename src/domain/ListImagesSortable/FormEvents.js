import CardElem from '../../components/ListImagesSortable/common/CardElem.js';
import { Item } from '../../components/ListImagesSortable/List.js';
import { loadItemsforList } from './ListEvents.js';
import { List } from '../../components/ListImagesSortable/List.js';

function readURL() {
  if (getImageFromPc.files && getImageFromPc.files[0]) {
    let file = getImageFromPc.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
      let image = new Image();
      image.src = e.target.result;
      image.onload = function () {
          var height = this.height;
          var width = this.width;
          if (height !== 320 || width !==320) {
              cleanForm('This image must has 320x320 dimension. Select other, please!');
          }
      };
      prevImgForm.setAttribute('src', e.target.result);
    };

    if(file)
      reader.readAsDataURL(file);
  }
}

const errorHandle = error => {alert('A error is detected, please try again')};

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

      cleanForm('The new item was added in the bottom of list');

    })
  }).catch(errorHandle);
}

const onCompleteEditItem = (database, item, fb) => {
  database.ref(`items/${idItem.value}`).update(item)
  .then(()=>{
    rowMain.removeChild(document.getElementById('listColumn'));
    loadItemsforList(rowMain, List, fb);
    cleanForm('Item updated');
  });
}

const cleanForm = (noti) => {
  descriptionImg.value = '';
  getImageFromPc.value = '';
  idItem.value = '';
  setDescription.setAttribute('style', 'display:none');
  setImage.setAttribute('style', 'display:block');
  alert(noti);  
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
    let file, uploadTask;

    if(isEdit){
      if (getImageFromPc.files && getImageFromPc.files[0]){
        file = getImageFromPc.files[0];
        uploadTask = storage.child(`items/${file.name}`).put(file);

        uploadTask.on(
          'state_changed', 
          ()=>{},
          e=>{console.log(e)},
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              onCompleteEditItem(database, {downloadURL, description: descriptionImg.value}, fb);
            }).catch(errorHandle);
          }
        );
      } else {
        onCompleteEditItem(database, {description: descriptionImg.value}, fb);
      }
    } else {
      file = getImageFromPc.files[0];
      uploadTask = storage.child(`items/${file.name}`).put(file);

      uploadTask.on(
        'state_changed', 
        ()=>{},
        e=>{console.log(e)},
        onCompleteNewItem(uploadTask, database)
      );
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