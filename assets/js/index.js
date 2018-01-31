var WebPage = WebPage || {}
WebPage.pageLoaded = function(){
	this.initialize();
}
WebPage.pageLoaded.prototype= {
	initialize:function(){
		this.handleScrollEffect();
		this.handleNavigationHideShow();
		this.handleSliderCarousel();
		this.handleInitialHideShow();
		this.handleBlockHideShow();
		this.handleImageGlowEffect();
		this.handleModalPopup();
		this.handleModelHideEvent();
		this.handleAddCommentEvent();
	},
	handleInitialHideShow:function(){
		$("#main-body #home").attr("style", "display:block");
		$("#main-body #example").attr("style", "display:none");
		$("#main-body #feedback").attr("style", "display:none");
		$("#main-body #image-effect").attr("style", "display:none");
		$("#main-body #contact-us").attr("style", "display:none");
	},
	handleSliderCarousel:function(){
		var index = 0;
	  setInterval(nextSlide, 8000);
	  $("#slider #previous").click(function(){
	  	nextSlide();
	  });
	  $("#slider #next").click(function(){
	  	nextSlide();
	  });
	  function nextSlide(){
	  	$("#slider #slide1").attr("style","display:none");
		  $("#slider #slide2").attr("style","display:none");
		  console.log(index);
		  if(index%2 == 0){
		  	$("#slider #slide1").attr("style","display:block");
		  } 
		  else{
		  	$("#slider #slide2").attr("style","display:block");
		  }
		  index++;
	  }
	},
	handleNavigationHideShow:function(){
		$("#header .icon").click(function(){
			var navigation = document.getElementById("topnav");
		  if (navigation.className == "topnav") {
		    navigation.className += " responsive";
		  } 
		  else {
		    navigation.className = "topnav";
		  }
		});
	},
	handleBlockHideShow:function(){
		$("#topnav #home-link").click(function(){
			openBlockByName('home');
		});
		$("#topnav #example-link").click(function(){
			openBlockByName('example');
		});
		$("#topnav #feedback-link").click(function(){
			openBlockByName('feedback');
		});
		$("#topnav #image-effect-link").click(function(){
			openBlockByName('image-effect');
		});
		$("#topnav #contact-us-link").click(function(){
			openBlockByName('contact-us');
		});
		$("#welcome-links #img-introduction").click(function(){
			openBlockByName('home');
		});
		$("#welcome-links #img-example").click(function(){
			openBlockByName('example');
		});
		$("#welcome-links #img-image-effect").click(function(){
			openBlockByName('image-effect');
		});
		$("#welcome-links #img-contact-us").click(function(){
			openBlockByName('contact-us');
		});
		function openBlockByName(blockName){
			if(blockName == "home" || blockName == "example"){
				$("#main-body #right-block").attr("style", "display:block");
			}
			else{
				$("#main-body #right-block").attr("style", "display:none");
			}
			$("#topnav #home-link").removeClass("active");
			$("#topnav #example-link").removeClass("active");
			$("#topnav #feedback-link").removeClass("active");
			$("#topnav #image-effect-link").removeClass("active");
			$("#topnav #contact-us-link").removeClass("active");
			$("#topnav #"+blockName+"-link").addClass("active");
			$("#main-body #home").attr("style", "display:none");
			$("#main-body #example").attr("style", "display:none");
			$("#main-body #feedback").attr("style", "display:none");
			$("#main-body #image-effect").attr("style", "display:none");
			$("#main-body #contact-us").attr("style", "display:none");
			$("#main-body #"+blockName).attr("style", "display:block");
		}
	},
	handleImageGlowEffect:function(){
		var count = 0;
		$("#glow-effect #switch").click(function(){
			if(count%2 == 0){
				$("#glow-effect #switch").attr("style","background-color:red");
				$("#glow-effect #bulb").attr("src","assets/images/bulbon.png");
				$("#glow-effect #switch").text("Switch on");
				count++;
			}
			else{
				$("#glow-effect #switch").attr("style","background-color:green");
				$("#glow-effect #bulb").attr("src","assets/images/bulboff.png");
				$("#glow-effect #switch").text("Switch off");
				count++;
			}
		});
	},
	handleModalPopup:function(){
		$("#social-media #add-comments").click(function(){
			$("#modal #commenter").val(null);
			$("#modal #comment").val(null);
		  $("#modal").attr("style","display:block;");
		});
		$(".social-icons #add-comments").click(function(){
			$("#modal #commenter").val(null);
			$("#modal #comment").val(null);
		  $("#modal").attr("style","display:block;");
		});
	},
	handleModelHideEvent:function(){
		$(".modal-content .close").click(function(){
			$("#modal").attr("style","display:none;");
		});
		window.onclick = function(event) {
  		if (event.target == modal) {
    		$("#modal").attr("style","display:none;");
  		}
		}
	},
	handleAddCommentEvent:function(){
		var i=1;
		$(".modal-content #submit-comment").click(function(){
			commenter = $(".modal-content #commenter").val();
			comment = $(".modal-content #comment").val();
			if(commenter != null && comment != null){
				var row = '<tr><td> ' + i + ' </td> <td> ' + commenter + ' </td> <td>' + comment + '</td></tr>';
			  $("#feedback #comments").append(row);
			  i++;
			  $("#modal").attr("style","display:none;");
			}
		});
	},
	handleScrollEffect:function(){
		$(document).scroll(function(){
			$("#welcome-links").each(function(){
				if(isScrolledIntoView(this) && $(this).css('display')!='none'){
        	$("#welcome-links img").attr("style","display:block;");
       	}
			});
			$("#container").each(function(){
				if(isScrolledIntoView(this) && $(this).css('display')!='none'){
        	$("#container").attr("style","display:block;");
        	$("#welcome").attr("style","display:none;");
					$("#welcome-links").attr("style","display:none;");
       	}
			});
		});
	  function isScrolledIntoView(elem){
    	var docViewTop = $(document).scrollTop();
   		var docViewBottom = docViewTop + $(document).height();
   		var elemTop = $(elem).offset().top;
   		var elemBottom = elemTop + $(elem).height();
   		return (elemTop <= docViewBottom-elemBottom+500)
	  }
	},
}