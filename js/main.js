$(document).ready(function(){
	console.log('hi');

    $('.carousel').carousel({
        interval: 9000,
        pause: "false"
    });

	$("#nav-mobile").html($("#nav-main").html());
    $("#nav-trigger span").click(function(){
        console.log('hi')
        if ($("#nav-mobile ul").hasClass("expanded")) {
            $("#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });

    // $('.login').colorbox({href:"login.shtml"});
    $('a.login').fancybox({
        padding: 50,
        width: 300,
        height: 300,
        autoDimensions: false,
        closeBtn : false 
    });

    $(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('#header-wrapper').addClass("sticky");
      }
      else{
        $('#header-wrapper').removeClass("sticky");
      }
    });

    
});