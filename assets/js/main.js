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
  rows: 4,
  prevArrow:$('.back'),
  nextArrow:$('.next'),
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
        slidesToScroll: 3,
        rows: 6,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 8
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


$('.document-slider').slick({
  infinite:false,
  speed:500,
  // autoplay:true,
  draggable:true,
  // autoplaySpeed:5000,
  slidesToShow: 4,
  slidesToScroll: 4,
  rows: 3,
  prevArrow:$('.back'),
  nextArrow:$('.next'),
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
        slidesToScroll: 2,
        rows: 6
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


var next = document.querySelector(".next");
var back = document.querySelector(".back");
var inpVal = document.querySelector(".number-slide");
var inpVal2 = document.querySelector(".number-side2");
// console.log(next, back, inpVal);
    next.addEventListener('click', function(){
        if(next.classList.contains("slick-disabled")){
          console.log("break");
          // break;
        }
          inpVal.value = parseInt(inpVal.value) + 1;
          inpVal2.value = parseInt(inpVal2.value) - 1;
    });

    
    back.addEventListener('click', function(){
      if(inpVal.value > 5){
        inpVal.value = parseInt(inpVal.value) - 1;
        inpVal2.value = parseInt(inpVal2.value) + 1;
      }else{
        console.log("br");
          inpVal.value = 5;
          inpVal2.value = 365;
        }
  });

