$(function() {
	smoothScroll(300);
	workLoad();
	workBelt();
	clientStuff();
	
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}


function workLoad(){
	$('.thumb-unit').click(function(){
		var $this = $(this);
		var newTitle = $this.find('strong').text();
		var newFolder = $this.data('folder'); 
		var spinner = '<div class="loader">Loading...</div>';
		var newHTML = 'work/' + newFolder + '.html';
		$('.project-load').html(spinner).load(newHTML);
		$('.project-title').text(newTitle);

	});
}


function workBelt() {
	$('.thumb-unit').click(function(){
		$('.work-belt').css('left', '-100%');
		$('.work-container').show();
	});

	$('.work-return').click(function(){
		$('.work-belt').css('left','0%');
		$('.work-container').hide(800);
	});
}

function clientStuff() {

	$('.client-unit').css('opacity','0');
	$('.client-unit').first().css('opacity','1');
	$('.client-logo').first().addClass('selected-client');

	$('.client-logo').click(function(){
		var $this = $(this);
		var $siblings = $this.parent().children();
		var position = $siblings.index($this);
		$('.client-unit').css('opacity','0').eq(position).css('opacity','1');
		$siblings.removeClass('selected-client');
		$this.addClass('selected-client');
	});

	$('.client-control-prev, .client-control-next').click(function() {
		var $this = $(this);
		var clients = $('.client-unit').siblings();
		var position = $('.selected-client').index();

		if ($this.hasClass('client-control-next')) {
			if(position < clients.length-1){
				position = position + 1;
			} else {
				position = 0;
			}
		} else {
			if(position > 0){
				position = position - 1;
			} else {
				position = clients.length-1;
			}
		}

		$('.client-unit').css('opacity','0').eq(position).css('opacity','1');
		$('.clients-logos').children().removeClass('selected-client');
		$('.client-logo').eq(position).addClass('selected-client');
	});
}
