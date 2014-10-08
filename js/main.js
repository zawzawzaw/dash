$(document).ready(function(){
    $('.carousel').carousel({
        interval: 9000,
        pause: "false"
    });

	$("#nav-mobile").html($("#nav-main").html());
    $('#nav-mobile').children('ul').append('<li><a href="#login-alert" class="login">Log In</a></li><li><a href="#">Apply Now</a></li>');
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

    $('a.watch').fancybox({
        padding: 20,
        width: 300,
        height: 300,
        autoDimensions: false,
        closeBtn : false 
    });

    $(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        // $('#header-wrapper').addClass("sticky");
      }
      else{
        // $('#header-wrapper').removeClass("sticky");
      }
    });

    $(window).on('resize', function(){
        // if ($(this).width() <= 480) { 
        //     var marginRight = $(this).width()-580 + 'px';
        //     // console.log('margin', '0px '+ marginRight +' 0px 0px')
        //     $('.video').css({ 'margin': '0px', 'left': marginRight })
        // }
        // else if ($(this).width() <= 580) { 
        //     var marginRight = $(this).width()-580 + 'px';
        //     // console.log('margin', '0px '+ marginRight +' 0px 0px')
        //     $('.video').css({ 'margin': '0px', 'left': marginRight })
        // }
        // else if ($(this).width() <= 680) { 
        //     var marginRight = $(this).width()-680 + 'px';
        //     // console.log('margin', '0px '+ marginRight +' 0px 0px')
        //     $('.video').css({ 'margin': '0px', 'left': marginRight })
        // }
        // else if ($(this).width() <= 780) { 
        //     var marginRight = $(this).width()-780 + 'px';
        //     // console.log('margin', '0px '+ marginRight +' 0px 0px')
        //     $('.video').css({ 'margin': '0px', 'left': marginRight })
        // }
        // else if ($(this).width() >= 780) {
        //     $('.video').css({ 'margin' : '80px auto', 'left': '0px;' });
        // }

        if ($(this).width() <= 780) { 
            // var marginRight = $(this).width()-780 + 'px';
            
            $('.video').css({
                '-ms-transform-origin': '11% 50%',
                '-webkit-transform-origin': '11% 50%',
                'transform-origin': '11% 50%'
            });
        }
    });

    
});