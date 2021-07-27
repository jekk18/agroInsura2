$(".next").click(function(){
    $(".line1").css("width", "100%");
    $(".icon-next").css("color", "#C8C8C8");
    $(".icon-back").css("color", "#7AA259");
  });
  $(".back").click(function(){
    $(".line1").css("width", "49%");
    $(".icon-next").css("color", "#7AA259");
    $(".icon-back").css("color", "#C8C8C8");
  });
  $(".burger").click(function(){
    $(".burger-menu").toggleClass("active");
  });