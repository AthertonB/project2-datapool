$(document).ready(function() {
  $.ajax({
    type: 'GET',
    url: 'https://raw.githubusercontent.com/AthertonB/project2-datapool/master/scripts/data.json',
    dataType: 'json',
    success: function(data) {

      $.each(data, function(i, person) {



        var ranLeft = Math.floor($(window).width('max-width', '300px') * Math.random());
        var ranTop = Math.floor($(window).width() * Math.random());
        $('#message').prepend('<div style="margin-left:' + ranLeft + 'px;font-size:' + (3 * person.stickeramount) + 'px" class="person">' + person.name + '</div>');
        
        if (person.sex == 'Female') {
          $('.person').addClass("pink");
        } else if (person.sex == 'Male') {
          $('.person').addClass("blue");
        }

      })

      $(".person").click(function() {
        alert("The person was clicked.");
      });
    }
  })
});
