function changeText() {
  var factText = document.getElementById("fact-text");
  var facts = [
    "Wasabi bukanlah jenis lobak Jepang. Sebenarnya, itu adalah anggota keluarga Brassicaceae.",
    "Mie soba biasanya dimakan pada Malam Tahun Baru di Jepang.",
    "Unagi, atau belut air tawar, dianggap sebagai makanan yang meningkatkan stamina di Jepang, terutama selama musim panas yang panas.",
    "Tempura diyakini diperkenalkan ke Jepang oleh misionaris Portugis pada abad ke-16.",
    "Istilah 'sushi' mengacu pada nasi yang dibumbui yang digunakan dalam hidangan sushi, bukan ikan mentah yang sering dikaitkan dengannya.",
    "Mie instan pertama kali diciptakan oleh Momofuku Ando pada tahun 1958.",
    "Matcha, bubuk teh hijau halus, sering digunakan dalam upacara teh tradisional Jepang dan juga dalam berbagai makanan penutup dan minuman.",
    "Kari Jepang adalah hidangan populer di Jepang dan sangat berbeda dari kari India atau Thailand, dengan profil rasa uniknya sendiri.",
    "Sup miso adalah sup tradisional Jepang yang terbuat dari pasta kedelai yang difermentasi, sering disajikan sebagai hidangan pendamping dalam makanan.",
    "Sake Jepang, juga dikenal sebagai nihonshu, adalah anggur beras tradisional Jepang yang sering dinikmati pada acara khusus dan selama perayaan.",
    "Sebenarnya, sushi berasal dari Tiongkok dan teknik fermentasi ikan dalam beras sampai di Jepang pada abad ke-8 melalui Tiongkok.",
  ];
  var randomIndex = Math.floor(Math.random() * facts.length);

  factText.style.transition = "opacity 0.3s ease";
  factText.style.opacity = 0;

  setTimeout(function () {
    factText.innerText = facts[randomIndex];
    factText.style.opacity = 1;
  }, 300);
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
document.addEventListener("DOMContentLoaded", function() {
  const popup = document.getElementById("popup");
  const popupImage = document.getElementById("popupImage");
  const popupTitle = document.getElementById("popupTitle");
  const popupDescription = document.getElementById("popupDescription");
  const popupClose = document.querySelector(".close");
  const hiddenLinks = document.querySelectorAll(".menu-box a.hidden");

  hiddenLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior
      const imageSrc = this.querySelector("img").getAttribute("src");
      const title = this.getAttribute("data-title");
      const description = this.getAttribute("data-description");
      popupImage.setAttribute("src", imageSrc);
      popupTitle.textContent = title;
      popupDescription.textContent = description;
      popup.style.display = "block";
    });
  });

  popupClose.addEventListener("click", function() {
    popup.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});