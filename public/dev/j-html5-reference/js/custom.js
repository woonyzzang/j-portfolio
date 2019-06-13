$(function(){
	function smrToggle($elem,$btnName){
		if($elem.is(':hidden')){
			$elem.slideDown('fast', function(){
				$('.btn_lst' + $btnName).show();
			});
		}else{
			$elem.slideUp('fast', function(){
				$('.btn_lst' + $btnName).show();
			});
		}
	}

	//색인화 버튼 이벤트
	$('a[data-btn=smr]').on('click',function(e){
		var $docSummary = $('#docSummary .inner'),
			regExp = /btn_lst*\s/g,
			btnStr = this.className.replace(regExp,'');

		switch(btnStr){
			case 'open':
				smrToggle($docSummary,'.clse');
				break;
			case 'clse':
				smrToggle($docSummary,'.open');
				break;
			default:break;
		}

		$(this).hide();

		e.preventDefault();
	});
});