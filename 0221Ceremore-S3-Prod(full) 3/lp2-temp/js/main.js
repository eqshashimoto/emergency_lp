/*======================
		セレモアLP
========================*/

var thisOffset;
$(window).on('load', function () {
  thisOffset = $('#app2').offset().top;
});
$(window).scroll(function () {
  if ($(window).scrollTop() + $(window).height() > thisOffset) {
    // 特定の要素を超えた 
    $('.footer_btns').addClass('show')
  } else {
    // 特定の要素を超えていない
    $('.footer_btns').removeClass('show')
  }
});

var thisOffset2;
$(window).on('load', function () {
  thisOffset2 = $('#pc2').offset().top;
});
$(window).scroll(function () {
  if ($(window).scrollTop() + $(window).height() > thisOffset2) {
    // 特定の要素を超えた 
    $('.footer_btns2').addClass('show')
  } else {
    // 特定の要素を超えていない
    $('.footer_btns2').removeClass('show')
  }
});

/*斎場名対応*/
var saijoNameList = [];
saijoNameList.push('町屋斎場');
saijoNameList.push('戸田葬祭場');
saijoNameList.push('舟渡斎場');
saijoNameList.push('臨海斎場');
saijoNameList.push('平和の森会館');
saijoNameList.push('長福寺');
saijoNameList.push('長明閣');
saijoNameList.push('四ツ木斎場');
saijoNameList.push('富岡斎場');
saijoNameList.push('心行寺');
saijoNameList.push('双葉ホール');
saijoNameList.push('桐ケ谷斎場');
saijoNameList.push('なぎさ会館');
saijoNameList.push('霊源寺');
saijoNameList.push('霊源寺斎場');
saijoNameList.push('代々幡斎場');
saijoNameList.push('落合斎場');
saijoNameList.push('瀧田会館');
saijoNameList.push('太宗寺');
saijoNameList.push('堀ノ内斎場');
saijoNameList.push('妙法寺');
saijoNameList.push('堀ノ内静堂');
saijoNameList.push('長明寺');
saijoNameList.push('長明寺会館');
saijoNameList.push('願泉寺');
saijoNameList.push('光明寺');
saijoNameList.push('観音寺');
saijoNameList.push('観音寺斎場');
saijoNameList.push('みどり会館');
saijoNameList.push('円楽寺');
saijoNameList.push('太子堂会館');
saijoNameList.push('耕雲寺');
saijoNameList.push('種月殿斎場');
saijoNameList.push('森巖寺');
saijoNameList.push('開山堂');
saijoNameList.push('徳雲院');
saijoNameList.push('徳雲会館');
saijoNameList.push('本性寺');
saijoNameList.push('千松閣斎場');
saijoNameList.push('寛永寺');
saijoNameList.push('輪王殿');
saijoNameList.push('築地本願寺');
saijoNameList.push('万世会館');
saijoNameList.push('南池袋斎場');
saijoNameList.push('仙行寺');
saijoNameList.push('宝仙寺');
saijoNameList.push('大師堂');
saijoNameList.push('慈眼寺');
saijoNameList.push('慈眼寺斎場');
saijoNameList.push('天徳院');
saijoNameList.push('天徳院会館');
saijoNameList.push('高徳寺');
saijoNameList.push('長命寺');
saijoNameList.push('東高野会館');
saijoNameList.push('三寳寺');
saijoNameList.push('寳亀閣斎場');
saijoNameList.push('愛染院');
saijoNameList.push('愛染院会館');
saijoNameList.push('大泉橋戸会館');
saijoNameList.push('最勝寺斎場');
saijoNameList.push('護国寺');
saijoNameList.push('桂昌殿');
saijoNameList.push('青山葬儀場');
saijoNameList.push('やすらぎ会館');
saijoNameList.push('梅窓院');
saijoNameList.push('観音堂');
saijoNameList.push('増上寺');
saijoNameList.push('五百羅漢寺');
saijoNameList.push('羅漢会館');
saijoNameList.push('正覚寺');
saijoNameList.push('宝清寺');
saijoNameList.push('たちばな会館');
saijoNameList.push('南山ホール');
saijoNameList.push('青梅市民斎場');
saijoNameList.push('全龍寺');
saijoNameList.push('普門閣会場');
saijoNameList.push('祥応寺');
saijoNameList.push('きわだ斎場');
saijoNameList.push('東福寺');
saijoNameList.push('延命寺');
saijoNameList.push('延命寺会館');
saijoNameList.push('泉龍寺別館');
saijoNameList.push('立川市斎場');
saijoNameList.push('無門庭園');
saijoNameList.push('観蔵院');
saijoNameList.push('琉璃光会館');
saijoNameList.push('吉祥院');
saijoNameList.push('アバホール');
saijoNameList.push('金龍寺');
saijoNameList.push('大雲閣');
saijoNameList.push('昌翁寺');
saijoNameList.push('菩提堂');
saijoNameList.push('常性寺');
saijoNameList.push('常性寺会堂');
saijoNameList.push('正善寺別院');
saijoNameList.push('仙川斎場');
saijoNameList.push('総持寺');
saijoNameList.push('大日堂斎場');
saijoNameList.push('八王子市斎場');
saijoNameList.push('楢原斎場');
saijoNameList.push('宝泉寺別院');
saijoNameList.push('浄泉寺');
saijoNameList.push('観音堂');
saijoNameList.push('富士見斎場');
saijoNameList.push('ベルホール');
saijoNameList.push('桃源院');
saijoNameList.push('宝泉寺');
saijoNameList.push('宝泉寺会館');
saijoNameList.push('多磨葬祭場');
saijoNameList.push('日華斎場');
saijoNameList.push('光明院');
saijoNameList.push('光明院斎場');
saijoNameList.push('南多摩斎場');
saijoNameList.push('みなみ会館');
saijoNameList.push('浄雲寺');
saijoNameList.push('浄雲寺会館');
saijoNameList.push('千手院');
saijoNameList.push('岩子会館');
saijoNameList.push('法専寺');
saijoNameList.push('禅林寺');
saijoNameList.push('霊泉斎場');
saijoNameList.push('安養寺');
saijoNameList.push('弘法大師堂');
saijoNameList.push('延命寺');
saijoNameList.push('源正寺');
saijoNameList.push('太子堂');
saijoNameList.push('ひので斎場');
saijoNameList.push('瑞穂斎場');
saijoNameList.push('朝霞市斎場');
saijoNameList.push('埼葛斎場');
saijoNameList.push('行田市斎場');
saijoNameList.push('越谷市斎場');
saijoNameList.push('宝性寺');
saijoNameList.push('越谷別院');
saijoNameList.push('浦和斎場');
saijoNameList.push('ひかり会館');
saijoNameList.push('谷塚斎場');
saijoNameList.push('善能寺');
saijoNameList.push('大日堂');
saijoNameList.push('所沢市斎場');
saijoNameList.push('昌平寺');
saijoNameList.push('広域飯能斎場');
saijoNameList.push('東松山斎場');
saijoNameList.push('深谷市火葬場');
saijoNameList.push('深丘園');
saijoNameList.push('しののめの里');
saijoNameList.push('三郷市斎場');
saijoNameList.push('厚木市斎場');
saijoNameList.push('西光寺');
saijoNameList.push('不動殿');
saijoNameList.push('常念寺');
saijoNameList.push('栗平会館');
saijoNameList.push('信行寺');
saijoNameList.push('春秋苑');
saijoNameList.push('本弘寺');
saijoNameList.push('鳳凰殿');
saijoNameList.push('青柳寺');
saijoNameList.push('茅ヶ崎市斎場');
saijoNameList.push('藤沢市斎場');
saijoNameList.push('大和斎場');
saijoNameList.push('西勝寺');
saijoNameList.push('あざみ野会館');
saijoNameList.push('西寺尾会堂');
saijoNameList.push('上行寺');
saijoNameList.push('八景斎場');
saijoNameList.push('妙蓮寺');
saijoNameList.push('妙蓮寺斎場');
saijoNameList.push('總持寺');
saijoNameList.push('三松閣');
saijoNameList.push('戸塚斎場');
saijoNameList.push('親緑寺');
saijoNameList.push('テンプル斎場');
saijoNameList.push('久保山霊堂');
saijoNameList.push('一休庵');
saijoNameList.push('久保山式場');
saijoNameList.push('小西斎場');
saijoNameList.push('大林寺');
saijoNameList.push('山水閣');
saijoNameList.push('愛川町営斎場');
saijoNameList.push('愛川聖苑');
saijoNameList.push('市川市営斎場');
saijoNameList.push('徳願寺');
saijoNameList.push('徳願寺会館');
saijoNameList.push('印西斎場');
saijoNameList.push('浦安市斎場');
saijoNameList.push('南柏会館');
saijoNameList.push('さくら斎場');
saijoNameList.push('常光閣');
saijoNameList.push('千葉市斎場');
saijoNameList.push('八富成田斎場');
saijoNameList.push('野田市斎場');
saijoNameList.push('馬込斎場');
saijoNameList.push('松戸市斎場');
saijoNameList.push('北山会館');
saijoNameList.push('長南聖苑');

/*エリア対応*/
var areaNameList = [];
areaNameList.push('東大和');
areaNameList.push('国立');
areaNameList.push('八王子');
areaNameList.push('立川');
areaNameList.push('福生');
areaNameList.push('昭島');
areaNameList.push('坂戸');
areaNameList.push('所沢');
areaNameList.push('三鷹');
areaNameList.push('多摩');
areaNameList.push('東村山');
areaNameList.push('日野');
areaNameList.push('武蔵村山');
areaNameList.push('府中');
areaNameList.push('小平');
areaNameList.push('国分寺');
areaNameList.push('町田');
areaNameList.push('羽村');
areaNameList.push('あきる野');
areaNameList.push('瑞穂町');
areaNameList.push('相模原');
areaNameList.push('川越');
areaNameList.push('東松山');
areaNameList.push('毛呂山町');
areaNameList.push('鶴ヶ島');
areaNameList.push('日高');
areaNameList.push('川島町');
areaNameList.push('鳩山町');

var saijoName = '';
var areaName = '';
var saijoIndex = -1;
var urlParam = location.search.substring(1);
if(urlParam) {
	var params = urlParam.split('&');
	for(i=0; i<params.length; i++) {
		var paramItem = params[i].split('=');
		if(paramItem[0] == 'keyword') {
			var keyword = paramItem[1].replace(/%25/g, '%');
			var keywords = decodeURI(keyword).split(/\s|\+/);
			saijoLoop: for(var i=0; i<saijoNameList.length; i++) {
				for(var j=0; j<keywords.length; j++) {
					if(saijoNameList[i] == keywords[j]) {
						saijoName = saijoNameList[i];
						saijoIndex = j;
						break saijoLoop;
					}
				}
			}
			areaLoop: for(var i=0; i<areaNameList.length; i++) {
				for(var j=0; j<keywords.length; j++) {
					if(saijoIndex!=j && keywords[j].indexOf(areaNameList[i])!=-1) {
						areaName = areaNameList[i];
						break areaLoop;
					}
				}
			}
		}
	}
}
var pc_top_area = document.getElementById('pc_top_area');
var sp_top_area = document.getElementById('sp_top_area');
var pc_top_area2 = document.getElementById('pc_top_area2');
var sp_top_area2 = document.getElementById('sp_top_area2');
if(areaName=='' && saijoName=='') {
	pc_top_area.innerHTML = '<span>一度きりのお葬式は</span>';
	sp_top_area.innerHTML = '<span>一度きりの<br>お葬式は</span>';
	pc_top_area2.innerHTML = '<span><img src="https://s3-ap-northeast-1.amazonaws.com/ceremore.eqs/lp2-temp/images/ceremore_logo.svg" alt="セレモア" style="display:inline; width:60%;">に<br>お任せください</span>';
	sp_top_area2.innerHTML = '<span><img src="https://s3-ap-northeast-1.amazonaws.com/ceremore.eqs/lp2-temp/images/ceremore_logo.svg" alt="セレモア" style="display:inline; width:70%;">に<br>お任せください</span>';
} else if(areaName != '') {
	pc_top_area.innerHTML = '<span>' + areaName + 'のお葬式は</span>';
	sp_top_area.innerHTML = '<span>' + areaName + 'の<br>お葬式は</span>';
	pc_top_area2.innerHTML = '<span><img src="https://s3-ap-northeast-1.amazonaws.com/ceremore.eqs/lp2-temp/images/ceremore_logo.svg" alt="セレモア" style="display:inline; width:60%;">に<br>お任せください</span>';
	sp_top_area2.innerHTML = '<span><img src="https://s3-ap-northeast-1.amazonaws.com/ceremore.eqs/lp2-temp/images/ceremore_logo.svg" alt="セレモア" style="display:inline; width:70%;">に<br>お任せください</span>';
} else {
	if(saijoName.length == 6) {
		pc_top_area.innerHTML = '<span style="font-size:5rem;">' + saijoName + '<span style="font-size:5rem; color:#353535; padding:0;">のお葬式は</span></span>';
		sp_top_area.innerHTML = '<span style="font-size:7rem;">' + saijoName + '<br><span style="color:#353535; padding:0;">のお葬式は</span></span>';
	} else {
		pc_top_area.innerHTML = '<span>' + saijoName + '<span style="color:#353535; padding:0;">の</span><span style="color:#353535; padding:0;">お葬式は</span></span>';
		sp_top_area.innerHTML = '<span>' + saijoName + '<br><span style="color:#353535; padding:0;">のお葬式は</span></span>';
	}
	pc_top_area2.innerHTML = '<span style="color:#353535;"><img src="https://s3-ap-northeast-1.amazonaws.com/ceremore.eqs/lp2-temp/images/ceremore_logo.svg" alt="セレモア" style="display:inline; width:60%;">に<br>お任せください</span>';
	sp_top_area2.innerHTML = '<span style="color:#353535;"><img src="https://s3-ap-northeast-1.amazonaws.com/ceremore.eqs/lp2-temp/images/ceremore_logo.svg" alt="セレモア" style="display:inline; width:70%;">に<br>お任せください</span>';
}

let $img = $('.imgload');
// パスを取得
let $img_src = $img.attr('src');
// src属性を空に
$img.attr('src', '');
// 読み込みを監視
$img.on('load', function() {
 console.log('画像の読み込みが完了しました');
	$(".hide").removeClass('hide');
});
// パスを再設定
$img.attr('src', $img_src);