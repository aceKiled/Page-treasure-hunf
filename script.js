$(document).ready(function() {

$("#hiddenPic").hide();
$(".hooray").hide();

$("button").click(function(){
    $("#secretMessage").append("Now double click here...");
});
$("#secretMessage").dblclick(function(){
    $("#hiddenPic").show();
    $("#secretMessage").text("click the cake");
});
$("#hiddenPic").hover(function(){
    $("#secretMessage").text("Nice job. You'll find your next clue by clicking on the treasure");
});
$("#treasure").click(function(){
    $("body").css("background", "aqua");
});
$("h1").click(function(){
    $("p").hide();
    $("img").hide();
    $("button").hide();
    $(".hooray").show();
});

});
