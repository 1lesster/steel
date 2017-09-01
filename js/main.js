$( document ).ready(function() {
    $('.start-slider').slick({
    	draggable: false,
    	appendArrows: $('.control'),
    	nextArrow: '<i class="slick-arrow demo-icon icon-arrow next"></i>',
    	prevArrow: '<i class="slick-arrow demo-icon icon-arrow prev"></i>',
        responsive: [
        {
          breakpoint: 900,
          settings: "unslick"
        }
      ]
    });

    $('.hot-offers .sidebar-slider').slick({
    	draggable: false,
    	nextArrow: '<i class="slick-arrow demo-icon icon-arrow next"></i>',
    	prevArrow: '<i class="slick-arrow demo-icon icon-arrow prev"></i>'
    });
    $('.reviews .sidebar-slider').slick({
    	draggable: false,
    	nextArrow: '<i class="slick-arrow demo-icon icon-arrow next"></i>',
    	prevArrow: '<i class="slick-arrow demo-icon icon-arrow prev"></i>'
    });

    $('.certificate-slider').slick({
        draggable: false,
        nextArrow: '<i class="slick-arrow demo-icon icon-arrow next"></i>',
        prevArrow: '<i class="slick-arrow demo-icon icon-arrow prev"></i>'
    });

    $(".catalog-nav a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".catalog-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });

    var navHeight = $('.catalog-nav').height();
    $('.catalog-content').css("height", navHeight);


    $(".certificate a").click(function(event) {
        event.preventDefault();
        
        var imgId = $(this).attr("href");

        $(imgId).css("display", "block");
    });

    $(".modal-img .close").click(function(event) {
        $('.modal-img-wrap').css("display", "none");
    });
   
    $(".cd-nav-trigger").click(function () {
        $(this).toggleClass("open");
        $(this).parent().toggleClass("show-menu");
    });
    
});