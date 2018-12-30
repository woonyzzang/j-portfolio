//디바이스 시뮬레이터
var device = [
	//iPhone
	'iphone3_4', 'iphone5', 'ipad',
	//Android
	'galaxys4', 'galaxys3', 'galaxys2', 'galaxys_note2', 'galaxys_note',
	'optimus_g', 'optimus_g_pro',
	'vega_no6', 'vega_r3',
	//Desktop
	'pc','pc_wild',
	//Custom
	'custom'
];

/*
//체크박스 활성 판별 이벤트 핸들러
function isCheck(){
	$('.category .chk > input').each(function(idx, node){
		var $this = $(this);
		var $agentLst = $this.parent('.chk').prev('a');

		if($this.prop('checked')){
			$agentLst.addClass('on');
		}else{
			$agentLst.removeClass('on');
		}
	});
}
//*/

//클래스 추가 && 삭제
var activeClass = {
	add : function(options){
		options.selecter.addClass(options.clsName);

		return options.selecter;
	},
	remove : function(options){
		options.selecter.removeClass(options.clsName);

		return options.selecter;
	}
};

//디바이스 문자열 정보 가져오기
function getAgentInfo($this, $val){
	return $this.find($val).text();
}

//디바이스 시뮬레이터 초기 로드
function deviceLoad(){
	//디바이스 시뮬레이터 컨텐츠
	var items = [],
		defaultURL = 'http://bluewaves.co.kr';
		$agentLst = $('#agentLst ul ul>li');

	$.each(device, function(idx, val){
		var $currentTarget = $agentLst.eq(idx),
			deviceNameTxt = getAgentInfo($currentTarget,'.device_name'),
			deviceLabelTxt = getAgentInfo($currentTarget, '.label'),
			deviceLabelTxtCrop = deviceLabelTxt.split('x'),
			deviceDpiWid = deviceLabelTxtCrop[0],
			deviceDpiHgt = deviceLabelTxtCrop[1];

/*
		items.push(
			'<div id="' + val + '" class="device ' + val + '" data-orientation="portrait">'
				+'<div class="frame_wrap">'
					+'<iframe src="' + defaultURL + '" frameborder="0" scrolling="yes"></iframe>'
				+'</div>'
				+'<span class="desc">'
					+'<span class="label ori"><strong>' + deviceNameTxt + '</strong> (Portrait) <em class="wid_val">' +  deviceDpiWid  + '</em> x <em class="hgt_val">' + deviceDpiHgt + '</em></span>'
					+'<span class="label land"><strong>' + deviceNameTxt + '</strong> (LandScape) <em class="hgt_val">' + deviceDpiHgt + '</em> x <em class="wid_val">' + deviceDpiWid + '</em></span>'
				+'</span>'
				+'<button type="button" title="Device Rotate" class="btn_rotate">회전</button>'
				//+'<span class="case_3d top"></span>'
				//+'<span class="case_3d rgt"></span>'
				//+'<span class="case_3d btm"></span>'
				//+'<span class="case_3d lft"></span>'
				//+'<span class="case_3d back"></span>'
			+'</div>'
			+'<hr>'

		);
*/
		if(val != 'custom'){//All Ani Device
			items.push(
				'<div id="' + val + '" class="device ' + val + '" data-orientation="portrait">'
					+'<div class="frame_wrap"><iframe src="' + defaultURL + '" frameborder="0" scrolling="yes"></iframe></div>'
					+'<span class="desc">'
						+'<span class="ori"><strong>' + deviceNameTxt + '</strong> (Portrait) <em class="wid_val">' +  deviceDpiWid  + '</em> x <em class="hgt_val">' + deviceDpiHgt + '</em></span>'
						+'<span class="land"><strong>' + deviceNameTxt + '</strong> (LandScape) <em class="hgt_val">' + deviceDpiHgt + '</em> x <em class="wid_val">' + deviceDpiWid + '</em></span>'
					+'</span>'
					+'<button type="button" title="Device Rotate" class="btn_rotate">회전</button>'
				+'</div>'
				+'<hr>'
			);
		}else{//Custom Device
			items.push(
				'<div id="' + val + '" class="device ' + val + '" data-orientation="custom">'
					+'<div class="frame_wrap"><iframe src="' + defaultURL + '" frameborder="0" scrolling="yes"></iframe></div>'
					+'<span class="desc">'
						+'<span class="cstm"><strong>Custom</strong> (User) <em class="wid_val">' +  850  + '</em> x <em class="hgt_val">' + 440 + '</em></span>'
					+'</span>'
				+'</div>'
			);
		}
	});

	//첫번째 디바이스 시뮬레이터 노출
	$('#deviceFrame').append(items).children('.device').not(':eq(0)').hide();
}

//디바이스 리스트 초기 로드
function agentLoad(){
	$('#dimmed').show();

	//디바이스 해상도 카테고리 목록 불러오기
	var path = 'data/agentList.json',
		jqxhr = $.getJSON(path, function(data){
		var items = [];

		$.each(data, function(key, val){
			items.push(
				'<li><a href="#' + key + '" class="tit"><strong>' + key + '</strong></a>'
					+'<ul id="' + key + '" class="category">'
			);

			$.each(val, function(idx, obj){
				items.push(
					'<li>'
						+'<a href="#' + obj.idx + '">'
							+'<em class="device_name">'+ obj.name +'</em>'
							+'<small class="label">' + obj.wid + 'x' +  obj.hgt + '</small>'
							+'<small class="browser">(브라우저 ' + obj.browser + ')</small>'
						+'</a>'
						//+'<span class="chk">'
						//	+'<label for="' + obj.name + '" class="blind">' + obj.name + '뷰 보기</label>'
				);

				if(obj.name == 'PC' || obj.name == 'PC Wild') return true;

				items.push(
						//	'<input type="checkbox" disabled id="' + obj.name + '" name="' + obj.name + '" title="' + obj.desc + ' 뷰 선택 &frasl; 해제">'
						//+'</span>'
					'</li>'
				);
			});

			items.push(
					'</ul>'
				+'</li>'
			);
		});

		$('<ul/>', {
			html: items.join('')
		}).appendTo('#agentLst');

		//첫번째 메뉴 기본 활성화
		activeClass.add({selecter:$('.category:eq(0)').find('a:eq(0)'), clsName:'on'});
	}).done(function(){ //console.log('second success');
		deviceLoad();
	}).fail(function(error){
		console.log(error);
	}).always(function(){ //console.log('complete');
//		$('#dimmed').hide();
	});
}

(function($){
	agentLoad();

	//URL 폼 이벤트 핸들러
	$('#enterURL').on('submit', function(e){
		var URL = document.getElementById('srch').value;
		$('iframe').attr('src', URL);

		e.preventDefault();
	});

	//Custom Size 폼 이벤트 핸들러
	$('#customSize').on('change', function(e){
		var nWidVal = $('#nWid').val(),
			nHgtVal = $('#nHgt').val();

		$('#custom').children('.frame_wrap').css({'width':nWidVal, 'height':nHgtVal})
		.end().find('.wid_val').text(nWidVal)
		.end().find('.hgt_val').text(nHgtVal);

		e.preventDefault();
	});

	//Custom Scale 폼 이벤트 핸들러
	$('#customScale').on('change', function(e){
		var rSclaeVal = $('#rScale').val();

		$('#custom').css('transform','scale(' + rSclaeVal + ')');

		e.preventDefault();
	});

	//디바이스 버튼 이벤트 핸들러
	$('#devices').on('click', 'button', function(e){
		var ID = this.getAttribute('id');
		//var $checkBox = $('#agentLst').find('input');

		if($(this).hasClass('active')) return false;

		activeClass.remove({selecter:$('.category a'), clsName:'on'});
		activeClass.add({selecter:$(this), clsName:'active'});
		$('.customs').hide();

		switch(ID){
			case 'btnSingle': //console.log('싱글');
				$('#deviceFrame').removeClass('rows').find('.device').show().not(':eq(0)').hide();
				activeClass.add({selecter:$('.category:eq(0)').find('a:eq(0)'), clsName:'on'});
				activeClass.remove({selecter:$('#btnCustom, #btnMulti'), clsName:'active'});
				activeClass.remove({selecter:$('#btnHori, #btnVert'), clsName:'active'}).attr('disabled','disabled');
				break;
			case 'btnCustom': //console.log('커스텀');
				activeClass.remove({selecter:$('#deviceFrame'), clsName:'rows'});
				activeClass.remove({selecter:$('#btnSingle, #btnMulti'), clsName:'active'});
				activeClass.remove({selecter:$('#btnHori, #btnVert'), clsName:'active'}).attr('disabled','disabled');

				$('.device').hide().filter(function(idx){
					return this.id == 'custom';
				}).show();

				$('.customs').show();
				break;
			case 'btnHori': //console.log('가로 정렬');
				activeClass.remove({selecter:$('#deviceFrame'), clsName:'cols'}).addClass('rows');
				activeClass.remove({selecter:$('#btnVert'), clsName:'active'});
				break;
			case 'btnVert': //console.log('세로 정렬');
				activeClass.remove({selecter:$('#deviceFrame'), clsName:'rows'}).addClass('cols');
				activeClass.remove({selecter:$('#btnHori'), clsName:'active'});
				break;
			case 'btnMulti': //console.log('멀티');
				activeClass.add({selecter:$('.category a'), clsName:'on'});
				activeClass.remove({selecter:$('#btnSingle, #btnCustom'), clsName:'active'});
				$('#btnHori, #btnVert').removeAttr('disabled');

				$('.device').filter(function(idx){
					return this.id != 'custom';
				}).show();
				break;
			default:break;
		}
	});

	//도움말 메뉴 이벤트 핸들러
	$('#help').on('click', function(e){
		var $lyWorks = $('#lyWorks');

		if($lyWorks.is(':hidden')){
			$('#dimmed').show();
			$lyWorks.show();
		}

		e.preventDefault();
	});

	//도움말 레이어 닫기 이벤트 핸들러
	$('#lyWorks').on('click', 'a.btn_clse', function(e){
		$('#dimmed').hide();
		$(this).parents('#lyWorks').hide();

		e.preventDefault();
	});

	//디바이스 카테고리 메뉴 이벤트 핸들러
	$('#agentLst').on('click', '.tit', function(e){
		var subMenu = this.getAttribute('href');

		(!$(subMenu).is(':hidden'))? $(subMenu).slideUp('fast') : $(subMenu).slideDown('fast');

		e.preventDefault();
	}).on('click', '.category a', function(e){
		var str = this.getAttribute('href').replace('#','');

		if($('#btnCustom').hasClass('active') || $('#btnMulti').hasClass('active')) return false;

		activeClass.remove({selecter:$('.category a'), clsName:'on'});
		activeClass.add({selecter:$(this), clsName:'on'});

		$('#' + str).show().siblings('.device').hide();

		e.preventDefault();
	});

	//가로&&세로 회전 버튼 이벤트 핸들러
	$('.btn_rotate').live('click', function(e){
		var $divice = $(this).parent('.device'),
			isOri = $divice.attr('data-orientation');

		switch(isOri){
			case 'portrait':
				$divice.attr('data-orientation','landscape');
				break;
			case 'landscape':
				$divice.attr('data-orientation','portrait');
				break;
			default:break;
		}
	});
/*
	var xDeg = 0;
	var yDeg = 0;

	$(document).bind('keydown', function(e){
		switch(e.keyCode){
			case 37: //left
				console.log('left');
				$('#deviceFrame .device').css('-webkit-transform','rotateY(' + (yDeg -= 90) + 'deg)');
				break;
			case 38: //up
				console.log('up');
				$('#deviceFrame .device').css('-webkit-transform','rotateX(' + (xDeg -= 90) + 'deg)');
				break;
			case 39: //right
				console.log('up');
				$('#deviceFrame .device').css('-webkit-transform','rotateY(' + (yDeg += 90) + 'deg)');
				break;
			case 40: //down
				console.log('down');
				$('#deviceFrame .device').css('-webkit-transform','rotateX(' + (xDeg += 90) + 'deg)');
				break;
			default:break;
		}
	});
*/
})(jQuery);

window.addEventListener('load', function(){
	$('#dimmed').hide();
});