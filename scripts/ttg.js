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
      entry.target.classList.add('show-2');
    } else {
      entry.target.classList.remove('show-2');
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
const hiddendecElements = document.querySelectorAll('.hidden-2')
const hiddenbtnElements = document.querySelectorAll('.hidden-3');
hiddenbtnElements.forEach((el)=>observer3.observe(el));
hiddenElements.forEach((el)=>observer.observe(el));
hiddendecElements.forEach((el)=>observerdec.observe(el));