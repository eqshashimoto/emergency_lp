"use strict"
function check_field(field,exp,message){
	if(exp){
		field_no_error(field);
	}else{
		field_error(field,message);
	}
	return exp;
}

function field_error(fld,message){
	var field_id = $(fld).attr('name');
	var error_id = '#' + field_id + '_error';
	var a = $(error_id).find('span');
	a.text(message);
	$(error_id).show();
}

function field_no_error(fld){
	var field_id = $(fld).attr('name');
	var error_id = '#' + field_id + '_error';
	$(error_id).hide();
}

function isKatakana(str) {
	var f = str.match(/^[ァ-ン]+$/);
	return f;
}

function isHiragana(str) {
	return ! str.match(/[^あ-ん|^ー]/g);
}

function isAllHalfSize(str) {
	var length = argValue.length;
	return (length == getByteLength(str));
}

function ifID(field) {
	var classes = $(field).attr('class').split(' ');
	for(var j=0;j < classes.length;j++){
		var c = classes[j];
		c = c.charAt(0);
		if( c === '_' ){
			var id = '#' + classes[j].substring(1);
			return id;
		}
	}
	return '';
}

var first_submmit = true;

function check_form(){

	if(first_submmit) {
		$("form :input").focus(function() {
			$(this).css("background-color", "#FFFFCC");
		})
		$("form :input").blur(function() {
			$(this).css("background-color", "");
			$("input").removeClass("err");
			$("select").removeClass("err");
			//チェックボックスのチェック
			//エラーの初期化
			$("p.error").remove();
			$("p.nonerror").remove();
			$("span.error").remove();
			$("span.error_msg").remove();
			$("span.nonerror").remove();
			$("div.error_box").remove();
			$("table td").removeClass("error");
			$("div").removeClass("error");
			$("div").removeClass("nonerror");
			$("span").removeClass("error");
			$("span").removeClass("nonerror");
				
			// var rqradress = false;
			// $(".contactinput").each(function() {
			// 	if(this.checked && this.id!="estimate") {
			// 		rqradress = true;
			// 	}
			// });
	
			$(":text,[type='tel'],[type='email']").not('.unused').filter(".validate").each(function(){
	
				$(this).filter(".name1requirement").each(function(){
					if($(this).val()==""){
						$(this).parent().append("<span class='error_msg'><br />お名前を入力してください</span>");
						$(this).addClass("err");
						//$(this).css("background", "#ffefef");
					}
				});
				$(this).filter(".name2requirement").each(function(){
					if($(this).val()==""){
						$(this).parent().append("<span class='error_msg'><br />お名前（名）を入力してください</span>");
						$(this).addClass("err");
						//$(this).css("background", "#ffefef");
					}
				});
				$(this).filter(".kana1requirement").each(function(){
					if($(this).val()==""){
						$(this).parent().append("<span class='error_msg'><br />ふりがなを入力してください</span>");
						$(this).addClass("err");
						//$(this).css("background", "#ffefef");
					} else {
						if(!$(this).val()=="" && !$(this).val().match(/^[ぁ-ん　 ー]+$/)){
							$(this).parent().append("<span class='error_msg'><br />ふりがなは全角ひらがなのみで入力してください</span>");
							$(this).addClass("err");
						}
					}
				});
				$(this).filter(".kana2requirement").each(function(){
					if($(this).val()==""){
						$(this).parent().append("<span class='error_msg'><br />ふりがな（名）を入力してください</span>");
						$(this).addClass("err");
						//$(this).css("background", "#ffefef");
					} else {
						if(!$(this).val()=="" && !$(this).val().match(/^[ぁ-ん　 ー]+$/)){
							$(this).parent().append("<span class='error_msg'><br />ふりがな（名）は全角ひらがなのみで入力してください</span>");
							$(this).addClass("err");
						}
					}
				});
	
				$(this).filter(".emailrequirement").each(function(){
					if($(this).val()==""){
						$(this).parent().append("<span class='error_msg'><br />メールアドレスを入力してください</span>");
						$(this).addClass("err");
						//$(this).css("background", "#ffefef");
					} else {
						if(!$(this).val().match(/.+@.+\..+/g)){
							$(this).parent().append("<span class='error_msg'><br />メールアドレスの形式が異なります</span>");
							$(this).addClass("err");
							//$(this).css("background", "#ffefef");
						}
					}
				});
				$(this).filter(".telrequirement").each(function(){
					if($(this).val()==""){
						$(this).parent().append("<span class='error_msg'><br />電話番号を入力してください</span>");
						$(this).addClass("err");
					} else {
						if(!$(this).val().match(/^[0-9\-]+$/)){
							$(this).parent().append("<span class='error_msg'><br />電話番号の形式が異なります</span>");
							$(this).addClass("err");
							//$(this).css("background", "#ffefef");
						}
					}
				});
				//----------------- 2016/6/30 追記 -------------------------------
				
				$(this).filter(".tel2requirement").each(function(){
					if($(this).val()==""){
						//$(this).parent().append("<span class='error_msg'><br />電話番号を入力してください</span>");
						//$(this).addClass("err");
					} else {
						if(!$(this).val().match(/^[0-9\-]+$/)){
							$(this).parent().append("<span class='error_msg'><br />電話番号の形式が異なります</span>");
							$(this).addClass("err");
							//$(this).css("background", "#ffefef");
						}
					}
				});
				$(this).filter(".memberrequirement").each(function(){
					if($(this).val()==""){
						$(this).parent().append("<span class='error_msg'><br />会員番号を入力してください</span>");
						$(this).addClass("err");
						//$(this).css("background", "#ffefef");
					}
				});
	
				//----------------- 2020/4/23 追記 -------------------------------
	
				$(this).filter(".tantourequirement").each(function(){
					if($(this).val()==""){
						$(this).parent().append("<span class='error_msg'><br />セレモア担当者を入力してください</span>");
						$(this).addClass("err");
						//$(this).css("background", "#ffefef");
					}
				});
	
	
				//----------------- 追記ここまで --------------------------------
				
				$(this).filter(".faxrequirement").each(function(){
					if($(this).val()==""){
						//$(this).parent().append("<span class='error_msg'><br />FAX番号を入力してください</span>");
					} else {
						if(!$(this).val().match(/^[0-9\-]+$/)){
							$(this).parent().append("<span class='error_msg'><br />FAX番号の形式が異なります</span>");
							$(this).addClass("err");
							//$(this).css("background", "#ffefef");
						}
					}
				});
				
				$(this).filter(".ziprequirement:not('.unused')").each(function(){
					if($(this).val()==""){
						$(this).parent().append("<span class='error_msg'><br />郵便番号を入力してください</span>");
						$(this).addClass("err");
						//$(this).css("background", "#ffefef");
					} else {
						if(!$(this).val().match(/^[0-9\-]*$/)){
							$(this).parent().append("<span class='error_msg'><br />郵便番号の形式が異なります</span>");
							$(this).addClass("err");
							//$(this).css("background", "#ffefef");
						}
					}
				});
				// $(this).filter(".prerequirement:not('.unused')").each(function(){
				// 	if($(this).val()==""){
				// 		$(this).parent().append("<span class='error_msg'><br />都道府県を選択してください</span>");
				// 		$(this).addClass("err");
				// 		//$(this).css("background", "#ffefef");
				// 	}
				// });
				$(this).filter(".cityrequirement:not('.unused')").each(function(){
					if($(this).val()==""){
						$(this).parent().append("<span class='error_msg'><br />市区町村番地を入力してください</span>");
						$(this).addClass("err");
						//$(this).css("background", "#ffefef");
					}
				});
					/*$(this).filter(".requirement").each(function(){
						if($(this).val()==""){
							$(this).parent().append("<span class='error_msg'><br />必須項目です</span>");
							$(this).css("background", "#ffefef");
						}
					});*/
				
				//---------------- 2016年7月1日 追記 ここから ---------------------------------------------------
				$(this).filter(".zip2requirement").each(function(){
					if($(this).val()==""){
						$(this).parent().append("<span class='error_msg'><br />郵便番号を入力してください</span>");
						$(this).addClass("err");
						// $(this).css("background", "#ffefef");
					} else {
						if(!$(this).val().match(/^[0-9\-]*$/)){
							$(this).parent().append("<span class='error_msg'><br />郵便番号の形式が異なります</span>");
							$(this).addClass("err");
							//$(this).css("background", "#ffefef");
						}
					}
				});
				$(this).filter(".city2requirement").each(function(){
					if($(this).val()==""){
						$(this).parent().append("<span class='error_msg'><br />市区町村番地を入力してください</span>");
						$(this).addClass("err");
						// $(this).css("background", "#ffefef");
					}
				});
			});

			
			//セレクトのチェック
			$("select").filter(".validate").each(function(){
				$(this).filter(".prerequirement").each(function(){
					if($(this).val()==""){
						$(this).parent().append("<span class='error_msg'><br />都道府県を選択してください</span>");
						$(this).addClass("err");
						//$(this).css("background", "#ffefef");
					}
				});
			});		
			
	
			// //数値のチェック
			// $("[type='number']").filter(".validate").each(function(){
			// 	$(this).filter(".requirement").each(function(){
			// 		if($(this).val()==""){
			// 			$(this).parent().append("<span class='error_msg'><br />数を入力してください</span>");
			// 			$(this).addClass("err");
			// 		} else {
			// 			if(!$(this).val().match(/^[0-9\-]+$/)){
			// 				$(this).parent().append("<span class='error_msg'><br />入力に使用できるのは半角数字のみです</span>");
			// 				$(this).addClass("err");
			// 			}
			// 		}
			// 	});
			// });		
			
			if($('#scale:not(".unused")').length > 0) {
				var empty = false;
				var incorrect = false;
				$('#scale input').each(function() {
					empty |= $(this).val()=="";
					if(!$(this).val()=="")
						incorrect |= !$(this).val().match(/^[0-9]+$/);
				});
				if(empty) {
					$('#scale td').append("<span class='error_msg'><br />想定人数を選択してください</span>");
					$('#scale td').addClass("err");
				}
				if(incorrect) {
					$('#scale td').append("<span class='error_msg'><br />想定人数は半角英数字でのみ入力してください</span>");
					$('#scale td').addClass("err");
				}
			}
	
			if($('#denomination:not(".unused")').length > 0 && !$("input[name='denomination']:checked").val()) {
				$('#denomination td').append("<span class='error_msg'><br />宗教形式を選択してください</span>");
				$('#denomination td').addClass("err");
			}
	
			if($('#formation:not(".unused")').length > 0 && !$("input[name='formation']:checked").val()) {
				$('#formation td').append("<span class='error_msg'><br />葬儀形態を選択してください</span>");
				$('#formation td').addClass("err");
			}
	
			if($('#area:not(".unused")').length > 0 && !$("input[name='area']").val()) {
				$('#area td').append("<span class='error_msg'><br />想定地域を記入してください</span>");
				$('#area td').addClass("err");
			}
	
			if($('#hall:not(".unused")').length > 0 && !$("input[name='hall']:checked").val() && !$("input[name='hall-other']").val()) {
				$('#hall td').append("<span class='error_msg'><br />ご希望の葬儀場を選択してください</span>");
				$('#hall td').addClass("err");
			}
			
			if($('#member:not(".unused")').length) {
				if(!$("input[name='member-yn']:checked").val()) { 
					$('#member td').append("<span class='error_msg'><br />ご入会状況をお答えください</span>");
					$('#member td').addClass("err");
				}
				// if($("input[name='member-yn']:checked").val()=='会員である' && !$("input[name='member']:checked").val()) { 
				// 	$('#member .subcontent').append("<span class='error_msg'><br />ご入会状況をお答えください</span>");
				// 	$('#member td').addClass("err");
				// }
			}
	
			//チェックボックスのチェック
			var checkbox_num = 0;
			if($("#check_doui:checked").val()){
				checkbox_num++;
			}
			if(checkbox_num == 0){
				$("#checkbox_msg").html("<span class='error_msg'><br />会員規約・個人情報保護方針の同意が必要です</span>");
			}
	
			//エラー時の特別設定
			if($("span.nonerror").size() == 4){
				$("span.nonerror").remove();
				$("div").removeClass("nonerror");
			}
	
			//エラーの際の処理
			if($("span.error_msg").size() > 0){
				//$('html,body').animate({ scrollTop: $("span.error:first").offset().top-40 }, 'slow');
				
				//$("span.error").parent().addClass("error");
				//$("span.error_msg").parent().find("input,select").addClass("err");
				$("div.submit-btn").before("<div class='error_box'><p>未入力の項目があります</p></div>");
				return false;
			}
	
		})
		
	}

	first_submmit = false;

	// $("form").submit(error_control());

	return error_control();

	// var is_success = true;
	/*$('.field_error').hide();
	
	// if
	$('.if').removeClass('requirement');
	var fields = $('.if');
	var len = fields.length;
	for(var i = 0;i < len;i++){
		var field = fields[i];
		var id = ifID(field);
		if($(id).attr('checked')){
			$(field).addClass('requirement');
		}
	}

	
	// 必須、データ型制限
	var fields = $('form input');
	var len = fields.length;
	for(var i = 0;i < len;i++){
		var field = $(fields[i]);
		var type = field.attr('type');
		switch(type) {
			case 'text':
				if(field.hasClass('requirement')){
					var f = check_field(field,field.val().length > 0,"は必須項目です");
					if( ! f && $(fields[i]).hasClass('if') ){
						var id = ifID($(fields[i]));
						var name = $(id).attr('name');
						var er = $('#' + name + '_error');
						er.find('span').text('にチェックした場合には');
						er.show();
					}

					is_success &= f;
				}else if(field.hasClass('mail')){
					var val = field.val();
					var match = val.match(/.+@.+\..+/);
					is_success &= check_field(field,match && match.length > 0,"を入力してください");
				}else if(field.hasClass('mail2')){
					var field_id = $(field).attr('id');
					field_id = field_id.substr(0,field_id.length - "_mail2".length,"が異なります");
					var mail_addr = $('#' + field_id).val();
					is_success &= check_field(field,field.val() === mail_addr);
				}
				if(field.hasClass('kana') && field.val().length > 0 ){
					is_success &= check_field(field,isKatakana(field.val()),"はカタカナで入力して下さい");
				}
				if(field.hasClass('hira') && field.val().length > 0 ){
					is_success &= check_field(field,isHiragana(field.val()),"はひらがなで入力して下さい");
				}
			  break;
			case 'radio':
				if(field.hasClass('requirement')){
					var name = field.attr('name');
					var btns = $('input[name = "'+name+'"]');
					var isChecked = false;
					for(j = 0;j < btns.length;j++){
						if($(btns[j]).attr("checked")){
							isChecked = true;
							break;
						}
					}
					is_success &= check_field(field,isChecked,"は必須項目です");
				}
			  break;
			case 'submit':
			  break;
		}
	}
	// セレクタ
	fields = $('form select');
	len = fields.length;
	for(var i=0;i < len;i++){
		if($(fields[i]).hasClass('requirement')){
			var val = $(fields[i]).val();
			var f = check_field($(fields[i]), val.length > 0,"は必須項目です");
			if( ! f && $(fields[i]).hasClass('if') ){
				var id = ifID($(fields[i]));
				var name = $(id).attr('name');
				var er = $('#' + name + '_error');
				er.find('span').text('にチェックした場合には');
				er.show();
			}
			is_success &= f;
		}		
	}
	// テキストエリア
	fields = $('form textarea');
	len = fields.length;
	for(var i=0;i < len;i++){
		if($(fields[i]).hasClass('requirement')){
			var val = $(fields[i]).val();
			var f = check_field($(fields[i]), val.length > 0,"は必須項目です");
			if( ! f && $(fields[i]).hasClass('if') ){
				var id = ifID($(fields[i]));
				var name = $(id).attr('name');
				var er = $('#' + name + '_error');
				er.find('span').text('にチェックした場合には');
				er.show();
			}
			is_success &= f;
		}
	}
	// チェックボックスグループ
	var groups = $('div.requirement');
	for(var i=0;i<groups.length;i++){
		var fields = $(groups[i]).find('input');
		var flag = false;
		for(j = 0;j < fields.length;j++){
			if($(fields[j]).attr("checked")){
				isChecked = true;
				break;
			}
		}
		is_success &= check_field($(groups[i]),isChecked,"は必須項目です");
	}*/
	// return is_success != 0;
} // end check_form


function error_control() {
	//エラーの初期化
	$("p.error").remove();
	$("p.nonerror").remove();
	$("span.error").remove();
	$("span.error_msg").remove();
	$("span.nonerror").remove();
	$("div.error_box").remove();
	$("table td").removeClass("error");
	$("div").removeClass("error");
	$("div").removeClass("nonerror");
	$("span").removeClass("error");
	$("span").removeClass("nonerror");
	
	var rqradress = false;
	$(".contactinput").each(function() {
		if(this.checked && this.id=="inquiry") {
			rqradress = true;
			return;
		}
	});

	$(":text,[type='tel'],[type='email']").not('.unused').filter(".validate").each(function(){

		$(this).filter(".name1requirement").each(function(){
			if($(this).val()==""){
				$(this).parent().append("<span class='error_msg'><br />お名前を入力してください</span>");
				$(this).addClass("err");
				//$(this).css("background", "#ffefef");
			}
		});
		$(this).filter(".name2requirement").each(function(){
			if($(this).val()==""){
				$(this).parent().append("<span class='error_msg'><br />お名前（名）を入力してください</span>");
				$(this).addClass("err");
				//$(this).css("background", "#ffefef");
			}
		});
		$(this).filter(".kana1requirement").each(function(){
			if($(this).val()==""){
				$(this).parent().append("<span class='error_msg'><br />ふりがなを入力してください</span>");
				$(this).addClass("err");
				//$(this).css("background", "#ffefef");
			} else {
				if(!$(this).val()=="" && !$(this).val().match(/^[ぁ-ん　 ー]+$/)){
					$(this).parent().append("<span class='error_msg'><br />ふりがなは全角ひらがなのみで入力してください</span>");
					$(this).addClass("err");
				}
			}
		});
		$(this).filter(".kana2requirement").each(function(){
			if($(this).val()==""){
				$(this).parent().append("<span class='error_msg'><br />ふりがな（名）を入力してください</span>");
				$(this).addClass("err");
				//$(this).css("background", "#ffefef");
			} else {
				if(!$(this).val()=="" && !$(this).val().match(/^[ぁ-ん　 ー]+$/)){
					$(this).parent().append("<span class='error_msg'><br />ふりがな（名）は全角ひらがなのみで入力してください</span>");
					$(this).addClass("err");
				}
			}
		});

		$(this).filter(".emailrequirement").each(function(){
			if($(this).val()==""){
				$(this).parent().append("<span class='error_msg'><br />メールアドレスを入力してください</span>");
				$(this).addClass("err");
				//$(this).css("background", "#ffefef");
			} else {
				if(!$(this).val().match(/.+@.+\..+/g)){
					$(this).parent().append("<span class='error_msg'><br />メールアドレスの形式が異なります</span>");
					$(this).addClass("err");
					//$(this).css("background", "#ffefef");
				}
			}
		});
		$(this).filter(".telrequirement").each(function(){
			if($(this).val()==""){
				$(this).parent().append("<span class='error_msg'><br />電話番号を入力してください</span>");
				$(this).addClass("err");
			} else {
				if(!$(this).val().match(/^[0-9\-]+$/)){
					$(this).parent().append("<span class='error_msg'><br />電話番号の形式が異なります</span>");
					$(this).addClass("err");
					//$(this).css("background", "#ffefef");
				}
			}
		});
		//--------------------- 2016/6/30　追記 -----------------------
		
		$(this).filter(".tel2requirement").each(function(){
			if($(this).val()==""){
				//$(this).parent().append("<span class='error_msg'><br />電話番号を入力してください</span>");
				//$(this).addClass("err");
			} else {
				if(!$(this).val().match(/^[0-9\-]+$/)){
					$(this).parent().append("<span class='error_msg'><br />電話番号の形式が異なります</span>");
					$(this).addClass("err");
					//$(this).css("background", "#ffefef");
				}
			}
		});
		$(this).filter(".memberrequirement").each(function(){
			if($(this).val()==""){
				$(this).parent().append("<span class='error_msg'><br />会員番号を入力してください</span>");
				$(this).addClass("err");
				//$(this).css("background", "#ffefef");
			}
		});

		//--------------------- 2020/4/23　追記 -----------------------

		$(this).filter(".tantourequirement").each(function(){
			if($(this).val()==""){
				$(this).parent().append("<span class='error_msg'><br />セレモア担当者を入力してください</span>");
				$(this).addClass("err");
				//$(this).css("background", "#ffefef");
			}
		});


		//----------------　追記ここまで----------------------------
		
		$(this).filter(".faxrequirement").each(function(){
			if($(this).val()==""){
				//$(this).parent().append("<span class='error_msg'><br />FAX番号を入力してください</span>");
			} else {
				if(!$(this).val().match(/^[0-9\-]+$/)){
					$(this).parent().append("<span class='error_msg'><br />FAX番号の形式が異なります</span>");
					$(this).addClass("err");
					//$(this).css("background", "#ffefef");
				}
			}
		});

		$(this).filter(".ziprequirement:not('.unused')").each(function(){
			if($(this).val()==""){
				$(this).parent().append("<span class='error_msg'><br />郵便番号を入力してください</span>");
				$(this).addClass("err");
				//$(this).css("background", "#ffefef");
			} else {
				if(!$(this).val().match(/^[0-9\-]*$/)){
					$(this).parent().append("<span class='error_msg'><br />郵便番号の形式が異なります</span>");
					$(this).addClass("err");
					//$(this).css("background", "#ffefef");
				}
			}
		});
		// $(this).filter(".prerequirement:not('.unused')").each(function(){
		// 	if($(this).val()==""){
		// 		$(this).parent().append("<span class='error_msg'><br />都道府県を選択してください</span>");
		// 		$(this).addClass("err");
		// 		//$(this).css("background", "#ffefef");
		// 	}



		// });
		$(this).filter(".cityrequirement:not('.unused')").each(function(){
			if($(this).val()==""){
				$(this).parent().append("<span class='error_msg'><br />市区町村番地を入力してください</span>");
				$(this).addClass("err");
				//$(this).css("background", "#ffefef");
			}
		});
	});
	
	
	//-------------------------------------------
	$("select").not('.unused').filter(".validate").each(function(){
		$(this).filter(".birth_yrequirement").each(function(){
			if($(this).val()==""){
				$(this).parent().append("<span class='error_msg'><br />年を選択してください</span>");
				$(this).addClass("err");
				//$(this).css("background", "#ffefef");
			}
		});
		$(this).filter(".birth_drequirement").each(function(){
			if($(this).val()==""){
				$(this).parent().append("<span class='error_msg'><br />月を選択してください</span>");
				$(this).addClass("err");
				//$(this).css("background", "#ffefef");
			}
		});
		$(this).filter(".birth_mrequirement").each(function(){
			if($(this).val()==""){
				$(this).parent().append("<span class='error_msg'><br />日を選択してください</span>");
				$(this).addClass("err");
				//$(this).css("background", "#ffefef");
			}
		});
	});


	if($('#scale:not(".unused")').length > 0) {
		var empty = false;
		var incorrect = false;
		$('#scale input').each(function() {
			empty |= $(this).val()=="";
			if(!$(this).val()=="")
				incorrect |= !$(this).val().match(/^[0-9]+$/);
		});
		if(empty) {
			$('#scale td').append("<span class='error_msg'>想定人数を選択してください</span>");
			$('#scale td').addClass("err");
		}
		if(incorrect) {
			$('#scale td').append("<span class='error_msg'>想定人数は半角英数字でのみ入力してください</span>");
			$('#scale td').addClass("err");
		}
	}

	if($('#denomination:not(".unused")').length > 0 && !$("input[name='denomination']:checked").val()) {
		$('#denomination td').append("<span class='error_msg'><br />宗教形式を選択してください</span>");
		$('#denomination td').addClass("err");
	}

	if($('#formation:not(".unused")').length > 0 && !$("input[name='formation']:checked").val()) {
		$('#formation td').append("<span class='error_msg'><br />葬儀形態を選択してください</span>");
		$('#formation td').addClass("err");
	}

	if($('#area:not(".unused")').length > 0 && !$("input[name='area']").val()) {
		$('#area td').append("<span class='error_msg'><br />葬儀をお考えの地域を記入してください</span>");
		$('#area td').addClass("err");
	}
	
	if($('#hall:not(".unused")').length > 0 && !$("input[name='hall']:checked").val() && !$("input[name='hall-other']").val()) {
		$('#hall td').append("<span class='error_msg'><br />ご希望の葬儀場を選択してください</span>");
		$('#hall td').addClass("err");
	}

	if($('#member:not(".unused")').length) {
		if(!$("input[name='member-yn']:checked").val()) { 
			$('#member td').append("<span class='error_msg'><br />ご入会状況をお答えください</span>");
			$('#member td').addClass("err");
		}
		if($("input[name='member-yn']:checked").val()=='会員である' && !$("input[name='member']:checked").val()) { 
			$('#member .subcontent').append("<span class='error_msg'><br />ご入会状況をお答えください</span>");
			$('#member td').addClass("err");
		}
	}

	$(":radio").not('.unused').filter(".validate").each(function(){
		$(this).filter(".sexrequirement").each(function(){
			if(!$("input[name='sex']:checked").val()){
				$(this).parent().parent().append("<span class='error_msg'><br />性別を選択してください</span>");
				$(this).addClass("err");
				//$(this).css("background", "#ffefef");
			}
		});
	});
	//-------------------------------------------
	
	//セレクトのチェック
	$("select").filter(".validate").each(function(){
		$(this).filter(".prerequirement").each(function(){
			if($(this).val()==""){
				$(this).parent().append("<span class='error_msg'><br />都道府県を選択してください</span>");
				$(this).addClass("err");
				//$(this).css("background", "#ffefef");
			}
		});
	});
	
	
	//チェックボックスのチェック
	var checkbox_num = 0;
	if($("#check_doui:checked").val()){
		checkbox_num++;
	}
	if(checkbox_num == 0){
		$("#checkbox_msg").html("<span class='error_msg'><br />会員規約・個人情報保護方針の同意が必要です</span>");
	}

	//エラー時の特別設定
	if($("span.nonerror").size() == 4){
		$("span.nonerror").remove();
		$("div").removeClass("nonerror");
	}

	//エラーの際の処理
	if($("span.error_msg").size() > 0){
		$('html,body').animate({ scrollTop: $("span.error_msg:first").offset().top-40 }, 'slow');
		
		//$("span.error_msg").parent().addClass("error_msg");
		//$("span.error_msg").parent().find("input,select").addClass("err");
		$("div.submit-btn").before("<div class='error_box'><p>未入力の項目があります</p></div>");
		return false;
	} 
}