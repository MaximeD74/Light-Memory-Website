(function ($) {
	
	"use strict";

	// Page loading animation
	$(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });


	
	$('.owl-banner').owlCarousel({
	  center: true,
      items:1,
      loop:true,
      nav: true,
	  dots:true,
	  navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      margin:30,
      responsive:{
        992:{
            items:1
        },
		1200:{
			items:1
		}
      }
	});

	var width = $(window).width();
		$(window).resize(function() {
		if (width > 767 && $(window).width() < 767) {
			location.reload();
		}
		else if (width < 767 && $(window).width() > 767) {
			location.reload();
		}
	})

	const elem = document.querySelector('.properties-box');
	const filtersElem = document.querySelector('.properties-filter');
	if (elem) {
		const rdn_events_list = new Isotope(elem, {
			itemSelector: '.properties-items',
			layoutMode: 'masonry'
		});
		if (filtersElem) {
			filtersElem.addEventListener('click', function(event) {
				if (!matchesSelector(event.target, 'a')) {
					return;
				}
				const filterValue = event.target.getAttribute('data-filter');
				rdn_events_list.arrange({
					filter: filterValue
				});
				filtersElem.querySelector('.is_active').classList.remove('is_active');
				event.target.classList.add('is_active');
				event.preventDefault();
			});
		}
	}


	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 700);
				return false;
			}
		}
	});


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});
    


})(window.jQuery);

// FAQ Accordion
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.faq-question').forEach(function(button) {
    button.addEventListener('click', function() {
      var item = button.parentElement;
      document.querySelectorAll('.faq-item.active').forEach(function(openItem) {
        if (openItem !== item) openItem.classList.remove('active');
      });
      item.classList.toggle('active');
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const targets = document.querySelectorAll('.informationTitleText, .articleInformations iframe');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Ajouter la classe 'show' avec un délai si c'est un iframe
          if (entry.target.tagName.toLowerCase() === 'iframe') {
            setTimeout(() => {
              entry.target.classList.add('show');
            }, 700); // 1000 ms = 1 seconde
          } else {
            entry.target.classList.add('show');
          }
        }
      });
    }, {
      threshold: 0.5
    });
  
    targets.forEach(target => {
      observer.observe(target);
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.properties .item');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showTop');
        }
      });
    }, {
      threshold: 0.5
    });
  
    items.forEach(item => {
      observer.observe(item);
    });
  });

  document.addEventListener('wheel', (e) => {
  if (e.ctrlKey) e.preventDefault(); // bloque Ctrl+scroll (zoom souris)
}, { passive: false });

document.addEventListener('touchmove', (e) => {
  if (e.touches.length > 1) e.preventDefault(); // bloque pinch-zoom
}, { passive: false });

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && ['+', '-', '0'].includes(e.key)) e.preventDefault(); // bloque Ctrl+/Ctrl-
});