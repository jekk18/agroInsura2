$(".burger").click(function(){
  $(".burger-menu").toggleClass("active");
  $(".burger-line1").toggleClass("close");
  $(".burger-line2").toggleClass("remove");
  $(".burger-line3").toggleClass("close1");
  $(".burger").toggleClass("fix");
});




$('.slider').slick({
  infinite:false,
  speed:500,
  // autoplay:true,
  draggable:true,
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
      breakpoint: 768,
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

$('.news-slider').slick({
  infinite:false,
  speed:500,
  // autoplay:true,
  draggable:true,
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
      breakpoint: 768,
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



$('.news2-slider').slick({
  infinite:false,
  speed:500,
  // autoplay:true,
  draggable:true,
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
      breakpoint: 768,
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
// if($(window).width() < 767)
// {
//    // change functionality for smaller screens
// } else {
//    // change functionality for larger screens
// }
