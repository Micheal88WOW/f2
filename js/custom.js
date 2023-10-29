

 
 //-------mixitup-area------//

 var mixer = mixitup('.gallery');
	
	var container = document.querySelector('.gallery');
	var mixer = mixitup(container,{
	      selectors:{control:'[data-mixitup-control]'}
	})
	

 
   //-------nav time------//
	 
	$('.navbar-nav a[href^="#"]').click(function(e){
	    e.preventDefault();
		
		var target = this.hash;
		$('html, body').animate({
		   scrollTop: $(target).offset().top -0
		}, 2000);
	});
	  //----------testimonial------------//
  
  $('.owl-carousel-testimonial').owlCarousel({
    loop:true,
	margin:10,
	nav:false,
	responsive:{
	  0:{
	      items:1
	  },
	  600:{
	      items:1
	  },
	  1000:{
	      items:1
	  },

	}
 });	 

 //----------team------------//
  
  $('.owl-carousel-team').owlCarousel({
    loop:true,
	autoplay:true,
    margin:20,
	nav:true,
	responsive:{
	  0:{
	      items:1
	  },
	  600:{
	      items:2
	  },
	  1000:{
	      items:3
	  },

	}
 });
  




//---menu active---//

 $('.navbar-nav li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
 });



//---menu fixed---//

$(window).scroll(function(){
  var ourWindow = $(this).scrollTop();
  
  
  if(ourWindow>100){
      $('body').addClass('fixed');
  }
  else{
    $('body').removeClass('fixed');
  }
});


//---menu fixed---//


var a = 0;
$(window).scroll(function() {

  var oTop = $('.counter-box').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});























