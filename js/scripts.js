$(function() {
  $("#formOne").submit(function(event) {
    var name = $("input#friend").val();

    $(".name").text(name);

    $("#letter").show();

    event.preventDefault();  
  });
});
