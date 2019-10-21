	$("input").val("Search for...");
	$("footer [href]").attr("href", "https://www.codefactory.wien");

	$("form").submit(function(e) {

	    $("form").remove();
	    for (i = 0; i < 5; i++) {
	        $("article").append("<div>asfasd" + i + "</div>");
	    }
	    $("article div").addClass("box");
	    e.preventDefault();





	});