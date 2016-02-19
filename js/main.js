
// ANIMSITION

$(".animsition").animsition({
  inClass: 'fade-in',
  outClass: 'fade-out',
  inDuration: 800,
  outDuration: 500,
  linkElement: 'a:not([target="_blank"]):not([target="new"]):not([href^=#]):not([href^="mailto"])',
  loading: true,
  loadingClass: 'animsition-loading',
  loadingInner: '', // e.g '<img src="loading.svg" />'
  timeout: false,
  timeoutCountdown: 5000,
  onLoadEvent: true,
});

// STICKY HEADER

$(".header").sticky({
  getWidthFrom: '.container',
  responsiveWidth: true
});

$(".header").on('sticky-start', function () {
  $(".header h1").css("font-size", "1.75em");
  $("#wrapper").css("padding-top", "65px");
  // $(".footer").css("padding-top", "100px");
  // $(".description").html('we build <strong>great</strong> apps');
  $(".header").css("opacity", "1");
});

$(".header").on('sticky-end', function () {
  $(".header h1").css("font-size", "2.75em");
  // $(".footer").css("padding-bottom", "30px");
  $("#wrapper").css("padding-top", "0");
  $(".header").css("opacity", "0.75");
});


//  SUBSTICKY

$(".substicky").sticky({
  topSpacing: 60,
  getWidthFrom: '.container',
  responsiveWidth: true
});

$(".substicky").on('sticky-start', function () {
  $(this).append(' <a href="mailto:me@mail.com" class="email-text">Email us!</a>');
});

$(".substicky").on('sticky-end', function () {
  $(".email-text").remove();
});


// MOSAIC

$('.bar').mosaic({
  animation	:	'slide'		//fade or slide
});
