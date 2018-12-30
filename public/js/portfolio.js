(function($){
	var Poprtfolio = {
		init : function() {
			$('.covered-first').coveringBad({
				marginX : 0,
				marginY : 23,
				setX : 150,
				setY : 200
				//direction : 'horizontal'
			});
			/*$('.second').coveringBad({
			 marginY : 20 ,
			 marginX : 20 ,
			 setX  : 210,
			 setY  : 140 ,
			 direction   : "horizontal"
			 });

			 $('.third').coveringBad();

			 $('.fourth').coveringBad({
			 marginY : 20 ,
			 marginX : 400 ,
			 setX  : 400,
			 setY  : 235 ,
			 direction   : "vertical"
			 });*/

			/*$('.slim-scroll').slimScroll({
				//width: '300px',
				height: '1000px',
				size: '6px',
				position: 'right',
				color: '#333',
				alwaysVisible: false,
				distance: '0',
				start: $('#historys'),
				railVisible: false,
				railColor: '#222',
				railOpacity: 0.3,
				wheelStep: 10,
				allowPageScroll: false,
				disableFadeOut: true
			});*/

			$('#gallery').mixItUp();

			//스크롤 초기화
			$('#wrap .home').addClass('v1');
		},
		evtListener : function() {
			//새로고침 이벤트 핸들러
			/*$(document).on('keydown', function(e){
				//F5 새로고침 방식
				if(e.keyCode === 116) {
					e.keyCode = 0;

					return false;
				}
				//CTRL + N 새로고침 방식
				else if((e.keyCode === 78) && (e.ctrlKey === true)) {
					e.keyCode = 0;

					return false;
				}
			});*/

			//이력서 클릭 이벤트 핸들러
			$('#resume').on('click', function(e) {
				window.open( $(this).attr('href'), 'resume', 'width=900, height=950');

				e.preventDefault();
			});

			//GNB 메뉴 클릭 이벤트 핸들러
			$('#gnb').on('click', 'a', function() {
				//var oIdx = $(this).attr('href');
				//$(oIdx).position().top

				/*if(!$('#wrap .swipe').hasClass('on')) {
					$('#gnb, #wrap .swipe, #portfolio').addClass('v1');
					//$('#wrap .swipe').addClass('on').animate({'margin-left' : '-100%'});
				}*/

				$('#gnb, #wrap .swipe, #portfolio').toggleClass('v1');

				/*if( $('#container').is(':animated') ) { return false; }
				$('#container').animate({'scrollTop' : $(oIdx).position().top });

				e.preventDefault();*/
			});

			//홈 바로가기 클릭 이벤트 핸들러
			$('#btnHome').on('click', function() {
				$('#wrap .swipe').removeClass('on');
			});

			//포트폴리오 필터 메뉴 클릭 이벤트 핸들러
			$('#mFilter').on('click', 'li', function() {
				$(this).addClass('active').siblings().removeClass('active');
			});

			//포트폴리오 썸네일형 보기 클릭 이벤트 핸들러
			$('#btnThumb').on('click', function() {
				$('#gallery').removeClass('list');
			});

			//포트폴리오 리스트형 보기 클릭 이벤트 핸들러
			$('#btnList').on('click', function() {
				$('#gallery').addClass('list');
			});
		}
	};

	$(document).ready(function() {
		Poprtfolio.init();
		Poprtfolio.evtListener();
	});
}(jQuery));