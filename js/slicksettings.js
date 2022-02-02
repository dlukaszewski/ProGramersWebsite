$(".team-carousel").slick(
    {
	    
        arrows: false,
	    autoplay: true,
	    mobilefirst: true,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    responsive: [{
			    breakpoint: 768,
			    settings: { slidesToShow: 1 },
		    },
		    {
			    breakpoint: 992,
			    settings: { slidesToShow: 2 },
		    }
        ],
    }
);
