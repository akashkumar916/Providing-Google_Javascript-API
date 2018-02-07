var t=1;
p(t);
function s(n)
{ p(t+=n);
}
function c(n)
{
  p(t=n);
  }
  function p(n)
  {
  
  var r=document.getElementsByClassName("mySlides");
  var dots=document.getElementsByClassName("dot")
  if(n>r.length)
  {t=1;}
  if(n<1)
  {t=r.length;}
  var i;
  for(i=0;i<r.length;i++)
  {
  r[i].style.display="none";}
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  r[t-1].style.display ="block";
    dots[t-1].className += " active";
  
  
  }
  setInterval(P,200);
 
 function openNav1() {
    document.getElementById("my1").style.display = "block";
}


function closeNav1() {
    document.getElementById("my1").style.display= "none";
}

 function openNav2() {
    document.getElementById("my2").style.display = "block";
}


function closeNav2() {
    document.getElementById("my2").style.display= "none";
}

 function openNav3() {
    document.getElementById("my3").style.display = "block";
}


function closeNav3() {
    document.getElementById("my3").style.display= "none";
}
 function openNav4() {
    document.getElementById("my4").style.display = "block";
}


function closeNav4() {
    document.getElementById("my4").style.display= "none";
}
 function openNav5() {
    document.getElementById("my5").style.display = "block";
}


function closeNav5() {
    document.getElementById("my5").style.display= "none";
}
 function openNav6() {
    document.getElementById("my6").style.display = "block";
}


function closeNav6() {
    document.getElementById("my6").style.display= "none";
}
 function openNav7() {
    document.getElementById("my7").style.display = "block";
}


function closeNav7() {
    document.getElementById("my7").style.display= "none";
}
 function openNav8() {
    document.getElementById("my8").style.display = "block";
}


function closeNav8() {
    document.getElementById("my8").style.display= "none";
}
 function openNav9() {
    document.getElementById("my9").style.display = "block";
}


function closeNav9() {
    document.getElementById("my9").style.display= "none";
}
 function openNav10() {
    document.getElementById("my10").style.display = "block";
}


function closeNav10() {
    document.getElementById("my10").style.display= "none";
}
function openNav11() {
    document.getElementById("my11").style.display = "block";
}


function closeNav11() {
    document.getElementById("my11").style.display= "none";
}
function openNav12() {
    document.getElementById("my12").style.display = "block";
}


function closeNav12() {
    document.getElementById("my12").style.display= "none";
}
function openNav13() {
    document.getElementById("my13").style.display = "block";
}


function closeNav13() {
    document.getElementById("my13").style.display= "none";
}
function openNav14() {
    document.getElementById("my14").style.display = "block";
}


function closeNav14() {
    document.getElementById("my14").style.display= "none";
}
function openNav15() {
    document.getElementById("my15").style.display = "block";
}


function closeNav15() {
    document.getElementById("my15").style.display= "none";
}
function openNav16() {
    document.getElementById("my16").style.display = "block";
}


function closeNav16() {
    document.getElementById("my16").style.display= "none";
}
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000);
}
  