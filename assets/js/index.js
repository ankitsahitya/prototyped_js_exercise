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
		var index = 1;
		var self = this;
	  setInterval(function(){self.nextSlide(index);index++}, 8000);
	  $("#slider #previous").click(function(){
	  	self.nextSlide(index);
	  	index++;
	  });
	  $("#slider #next").click(function(){
	  	self.nextSlide(index);
	  	index++;
	  });
	},
	nextSlide:function(index){
  	$("#slider #slide1").attr("style","display:none");
	  $("#slider #slide2").attr("style","display:none");
	  if(index%2 == 0){
	  	$("#slider #slide1").attr("style","display:block");
	  } 
	  else{
	  	$("#slider #slide2").attr("style","display:block");
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
		var self = this;
		$("#topnav #home-link").click(function(){
			self.openBlockByName('home');
		});
		$("#topnav #example-link").click(function(){
			self.openBlockByName('example');
		});
		$("#topnav #feedback-link").click(function(){
			self.openBlockByName('feedback');
		});
		$("#topnav #image-effect-link").click(function(){
			self.openBlockByName('image-effect');
		});
		$("#topnav #contact-us-link").click(function(){
			self.openBlockByName('contact-us');
		});
		$("#welcome-links #img-introduction").click(function(){
			self.openBlockByName('home');
		});
		$("#welcome-links #img-example").click(function(){
			self.openBlockByName('example');
		});
		$("#welcome-links #img-image-effect").click(function(){
			self.openBlockByName('image-effect');
		});
		$("#welcome-links #img-contact-us").click(function(){
			self.openBlockByName('contact-us');
		});
	},
	openBlockByName:function(blockName){
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
			$(".modal-content #comment").removeClass("error");
			$(".modal-content #commenter").removeClass("error");
			commenter = $(".modal-content #commenter").val();
			comment = $(".modal-content #comment").val();
			if(commenter != "" && comment != ""){
				var row = '<tr><td> ' + i + ' </td> <td> ' + commenter + ' </td> <td>' + comment + '</td></tr>';
			  $("#feedback #comments").append(row);
			  i++;
			  $("#modal").attr("style","display:none;");
			}
			else{
				if(commenter == ""){
					$(".modal-content #commenter").addClass("error");
				}
				if(comment == ""){
					$(".modal-content #comment").addClass("error");
				}
			}
		});
	},
	handleScrollEffect:function(){
		var self = this;
		$(document).scroll(function(){
			$("#welcome-links").each(function(){
				if(self.isScrolledIntoView(this) && $(this).css('display')!='none'){
        	$("#welcome-links img").attr("style","display:block;");
       	}
			});
			$("#container").each(function(){
				if(self.isScrolledIntoView(this) && $(this).css('display')!='none'){
        	$("#container").attr("style","display:block;");
        	$("#welcome").attr("style","display:none;");
					$("#welcome-links").attr("style","display:none;");
       	}
			});
		});
	},
	isScrolledIntoView:function(elem){
  	var docViewTop = $(document).scrollTop();
 		var docViewBottom = docViewTop + $(document).height();
 		var elemTop = $(elem).offset().top;
 		var elemBottom = elemTop + $(elem).height();
 		return (elemTop <= docViewBottom-elemBottom+500)
  },
}