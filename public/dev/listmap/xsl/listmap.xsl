<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output encoding="utf-8" indent="yes" method="html" doctype-system="about:legacy-compat" />
	<xsl:variable name="path">items</xsl:variable>

    <xsl:template match="/">
		<html lang="ko">
    	<head>
    	<title><xsl:value-of select="items/@title" /></title>
    	<link rel="stylesheet" href="css/lst_temp.css" />
		<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
    	</head>
    	<body>
		<!-- wrap -->
		<div id="wrap">
			<header>
				<hgroup>
				<h1><xsl:value-of select="items/@title" /></h1>
				<h2><xsl:value-of select="items/tit" /></h2>
				</hgroup>
			</header>

			<!-- container -->
			<div id="container">
				<article>
					<section class="info_area">
						<h1>
							<xsl:value-of select="items/project/@year" />
							<span class="tit"><xsl:value-of select="items/project" /></span>
							<small><xsl:text>Markup Menutree</xsl:text></small>
						</h1>
						<div class="worker_find">
							<strong><xsl:text>작업자:</xsl:text></strong>
							<ul>
							<xsl:apply-templates select="items" mode="worker" />
							</ul>
						</div>
					</section>

					<div class="tbl_area">
						<table class="tbl sortable">
						<caption><xsl:text>마크업 파일 리스트 표</xsl:text></caption>
						<colgroup>
						<col style="width:100px" />
						<col style="width:55px" />
						<col style="width:80px" />
						<col style="width:100px" />
						<col style="width:100px" />
						<col style="width:280px" />
						<col style="width:55px" />
						<col style="width:60px" />
						<col style="width:50px" />
						<col style="width:65px" />
						<col style="width:70px" />
						<col />
						</colgroup>
						<thead>
						<tr>
						<th scope="col"><xsl:text>구분</xsl:text></th>
						<th scope="col"><xsl:text>우선순위</xsl:text></th>
						<th scope="col"><xsl:text>섹션</xsl:text></th>
						<th scope="col"><xsl:text>항목</xsl:text></th>
						<th scope="col"><xsl:text>기획서ID</xsl:text></th>
						<th scope="col"><xsl:text>HTML Markup</xsl:text></th>
						<th scope="col"><xsl:text>작업자</xsl:text></th>
						<th scope="col"><xsl:text>진행현황</xsl:text></th>
						<th scope="col"><xsl:text>완료일</xsl:text></th>
						<th scope="col"><xsl:text>기획검수</xsl:text></th>
						<th scope="col"><xsl:text>디자인검수</xsl:text></th>
						<th scope="col"><xsl:text>비고</xsl:text></th>
						</tr>
						</thead>
						<tbody>
						<xsl:apply-templates select="items" mode="list" />
						</tbody>
						</table>
					</div>
				</article>
			</div>
			<!-- //container -->
		</div>
		<!-- //wrap-->
		<script src="js/sorttable.min.js"></script>
		<script>
		var toggleBG = function($elem,bgVal){
			$elem.children().css('backgroundColor',bgVal);
		};

		$('.worker_find').each(function(){
			$(this).find('li').on('click',function(e){
				var color = $(e.target).data('color'),
					name = $(e.target).attr('id'),
					$select = $('.tbl').find('td.'+name).parent();

				if($select.hasClass('on')){
					$select.removeClass('on');
					toggleBG($select,'');
				}else{
					$select.addClass('on');
					toggleBG($select,color);
				}
			});
		});
		</script>
    	</body>
    	</html>
    </xsl:template>

	<xsl:template match="items" mode="worker">
		<xsl:for-each select="workers/worker">
			<li>
				<xsl:element name="mark">
					<xsl:attribute name="id">
						<xsl:value-of select="@id" />
					</xsl:attribute>
					<xsl:attribute name="data-color">
						<xsl:value-of select="@bgcolor" />
					</xsl:attribute>
					<xsl:attribute name="style">
						<xsl:text>color:</xsl:text><xsl:value-of select="@fcolor" />
					</xsl:attribute>
					<xsl:value-of select="." />
				</xsl:element>
			</li>
		</xsl:for-each>
	</xsl:template>

	<xsl:template match="items" mode="list">
		<xsl:for-each select="lst">
			<tr>
			<th scope="row">
				<xsl:value-of select="area" />
				<xsl:text>영역</xsl:text>
			</th>
			<td class="txt_mid"><xsl:value-of select="prenum" /></td>
			<td><xsl:value-of select="section" /></td>
			<td><xsl:value-of select="item" /></td>
			<td><xsl:value-of select="planningID" /></td>
			<td>
				<ul class="lst_type">
				<xsl:for-each select="doc/link">
				<li>
					<xsl:element name="a">
						<xsl:attribute name="href">
							<!-- <xsl:text>http://www.</xsl:text> -->
							<xsl:value-of select="@url" />
						</xsl:attribute>
						<xsl:attribute name="target">
							<xsl:text>_blank</xsl:text>
						</xsl:attribute>
						<xsl:value-of select="." />
						<xsl:text>.</xsl:text>
						<xsl:value-of select="@doctype" />
					</xsl:element>
				</li>
				</xsl:for-each>
				</ul>
			</td>
			<td>
				<xsl:attribute name="class">
					<xsl:text>txt_mid </xsl:text>
					<xsl:value-of select="@nickname" />
				</xsl:attribute>
				<xsl:value-of select="@worker" />
			</td>
			<td>
				<ul class="lst_type">
				<xsl:for-each select="doc/link">
				<li>
					<xsl:element name="div">
						<xsl:attribute name="class">
							<xsl:text>progress</xsl:text>
						</xsl:attribute>
						<xsl:attribute name="data-progress">
							<xsl:value-of select="@progress" /><xsl:text>%</xsl:text>
						</xsl:attribute>
						<span class="blind"><xsl:value-of select="progress" />%</span>
					</xsl:element>
				</li>
				</xsl:for-each>
				</ul>
			</td>
			<td class="txt_mid">
				<xsl:element name="time">
					<xsl:attribute name="datetime">
						<xsl:value-of select="complete/@date" />
					</xsl:attribute>
					<xsl:value-of select="complete" />
				</xsl:element>
			</td>
			<td class="txt_mid">
				<xsl:choose>
					<xsl:when test="planningValid[.='false']">
						<xsl:text>X</xsl:text>
					</xsl:when>
					<xsl:otherwise>
						<xsl:text>O</xsl:text>
					</xsl:otherwise>
				</xsl:choose>
			</td>
			<td class="txt_mid">
				<xsl:choose>
					<xsl:when test="designValid[.='false']">
						<xsl:text>X</xsl:text>
					</xsl:when>
					<xsl:otherwise>
						<xsl:text>O</xsl:text>
					</xsl:otherwise>
				</xsl:choose>
			</td>
			<xsl:choose>
				<xsl:when test="ex[.='']">
					<td><xsl:text>없음</xsl:text></td>
				</xsl:when>
				<xsl:when test="ex[@tag='show']">
					<td class="valign_btm"><div class="tag"><xsl:value-of select="ex" /></div></td>
				</xsl:when>
				<xsl:otherwise>
					<td><xsl:value-of select="ex" /></td>
				</xsl:otherwise>
			</xsl:choose>
			</tr>
		</xsl:for-each>
	</xsl:template>
</xsl:stylesheet>