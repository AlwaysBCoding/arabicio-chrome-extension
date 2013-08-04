$(document).ready(function() {

	$(document).on("keyup", function(e) {
		if(e.which == 79 && e.shiftKey && e.ctrlKey) {
			chrome.runtime.sendMessage( { word: window.getSelection().toString() }, function(response) {

				if($(".arabicio-dropdown").length > 0) {
					$(".arabicio-dropdown .arabicio-translation").text(response.word);
					$(".arabicio-dropdown").animate({opacity: 1}, 400).delay(3000).animate({opacity: 0}, 400);
				} else {
					$("body").append("<div class='arabicio-dropdown'></div>");
					$(".arabicio-dropdown").append("<p class='arabicio-translation'>" + response.word + "</p>");
					$(".arabicio-dropdown").animate({opacity: 1}, 400).delay(3000).animate({opacity: 0}, 400);
				}

			});
		}
	});

});
