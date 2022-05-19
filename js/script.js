

// Credit to  KAREN GRIGORYAN for the code - https://codepen.io/karencho/pen/rNybaR

$(document).ready(function() {
  var scrollTop = $(".scrollTop");
  $(window).scroll(function() {
    var topPos = $(this).scrollTop();
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
} else {
      $(scrollTop).css("opacity", "0");
    }
  });
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  var h1 = $("#h1").position();
  var h2 = $("#h2").position();
  var h3 = $("#h3").position();
$('.link1').click(function() {
    $('html, body').animate({
      scrollTop: h1.top
    }, 500);
    return false;
});
  $('.link2').click(function() {
    $('html, body').animate({
      scrollTop: h2.top
    }, 500);
    return false;
  });
  $('.link3').click(function() {
    $('html, body').animate({
      scrollTop: h3.top
    }, 500);
    return false;
  });
});
// TO TOP//


const slider = document.querySelector('.gallery3');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});
