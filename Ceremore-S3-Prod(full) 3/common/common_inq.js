/*----------------------------------------------------------
	Google Analytics
-----------------------------------------------------------*/

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-690279-9', 'auto');
ga('require', 'displayfeatures');
ga('send', 'pageview');

/*----------------------------------------------------------
	ヘッダー・フッターインクルードなど（テスト用）
-----------------------------------------------------------*/
$(function(){
	$("#header-inc").load("/header_inq.html header", function(){
		gnav_active();
		doubleTap()
	});
});
$(function(){
	$("#header-inc-main").load("/header_inq_main.html header", function(){
		gnav_active();
		doubleTap()
	});
});

/*-------------　FLC入会申込フォーム　提携店振り分け　-----------------*/

$(function(){
	$("#header-inc-main-tokyo").load("/header_inq_main_tokyo.html header", function(){
		gnav_active();
		doubleTap()
	});
});

/*------------------------------------------------------------------*/

/*-------------　セレモア プラン５入会申込フォーム　-----------------*/

$(function(){
	$("#header-inc-main-plan5").load("/header_inq_main_plan5.html header", function(){
		gnav_active();
		doubleTap()
	});
});

/*------------------------------------------------------------------*/
$(function(){
	$("#footer-inc").load("/footer_inq.html footer", function(){
		pageTop();
		slide_bottom()
	});
});
$(function(){
	$("#side-search-inc").load("/side/side_search.html");
	$("#side-banner-inc").load("/side/side_banner.html");
	$("#side-sougi-inc").load("/side/side_sougi.html", function(){
		side_active();
	});
	$("#side-company-inc").load("/side/side_company.html", function(){
		side_active();
	});
	$("#side-activity-inc").load("/side/side_activity.html", function(){
		side_active();
	});
	$("#side-recruit-inc").load("/side/side_recruit.html", function(){
		side_active();
	});
	$("#side-flow-inc").load("/side/side_flow.html", function(){
		side_active();
	});
	$("#side-service-inc").load("/side/side_service.html", function(){
		side_active();
	});
	$("#side-faq-inc").load("/side/side_faq.html", function(){
		side_active();
	});
	$("#side-flower-inc").load("/side/side_flower.html", function(){
		side_active();
	});
	$('#contents img').error(function() {
		$(this).attr({ src: '/material/images/no-img.jpg' });
	});
});

function side_active(){
	var url = window.location.pathname;
	$('.side-menu a[href="'+url+'"]').addClass('current');
}
function gnav_active(){
	var activeUrl = window.location.pathname.split("/")[1];
	$('#gnav li a[href="/'+activeUrl+'/"]').addClass('current');
};

/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/
;(function($, window, document, undefined){
	$.fn.doubleTapToGo = function(params){
		if(!('ontouchstart' in window) &&
			!navigator.msMaxTouchPoints &&
			!navigator.userAgent.toLowerCase().match(/windows phone os 7/i)) return false;
		
		this.each( function(){
			var curItem = false;
			
			$(this).on('click', function(e){
				var item = $(this);
				if(item[ 0 ] != curItem[ 0 ]){
					e.preventDefault();
					curItem = item;
				}
			});

			$(document).on( 'click touchstart MSPointerDown', function( e ){
				var resetItem = true,
					parents = $( e.target ).parents();
				for(var i = 0; i < parents.length; i++)
					if(parents[ i ] == curItem[ 0 ])
						resetItem = false;
				if(resetItem)
					curItem = false;
			});
		});
		return this;
	};
})(jQuery, window, document);

function doubleTap(){
 $('#gnav li:has(ul)').doubleTapToGo();
};
$(function(){
	$('#gnav li:has(ul)').doubleTapToGo();
});

/*----------------------------------------------------------
	タブ
-----------------------------------------------------------*/

$(function(){
	$('.nav_tabs li').click(function(){
		var index = $('.nav_tabs li').index(this);
		$('.tab_pane').hide();
		$('.tab_pane').eq(index).fadeIn();
		$('.nav_tabs li').removeClass('select');
		$(this).addClass('select')
	});
});


/*----------------------------------------------------------
	シェード
-----------------------------------------------------------*/

$(function(){
	$('.shadeGroup').each(function(){
		var group = $(this);
		var btn = group.find('.shadeBtn');
		var contents = group.find('.shadeContents');
		
		group.addClass('shadeClose');
		contents.hide();
		group.toggleClass('shadeClose').toggleClass('shadeOpen');
		
		btn.click(function(){
			group.toggleClass('shadeClose').toggleClass('shadeOpen');
			contents.slideToggle(150);
		});
		
	});
});
/*
$(function(){
	$(".more_btn").click(function(){
		$(this).hide();
		$(this).next().slideToggle(150);
	});
	$(".more_btn_cl").click(function(){
		$(this).parent().slideToggle(150);
		$(this).parent().prev(".more_btn").show();
	});
});
*/

$(function(){
	$('.side-search li.shadeBtn').each(function(){
		var group = $(this);
		var btn = group.children('a');
		var contents = group.children('.sub-menu');
		contents.hide();
		if(btn.is('.shadeOpen')){
			contents.show();
		}else{
			btn.addClass('shadeClose');
		}
		btn.click(function(){
			group.find(this).toggleClass('shadeOpen').toggleClass('shadeClose');
			contents.slideToggle(150);
		});
	});
});

function slide_bottom(){
	var showFlag = false;
	var topBtn = $('#footer-slide');    
	topBtn.css('bottom', '-100px');
	var showFlag = false;
	//スクロールが100に達したらボタン表示
	$(window).scroll(function(){
		if($(this).scrollTop() > 200){
			if(showFlag == false){
				showFlag = true;
				topBtn.stop().animate({'bottom' : '0px'}, 300); 
			}
		}else{
			if(showFlag){
				showFlag = false;
				topBtn.stop().animate({'bottom' : '-100px'}, 200); 
			}
		}
	});
};


/*----------------------------------------------------------
	RollOver Images
-----------------------------------------------------------*/

$(function(){
	var image_cache = new Object();

	$("img.mo").each(function(i){
		var tmp = this.src;
		var tmp1 = tmp.split('_on');
		if (tmp1.length != 2){
		var imgsrc = this.src;
		var dot = this.src.lastIndexOf(".");
		var imgsrc_on = this.src.substr(0, dot) + "_on" + this.src.substr(dot, 4);
		image_cache[this.src] = new Image();
		image_cache[this.src].src = imgsrc_on;

		$(this).hover(
			function(){ this.src = imgsrc_on;},
			function(){ this.src = imgsrc;});
		}

	});
});

/*----------------------------------------------------------
	イメージギャラリー
-----------------------------------------------------------*/

$(function(){
	$('.hall-tmb li').click(function(){
		var index = $('.hall-tmb li').index(this);
		$('div.hall-img').hide();
		$('div.hall-img').eq(index).fadeIn();
		$('.hall-tmb li').removeClass('select');
		$(this).addClass('select')
	});
});

/*----------------------------------------------------------
	スムーズスクロール
-----------------------------------------------------------*/

function pageTop(){
	var topBtn = $('#page-top');    
	//最初はボタンを隠す
	topBtn.hide();
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			topBtn.fadeIn();
		}else{
			topBtn.fadeOut();
		}
	});
	$('#page-top a').click(function () {
			$('body,html').animate({
					scrollTop: 0
			}, 500);
			return false;
	});
};

//ページ内アンカー
$(function(){
	$('.pia a[href^=#], .guide_anchor a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top-10;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});

/*----------------------------------------------------------
	高さをそろえる
-----------------------------------------------------------*/

$(function(){
	if($(".round-box").length){
		$('.column-set-2 .round-box').tile(2);
	}else{
		$('.column-set-2 .box').tile(2);
	}
});

/**
 * Flatten height same as the highest element for each row.
 *
 * Copyright (c) 2011 Hayato Takenaka
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * @author: Hayato Takenaka (http://urin.take-uma.net)
 * @version: 0.0.2
**/
(function($) {
	$.fn.tile = function(columns) {
		var tiles, max, c, h, last = this.length - 1, s;
		if(!columns) columns = this.length;
		this.each(function() {
			s = this.style;
			if(s.removeProperty) s.removeProperty("height");
			if(s.removeAttribute) s.removeAttribute("height");
		});
		return this.each(function(i) {
			c = i % columns;
			if(c == 0) tiles = [];
			tiles[c] = $(this);
			h = tiles[c].height();
			if(c == 0 || h > max) max = h;
			if(i == last || c == columns - 1)
				$.each(tiles, function() { this.height(max); });
		});
	};
})(jQuery);