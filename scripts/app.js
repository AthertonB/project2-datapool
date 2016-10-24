$(document).ready(function(){

	// Get JSON file
	$.ajax({
		type: 'GET',
		//url: './scripts/data.json',
		//url: './scripts/data-test.json', 
		dataType: 'json',
		success: function(data) {

			$.each(data, function(i, player){



				faveColorsArray = player.faveColor.split(",");
				// $.each(faveColorsArray, function(index, value) { 
				// 	alert(index + ': ' + value);
				// });


				$("#message").append('<div class="player red">'+faveColors[0] + "</div>");

				// if (player.faveColor == "red") {
				// 	$("#message").append('<div class="player red">'+player.name + "</div>");
				// } else if (player.faveColor == "blue") {
				// 	$("#message").append('<div class="player orange">'+player.name + "</div>");					
				// } else if (player.faveColor == "orange") {
				// 	$("#message").append('<div class="player blue">'+player.name + "</div>");					
				// }
		    });

		}
	});

});