$(document).ready(function(){
	
	// Slider
	$('.slider').slick({
	  infinite: false,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 2,
	  prevArrow:"<img class='a-left control-c prev slick-prev' src='img/arrow-left.png'>",
      nextArrow:"<img class='a-right control-c next slick-next' src='img/arrow-right.png'>",
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	});

	// Autocomplete

		$(function(){
		// array of keys
		  var keys = [
			{ value: 'Maarif', data: 'dis' },
			{ value: 'Menuiserie', data: 'cat' },
			{ value: 'Amoud', data: 'bus' },

		  ];
		  

		  $('#business-input').autocomplete({
			lookup: keys,
			matchContains:true,
			formatResult: function(suggestion, currentValue){
				var l = currentValue.length;
			    var val1 = suggestion.value.substring(0, l);
				var val2 = suggestion.value.substring(l,suggestion.value.length);
				switch (suggestion.data) {
					case 'bus': return  '<strong>'+val1+'</strong>'+val2+'<img src="img/business.png" class="suggestion-icon">';
					case 'cat': return  '<strong>'+val1+'</strong>'+val2+'<img src="img/category.png" class="suggestion-icon">';
					case 'dis': return  '<strong>'+val1+'</strong>'+val2+'<img src="img/district.png" class="suggestion-icon">';
					
				}
			},
			onSelect: function (suggestion) {
			
           
			},
			onSearchStart : function (query){
				
			
			},
			onSearchComplete : function (query,suggestions){
			;
			
			}
		  });
		  
	});
			
	// Login Pop Up
	$("#login-btn").leanModal({
			top: 100,
			overlay: 0.6,
			closeButton: ".modal_close"
	});

	$(function() {
		// Calling Login Form
			$("#login_form").click(function() {
			$(".social_login").hide();
			$(".user_login").show();
				return false;
	});	

		// Calling Register Form
		$("#register_form").click(function() {
			$(".social_login").hide();
			$(".user_register").show();
			$(".header_title").text('Register');
				return false;
		});

		// Going back to Social Forms
		$(".back_btn").click(function() {
			$(".user_login").hide();
			$(".user_register").hide();
			$(".social_login").show();
			$(".header_title").text('Login');
				return false;
		});
	});
});



	