function openModal() {
  document.getElementById("myModal").style.display = "block";
  // document.getElementById("fixingthenav").style.display = "none";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  // document.getElementById("fixingthenav").style.display = "block";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



function floarplanH(){
  document.getElementById("myModalFloor").style.display = "block";
}

function closeModalabc(){
  document.getElementById("myModalFloor").style.display = "none";
}

let slideIndexFloorabc = 1;
showSlidesFloor(slideIndexFloorabc);

// Next/previous controls
function plusSlidesFloor(n) {
  showSlidesFloor(slideIndexFloorabc += n);
}

// Thumbnail image controls
function currentFloor(n) {
  showSlidesFloor(slideIndexFloorabc = n);
}

function showSlidesFloor(n) {
  let j;
  let slidesFloor = document.getElementsByClassName("mySlidesFloor");
  var dotsabc = document.getElementsByClassName("demoFloor");
  if (n > slidesFloor.length) {slideIndexFloorabc = 1}
  if (n < 1) {slideIndexFloorabc = slidesFloor.length}
  for (j = 0; j < slidesFloor.length; j++) {
    slidesFloor[j].style.display = "none";
  }
  for(j = 0; j < dotsabc.length; j++) {
    dotsabc[j].className = dotsabc[j].className.replace(" active", "");
  }
  slidesFloor[slideIndexFloorabc - 1].style.display = "block";
  
}




function floarplanHyde(){
  document.getElementById("myModalFloorHyde").style.display = "block";
}

function closeModalabcd(){
  document.getElementById("myModalFloorHyde").style.display = "none";
}

let slideIndexFloorabcd = 1;
showSlidesFloorHyde(slideIndexFloorabcd);

// Next/previous controls
function plusSlidesFloorHyde(n) {
  showSlidesFloorHyde(slideIndexFloorabcd += n);
}

// Thumbnail image controls
function currentFloorHyde(n) {
  showSlidesFloorHyde(slideIndexFloorabcd = n);
}

function showSlidesFloorHyde(n) {
  let j;
  let slidesFloorHyde = document.getElementsByClassName("mySlidesFloorHyde");
  // var dotsabc = document.getElementsByClassName("demoFloor");
  if (n > slidesFloorHyde.length) {slideIndexFloorabcd = 1}
  if (n < 1) {slideIndexFloorabcd = slidesFloor.length}
  for (j = 0; j < slidesFloorHyde.length; j++) {
    slidesFloorHyde[j].style.display = "none";
  }
  slidesFloorHyde[slideIndexFloorabcd - 1].style.display = "block";
};


function displaymaster(){
   document.querySelector("#myModalMasterplan").style.display = "block";
}

function closeModalMasterplan(){
  document.querySelector("#myModalMasterplan").style.display = "none";
}

function displaymaster1(){
  document.querySelector("#myModalMasterplan1").style.display = "block";
}

function closeModalMasterplan1(){
  document.querySelector("#myModalMasterplan1").style.display = "none";
}


$(document).ready(function(){
  $('.customer-logos').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});

function autopopup(){
  setTimeout(function() {
    $('#exampleModal').modal();
}, 8000);
}
autopopup();

let win = $(window).width();
if(win < 420){
  $("#bc").click(function(){
    $("html, body" ).animate({scrollTop:1920}, 'slow');
    return false;
  });

  $("#cd").click(function(){
    $("html, body" ).animate({scrollTop:2730}, 'slow');
    return false;
  })
 
  $("#ij").click(function(){
    $("html, body" ).animate({scrollTop:3080}, 'slow');
    return false;
  });

  $("#ef").click(function(){
    $("html, body" ).animate({scrollTop:5030}, 'slow');
    return false;
  });

  $("#fg").click(function(){
    $("html, body" ).animate({scrollTop:5600}, 'slow');
    return false;
  });

  $("#gh").click(function(){
    $("html, body" ).animate({scrollTop:6420}, 'slow');
    return false;
  });
 
}
else {

  $("#bc").click(function(){
  
    $("html, body" ).animate({scrollTop:700}, 'slow');
    return false;
  });

  $("#cd").click(function(){
    
    $("html, body" ).animate({scrollTop:1170}, 'slow');
    return false;
  })
 
  $("#ij").click(function(){
   
    $("html, body" ).animate({scrollTop:1530}, 'slow');
    return false;
  });

  $("#ef").click(function(){
   
    $("html, body" ).animate({scrollTop:2130}, 'slow');
    return false;
  });

  $("#fg").click(function(){
    $("html, body" ).animate({scrollTop:2530}, 'slow');
    return false;
  });

  $("#gh").click(function(){

    $("html, body" ).animate({scrollTop:3320}, 'slow');
    return false;
  });
  

}
