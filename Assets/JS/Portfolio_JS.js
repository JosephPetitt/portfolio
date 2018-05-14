//fix navbar to top upon scrolling past landing page
$(window).scroll(function(){
    if ($(window).scrollTop()  >= $(window).height()) {
        $('header').addClass('fixed-header');
        
    }
    else {
        $('header').removeClass('fixed-header');
        
    }
});

//Email contact form validation
var frmvalidator  = new Validator("contactform");
frmvalidator.addValidation("email","req","Please provide your email");
frmvalidator.addValidation("email","email",
  "Please enter a valid email address");

	
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