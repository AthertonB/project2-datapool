$(document).ready(function() {
  $.ajax({
    type: 'GET',
    url: 'https://raw.githubusercontent.com/AthertonB/project2-datapool/master/scripts/data.json',
    dataType: 'json',
    success: function(data) {

      $.each(data, function(i, person) {
        var ranLeft = Math.floor($(window).width('max-width', '300px') * Math.random());
        var ranTop = Math.floor($(window).width() * Math.random());
        var randomRotationClass = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

        $('#message').prepend('<div style="margin-left:' + ranLeft + 'px;font-size:' + (3 * person.stickeramount) + 'px" class="person rot-' + randomRotationClass + '"' + '" data-sex="' + person.sex + '">' + person.name + '</div>');
});

      $(".person").each(function() {
        if ($(this).data("sex") == "Female") {
          $(this).addClass("pink");
        } else {
          $(this).addClass("blue");
        };
      });
     
      
    }
  })
});
