// PRELOAD IMAGES:



function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src',this).appendTo('body').css('display','none');
    });
}

preload([
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg',
  'img/9.jpg',
  'img/10.jpg',
  'img/11.jpg',
  'img/12.jpg',
  'img/13.jpg',
  'img/14.jpg',
  'img/15.jpg',
  'img/16.jpg',
  'img/17.jpg',
  'img/18.jpg',
  'img/19.jpg',
  'img/20.jpg',
  'img/21.jpg',
  'img/22.jpg',
]);

// LIGHT GALLERY PLUGIN

  $("#lightgallery").lightGallery({
    selector: '.lg-item'
  });


// COLLAGE PLUS PLUGIN

$(window).load(function () {
    $('.Collage').collagePlus();
});


// Here we apply the actual CollagePlus plugin
function collage() {
    $('.Collage').removeWhitespace().collagePlus(
        {
            'fadeSpeed'     : 2000,
            'targetHeight'  : 200,
            'effect'        : 'effect-2',
            'direction'     : 'vertical',
            'allowPartialLastRow':true
        }
    );
};

// This is just for the case that the browser window is resized
// var resizeTimer = null;
// $(window).bind('resize', function() {
//     // hide all the images until we resize them
//     $('.Collage .Image_Wrapper').css("opacity", 0);
//     // set a timer to re-apply the plugin
//     if (resizeTimer) clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(collage, 200);
// });

$( window ).resize(function() {
  collage();
});

collage();
