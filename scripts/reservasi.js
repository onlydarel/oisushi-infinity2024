let selectedImage = null;

function selectImage(img) {
  if (selectedImage === img) {
    // Deselect the image if it's already selected
    img.classList.remove('selected');
    selectedImage = null;
  } else {
    // Deselect the previously selected image (if any)
    if (selectedImage) {
      selectedImage.classList.remove('selected');
    }

    // Select the clicked image
    img.classList.add('selected');
    selectedImage = img;
  }
}


let selectedLocation = null;

function selectLocation(location) {
  if (selectedLocation) {
    selectedLocation.classList.remove('selected');
  }
  
  location.classList.add('selected');
  selectedLocation = location;
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const observerdec = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show-dec');
    } else {
      entry.target.classList.remove('show-dec');
    }
  });
});

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show-3');
    } else {
      entry.target.classList.remove('show-3');
    }
  });
});



const hiddenElements = document.querySelectorAll('.hidden');
const hiddendecElements = document.querySelectorAll('.hidden-dec')
const hiddenbtnElements = document.querySelectorAll('.hidden-3');
hiddenbtnElements.forEach((el)=>observer3.observe(el));
hiddenElements.forEach((el)=>observer.observe(el));
hiddendecElements.forEach((el)=>observerdec.observe(el));

function masuk() {

  swal({

      title: "Selamat!",

      text: "Reservasi anda Berhasil!" ,

      icon: "success",

      button: true

  });

}
