function userConfig(config) {
	var $wrap = $('#wrap');

	switch ( config ) {
		case 'horizontal' : // GNB 가로
			$wrap.removeClass('vertical');
			sessionStorage.removeItem('GNBLayout');
		break;
		case 'vertical' : // GNB 세로
			$wrap.addClass('vertical');
			sessionStorage.setItem('GNBLayout', 'vertical');
		break;
		case 'fixed' : // GNB 고정
			$wrap.addClass('fixed');
			sessionStorage.setItem('GNBFixed', 'fixed');
		break;
		case 'static' : // GNB 노말
			$wrap.removeClass('fixed');
			sessionStorage.removeItem('GNBFixed');
		break;
	}
}

$(document).ready(function() {
	var $wrap = $('#wrap');

	//console.log( 'GNBLayout : ' + sessionStorage.getItem('GNBLayout') );
	//console.log( 'GNBFixed : ' + sessionStorage.getItem('GNBFixed') );

	$('#setList').find('span').removeClass('checked');
	$('#setList').find(':radio').attr('checked', false);

	if ( sessionStorage.getItem('GNBLayout') ) {
		$wrap.addClass('vertical');
		$('#vertical').attr('checked', true).parent('span').addClass('checked');
	} else {
		$wrap.removeClass('vertical');
		$('#horizontal').attr('checked', true).parent('span').addClass('checked');
	}

	if ( sessionStorage.getItem('GNBFixed') ) {
		$wrap.addClass('fixed');
		$('#fixed').attr('checked', true).parent('span').addClass('checked');
	} else {
		$wrap.removeClass('fixed');
		$('#static').attr('checked', true).parent('span').addClass('checked');
	}
});

//var scrollTimer = 0;

$(window)
	.on('resize', function() {
		if ( $(window).width() <= 1280 ) {
			if ( !$('#func').hasClass('normal') ) {
				$('#func').addClass('normal');
			}
		} else {
			if ( $('#func').hasClass('normal') ) {
				$('#func').removeClass('normal');
			}
		}
	})
	.on('scroll', function() {
		/*if ( scrollTimer !== 0 ) {
			clearTimeout(scrollTimer);
		}*/

		//scrollTimer = setTimeout(function() {
			if ( $('#wrap').hasClass('fixed') ) {
				var $gnb = $('#gnb');

				if ( $(this).scrollTop() >= 10 ) {
					$gnb.addClass('gnb_v1');
				} else {
					$gnb.removeClass('gnb_v1');
				}
			}
		//}, 50);
	});

$('#srch').on('click', ':input[type=image]', function(e) {
	e.preventDefault();

	var url = 'document.html';

	$(location).attr('href', url);
});

$('#tabs').on('click', 'a', function(e) {
	e.preventDefault();

	var $this = $(this);
	var target = $this.attr('href');

	$('.tab_cont').hide();
	$(target).show();
});

$('#setList').on('change', ':radio', function(e) {
	var $this = $(this);
	var $parent = $this.parent('span');
	var $parents = $this.parents('.item');
	var targetID = $this[0].id;

	$parents.find('span').removeClass('checked');
	$parents.find(':radio').attr('checked', false);

	$parent.removeClass('nchecked').addClass('checked');
	$this.attr('checked', true);

	if ( targetID === 'vertical' && $('#fixed').attr('checked') ) {
		$('#vertical').attr('checked', false).parent('span').removeClass('checked');
		$('#horizontal').attr('checked', true).parent('span').addClass('checked');
		
		alert('메뉴 고정은 상측 설정시에만 가능합니다.');

		return;
	}

	if ( targetID === 'fixed' && $('#vertical').attr('checked') ) {
		$('#fixed').attr('checked', false).parent('span').removeClass('checked');
		$('#static').attr('checked', true).parent('span').addClass('checked');
		
		alert('메뉴 고정은 상측 설정시에만 가능합니다.');

		return;
	}

	userConfig( targetID );
});

$('#func').on('click', '>a', function(e) {
	e.preventDefault();

	var $this = $(this);
	var target = $this.attr('href');
	
	$('#dimmed').show();
	$(target).show();
});

$('#lyPop').on('click', '>a.clse', function(e) {
	e.preventDefault();

	var $this = $(this);
	var target = $this.attr('href');

	$('#dimmed').hide();
	$(target).hide();
});