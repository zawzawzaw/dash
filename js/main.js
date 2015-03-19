// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

$(document).ready(function(){
   
    function getUrlParameter(sParam)
    {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) 
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) 
            {
                return sParameterName[1];
            }
        }
    }      

    var banner = getUrlParameter('b');

    if(banner) {

        var banner = parseInt(banner);
        
        $('.carousel').carousel({
            auto: false,
            pause: true,
            interval: false           
        });

        $('.carousel').carousel(banner);
        
     }else {

        console.log('hi')

        $('.carousel').carousel({
            auto: false,
            interval: 9000,
            pause: "hover"
        });
     }

	$("#nav-mobile").html($("#nav-main").html());
    //$('#nav-mobile').children('ul').append('<li><a href="https://my-mcash.dash.com.sg/index/login" class="login">Log In</a></li><li><a href="https://apply.dash.com.sg/easy2/">Apply Now</a></li>');
    
    var nav_mobile_str = [
        '<li><a href="https://my-mcash.dash.com.sg/index/login">mCash</a></li>',
        '<li><a href="#login-alert" class="login">Online Banking</a></li>',
        '<li><a href="https://apply.dash.com.sg/easy2/">Apply Now</a></li>'
    ].join('');
    $('#nav-mobile').children('ul').append(nav_mobile_str);


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

    $('#nav-mobile a.login').click(function(event){
        var mobile_menu = $("#nav-mobile .main-menu");
        if(mobile_menu.hasClass('expanded')){
            mobile_menu.hide(0);
            mobile_menu.removeClass('expanded')
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

        // if ($(this).width() <= 780) { 
        //     // var marginRight = $(this).width()-780 + 'px';
            
        //     $('.video').css({
        //         '-ms-transform-origin': '11% 50%',
        //         '-webkit-transform-origin': '11% 50%',
        //         'transform-origin': '11% 50%'
        //     });
        // }
    });

    $('.scroll-to-content').on('click', function(e){
        e.preventDefault();
        var currentId = $(this).attr('href');
        console.log(currentId)
        $('html, body').animate({
            scrollTop: $(currentId).offset().top - 63
        }, 800);
    });

    $('.promo-tnc').on('click', function(e){
        e.preventDefault();

        $('#promo-tnc').slideToggle('slow', function(){
            if($('#promo-tnc').css('display') !== 'none')
                $('.promo-tnc').children('i').removeClass('fa-plus').addClass('fa-minus');
            else
                $('.promo-tnc').children('i').removeClass('fa-minus').addClass('fa-plus');    
        });

        
    });


    $('.show-more').on('click', function(e){
        e.preventDefault();

        var $showmore = $(this);
        var link = $showmore.attr('href');
        $(link).slideToggle('slow', function(){
            if($(link).css('display') !== 'none')
                $showmore.text('Show less')
            else
                $showmore.text('Show more');
        });
    })

    var scrolled = false;
    $(window).on('scroll resize', function() {
        var scrollPos = $(window).scrollTop();
        

        if( ( scrollPos != 0 ) ) {
            console.log('scrolling')
            if(scrolled==false) {
                scrolled = true;
                $(".fixed-ad-bg").slideToggle();
            }
                
        }       
        else if( ( scrollPos === 0 ) ) {
            if($(".fixed-ad-bg").css('display')!=='none') {
                $(".fixed-ad-bg").slideToggle();
                scrolled = false;
            }
        }
    });

    $('.rate_table').on('click', function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $("#rate_table").offset().top - 100
        }, 800);

    });
});