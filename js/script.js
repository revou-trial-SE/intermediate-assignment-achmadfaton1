let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  

  setTimeout(showSlides, 2000);
}

var typed = new Typed('#username', {
  strings: ["Sales Konsultan","Web Developer","Desaigner"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

var typed = new Typed('#cash', {
  strings: ["Cash","Credit"],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1000,
  loop: true,
});