// navbar scroll javascript
function changeBg() {
    var header = document.getElementById('header');
    var scrollValue = window.scrollY;
    if (scrollValue < 50) {
        header.classList.remove('bgColor');
    } else {
        header.classList.add('bgColor');
    }
    
}
window.addEventListener('scroll', changeBg)

// click icon display navbar for mobile size
$(document).ready(function(){
    $(".navIcon").click(function(){
        $("nav").toggle();
    })
    $(".navIcon").click(function () {
        $("body").toggleClass("main");
    });
})
// jQuery for submenu
$(document).ready(function(){
    
    $(".menu-item1").hover(function () {
        $(".sub-menu1").css("display", "block");
      }, function(){
        $(".sub-menu1").css("display", "none")
      })

      $(".menu-item2").hover(function () {
        $(".sub-menu2").css("display", "block");
      }, function(){
        $(".sub-menu2").css("display", "none")
      })

      $(".menu-item3").hover(function () {
        $(".sub-menu3").css("display", "block");
      }, function(){
        $(".sub-menu3").css("display", "none")
      })

      $(".menu-item4").hover(function () {
        $(".sub-menu4").css("display", "block");
      }, function(){
        $(".sub-menu4").css("display", "none")
      })
})

// testimonial slider
$(document).ready(function () {

    // testimonial card
    $('.testimonial-img-card').slick({
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        dots: false,
        speed: 1000,

        responsive: [
        {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1,
                }
            }
        ]
    });


    // banner slider
    $('.banner-slide').slick({
      arrows: true,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 1,
      dots: false,
      speed: 1000,

      responsive: [
      {
              breakpoint: 1239,
              settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '0px',
                  slidesToShow: 1,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '0px',
                  slidesToShow: 1,
              }
          },
          {
              breakpoint: 480,
              settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '0px',
                  slidesToShow: 1,
              }
          }
      ]
  });
})