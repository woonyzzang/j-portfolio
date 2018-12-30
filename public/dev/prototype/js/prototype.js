/**
 * @Prototype FrontEnd UI Dev
 * Date : 2015.10.15
 * Author : woonyzzang
 */

'use strict';

var mapAreaCache = []; //맵영역 좌표 캐시
var fiexdCache = []; //픽스 헤더, 푸터 값 캐시
var protoItemCloneAll = []; //브라우저 이미지전체 할당

;(function($){

    //todo: $('#detail, #config').addClass('active');

    var _tmplProtoItem = $.templates('#tmplProtoItem');
    var _tmplConnectionItem = $.templates('#tmplConnectionItem');

    var $dropBox = $('#dropbox');
    var jcrop_api;
    var mapArea = {};

    var protoItemIdx = 0;
    var $connectionList = $('<ul></ul>');

    var protoItemWid = 240; // 아이템 이미지 넓이 초기값
    var protoItemHgt = 380; // 아이템 이미지 높이 초기값

    var $protoItemClone = null; //아이템 클론

    var gAllApplyFixed; // All Apply 기능 활성화시 Fixed top, bottom 값 캐싱

    var gDbClick = false; //더블클릭 플래그
    var gCurrentMapAreaIdx; // 더블클릭 시 .map_area[href] 속성 캐싱
    var gCurrentMapAreaTransition; // 더블클릭 시 .map_area[data-transition] 속성 캐싱

    /* $(document).ajaxStart(function() {
        $('#dropboxDimmed').show();
     });

     $(document).ajaxStop(function() {
        $('#dropboxDimmed').hide();
     });*/

    /**
     * @description 드래그앤드랍 함수
     * @param {Event} e
     */
    function onDrop(e) {

        // 기본 설명글이 존재하면 드래그앤드랍 방지
        if ( $('#noProjectDesc').hasClass('on') ) {
            return false;
        } else {
            $('#imgUploadDesc').removeClass('on');
        }

        var files = e,
            imageType = /image.*/,
            textType = /text.*/,
            isImage,
            file = [],
            Reader = null;

        var protoItemWid = $('.proto_item:eq(0)').width(),
            protoItemHgt = $('.proto_item:eq(0)').children('.thumb').height();

        for (var i = 0, len = files.length; i < len; i++) {
            file = files[i];

            if (file.type.match(imageType)) {
                isImage = true;
            } else if (file.type.match(textType)) {
                isImage = false;
            }

            Reader = new FileReader();

            Reader.onload = (function(aFile) {
                return function(e) {
                    var result = e.target.result,
                        data = [],
                        fileType,
                        fileName,
                        htmlOutput;

                    if (isImage) {
                        fileType = aFile.type.split('/')[1];
                        fileName = aFile.name.split('.');
                        fileName.pop();

                        data.push({
                            src : result,
                            idx : protoItemIdx++,
                            ftype : aFile.type.split('/')[1],
                            fname : fileName.join('.'),
                            fsize : aFile.size
                        });

                        htmlOutput = _tmplProtoItem.render(data);
                        $dropBox.append(htmlOutput);

                        htmlOutput = _tmplConnectionItem.render(data);
                        $connectionList.append('<li>' + htmlOutput  + '</li>');
                        //$connectionList.append('<li><a href="#"><img src="' + data[0].src + '" data-idx="' + data[0].idx + '" alt=""><i class="icon-ok-circle icon-4x"></i></a></li>');
                    } else {
                        $dropBox.append(result.clone(true));
                    }

                    // 메인 셋팅 ZOOM 스케일 사용시 드래그앤 드랍 해도 아이템 넓이&&높이 값 유지
                    if (protoItemWid !== null) {
                        $('.proto_item').width(protoItemWid).children('.thumb').height(protoItemHgt);
                    }
                };
            })(file);

            (isImage)? Reader.readAsDataURL(file) : Reader.readAsText(file, 'utf-8');
        }

        $('#connection').prepend($connectionList);
    }

    /**
     * @description 스크린 url 클립보드 복사 함수
     */
    function screenLink() {
        var URL = $('#screen').children('span');

        if ( window.clipboardData ) {
            window.clipboardData.setData('Text', URL.text());
            //alert('The URL is copied. Ctrl + V to paste.');
        } else {
            var range = document.createRange();

            range.selectNode(URL[0]);
            window.getSelection().addRange(range);

            try {
                var successful = document.execCommand('copy');
                //var msg = successful ? 'successful' : 'unsuccessful';
                //console.log('Copy email command was ' + msg);
            } catch(err) {
                //console.log('Oops, unable to copy');
            }

            window.getSelection().removeAllRanges();

            //window.prompt('Press Ctrl + C to copy it to clipboard', URL );
        }
    }

    /**
     * @description 페이스북 로그인 함수
     */
    function facebookWrite(){
        var pageUrl = document.location.href;
        var _url = encodeURIComponent(pageUrl);

        var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
        var _w = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var _h = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        var left = ((_w / 2) - (600 / 2)) + dualScreenLeft;
        var top = ((_h / 2) - (350 / 2)) + dualScreenTop;

        var option = 'width=600,height=350,scrollbars=no,resizable=no,status=no,toolbar=no,top=' + top + ',left=' + left;
        var url = 'http://www.facebook.com/sharer/sharer.php?u=' + _url;
        var facebook = window.open(url, '페이스북 글 작성하기', option);

        facebook.focus();
    }

    /**
     * @param {HTMLElement} selecter
     * @returns {jQueryObject} $current
     * @description 매핑된 이미지 data-idx 엘리먼트 필터링
     */
    function imgMappingFilter(selecter) {
        var targetIdx = $(selecter).closest('.proto_item').find('img').data('idx'),
            $current = null;

        //매핑된 data-idx 값 노드 찾은 후 삭제
        $('#connection').find('img').each(function(i, elem) {
            if( $(elem).data('idx') === targetIdx ) {
                $current = $(elem).closest('li');
            }
        });

        return $current;
    }

    /**
     * @description 맵영역 만들기
     */
    //var mapAreaCache = []; //맵영역 캐시
    function addCoords() {
        var $mapLink = null;

        if ( typeof mapAreaCache[$protoItemClone.data('idx')] === 'undefined' ) {
            mapAreaCache[$protoItemClone.data('idx')] = [];
        }

        if ( event.keyCode === 27 || typeof mapArea.y === 'undefined' ) {
            return false;
        }

        $mapLink = $('<a></a>');

        $mapLink
            .attr({
                'href' : (gCurrentMapAreaIdx)? gCurrentMapAreaIdx : '#',
                'data-coords' : mapArea.cx +','+ mapArea.cy +','+ mapArea.cx2 +','+ mapArea.cy2,
                'data-transition' : (gCurrentMapAreaTransition)? gCurrentMapAreaTransition : 'none',
                'class' : 'map_area'
            })
            .css({
                top : mapArea.y,
                left : mapArea.x,
                width : mapArea.w,
                height : mapArea.h
            });

        gCurrentMapAreaIdx = ''; //초기화
        //gCurrentMapAreaTransition = ''; //초기화
        // All Apply 기능 활성화 되어 있지 않으면 초기화
        if ( !$('#applyChoose').children('label.transition').hasClass('on') ) {
            gCurrentMapAreaTransition = ''; //초기화
        }

        $('#viewer').append( $mapLink );

        //맵영역 캐시 배열 할당
        $('.map_area').each(function(i, elem) {
            var coords = $(elem).data('coords').split(',');

            mapAreaCache[ $protoItemClone.data('idx') ][i] = {
                y : elem.style.top,
                x : elem.style.left,
                w : elem.style.width,
                h : elem.style.height,
                cx : coords[0],
                cy : coords[1],
                cx2 : coords[2],
                cy2 : coords[3],
                href : $(elem).attr('href'),
                transition : $(elem).attr('data-transition')
            };
        });

        mapArea = {}; //초기화
    }

    /**
     * @description 맵영역 그리기
     */
    function showCoords(c) {
        // c.x, c.y, c.x2, c.y2, c.w, c.h
        mapArea = {
            y : c.y + 'px',
            x : c.x + 'px',
            w : c.w + 'px',
            h : c.h + 'px',
            cx : c.x,
            cy : c.y,
            cx2 :c.x2,
            cy2 :c.y2
        };
    }

    /**
     * @description QR코드 생성 함수
     */
    function qrcodeCreate() {
        var $qrcode = $('#qrcode');

        if ( !$qrcode.is(':hidden') ) {
            $qrcode.hide();
            $qrcode.empty();

            return false;
        }

        var Qrcode = new QRCode('qrcode', {
            width: 100,
            height: 100,
            colorDark : '#000',
            colorLight : '#fff',
            correctLevel : QRCode.CorrectLevel.H
        });

        Qrcode.clear();
        Qrcode.makeCode( $('#screen').children('span').text() );

        $qrcode.show();
    }

    /**
     * @description 페이징 현재 값 체크 후 버튼 이전버튼, 다음버튼 활성화 || 비활성화
     */
    function pagenateDisabledCheck() {
        var currentPage = parseInt($('#currentPage').text()),
            totalPage = parseInt($('#totalPage').text());

        // 이전버튼 disabled 활성화 || 비활성화
        ( currentPage <= 1 )? $('#btnPrev').attr('disabled', true) : $('#btnPrev').attr('disabled', false);

        // 다음버튼 disabled 활성화 || 비활성화
        ( currentPage >= totalPage )? $('#btnNext').attr('disabled', true) : $('#btnNext').attr('disabled', false);
    }

    /**
     * @description 레이어팝업 노출
     */
    function layerPopupShow(selecter) {
        var target = $(selecter).attr('href');

        $('#dimmed').show();
        $(target).addClass('on');
    }

    /**
     * @description 레이어팝업 닫기 버튼 이벤트
     */
    $('.ly_pop').on('click', 'a.clse', function(e) {
        e.preventDefault();

        var $this = $(this),
            target = $this.attr('href');

        $('#dimmed').hide();
        $this.closest('.ly_pop').removeClass('on');
        $(target).focus();
    });

    /**
     * @description Create Project 버튼 이벤트
     */
    $('#btnCreatePjt').on('click', function(e) {
        e.preventDefault();

        layerPopupShow(this);
        
        $('#pjt_name').focus();
    });

    /**
     * @description Sign up (로그인) 버튼 이벤트
     */
    $('#btnSignIn').on('click', function(e) {
        e.preventDefault();

        layerPopupShow(this);

        $('#signin_email').focus();
    });

    /**
     * @description ForgotPW? (패스워드 찾기) 버튼 이벤트
     */
    $('#btnForgotPW').on('click', function(e) {
        e.preventDefault();

        $(this).closest('.ly_pop').removeClass('on');

        layerPopupShow(this);

        $('#forgotpw_email').focus();
    });

    /**
     * @description ForgotPW (패스워드 찾기) > 백버튼 클릭 이벤트
     */
    $('#btnForgotPWBack').on('click', function(e) {
        e.preventDefault();

        $(this).closest('.ly_pop').removeClass('on');

        layerPopupShow(this);
    });

    /**
     * @description Sign in (회원가입) 버튼 이벤트
     */
    $('#btnSignUp').on('click', function(e) {
        e.preventDefault();

        layerPopupShow(this);

        $('#signup_name').focus();
    });

    /**
     * @description Create Project 생성 이벤트
     */
    $('#createPjtFrom').on('submit', function(e) {
        e.preventDefault();

        var pjtNameVal = $('#pjt_name').val();
        //var pattern = /\s/g; 스페이스바 정규식
        //console.log( pjtNameVal.match(pattern).length );
        pjtNameVal = $.trim(pjtNameVal);

        if ( pjtNameVal.length === 0 ) {
            $(this).closest('.ly_pop').addClass('fail').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                $(this).removeClass('fail');
            });
        } else {
            $(this).closest('.ly_pop');
            $('.ly_pop > a.clse').trigger('click');

            $('#protoArea').addClass('proto_area_v1');
            $('#content').addClass('active');
            $('#stit > h2, #screen em').text(pjtNameVal);

            $('#noProjectDesc').removeClass('on');
            $('#imgUploadDesc').addClass('on');
        }
    });

    /**
     * @description 파비콘 이미지 추가 이벤트
     */
    $('#favicon')
        .on('change', '#favicon_find', function(e) {
            var $this = $(this),
                $addFile = $this.get(0).files;

            var Reader= new FileReader();

            Reader.onload = function(e) {
                var result = e.target.result;

                $('.favicon').addClass('on').children('label').children('img').remove().end().prepend('<img src="' + result + '" alt="">');
            };

            Reader.readAsDataURL( $addFile[0] );

            //fnIconCreate();
        })
        .on('click', ':button', function() {
            $('#favicon').removeClass('on').children('label').children('img').remove();
        });

    /**
     * @description 프로젝트 타이틀 수정 버튼 클릭 이벤트
     */
    $('#stit').on('click', 'label', function() {
        var $stit = $(this).parent('#stit');

        $stit.addClass('edit');
        $('#inpt_edit').val( $stit.children('h2').text() );
    });

    /**
     * @description 프로젝트 타이틀 입력창 에디트 이벤트
     */
    $('#editForm')
        .on('submit', function(e) {
            e.preventDefault();

            $('#stit').children('h2').text( $('#inpt_edit').val() ).end().removeClass('edit');
            $('#screen').find('em').text( $('#inpt_edit').val() );
        })
        .on('keyup', '#inpt_edit', function(e) {
            //esc 키보드 이벤트
            if ( e.keyCode === 27) {
                $('#stit').removeClass('edit');
            }
        });

    /**
     * @description 클립보드 카피 이벤트
     */
    $('#screen').on('click', ':button', screenLink);

    /**
     * @description 브라우저 파일찾기 이벤트
     */
    $('#addImgForm').on('submit', function(e) {
        e.preventDefault();

        var $addFile = $('#add_img').get(0).files;

        if( $addFile.length === 0 ) {
            alert('Please select the file');
        } else {
            $dropBox.removeClass('nodata');

            onDrop($addFile);

            $(this).get(0).reset();
        }
    });

    /**
     * @description 외부파일 브라우저 드래그앤드랍 이벤트
     */
    $dropBox
        .on('drop', function(e) {
            e.stopPropagation();
            e.preventDefault();

            //window.getComputedStyle(this, ':after').content;
            onDrop(e.originalEvent.dataTransfer.files);

        })
        .on('dragenter dragover', function() {
            return false;
        });

    /**
     * @description 메인 셋팅 버튼 클릭 이벤트
     */
    $('#btnSettings').on('click', function(e) {
        e.preventDefault();

        $('#settings').toggleClass('active');
    });

    /**
     * @description 전체화면 감지 이벤트
     * IE 하위브라우저 에러 이슈로 임시 주석 처리
     */
    $(document).on(screenfull.raw.fullscreenchange, function() {
        if (screenfull.isFullscreen) {
            //$('#btnFullScreenOff').hide();
            //$('#btnFullScreenOn').show();
        }
    });

    /**
     * @description 브라우저 확대 || 축소 버튼 이벤트
     * IE10 하위브라우저 지원안함
     */
    $('#btnFullScreen').on('click', function() {
        if (screenfull.enabled) {
            //screenfull.request(); 풀스크린 사용
            //screenfull.exit(); 풀스크린 해제
            screenfull.toggle();
        }
    });

    /**
     * @description ZOOM 스케일 사이즈 슬라이드 이벤트
     */
    //$('input[type=range]').attr({min:1, max:10, step:1, value:5});
    $('#slider')
        .on('change', 'input[type=range]', function() {
            var scaleVal = (this.value * 10) - 50; // +- 10픽셀로 확대/축소

            $('.proto_item').css({width: protoItemWid + scaleVal}).children('.thumb').css({height: protoItemHgt + scaleVal});
        })
        .on('click', ':button', function() {
            var target = this.id;

            if ( target === 'btnZoomIn') {
                $('input[type=range]').val(function(i, val) {
                    return parseInt(val) + 1;
                });
            } else if ( target === 'btnZoomOut' ) {
                $('input[type=range]').val(function(i, val) {
                    return parseInt(val) - 1;
                });
            }

            $('input[type=range]').trigger('change');
        });

    /**
     * @description TODO : 스케일 사이즈 기본 값 변경 버튼 이벤트
     *
     $('#btnSliderDefault').on('click', function() {
        $('input[type=range]').val(5).trigger('change');
    });*/

    /**
     * @description 아이템 정렬 순서 적용
     */
    $('#btnSortSync').on('click', function() {
        var $faIco = $(this).children('i');
        var $frag = $(document.createDocumentFragment());

        if ( $faIco.hasClass('icon-spin') ) {
            return false;
        }

        $faIco.addClass('icon-spin');
        //$('#btnSortSync').attr('disabled', true);

        $connectionList.empty();

        window.setTimeout(function() {
            $('.proto_item').each(function(i, elem) {
                var $this = $(elem).find('img');

                $frag.append('<li><a href="#"><img src="' + $this.attr('src') + '" data-idx="' + $this.data('idx') + '" alt=""><i class="icon-ok-circle icon-4x"></i></a></li>');
            });

            $connectionList.append($frag);
            $('#connection').prepend($connectionList);

            $faIco.removeClass('icon-spin');
            //$('#btnSortSync').attr('disabled', false);
        }, 0);
    });

    /**
     * @description 아이템 드래그앤드랍 위치 이동 플러그인
     */
    $dropBox.sortable({
        //delay: 150,
        items: '.proto_item',
        opacity: .5,
        update : function(e, ui) {
            // TODO : 속도 이슈 때문에 추후 전체 적용 순서 정렬 매칭 버튼 별도로 만들어야 할듯함
            /*$connectionList.empty();

             $.ajax({
             url: 'index.html'
             //context: $('#connection')
             }).done(function() {
             $('.proto_item').each(function(i, elem) {
             var $this = $(elem).find('img');

             $connectionList.append('<li><a href="#"><img src="' + $this.attr('src') + '"data-idx="' + $this.data('idx') + '" alt=""><i class="icon-ok-circle icon-4x"></i></a></li>');
             });

             $('#connection').append($connectionList);
             });*/
        }
    }).disableSelection();

    /*$('#connection').sortable({
     items: 'ul > li',
     opacity: .5
     }).disableSelection();*/

    /**
     * @description 아이템 마우스 이벤트
     */
    $(document)
        .on('mouseenter', '.proto_item', function() {
            $(this).addClass('on');
        })
        .on('mouseleave', '.proto_item', function() {
            $(this).removeClass('on');
        });

    /**
     * @description TODO : 아이템 에디트 버튼 이벤트
     */
    $(document).on('click','.proto_item .btn_success', function(e) {
        e.preventDefault();

        var $this = $(this),
            target = $this.attr('href'),
            $webview = null;

        var fileType = $this.parent('.thumb').children('.label').text().toUpperCase();

        $protoItemClone = $this.parent('.thumb').children('img').clone();
        $('#viewerArea').width( $protoItemClone[0].width ); //이미지 가운데 정렬

        $('#detail h1').text(fileType); // 상세 페이지 타이틀영역 이미지 타입 텍스트 삽입
        $('#currentPage').text($this.closest('.proto_item').index()); // 현재 아이템 순번 삽입
        $('#totalPage').text($('.proto_item').length); // 전체 아이템 갯수 삽입
        pagenateDisabledCheck(); //상세 페이지 페이징 값 체크 후 버튼 활성화 || 비활성
        $(target).addClass('active'); // 상세 페이지 노출

        $webview = $('<figure id="webview"></figure>').append($protoItemClone);

        $('#viewer').append($webview);

        $('#webview').Jcrop({
            onSelect: showCoords,
            onRelease: addCoords
            //boxWidth: 'auto',
            //boxHeight: 3000
        }, function() {
            jcrop_api = this;            
        });

        imgMappingFilter(this).addClass('current').append('<strong>Current Image</strong>').children('a').removeAttr('href');

        // All Apply 기능 활성화 유무 분기처리
        if ( $('#applyChoose').children('label.fixed').hasClass('on') ) {
            $('#fixedLabelTop').css({top: gAllApplyFixed.fixedLabelTop + 'px'});
            $('#fixedLabelBtm').css({top: gAllApplyFixed.fixedLabelBtm + 'px'});
        } else {
            $('#fixedLabelTop').css({top: ''});
            $('#fixedLabelBtm').css({top: ''});

            //픽스영역 사용한적 있으면 캐시 배열에서 복원
            if ( typeof fiexdCache[ $protoItemClone.data('idx') ] !== 'undefined' ) {
                $('#fixedLabelTop').css({top: fiexdCache[ $protoItemClone.data('idx') ].top + 'px'});
                $('#fixedLabelBtm').css({top: fiexdCache[ $protoItemClone.data('idx') ].btm + 'px'});
            }
        }

        //맵영역 사용한적 있으면 캐시 배열에서 복원
        if ( typeof mapAreaCache[$protoItemClone.data('idx')] !== 'undefined' ) {
            var $mapArea = null;

            for(var i = 0, len = mapAreaCache[$protoItemClone.data('idx')].length; i < len; i++) {
                $mapArea = $('<a></a>');

                $mapArea
                    .attr({
                        'href' : mapAreaCache[$protoItemClone.data('idx')][i].href,
                        'data-coords' : mapAreaCache[$protoItemClone.data('idx')][i].cx +','+ mapAreaCache[$protoItemClone.data('idx')][i].cy +','+ mapAreaCache[$protoItemClone.data('idx')][i].cx2 +','+ mapAreaCache[$protoItemClone.data('idx')][i].cy2,
                        'data-transition' : mapAreaCache[$protoItemClone.data('idx')][i].transition,
                        'class' : 'map_area'
                    })
                    .css({
                        top : mapAreaCache[$protoItemClone.data('idx')][i].y,
                        left : mapAreaCache[$protoItemClone.data('idx')][i].x,
                        width : mapAreaCache[$protoItemClone.data('idx')][i].w,
                        height : mapAreaCache[$protoItemClone.data('idx')][i].h
                    });

                $('#viewer').append( $mapArea );
            }
        }
    });

    /**
     * @description 아이템 삭제 버튼 이벤트
     */
    $(document).on('click','.proto_item .btn_danger', function() {
        if ( confirm('Are you sure you want to delete it?') ) {
            var $protoItem = $(this).closest('.proto_item');

            imgMappingFilter(this).remove();

            $protoItem.remove();

            mapAreaCache.splice($protoItem.find('img').data('idx'), 1); //맵 영역 캐시 삭제
            fiexdCache.splice($protoItem.find('img').data('idx'), 1); //픽스 영역 캐시 삭제
        }

        //아이템 갯수가 0 개면 이미지 업로드 관련 설명 문구 노출
        if ( $dropBox.children('.proto_item').length === 0 ) {
            $('#imgUploadDesc').addClass('on');
        }
    });

    /**
     * @description 페이지네이트 버튼 이벤트
     */
    $('#pagenate').on('click', ':button', function() {
        var btnType = $(this)[0].id;
        var currentIdx = $('#webview').children('img').data('idx');
        var currentPage = parseInt($('#currentPage').text());
        var totalPage = parseInt($('#totalPage').text());
        var $currentItem = null;

        var destroy = function() {
            $('#viewer').empty();
            $('#config').removeClass('active');
            $('#connection').find('li').removeClass('current').removeClass('on').children('a').attr('href','#').next('strong').remove();
            $('#viewerDimmed').hide();
            jcrop_api.destroy();
        };

        $currentItem = $('.proto_item').find('img').filter(function() {
            return $(this).data('idx') === currentIdx;
        }).closest('.proto_item');

        switch ( btnType ) {
            case 'btnPrev' :

                if ( currentPage <= 1 ) {
                    //alert('No Prev Page');
                    return false;
                }

                destroy();
                $currentItem.prev('.proto_item').find('.btn_success').trigger('click');
            break;
            case 'btnNext' :

                if ( currentPage >= totalPage ) {
                    //alert('No Next Page');
                    return false;
                }

                destroy();
                $currentItem.next('.proto_item').find('.btn_success').trigger('click');
            break;
        }

        $('#setting a').removeClass('on');
        $('#transitions').hide();
    });

    /**
     * @description 상세뷰 백그라운드 버튼 이벤트
     */
    $('#btnBg').on('click', function() {
        $(this).toggleClass('on');
    });

    /**
     * @description 상세뷰 백그라운드 > 컬러 선택 이벤트
     */
    $('#bgChoose')
        .on('click', ':radio', function() {
            var $this = $(this),
                $label = $this.parent('label');

            var className = $label.filter(function() {
                if( $(this).hasClass('on') ) {
                    $(this).removeClass('on');
                }

                return $(this);
            }).attr('class');

            $this.attr('checked', true);
            $label.siblings('label').children(':radio').attr('checked', false).removeClass('on');

            $('#content_view').removeClass().addClass(className).css({backgroundColor : ''});
        })
        .on('change', ':input[type=color]', function(e) {
            var $this = $(this),
                $label = $this.parent('label'),
                customColorVal = $this.val();

            $this.addClass('on');
            $label.css({backgroundColor : customColorVal});
            $label.siblings('label').children(':radio').attr('checked', false);

            $('#content_view').removeClass().css({backgroundColor : customColorVal});
        });

    /**
     * @description 픽스영역 아이템 전체 적용 버튼 이벤트
     */
    $('#allApply').on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('on');
    });

    /**
     * @description 상세뷰 전체 적용 > Fixed || transition 선택 이벤트
     */
    $('#applyChoose').on('click', ':input', function() {
        var $this = $(this),
            $label = $this.parent('label');

        // $label 엘리먼트에 .on 클래스를 제거한 클래스 이름만 필터링 후 반환
        var className = $label.filter(function() {
            if ( $(this).hasClass('on') ) {
                $(this).removeClass('on');
            }

            return  $(this);
        }).attr('class');

        switch ( className ) {
            case 'fixed' :

                if ( $this.prop('checked') ) {
                    $label.addClass('on');

                    for (var i = 0, len = $('.proto_item').length; i < len; i++) {
                        var $protoItems = $('.proto_item').eq(i).find('img');
                        var btmPos = $protoItems[0].naturalHeight - parseInt($('#fixedLabelTop').css('top'));

                        if (typeof fiexdCache[$protoItems.data('idx')] === 'undefined') {
                            fiexdCache[$protoItems.data('idx')] = {};
                        }

                        fiexdCache[$protoItems.data('idx')].top = parseInt($('#fixedLabelTop').css('top'));
                        fiexdCache[$protoItems.data('idx')].btm = btmPos;
                        fiexdCache[$protoItems.data('idx')].btmArea = isNaN( parseInt($('#fixedLabelBtm').css('top')) )? undefined : btmPos;
                        fiexdCache[$protoItems.data('idx')].imgHgt = $protoItems[0].naturalHeight;
                    }
                    
                    gAllApplyFixed = {
                        fixedLabelTop: parseInt($('#fixedLabelTop').css('top')),
                        fixedLabelBtm: btmPos
                    };
                    
                } else {
                    $label.removeClass('on');

                    gAllApplyFixed = null; //초기화
                }
            break;
            case 'transition' :
                if ( $this.prop('checked') ) {
                    $label.addClass('on');

                    var transitionType = $('#transitions').find('li.on').children('a').data('transition');

                    gCurrentMapAreaTransition = transitionType;

                    $('.map_area').attr('data-transition', transitionType);

                    // mapAreaCache[$protoItemClone.data('idx')] 배열에 값이 존재할때만 for문 실행
                    if ( typeof mapAreaCache[$protoItemClone.data('idx')] !== 'undefined' ) {
                        for (var i = 0, len = mapAreaCache[$protoItemClone.data('idx')].length; i < len; i++) {
                            mapAreaCache[$protoItemClone.data('idx')][i].transition = transitionType;
                        }
                    }
                } else {
                    $label.removeClass('on');

                    gCurrentMapAreaTransition = ''; //초기화
                }
            break;
        }
    });

    /**
     * @description 상세뷰 닫기버튼 이벤트
     */
    $('#btnDetailClse').on('click', function(e) {
        e.preventDefault();

        $('#detail').removeClass('active');
        $('#viewer').empty();
        $('#config').removeClass('active');
        $('#setting a').removeClass('on');
        $('#transitions').hide();
        $('#connection').find('li').removeClass('current').removeClass('on').children('a').attr('href','#').next('strong').remove();
        $('#viewerDimmed').hide();        
        //jcrop_api.release(); //현재의 선택을 해제
        //jcrop_api.disable(); //Jcrop 비활성화
        //jcrop_api.enable(); //Jcrop 활성화
        jcrop_api.destroy(); //Jcrop 제거
    });

    /**
     * 이미지맵 셀렉트영역 플러그인
     $('#viewer').Jcrop({
		onSelect: showCoords,
        onChange: showCoords,
        onRelease: addCoords,
        bgColor: '#000',
        bgOpacity: .45,
		setSelect: [ 100, 100, 0, 0 ],
		aspectRatio: 16 / 9
	});*/

    /**
     * @description 이미지맵 영역 클릭 || 더블클릭 분기 이벤트 분기
     */
    $(document)
        .on('click', '.map_area', function(e) {
            e.preventDefault();

            var $this = $(this),
                currentMapAreaIdx = $this.attr('href');

            var regexp = /((http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\wㄱ-ㅎㅏ-ㅣ가-힣\;\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?)/g;

            setTimeout(function() {
                if (gDbClick === false) {
                    $this.addClass('on');
                    $('#viewerDimmed').show();
                    $('#config').addClass('active');

                    // link 입력창의 값이 올바른 url일 경우
                    if ( regexp.test(currentMapAreaIdx) ) {
                        $('#link_url').prop('disabled', false).val(currentMapAreaIdx).focus();
                        $('#connection').find('li').removeClass('on');
                        $('#connectionDimmed').show();

                        return false;
                    }

                    $('#link_url').prop('disabled', true).val('');

                    if ( currentMapAreaIdx === '#' ) {
                        $('#connection').find('li').removeClass('on');
                    } else {
                        $('#connection').find('img').filter(function() {
                            return $(this).data('idx') === parseInt(currentMapAreaIdx.replace(/[^0-9]/g, ''));
                        }).parents('li').addClass('on').siblings('li').removeClass('on');
                    }

                    $('#connectionDimmed').hide();
                }
            }, 200);
        })
        .on('dblclick', '.map_area', function(e) {
            e.preventDefault();

            var $this = $(this);

            gCurrentMapAreaIdx = $this.attr('href');
            gCurrentMapAreaTransition = $this.attr('data-transition');

            gDbClick = true;

            window.setTimeout(function() {

                gDbClick = false;

                $this.remove();

                $this = $this[0];

                $('#webview').Jcrop({
                    setSelect: [
                        parseInt($this.style.left),
                        parseInt($this.style.top),
                        parseInt($this.style.left) + parseInt($this.style.width),
                        parseInt($this.style.top) + parseInt($this.style.height)
                    ]
                });

                //$('#link_url').prop('disabled', true).val('').focus();
                //$('#connectionDimmed').hide();
            }, 300);
        });

    /**
     * @description 상세뷰 딤드레이어 클릭 이벤트
     */
    $('#viewerDimmed').on('click', function() {
        $('.map_area.on').removeClass('on');
        $('#config').removeClass('active');
        $(this).hide();

        $('#setting a').removeClass('on');
        $('#transitions').hide();

        if ( $('#link_url').val().length === 0 ) {
            $('#link_url').prop('disabled', true);//.val('');
            $('#connectionDimmed').hide();
        }
    });

    /**
     * @description TODO: 상세뷰 아이템 라벨 픽스 이벤트
     */
    $('#fixedLabelTop, #fixedLabelBtm').draggable({
        containment: '#viewer',
        axis: 'y',
        cursor: 'move',
        snap: true,
        start: function() {
            $(this).addClass('on');
        },
        drag : function() {
        },
        stop : function(e, ui) {
            var target = $(this)[0].id,
            //btmPos = $('#webview').height() - ui.position.top;
                btmPos = $protoItemClone[0].naturalHeight - ui.position.top;

            if (typeof fiexdCache[$protoItemClone.data('idx')] === 'undefined') {
                fiexdCache[$protoItemClone.data('idx')] = {};
            }

            if (typeof fiexdCache[$protoItemClone.data('idx')].imgHgt === 'undefined' ) {
                fiexdCache[$protoItemClone.data('idx')].imgHgt = $protoItemClone[0].naturalHeight;
            }

            switch ( target ) {
                case 'fixedLabelTop' :

                    // All Apply 기능 활성화 유무 분기처리
                    if ( $('#applyChoose').children('label.fixed').hasClass('on') ) {
                        var $protoItems = null;

                        for (var i = 0, len = $('.proto_item').length; i < len; i++ ) {
                            $protoItems = $('.proto_item').eq(i).find('img');

                            if (typeof fiexdCache[ $protoItems.data('idx') ] === 'undefined') {
                                fiexdCache[ $protoItems.data('idx') ] = {};
                            }

                            fiexdCache[ $protoItems.data('idx') ].top = ui.position.top;
                            fiexdCache[ $protoItems.data('idx') ].imgHgt = $protoItems[0].naturalHeight;

                            //상단 위치시 초기화
                            if ( fiexdCache[ $protoItems.data('idx') ].top === 0 ) {
                                fiexdCache[ $protoItems.data('idx') ] = {};
                            }
                        }

                        gAllApplyFixed.fixedLabelTop = parseInt( $('#fixedLabelTop').css('top') );

                    } else {
                        fiexdCache[ $protoItemClone.data('idx') ].top = ui.position.top;                       

                        //상단 위치시 초기화
                        if ( fiexdCache[ $protoItemClone.data('idx') ].top === 0 ) {
                            fiexdCache[ $protoItemClone.data('idx') ] = {};
                        }

                        gAllApplyFixed = null; //초기화
                    }

                    //fiexdCache[$protoItemClone.data('idx')].top = ui.position.top;
                break;
                case 'fixedLabelBtm' :

                    // All Apply 기능 활성화 유무 분기처리
                    if ( $('#applyChoose').children('label.fixed').hasClass('on') ) {
                        var $protoItems = null;

                        for (var i = 0, len = $('.proto_item').length; i < len; i++ ) {
                            $protoItems = $('.proto_item').eq(i).find('img');

                            if (typeof fiexdCache[ $protoItems.data('idx') ] === 'undefined') {
                                fiexdCache[ $protoItems.data('idx') ] = {};
                            }

                            fiexdCache[ $protoItems.data('idx') ].btm = $protoItems[0].naturalHeight - btmPos;
                            fiexdCache[ $protoItems.data('idx') ].btmArea = btmPos;
                            fiexdCache[ $protoItems.data('idx') ].imgHgt = $protoItems[0].naturalHeight;

                            // 하단 위치시 초기화 
                            if ( fiexdCache[ $protoItems.data('idx') ].imgHgt === fiexdCache[ $protoItems.data('idx') ].btm + 1 ) {
                                fiexdCache[ $protoItems.data('idx') ] = {};
                            }
                        }

                        gAllApplyFixed.fixedLabelBtm = btmPos;

                    } else {
                        fiexdCache[ $protoItemClone.data('idx') ].btm = ui.position.top;
                        fiexdCache[ $protoItemClone.data('idx') ].btmArea = btmPos;

                        // 하단 위치시 초기화 
                        if ( fiexdCache[ $protoItemClone.data('idx') ].imgHgt === fiexdCache[ $protoItemClone.data('idx') ].btm + 1 ) {
                            fiexdCache[ $protoItemClone.data('idx') ] = {};
                        }

                        gAllApplyFixed = null; //초기화
                    }

                    //fiexdCache[$protoItemClone.data('idx')].btm = ui.position.top;
                    //fiexdCache[$protoItemClone.data('idx')].btmArea = btmPos;
                break;
            }

            $(this).removeClass('on');
        }
    });

    /**
     * @description 프로퍼티 설정 > 퍼포먼스 버튼 이벤트
     */
    $('#setting').on('click', 'a', function(e) {
        e.preventDefault();

        var $this = $(this),
            target = $this.attr('href');

        if ( $this.siblings('a').hasClass('on') ) {
            $this.addClass('on').siblings('a').removeClass('on');
            $('#transitions').hide();
            $(target).show();
        } else {
            if ( $(target).is(':hidden') ) {
                $this.addClass('on');

                $(target).find('li').removeClass('on').children('a').filter(function(idx) {
                    return $(this).data('transition') === $('.map_area.on').attr('data-transition');
                }).parent('li').addClass('on').siblings('on');

                $(target).slideDown(150);
            } else {
                $this.removeClass('on');
                $(target).slideUp(150);
            }
        }
    });

    /**
     * TODO : 트랜지션 테스트
     */
    $('#transitions').on('click', 'a', function(e) {
        e.preventDefault();

        var $this = $(this),
            transitionType = $this.data('transition');

        $this.parent('li').addClass('on').siblings('li').removeClass('on');

        // All Apply > Transition 기능 활성화 유무 분기처리
        if ( $('#applyChoose').children('label.transition').hasClass('on') ) {
            gCurrentMapAreaTransition = transitionType;

            $('.map_area').attr('data-transition', transitionType);

            for (var i = 0, len = mapAreaCache[ $protoItemClone.data('idx')].length; i < len; i++ ) {
                mapAreaCache[ $protoItemClone.data('idx') ][i].transition = transitionType;
            }
        } else {
            $('.map_area.on').attr('data-transition', transitionType);

            //맵영역 캐시 배열에 href 값 추가
            mapAreaCache[ $protoItemClone.data('idx') ][ $('.map_area.on').index() - 1 ].transition = transitionType;
        }

    });

    /**
     * @description 사이트 타겟 URL 입력창 이벤트
     */
    $('#linkForm')
        .on('submit', function(e) {
            e.preventDefault();

            var $frag = $(document.createDocumentFragment());
            var linkurlVal = '';

            if ( $('#link_url').val().length === 0 ){
                linkurlVal = '#';
            } else {
                linkurlVal = $('#link_url').val();
                $('#link_url').next('.icon-refresh').addClass('on');

                setTimeout(function() {
                    $('#link_url').next('.icon-refresh').removeClass('on');
                }, 500);
            }

            $('.map_area.on').attr('href', linkurlVal);

            //맵영역 캐시 배열에 href 값 추가
            mapAreaCache[ $protoItemClone.data('idx') ][ $('.map_area.on').index() - 1 ].href = $('.map_area.on').attr('href');
        })
        .on('click', 'label', function() {
            var $linkurl = $('#link_url');

            if ( $linkurl.prop('disabled') ) {
                $linkurl.prop('disabled', false);
                $('#connection').find('li').removeClass('on');
                $('#connectionDimmed').show();
            } else {
                $linkurl.prop('disabled', true).val('');
                $('#connectionDimmed').hide();
            }

            $('#linkForm').trigger('submit');
        });

    /**
     * @description 프로퍼티 설정 삭제 버튼 이벤트
     */
    $('#btnMapAreaDel').on('click', function() {
        if (confirm('Are you sure you want to delete it?')) {
            mapAreaCache[$protoItemClone.data('idx')].splice($('.map_area.on').index() - 1, 1);

            $('.map_area.on').remove();
            $('#config').removeClass('active');
            $('#viewerDimmed').hide();

            $('#setting a').removeClass('on');
            $('#transitions').hide();
        }
    });

    /**
     * @description 프로퍼티 설정 닫기 버튼 이벤트
     */
    $('#btnConfigClse').on('click', function(e) {
        e.preventDefault();

        $('.map_area.on').removeClass('on');
        $('#config').removeClass('active');
        $('#viewerDimmed').hide();

        $('#setting a').removeClass('on');
        $('#transitions').hide();

        if ( $('#link_url').val().length === 0 ) {
            $('#link_url').prop('disabled', true);//.val('');
            $('#connectionDimmed').hide();
        }
    });

    /**
     * @description 프로퍼티 연결(링크) 이벤트
     */
    $('#connection').on('click', 'a', function(e) {
        e.preventDefault();

        var $this = $(this).parent('li');

        if ($this.hasClass('current')) {
            return false;
        }

        if (!$this.hasClass('on')) {
            $this.addClass('on').siblings('li').removeClass('on');
            $('.map_area.on').attr('href','#' + $(this).children('img').data('idx'));
        } else {
            $this.removeClass('on');
            $('.map_area.on').attr('href', '#');
        }

        //맵영역 캐시 배열에 href 값 추가
        mapAreaCache[ $protoItemClone.data('idx') ][ $('.map_area.on').index() - 1 ].href = $('.map_area.on').attr('href');
    });

    /**
     * @description QR코드 생성 버튼 이벤트
     */
    $('#btnQR').on('click', function(e) {
        e.preventDefault();

        qrcodeCreate();
    });

    /**
     * @description 플레이 버튼 이벤트
     */
    $('#btnPlay').on('click', function(e) {
        e.preventDefault();

        if ( $('.proto_item').length < 1 ) {
            alert('There are no images uploaded.');

            return false;
        }

        var windOpen = window.open('sample.html', 'nwin','width=320, height=480, menubar=no, status=no, toolbar=no');

        protoItemCloneAll = []; //초기화

        $('.proto_item').each(function(i, elem) {
            protoItemCloneAll[i] = $(elem).find('img');
        });

        windOpen.focus();
    });

    /**
     * @description 공유하기(페이스북) 버튼 이벤트
     */
    $('#btnShare').on('click', facebookWrite);

})(jQuery);