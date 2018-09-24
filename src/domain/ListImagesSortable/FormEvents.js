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

export default function initFormEvents() {
  btnUploadImg.addEventListener('click', () => {
    getImageFromPc.click();
  });
  
  btnSave.addEventListener('click', () => {
    setDescription.setAttribute('style', 'display:none');
    setImage.setAttribute('style', 'display:block');
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