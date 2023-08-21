var app = new Vue({
	el: '#app',
	data: {
		cerepak_select: '1',
		cerepak_plans: {
	   '1': '398,000円プラン',
	   '2': '498,000円プラン',
	   '3': '680,000円プラン',
	   '4': '980,000円プラン',
	   '5': '1,380,000円プラン',
	   '6': '1,880,000円プラン' 
	  },
		cerepak_discount: {
			'1': '12,000',
			'2': '15,000',
			'3': '20,000',
			'4': '30,000',
			'5': '40,000',
			'6': '60,000'
		},
		cerepak_options: {
			'1': [],
			'2': [],
			'3': [],
			'4': [],
			'5': [],
			'6': []
		}
	},
	methods: {
		changeStyle: function(num) {
			var buttons = document.getElementsByClassName('app_plan_button');
			for(var i=0; i<buttons.length; i++) {
				if(i==num) {
					buttons[i].className = 'app_plan_button app_plan_button_selected';
				} else {
					buttons[i].className = 'app_plan_button';
				}
			}
		}
	},
	computed: {
		cerepak_option_num: function() {
			if(this.cerepak_select == '1') {
				return '1'
			} else {
				return 'other'
			}
		}
	}
})

var app2 = new Vue({
	el: '#pc',
	data: {
		cerepak_select: '1',
		cerepak_plans: {
	   '1': '398,000円プラン',
	   '2': '498,000円プラン',
	   '3': '680,000円プラン',
	   '4': '980,000円プラン',
	   '5': '1,380,000円プラン',
	   '6': '1,880,000円プラン' 
	  },
		cerepak_discount: {
			'1': '12,000',
			'2': '15,000',
			'3': '20,000',
			'4': '30,000',
			'5': '40,000',
			'6': '60,000'
		},
		cerepak_options: {
			'1': [],
			'2': [],
			'3': [],
			'4': [],
			'5': [],
			'6': []
		}
	},
	methods: {
		changeStyle: function(num) {
			var buttons = document.getElementsByClassName('pc_plan_button');
			for(var i=0; i<buttons.length; i++) {
				if(i==num) {
					buttons[i].className = 'pc_plan_button pc_plan_button_selected';
				} else {
					buttons[i].className = 'pc_plan_button';
				}
			}
		}
	},
	computed: {
		cerepak_option_num: function() {
			if(this.cerepak_select == '1') {
				return '1'
			} else {
				return 'other'
			}
		}
	}
})


var thisOffset;
$(window).on('load', function () {
  thisOffset = $('#app_link_n1').offset().top + $('#app_link_n1').outerHeight();
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
  thisOffset2 = $('#pc_link_n2').offset().top + $('#pc_link_n2').outerHeight();
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