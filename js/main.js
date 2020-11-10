$(document).ready(function () {
   $('.slider').slick({
      infinite: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      
  });
}); 


$(document).ready(function () {

   //E-mail Ajax Send
   $("form").submit(function () { //Change
      var th = $(this);
      $.ajax({
         type: "POST",
         url: "mail.php", //Change
         data: th.serialize()
      }).done(function () {
         alert("Thank you!");
         setTimeout(function () {
            // Done Functions
            th.trigger("reset");
         }, 1000);
      });
      return false;
   });

});