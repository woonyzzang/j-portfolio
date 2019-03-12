var jPortfolio = angular.module('jPortfolio', ['ngRoute']);

/* jPortfolio.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/features', {
			templateUrl: 'contents',
			controller: 'BookCtrl'
			//controllerAs: 'book'
		});
		.when('/Book/:bookId/ch/:chapterId', {
			templateUrl: 'chapter.html',
			controller: 'ChapterCtrl',
			controllerAs: 'chapter'
		});

	// $locationProvider.html5Mode(true);
}]).controller('BookCtrl', ['$route', '$routeParams', '$location', function($route, $routeParams, $location) {
	console.log('AAAAAAAA');
	// console.log( $route );
	// console.log( $routeParams );
	// console.log( $location );

	// this.name = "BookCtrl";
	// this.params = $routeParams;
}]); */

jPortfolio.controller('MainCtrl', ['$scope', '$filter', '$http', '$window', function ($scope, $filter, $http, $window) {
    var GNBITEM = ['features', 'licences', 'technique', 'workbench', 'portfolio', 'development', 'wiki', 'blog'],
        UTILITEM = ['introduction', 'personality', 'github', 'blog'];

    $scope.menu = {
        introduction: {url:'resume/introduction.html', title:'자기소개', name:'introduction'},
		personality: {url:'resume/personality_type.html', title:'성격유형', name:'personality'},
        github: {url:'https://github.com/woonyzzang?tab=repositories', title:'깃허브 레파지토리', name:'github'},
        resume: {url:'resume/resume.html', title:'이력서', name:'resume'},
        features: {title:'기능소개', name:'features'},
        licences: {title:'자격증', name:'licences'},
        technique: {title:'스킬', name:'technique'},
        workbench: {title:'작업내역', name:'workbench'},
        portfolio: {title:'포트폴리오', name:'portfolio'},
        development: {title:'UI개발', name:'development'},
        wiki: {url:'#', title:'위키소개', name:'wiki'},
        blog: {url:'https://woonyzzang.github.io/', title:'블로그소개', name:'blog'}
    };

    $scope.utileMenu = [];
    $scope.gnbMenu = [];

    angular.forEach($scope.menu, function(value, key) {
        // UTILITEM 배열 필터링
        for (var i = 0, len = UTILITEM.length; i < len; i++) {
            if (key === UTILITEM[i]) { $scope.utileMenu.push($scope.menu[key]); }
        }

        // GNBITEM 배열 필터링
        for (var i = 0, len = GNBITEM.length; i < len; i++) {
            if (key === GNBITEM[i]) { $scope.gnbMenu.push($scope.menu[key]); }
        }
    });

    $scope.licences = {};
    $http.get('data/licence.json')
        .success(function(data, status, headers, config) {
            $scope.licences = data;
        })
        .error(function (data, status, headers, config) {
            alert(data);
        });

	$scope.technique = {};
	$scope.technique.front = [
		'HTML4.01',
		'XHTML1.0',
		'HTML5',
		'CSS2.1',
		'CSS3',
		'Less',
		'Sass',
		'Bootstrap',
		'Foundation',
		'ECMAScript',
		'TypeScript',
		'CoffeeScript',
		'jQuery',
		'jQueryMobile',
		'Edge Animate',
		'Ext.js',
		'Require.js',
		'Backbone.js',
		'Angular.js',
		'React.js',
        'Flash 2.0 ~ 3.0',
		'Grunt',
		'Gulp',
		'Webpack',
		'Ionic'
	];
	$scope.technique.back = [
		'Node.js',
		'Express',
		'ejs',
		'jade',
        'PHP',
		'MySQL',
		'MongoDB'
	];

    $scope.workbenchs = {};
    $http.get('data/workbench.json')
        .success(function(data, status, headers, config) {
            $scope.workbenchs = data;
        })
        .error(function (data, status, headers, config) {
            console.error(data);
        });

	$scope.gallery = {};
	$http.get('data/gallery.json')
		.success(function(data, status, headers, config) {
			$scope.gallery = data;
		})
		.error(function (data, status, headers, config) {
            console.error(data);
		});

    $scope.development = [
        [ // Frontend Dev
            {url:'dev/cms/', name:'#CMS Theme | <HTML5, CSS3>'},
            {url:'dev/listmap/listmap.xml', name:'#Markup Listmap | <HTML5, XML, XSL, CSS2.1, jQuery>'},
            {url:'dev/generatorCSS3/', name:'#GeneratorCSS3 | <HTML5, CSS3, jQuery>'},
            {url:'dev/html5_OR/', name:'#HTML5 Open Reference | <HTML5, CSS2.1, Ext.js, jQuery>'},
            {url:'dev/prototype/', name:'#Prototype | <HTML5, CSS3, jQuery>'},
            {url:'dev/designDraft/', name:'#Design Draft Gallery | <HTML5, CSS3, jQuery>'},
            {url:'dev/responsiveDesignView/', name:'#Responsive Design View | <HTML5, Sass, ECMAScript6, React.js>'},
            {url:'dev/j_memo/J Memo Setup 1.0.0.exe', name:'#J Memo | <HTML5, Webpack, Sass, ECMAScript6, React.js, Electron>'},
            {url:'dev/hiworks_mail_notifier/Hiworks Mail Notifier Setup 1.0.0.exe', name:'#Hiworks Notifier | <HTML5, Webpack, Sass, ECMAScript6, Electron>'}
        ],
        [ // UI Dev
            {url:'http://jsfiddle.net/woonyzzang/2B6hM/', name:'css3 Graph'},
            {url:'http://jsfiddle.net/woonyzzang/JFEAe/', name:'checkbox list'},
            {url:'http://jsfiddle.net/woonyzzang/dMVj9/', name:'slide rolling banner'},
            {url:'http://jsfiddle.net/woonyzzang/A4zVF/', name:'modal popup'},
            {url:'http://jsfiddle.net/woonyzzang/cmeNj/', name:'login'},
            {url:'http://jsfiddle.net/woonyzzang/fN2VN/', name:'comment box'},
            {url:'http://jsfiddle.net/woonyzzang/Afy62/', name:'calender'},
            {url:'http://jsfiddle.net/woonyzzang/uGJVR/', name:'paginate'},
            {url:'http://jsfiddle.net/woonyzzang/f47vQ/', name:'tab list'},
            {url:'http://jsfiddle.net/woonyzzang/XttEt/', name:'thumbnail list'},
            {url:'http://jsfiddle.net/woonyzzang/8H3DX/', name:'table form'},
            {url:'http://jsfiddle.net/woonyzzang/Xead3/', name:'button'},
            {url:'http://jsfiddle.net/woonyzzang/C7QrK/', name:'tab menu'},
            {url:'http://jsfiddle.net/woonyzzang/qJsqE/', name:'navigation'},
            {url:'http://jsfiddle.net/woonyzzang/Afy62/', name:'side menu'}
        ]
	];

	$scope.evtListener = {
		// 네비게이션메뉴 클릭 이벤트 핸들러
		nav:  function() {
			$('#gnb, #wrap .swipe, #portfolio').addClass('v1');
		},
		// 이력서 클릭 이벤트 핸들러
		resume: function(e) {
			e.preventDefault();
			
			$window.open($('#resume').attr('href'), 'jresume', 'width=900, height=950');			
		},
		// 포트폴리오 필터 메뉴 클릭 이벤트 핸들러
		mfilter: function(e) {
			$(e.target).parent().addClass('active').siblings().removeClass('active');
		},
		// 포트폴리오 썸네일형 || 리스트형 보기 클릭 이벤트 핸들러
		msort: function(btnType) {
			var $gallery = $('#gallery');

			switch (btnType) {
				case 'list' :
					$gallery.addClass('list');
				break;
				case 'thumb' :
					$gallery.removeClass('list');
				break;
				default:break;
			}
		},
		// 포트폴리오 클릭 이벤트 핸들러 url 링크
		gallery: function(e) {
			if ($(e.target).parent().attr('href') === '#') {
				e.preventDefault();
				
				alert('외부에서 접근할 수 없는 프로젝트 입니다.');
			}
		} /*,
		// 홈으로 가기 버튼 이벤트 핸들러
		home: function() {
			// $('#gnb, #wrap .swipe, #portfolio').removeClass('v1');
		} */
	};

	/* $scope.sort = function(predicate, reverse) {
        $scope.workbenchs = $filter('orderBy')($scope.workbenchs, predicate, reverse);
        console.log($scope.workbenchs);
	}; */
}]);

// DOM 로드 이벤트
angular.element(document).ready(function() {
    var JPORTFOLIO = function() {
        this.currentUri = location.hash;
        this.$container = $('#container');
        this.sectionOffsetTop = [
            $('#features').offset().top,
            $('#licences').offset().top,
            $('#technique').offset().top,
            $('#workbench').offset().top,
            $('#portfolio').offset().top,
            $('#development').offset().top,
            $('#wiki').offset().top,
            $('#blog').offset().top
        ];

        this.init = function() {
            // URL 해시 체크
            if (this.currentUri) {
                $('#gnb, #wrap .swipe, #portfolio').addClass('v1');

                switch (this.currentUri) {
                    case '#features':
                        this.$container.scrollTop(this.sectionOffsetTop[0]);
                        break;
                        break;
                    case '#licences':
                        this.$container.scrollTop(this.sectionOffsetTop[1]);
                        break;
                    case '#technique':
                        this.$container.scrollTop(this.sectionOffsetTop[2]);
                        break;
                    case '#workbench':
                        this.$container.scrollTop(this.sectionOffsetTop[3]);
                        break;
                    case '#portfolio':
                        this.$container.scrollTop(this.sectionOffsetTop[4]);
                        break;
                    case '#development':
                        this.$container.scrollTop(this.sectionOffsetTop[5]);
                        break;
                    case '#wiki':
                        this.$container.scrollTop(this.sectionOffsetTop[6]);
                        break;
                    case '#blog':
                        this.$container.scrollTop(this.sectionOffsetTop[7]);
                        break;
                }
            }

            // 가로 스크롤 제거
            $('#wrap .home').addClass('v1');

            // 커버 플러그인 초기화
            $('.covered-first').coveringBad({marginX : 0, marginY : 23, setX : 150, setY : 200});

            // 필터 초기 메뉴 활성화
            $('#mfilter').children('li').eq(0).addClass('active');

            // 믹스업 플러그인 초기화
            $('#gallery').mixItUp();
        };
    };

    JPORTFOLIO.prototype.constructor = JPORTFOLIO;

    ;(function() {
        var jPortfolio = new JPORTFOLIO();

        jPortfolio.init();
    })();
});

// 윈도우 로드 이벤트
/*angular.element(window).load(function() {
    // @미오픈 포트폴리오 제거
    $.each($('#gallery').children('div[data-order]'), function(index, elem) {
        var currentIdx = index + 1;

        if (currentIdx === 43 ||
            currentIdx === 44) { $(elem).remove(); }
    });

	// 포트폴리오 갤러리 초기 노출
	// $('#gallery>.mix').css('display','inline-block');
});*/

/* angular.element(document).ready(function() {
	angular.bootstrap(document, ['jPortfolio']);
}); */