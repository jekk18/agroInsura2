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
    $(".burger-line1").toggleClass("close");
    $(".burger-line2").toggleClass("remove");
    $(".burger-line3").toggleClass("close1");
    $("body").toggleClass("overflow-hidden");
  });


  $('.slider-box').slick({
    infinite:false,
    speed:500,
    // autoplay:true,
    draggable:false,
    // autoplaySpeed:5000,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:$('#back-arr'),
    nextArrow:$('#next-arr'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  