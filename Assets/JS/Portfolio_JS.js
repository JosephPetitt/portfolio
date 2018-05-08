//fix navbar to top upon scrolling past landing page
$(window).scroll(function(){
    if ($(window).scrollTop() >= $(window).height()) {
        $('header').addClass('fixed-header');
        
    }
    else {
        $('header').removeClass('fixed-header');
        
    }
});

	
//page navigation for navbar buttons	
$("#homeButton").click(function() {
    $('html,body').animate({
        scrollTop: $("#intro").offset().top},
        'slow');
});	

$(".resumeButton").click(function() {
    $('html,body').animate({
        scrollTop: $("#resume").offset().top - 40},
        'slow');
});	


$("#projectsButton").click(function() {
    $('html,body').animate({
        scrollTop: $("#projects").offset().top - 70},
        'slow');
});	

$("#contactButton").click(function() {
    $('html,body').animate({
        scrollTop: $("footer").offset().top},
        'slow');
});	