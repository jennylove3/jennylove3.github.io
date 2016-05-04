/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".brand-heading").addClass("fadeOutLeft");
        $(".brand-heading").removeClass("fadeInLeft");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".brand-heading").addClass("fadeInLeft");
        $(".brand-heading").removeClass("fadeOutLeft");
    }

}


$(window).scroll(collapseNavbar);
$(window).scroll(logoOut);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

 function logoOut () {
  if ($(".brand-heading").offset().top > 50){


  $(".brand-heading").addClass(".animate",".fadeOutLeft")

}
}
