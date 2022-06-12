$(function() {

    $("#story").hide();
  
    $("#btn-click").click(function(e) {
  
      e.preventDefault();
  
      $(".person").empty().append($("input.person").val());
      $(".character").empty().append($("input.character").val());
      $(".adverb").empty().append($("input.adverb").val());
      $(".adjective").empty().append($("input.adjective").val());
      
      $("#story").show();
  
      $('input').val('');  
    });
  
  });