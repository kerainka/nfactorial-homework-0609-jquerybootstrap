$(function() {

    $("#story").hide();
  
    $("#btn-click").click(function(e) {
  
      e.preventDefault();

      const size = $("input.width").val() * $("input.height").val() / $("input.color").val();
      if (size < 4000) {
          $("#story").empty().append('File is '+size+' bytes which is ok <img src="up.jpeg"/>');
      }
      else {
        $("#story").empty().append('File is '+size+' bytes which is bad <img src="down.jpeg"/>');

      }
      
      $("#story").show();
  
      $('input').val('');  
    });
  
  });