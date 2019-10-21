$("form").submit(function(e) {
	$("form").remove();
	for (i = 0; i<5; i++){
		$("article").append("<div>Test</div>");
	}
	$("article div").addClass("box");

	e.preventDefault();
	
	
	

});

$("input").val("Search for...");
$("footer [href]").attr("href", "http://www.codefactory.wien");