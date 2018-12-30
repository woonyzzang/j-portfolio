function path(){
	var args = arguments,
		result = [],
		//locationOrigin = window.location.origin + '/lib';
		locationOrigin = window.location.origin + '/dev/html5_OR/lib';

	for(var i = 0; i < args.length; i++){
		result.push(args[i].replace('@', locationOrigin + '/syntaxhighlighter_3.0.83/scripts/'));
	}

	return result;
}

SyntaxHighlighter.autoloader.apply(null, path(
	'applescript            @shBrushAppleScript.js',
	'actionscript3 as3      @shBrushAS3.js',
	'bash shell             @shBrushBash.js',
	'coldfusion cf          @shBrushColdFusion.js',
	'cpp c                  @shBrushCpp.js',
	'c# c-sharp csharp      @shBrushCSharp.js',
	'css                    @shBrushCss.js',
	'delphi pascal          @shBrushDelphi.js',
	'diff patch pas         @shBrushDiff.js',
	'erl erlang             @shBrushErlang.js',
	'groovy                 @shBrushGroovy.js',
	'java                   @shBrushJava.js',
	'jfx javafx             @shBrushJavaFX.js',
	'js jscript javascript  @shBrushJScript.js',
	'perl pl                @shBrushPerl.js',
	'php                    @shBrushPhp.js',
	'text plain             @shBrushPlain.js',
	'py python              @shBrushPython.js',
	'ruby rails ror rb      @shBrushRuby.js',
	'sass scss              @shBrushSass.js',
	'scala                  @shBrushScala.js',
	'sql                    @shBrushSql.js',
	'vb vbnet               @shBrushVb.js',
	'xml xhtml xslt html    @shBrushXml.js'
));

// @SyntaxHighlighter 설정
//SyntaxHighlighter.config.bloggerMode = true;
//SyntaxHighlighter.config.strings.viewSource = "view my source!!!!";
//SyntaxHighlighter.config.stripBrs = true;
//SyntaxHighlighter.config.tagName = 'pre';


// @SyntaxHighlighter 기본값
SyntaxHighlighter.defaults['auto-links'] = false;
SyntaxHighlighter.defaults['class-name'] = 'code';
//SyntaxHighlighter.defaults['collapse'] = true;
//SyntaxHighlighter.defaults['first-line'] = 1;
//SyntaxHighlighter.defaults['gutter'] = true;
//SyntaxHighlighter.defaults['highlight'] = null;
//SyntaxHighlighter.defaults['html-script'] = false;
//SyntaxHighlighter.defaults['smart-tabs'] = true;
//SyntaxHighlighter.defaults['tab-size'] = 4;
SyntaxHighlighter.defaults['toolbar'] = false;
SyntaxHighlighter.all();