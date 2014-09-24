$(document).ready(function(){
	console.log('hi')

	$("#nav-mobile").html($("#nav-main").html());
    $("#nav-trigger span").click(function(){
        if ($("#nav-mobile ul").hasClass("expanded")) {
            $("#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });
});