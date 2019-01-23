 $(window).scroll(function () {
            if ($(document).scrollTop() > 500) { $('nav').addClass("scrolled"); }
            else
                $('nav').removeClass("scrolled");
        });

$(document).ready(function() {
	//selector.animate(  params, [duration, easing, callback] );

      $("#out").click(function(){
         $("#block").animate({ 
			   width: "70%",
			   opacity: 0.4,
			   marginLeft: "0.6in",
			   fontSize: "3em", 
			   borderWidth: "10px"
			 }, 2000,"swing"//linear or swing (default)
			 /*{
				duration: 2000,
				specialEasing: {
				width: "easeOutBounce",
				height: "easeOutBounce"}
			}*/
		 );
      });
      $("#in").click(function(){
         $("#block").animate({ 
           width: "100",
           opacity: 1.0,
           marginLeft: "0in",
           fontSize: "100%", 
           borderWidth: "1px"
         }, 2000,'linear');
      });

   });
 