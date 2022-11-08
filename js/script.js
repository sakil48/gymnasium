$(function(){
    'use strict';

    $('.button_top').click(function(){
      $('html,body').animate({
        scrollTop:0,
      },1000)

    });
      $(window).scroll(function () {
        var abc = $(this).scrollTop();


        if (abc>100) {
            $('.button_top').fadeIn();
        } else {
            $('.button_top').fadeOut();
        }
    
    });
    // ================================
    
$("#banner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed: 2000,
    arrows:false,
    dots:true,
  });


  // venobox
  new VenoBox({
    selector: '.venobox'
  });


  // ==================team slide====
  $(".team_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    dots:false,
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 4 ,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      }
    ]
    
  });

  // =======testimonial
  $(".slide_text").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    dots:true,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll:1,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      }
    ]
  });





  //counterup
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});


// slide logo
$(".logo_slide").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  prevArrow:'<i class="fas fa-chevron-left prev"></i>',
  nextArrow:'<i class="fas fa-chevron-right next"></i>',
  responsive: [
    {
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:false,
      }
    },
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
      }
    }
  ]
 

});
})