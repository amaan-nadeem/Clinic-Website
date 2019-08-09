
      /* Form Validation */
      $(document).ready(function(){
          var formAction = $("#contactForm").attr("action");
          $("#contactForm").attr("action", formAction + "?thankyou=1");
      });


      ScrollReveal().reveal('.info-col', {delay: 200});
      ScrollReveal().reveal('.contact-form', {delay: 200});
      ScrollReveal().reveal('.services-row', {delay: 200});
      ScrollReveal().reveal('.ourServices', {delay: 200});


      window.onscroll = function() {myFunction()};
  
      var navbar = document.getElementById("navbar");
      var sticky = navbar.offsetTop;
      
      function myFunction() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }
      }

      
      

      
      
  