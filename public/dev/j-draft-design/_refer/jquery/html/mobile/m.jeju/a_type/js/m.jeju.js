/*
 * @m.jeju UI
 */

function conextboxShow() {
	$('#conextbox').addClass('on');

	conextboxFlag = true;
};

(function($){

	$('img[usemap]').rwdImageMaps();

	if (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase())) {
		// conextbox
		var conextboxFlag = false;

		$('body').hammer().on('press', conextboxShow);

		$('#conextbox').on('click', function() {
			if (conextboxFlag) {
				conextboxFlag = false;
			} else {
				$(this).removeClass('on');
			}
		});
	} else {
		$('#conextbox').remove();
	}

	$('#allMenu').on('click', 'area', function(e) {
		var dataHref = $(this).data('href');
		var isId = $(this).attr('id');

		if ( dataHref ) {
			e.preventDefault();

			$('#allMenu').children('img').attr('src', dataHref);
		}

		if ( isId === 'btnSearch' || isId === 'btnMyPage') {
			localStorage.setItem('history', true);
		}
	});

	// Header > allMenu
	$('#btnAllMenu').on('click', function(e) {

		e.preventDefault();

		if ( $('.page').is(':animated') ) {
			return false;
		}

		var hgt = $('#allMenu').find('img').height();

		if ( !$('#allMenu').hasClass('on') ) {
			$('#allMenu').addClass('on');
			$('.page').stop().animate({
				top : hgt //hgt
			}, function() {
				$('.page .content').addClass('on');	
			});

			$('#fbtn').hide();
			$('footer').hide();
		} else {			
			$('.page').stop().animate({
				top : 0
			}, function() {				
				$('#allMenu').removeClass('on');
				$('.page .content').removeClass('on');	
			});

			$('#fbtn').show();
			$('footer').show();
		}

	});
	
	// Header > alarmPush
	$('#btnAlarmPush').on('click', function(e) {
		
		e.preventDefault();

		var target = $(this).attr('href');

		$(target).addClass('on');

	});

	$('#alarmPush').on('click', function() {
		$(this).removeClass('on');
	});
	
	// fbtn
	$('#fbtn').on('click', function(e) {

		if ( $(this).children('a').is(':hidden') ) {
			$(this).children('img').attr('src', '../im/travel_fbtn_on.png');
			$(this).children('a').show();
			$('#dimmed').show();
		} else {
			$(this).children('img').attr('src', '../im/travel_fbtn.png');
			$(this).children('a').hide();
			$('#dimmed').hide();
		}

	});

	$('#fbtn a').hammer().on('swiperight swipeleft', function(ev) {

		switch(ev.type) {
			case 'swiperight' :
				if( parseInt($(this).children('span').css('marginLeft')) >= 0 ) {
					return false;
				}

				$(this).children('span').stop().animate({
					marginLeft : '+=100'
				});

				break;
			case 'swipeleft' :

				if( parseInt($(this).children('span').css('marginLeft')) < -300 ) {
					return false;
				}

				$(this).children('span').stop().animate({
					marginLeft : '-=100'
				});

				break;
		}

	});

})(jQuery);