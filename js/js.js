
// Show Home Image

function showHome() {
  var homeImg = document.getElementById("HomeImg");
  homeImg.style.display = "block";
  var i;
  var x = document.getElementsByClassName("mainframe-mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  var hideArwR = document.getElementById("hideArwR")
  hideArwR.style.display = "none";
  var hideArwL = document.getElementById("hideArwL")
  hideArwL.style.display = "none";
  evacswitchoff()
  document.getElementById("highlightHm").style.backgroundColor = "yellow";
  document.getElementById("highlightF1").style.backgroundColor = "transparent";
  document.getElementById("highlightF2").style.backgroundColor = "transparent";
  document.getElementById("highlightF3").style.backgroundColor = "transparent";
}

// Go through all floors
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mainframe-mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
  var homeImg = document.getElementById("HomeImg");
  homeImg.style.display = "none";
}

// Show level1
function showFloor1() {
  hideLeftArrow();
  showDivs(slideIndex = 7);
  // Highlight current floor
  document.getElementById("highlightHm").style.backgroundColor = "transparent";
  document.getElementById("highlightF1").style.backgroundColor = "yellow";
  document.getElementById("highlightF2").style.backgroundColor = "transparent";
  document.getElementById("highlightF3").style.backgroundColor = "transparent";
}
// Show level2
function showFloor2() {
  hideLeftArrow();
  showDivs(slideIndex = 3);
  // Highlight current floor
  document.getElementById("highlightHm").style.backgroundColor = "transparent";
  document.getElementById("highlightF1").style.backgroundColor = "transparent";
  document.getElementById("highlightF2").style.backgroundColor = "yellow";
  document.getElementById("highlightF3").style.backgroundColor = "transparent";
}
// Show level3
function showFloor3() {
  hideLeftArrow();
  showDivs(slideIndex = 5);
  // Highlight current floor
  document.getElementById("highlightHm").style.backgroundColor = "transparent";
  document.getElementById("highlightF1").style.backgroundColor = "transparent";
  document.getElementById("highlightF2").style.backgroundColor = "transparent";
  document.getElementById("highlightF3").style.backgroundColor = "yellow";
}

// evacuation plan switch on and off hover version
/*function mouseOver() {
    document.getElementById("floor1Img").src = "images/evac1L.png";
}
function mouseOut() {
    document.getElementById("floor1Img").src = "images/LibFloor1L.png";
}*/

// evacuation plan switch on and off button version
function evacswitchon() {
    document.getElementById("floor1Img").src = "images/evac1L.png";
    document.getElementById("floor1ImgR").src = "images/evac1R.png";
    document.getElementById("floor2Img").src = "images/evac2L.png";
    document.getElementById("floor2ImgR").src = "images/evac2R.png";
    document.getElementById("floor3Img").src = "images/evac3L.png";
    document.getElementById("floor3ImgR").src = "images/evac3R.png";
    var hideEvacOn = document.getElementById("hideEvacOn")
    hideEvacOn.style.display = "none";
    var hideEvacOff = document.getElementById("hideEvacOff")
    hideEvacOff.style.display = "block";
}

function evacswitchoff() {
    document.getElementById("floor1Img").src = "images/LibFloor1L.png";
    document.getElementById("floor1ImgR").src = "images/LibFloor1R.png";
    document.getElementById("floor2Img").src = "images/LibFloor2L.png";
    document.getElementById("floor2ImgR").src = "images/LibFloor2R.png";
    document.getElementById("floor3Img").src = "images/LibFloor3L.png";
    document.getElementById("floor3ImgR").src = "images/LibFloor3R.png";
    var hideEvacOn = document.getElementById("hideEvacOn")
    hideEvacOn.style.display = "block";
    var hideEvacOff = document.getElementById("hideEvacOff")
    hideEvacOff.style.display = "none";
}

// Hide Arrow
function hideRightArrow() {
  var hideArwR = document.getElementById("hideArwR")
  hideArwR.style.display = "none";
  var hideArwL = document.getElementById("hideArwL")
  hideArwL.style.display = "block";
}
// Hide Arrow, also sets to default
function hideLeftArrow() {
  var hideArwR = document.getElementById("hideArwR")
  hideArwR.style.display = "block";
  var hideArwL = document.getElementById("hideArwL")
  hideArwL.style.display = "none";
}

// Set main image to home page
showHome();

//popup test
/*function popup() {
  var pop = document.getElementById("poppop")
  pop.classList.toggle("show");
}*/



// hamburger menu
/*var button = document.getElementById('hamburger-menu'),
    span = button.getElementsByTagName('span')[0];

button.onclick =  function() {
  span.classList.toggle('hamburger-menu-button-close');
};
//$('#hamburger-menu').on('click', toggleOnClass);

function toggleOnClass(event) {
  var toggleElementId = '#' + $(this).data('toggle'),
  element = $(toggleElementId);
  element.toggleClass('on');
}*/
  // close hamburger menu after click a //
//$( '.menu li a' ).on("click", function(){
  //$('#hamburger-menu').click();
//});

// Open HBG Menu
function openMenu() {
  var x = document.getElementById('HBGMenu');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}



//carousel Bookshelf
$(document).ready(function(){
  var slider = $('.slider').bxSlider({
      mode: 'horizontal', //mode: 'fade',
      speed: 300,
      auto: false,
      infiniteLoop: true,
      hideControlOnEnd: true,
      useCSS: false,
      LoadAfterUI: true,
      onSliderLoad: function(currentIndex) {
        $().filter('[data-picindex="'+(currentIndex+1)+'"]');
      },
      onSlideAfter: function($slideElement, oldIndex, newIndex) {
        $().filter('[data-picindex="'+(newIndex+1)+'"]');
      }
  });
});
