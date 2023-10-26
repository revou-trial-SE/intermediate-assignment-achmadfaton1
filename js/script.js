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


function onSubmit() {
  let name = document.forms["myForm"]["name"].value;
  let birthdate = document.forms["myForm"]["date"].value;
  let pesan = document.forms["myForm"]["message"].value;
  let gender = document.forms["myForm"]["gender"].value;
  let form = document.forms["myForm"]
  console.log(form);

  if(name==""|| birthdate==""|| gender=="" ||pesan==""){
    alert("tidak boleh ada form yang kosong");
    return false;
  }

  else{
  let display = document.getElementById("submitdisplay")
  display.innerHTML = `<b>Message sent!</b></br> <b>Nama:</b>${name}</br> <b>Tanggal Lahir:</b>${birthdate}</br> <b>Jenis Kelamin:</b>${gender}</br> <b>Pesan:</b>${pesan}`
}}