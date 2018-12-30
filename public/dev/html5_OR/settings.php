<?php
// PHP 파일 이름이 들어간 절대 서버 경로
$file_server_path = realpath(__FILE__);

// PHP 파일 이름
$php_filename = basename(__FILE__);

// PHP 파일 이름을 뺀 절대 서버 경로
$server_path = str_replace(basename(__FILE__), "", $file_server_path);

// 서버의 웹 뿌리(루트) 경로(절대 경로)
$server_root_path = $_SERVER['DOCUMENT_ROOT'];

// 웹 문서의 뿌리 경로를 뺀 상대 경로
$relative_path = eregi_replace('\/[^/]*\.php$', '/', $_SERVER['PHP_SELF']);

// PHP 파일 이름이 들어간 상대 경로
$relative_file_server_path = $relative_path.$php_filename;

// 바탕 URL
$base_URL = ($_SERVER['HTTPS'] == 'on') ? 'https://' : 'http://';
$base_URL .= ($_SERVER['SERVER_PORT'] != '80') ? $_SERVER['HTTP_HOST'].':'.$_SERVER['SERVER_PORT'] : $_SERVER['HTTP_HOST'];

// PHP 파일이 있는 곳의 웹 경로
$web_path = $base_URL.$relative_path;

$full_URL = $web_path.$php_filename;
$full_URI = $base_URL.$_SERVER['REQUEST_URI'];

//define(PATH, $base_URL.'/bluewaves/html5_OR/branches/p_130510_html5_OR/ext/');
define(PATH, $base_URL.'/');
define(RELATIEV_PATH, '../../');
define(RELATIEV_PATH_V1, '../');
define(BLOG_PATH, 'http://kangyoo80.dothome.co.kr/index.php/');

define(TITLE_CONVENTION_HTML, 'HTML Guide');
define(TITLE_CONVENTION_CSS, 'CSS Guide');
define(TITLE_REFERENCE, 'HTML5 Open Reference Guide');
//echo($web_path);
?>