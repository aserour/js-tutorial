$(document).ready(function() {
  $('#button1').click(function() {

    // send ajax request to server

    $.ajax({
        url: "http://localhost:3000/random-number",
        beforeSend: function(xhr) {
          xhr.overrideMimeType("text/plain; charset=x-user-defined");
        }
      })
      .done(function(data) {
        if (console && console.log) {
          console.log("Sample of data:", data.slice(0, 100));
        }

        $('#content').append('<p>' + JSON.parse(data).value + '</p>');

      });


  });
});
