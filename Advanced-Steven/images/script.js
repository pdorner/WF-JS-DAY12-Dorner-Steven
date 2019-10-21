$(document).ready(function () {
    $("code").css("color", "red");
    $("ol li").css("background-color", "#2a7b90");
    $("textarea").attr("placeholder","Express your opinion");
    $("body img").attr("src", "https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
    $("blockquote").css("background-color", "orange").css("font-style", "italic");
    $("#logo").css("color", "black");
    $(".grey").css("color", "white");
    $(".date").remove();
    $(".sidemenu:first-of-type").append('<li><a href="http://all-free-download.com/free-website-templates/">New Templates</a></li>');
    $(".sidemenu:first-of-type").append('<li><a href="http://all-free-download.com/free-website-templates/">Order Templates</a></li>');
    $(".sidemenu:first-of-type").append('<li><a href="http://all-free-download.com/free-website-templates/">Contact us!</a></li>');
    $("p:contains('Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.')").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");
    $("body [href]").attr("href", "http://www.codefactory.wien");
});