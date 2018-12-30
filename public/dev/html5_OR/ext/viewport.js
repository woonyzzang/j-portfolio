var loadMask = null;

var blind = {
	hide : function(obj){
		Ext.getCmp(obj).hide();
	},
	show : function(obj){
		Ext.getCmp(obj).show();
	},
	disable : function(obj){
		Ext.getCmp(obj).disable();
	},
	enable : function(obj){
		Ext.getCmp(obj).enable();
	}
};

function fsLoad(dir, url){

	loadMask.show();

	Ext.get('detailDsc-innerCt').update('<iframe width=100% height=100% frameborder=0 src="' + (dir + url[0]) + '" title="콘텐츠 영역"></iframe>', true, function(){
		loadMask.hide();
	});
}

function ajaxLoad(con, url, idx){
	$('#' + con).load(url + ' #' + idx, function(data){
		//loadMask.hide();
	});
}

function toggleEft(options){
	var $this = options,
		$selecter = $this.selecter,
		visible = $this.visible,
		len = $selecter.length,
		i = 0;

	while(i < len){
		if(visible == 'show'){
			Ext.getCmp($selecter[i]).show();
		}else{
			Ext.getCmp($selecter[i]).hide();
		}

		i++;
	}
}

function init(){
	//blind.hide('convention');
	blind.hide('accessiblity');
	blind.hide('reference');
	//blind.disable('side');
	//blind.disable('support');
	toggleEft({selecter:['side','support'], visible:'hide'});
}

Ext.onReady(function(){
	loadMask = new Ext.LoadMask(document.body, {msg:'Please wait...'});

	var toolbarConfig = {
		region: 'north',
		height: 27,
		xtype: 'toolbar',
		items: [{
			html: '<strong>Web Standards Developer API Guide</strong>',
			handler: function(e){
				e.disable();
			}
		},'->',{
			xtype: 'button',
			text: '가이드 문서 메뉴',
			menu: [
				{
					text: '마크업 컨벤션',
					handler: function(e){
						blind.show('convention');
						blind.hide('accessiblity');
						blind.hide('reference');
						toggleEft({selecter:['side','support'], visible:'hide'});
					}
				},
				{
					text: '웹 접근성',
					handler: function(e){
						blind.hide('convention');
						blind.show('accessiblity');
						blind.hide('reference');
						toggleEft({selecter:['side','support'], visible:'hide'});
					}
				},
				{
					text: 'HTML5 오픈 레퍼런스',
					handler: function(e){
						blind.hide('convention');
						blind.hide('accessiblity');
						blind.show('reference');
						toggleEft({selecter:['side','support'], visible:'show'});
					}
				},
				/*{
					text: '블로그',
					handler: function(e){
						alert('블로그');
					}
				}*/
			]
		},'-','검색', {
			xtype : 'combo',
			width: 80
		},'-',{
			xtype: 'textfield',
			emptyText: '검색어 입력',
			width: 150
		}]
	};

	var convention = {
		region: 'west',
		title: 'HTML&amp;CSS',
		id: 'convention',
		collapsible: true,
		width: 220,
		layout: {
			type: 'hbox',
			align: 'stretch'
		},
		items: [{
			xtype: 'treepanel',
			title: '마크업 컨벤션',
			flex: 1,
			store: Ext.create('Ext.data.TreeStore', {
				autoLoad: true,
				proxy: {
					type: 'ajax',
					url: 'data/tree/nodes_convention.json',
					reader: {
						type: 'json',
						root: 'children'
					}
				}
			}),
			rootVisible: false,
			listeners : {
				itemclick : function($this, record, item, index, e, eOpts){
					var path = record.data.href,
						dir = 'data/convention/';

					if(path){
						fsLoad(dir, path);
					}else{
						return false;
					}

					e.preventDefault();
				}
			}
		}]
	};

	var accessiblity = {
		region: 'west',
		title: 'Accessiblity',
		id: 'accessiblity',
		collapsible: true,
		width: 220,
		layout: {
			type: 'hbox',
			align: 'stretch'
		},
		items: [{
			xtype: 'treepanel',
			title: 'PC 웹 접근성, 모바일 접근성',
			flex: 1,
			store: Ext.create('Ext.data.TreeStore', {
				autoLoad: true,
				proxy: {
					type: 'ajax',
					url: 'data/tree/nodes_accessiblity.json',
					reader: {
						type: 'json',
						root: 'children'
					}
				}
			}),
			rootVisible: false,
			listeners : {
				itemclick : function($this, record, item, index, e, eOpts){
					var path = record.data.href,
						dir = 'data/accessibility/';

					if(path){
						fsLoad(dir, path);
					}else{
						return false;
					}

					e.preventDefault();
				}
			}
		}]
	};

	var reference = {
		region: 'west',
		title: 'HTML5 Open Reference',
		id: 'reference',
		collapsible: true,
		//collapsed: true,
		//collapseMode: 'mini',
		width: 220,
		layout: {
			type: 'hbox',
			align: 'stretch'
		},
		items: [{
			xtype: 'tabpanel',
			flex: 1,
			activeTab: 0,
			items: [{
				xtype: 'treepanel',
				title: 'Elements',
				store: Ext.create('Ext.data.TreeStore', {
					autoLoad: true,
					proxy: {
						type: 'ajax',
						url: 'data/tree/nodes_elem.json',
						reader: {
							type: 'json',
							root: 'children'
						}
					}
				}),
				rootVisible: false,
				viewConfig: {
					plugins: {ptype: 'treeviewdragdrop'}
				},
				listeners : {
					itemclick : function($this, record, item, index, e, eOpts){
						var path = record.data.href,
							dir = 'data/reference/elements/';

						if(path){
							fsLoad(dir, path);

							for(var i=0,len=aside.items.length; i<len; i++){
								var obj = aside.items[i],
									idx = obj.id.replace('Area','');

								ajaxLoad(obj.id + '-innerCt', dir + path[1], idx);
							}
						}else{
							return false;
						}

						ajaxLoad('support-innerCt', dir + path[1], 'browser');

						e.preventDefault();
					}
				}
			},{
				xtype: 'treepanel',
				title: 'Attributes',
				store: Ext.create('Ext.data.TreeStore', {
					autoLoad: true,
					proxy: {
						type: 'ajax',
						url: 'data/tree/nodes_attr.json',
						reader: {
							type: 'json',
							root: 'children'
						}
					}
				}),
				rootVisible: false,
				listeners : {
					itemclick : function($this, record, item, index, e, eOpts){
						var path = record.data.href,
							dir = 'data/reference/attributes/';

						if(path){
							fsLoad(dir, path);
						}else{
							return false;
						}

						e.preventDefault();
					}
				}
			}/*,{
				title: 'Events',
				html: '내용3',
				border: false
			}*/],
			listeners: {
				tabchange: function(tabPanel, newCard, oldCard, eOpts){
					var textVal = '';

					switch(newCard.title){
						case 'Elements':
							textVal = '요소';
							toggleEft({selecter:['side','support'], visible:'show'});
							break;
						case 'Attributes':
							textVal = '속성';
							toggleEft({selecter:['side','support'], visible:'hide'});
							break;
						case 'Events':
							textVal = '이벤트';
							toggleEft({selecter:['side','support'], visible:'hide'});
							break;
						default:break;
					}

					Ext.DomQuery.selectNode('#detailDsc_header_hd-textEl').innerHTML = textVal + ' 설명';
				}
			}
		}]
	};

	var MAINCONTEMPLET = '<article id="content_desc">';
		MAINCONTEMPLET+= '	<h3 class="s_tit">Hello Worlds!!</h3>';
		MAINCONTEMPLET+= '</div>';

	var container = {
		region: 'center',
		title: '설명',
		id : 'detailDsc',
		html: MAINCONTEMPLET
	};

	var aside = {
		region: 'east',
		title: '상세 설명',
		id: 'side',
		collapsible: true,
		hidden: true,
		width: 300,
		layout: {
			type: 'accordion',
			titleCollapse: false,
			animate: true,
			activeOnTop: true
		},
		items: [{
			title: '1. 스펙 명세',
			id: 'referArea',
			html: '테스트1',
			autoHeight: true,
			autoScroll: true
		},{
			title: '2. 콘텐츠 분류 타입 &frasl; 마크업 규칙',
			id: 'flowArea',
			html: '테스트2',
			autoHeight: true,
			autoScroll: true
		},{
			title: '3. 참조',
			id: 'memoArea',
			html: '테스트3',
			autoHeight: true,
			autoScroll: true
		},{
			title: '4. 관련 요소 레벨',
			id: 'relatedArea',
			html: '테스트4',
			autoHeight: true,
			autoScroll: true
		}]
	};

	var foot = {
		region: 'south',
		hidden: false,
		title: '브라우저 지원',
		id: 'support',
		collapsible: true,
		collapsed: false,
		html: 'Support Browser',
		height: 80,
		minHeight: 80
	};

	var viewport = Ext.create('Ext.Viewport', {
		layout: {
            type: 'border',
            padding: 3
        },
		defaults: {
            split: true
        },
		items: [toolbarConfig, convention, accessiblity, reference, container, aside, foot]
	});

	init();
	/*
	function handleClick(e, t){
		//var target = e.getTarget();
		console.log('aaaaa');
	    //e.preventDefault();
	}

	var myDiv = Ext.get('tree');
	console.log(myDiv);
	myDiv.on('click', handleClick);


	//Ext.EventManager.on(myDiv, 'click', handleClick);
	//Ext.EventManager.addListener(Ext.get('myDiv'), 'click', handleClick);
	*/
});