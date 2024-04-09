
  $(function () {
    'use strict'

    // MENU
    $('.navbar .nav-link').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

      // MENU

    $(window).on('scroll', function() {     
                                
    //    NAVIGATION MENU SCROLL
        
        var b = $(window).scrollTop();
        
        if( b > 72 ){       
            $(".navbar").addClass("scroll");
        } else {
            $(".navbar").removeClass("scroll");
        }               
    });

     //    NAVIGATION MENU SCROLL

    // TESTIMONIALS CAROUSEL
    $('#testimonials-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            900:{
                items:2,
            },
            1200:{
                items:3,
                loop:false
            }
        }
    })
// TESTIMONIALS CAROUSEL



    // SMOOTHSCROLL
    $(function() {
      $('.navbar .nav-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });   
     
  });
// SMOOTHSCROLL



// RESPONSIVE TESTIMONIOL BACKGROUND COLOR

  $(document).ready(function() {
    $('#icon').click(function() {
      $('body').addClass('grey-bg');
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    var icon = document.getElementById("icon");
    var testimonials = document.querySelector(".testimonials");
    
    icon.addEventListener("click", function() {
        if (testimonials.style.backgroundColor === "var(--white-color)" || testimonials.style.backgroundColor === "") {
            testimonials.style.backgroundColor = "var(--gray-color)"; 
        } else {
            testimonials.style.backgroundColor = "var(--white-color)";
        }
    });
});

// RESPONSIVE BG COLOR

// SCROLL TO TOP

function scrollToTop() {
    // Scroll to top smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// SCROLL TO TOP


// DARK AND LIGHT ICON

const myicon = document.getElementById('icon');

myicon.onclick = function() {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    myicon.src = "./images/Floating Image/floating_image_sun.png";
  } else {
    myicon.src = "./images/Floating Image/floating_image_moon.png";
  }
}
// DARK AND LIGHT ICON


// TRANSITON OF ICON

$(document).ready(function() {
    $('#icon').click(function() {
      $(this).toggleClass('clicked');
    });
  });

  // TRANSITON OF ICON



//   SAMPLES CAROUSEL



  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 1000, // 1 second autoplay
      autoplayHoverPause: true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:3
        },
        1000:{
          items:5
        }
      }
    });
  });

  //   SAMPLES CAROUSEL

//   samples zoom function

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".design-samples .item img");
    let isDragging = false;
  
    items.forEach(item => {
      item.addEventListener("mousedown", function() {
        isDragging = false;
      });
      
      item.addEventListener("mousemove", function() {
        isDragging = true;
      });
  
      item.addEventListener("mouseup", function() {
        if (!isDragging) {
          const imageUrl = this.src;
  
          const zoomOverlay = document.createElement("div");
          zoomOverlay.classList.add("zoom-overlay");
  
          const zoomImage = document.createElement("img");
          zoomImage.classList.add("zoom-image");
          zoomImage.src = imageUrl;
  
          const zoomClose = document.createElement("span");
          zoomClose.classList.add("zoom-close");
          zoomClose.innerHTML = "&times;"; // Close icon
          zoomClose.addEventListener("click", function() {
            zoomOverlay.classList.remove("show");
            document.body.style.overflow = ""; // Re-enable scrolling
            setTimeout(() => {
              document.body.removeChild(zoomOverlay);
            }, 300); // Wait for transition to complete before removing overlay
          });
  
          zoomOverlay.appendChild(zoomImage);
          zoomOverlay.appendChild(zoomClose);
          document.body.appendChild(zoomOverlay);
  
          // Enable smooth zoom in effect
          setTimeout(() => {
            zoomOverlay.classList.add("show");
          }, 10); // Delay to ensure smooth transition
          document.body.style.overflow = "hidden"; // Disable scrolling
        }
      });
    });
  });
  

  // scroll to top and show pop up

// SCROLL TO TOP AND SHOW POP-UP

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function scrollToTopAndShowPopup() {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Wait for the scroll animation to complete before showing the modal
  setTimeout(function() {
    modal.style.display = "block";
  }, 800); // Adjust the delay time as needed (in milliseconds)
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




// SCROLL TO TOP AND SHOW POP-UP

  