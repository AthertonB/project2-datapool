$(document).ready(function() {
  $.ajax({
    type: 'GET',
    url: 'https://raw.githubusercontent.com/AthertonB/project2-datapool/master/scripts/data.json',
    dataType: 'json',
    success: function(data) {
			
      // WE START THE LOOP
			// Main loop that gets all the items from our JSON file
      $.each(data, function(i, person) {
				
        // Randomizing sizes, width, and rotation class for each item
				var ranLeft = Math.floor($(window).width('max-width', '300px') * Math.random());
        var ranTop = Math.floor($(window).width() * Math.random());
        var randomRotationClass = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

        // Creates all the names inside div boxes with .person class which functions as links to open the popup boxes
        $('#message').prepend('<div data-link="#' + person.name + '" style="margin-left:' + ranLeft + 'px;font-size:' + (3 * person.stickeramount) + 'px" class="person rot-' + randomRotationClass + '"' + '" data-sex="' + person.sex + '">' + person.name + '</div>');
        
        // Creates all the popboxes inside div boxes .popup class and they are all hidden initially
        $("#person").prepend('<div id="' + person.name + '" class="popup-box">'+ '<h1>' + person.name + '</h1>' + '<p>' + person.story +' </p></div>');
      });
      //END THE LOOP HERE

      $('.person').each(function() {
      		if ($(this).data("sex") == "Female") {
						$(this).addClass("pink");
					} else {
						$(this).addClass("blue");
          }
      })
      
      // When we click on each person it will grab the data link = ID name of the popup box
      $('.person').click(function() {
        var popupBoxIdName = $(this).data('link');
        $(".popup-box").hide(); //Hides all the popup boxes
        $(popupBoxIdName).fadeIn(500);
        
      })

    }
  })
});
