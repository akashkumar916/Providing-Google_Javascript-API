var slideIndex = 0;
showSlides();



function showSlides( n) {
  var i;
  var slides = document.getElementsByClassName("slider");
 
  if (slideIndex > slides.length) {slideIndex = 1} 

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
 slideIndex++;
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 2000);
}
