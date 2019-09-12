// hamburger menu
var button = document.getElementById('hamburger-menu'),
    span = button.getElementsByTagName('span')[0];

button.onclick =  function() {
  span.classList.toggle('hamburger-menu-button-close');
};
//$('#hamburger-menu').on('click', toggleOnClass);

function toggleOnClass(event) {
  var toggleElementId = '#' + $(this).data('toggle'),
  element = $(toggleElementId);
  element.toggleClass('on');
}
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

// left and right arrow slide
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
}

// Change floor level
