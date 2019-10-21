/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
// $("*").css("background-color", "yellow");
$("*").css("background-color", "yellow");
// all p elements
$("p").css("font-size", "20px");

// the p element with an ID of "intro"
$("p#intro").css("color", "red");

// all elements with a class of "note"
$(".note").css("color", "hotpink");

// all DIV elements with a class of note
$("div.note").css("font-weight", "bold");

// all p elements in the article element
$("article p").css("color", "white");

// the last element in any section which is a p tag
$("p:last").css("font-size", "30px");

// the first paragraph on the page
$("p:first").css("color", "blue");

// all p elements which have a link
$("p [href]").css("color", "brown");

// the second li within nested ul element
$("ul li:nth-child(2)").css("font-size", "40px");

// every second and third p element
$("p:nth-child(2), p:nth-child(3)").css("font-size", "30px");