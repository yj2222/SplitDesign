particlesJS("particles-js", {
	"particles":{
		"number":{
			"value": 300,//この数値を変更すると桜の数が増減できる
			"density":{
				"enable": true,
				"value_area": 3000,
			}
		},
		"color":{
			"value":"#fff"
		},
		"shape":{
			"type":"image",//形状は画像を指定
			"stroke":{
				"width":0,
			},
			"image":{
				"src":"http://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/move02/5-6/img/flower.png",//【重要】画像を指定！桜の画像を設定してください。
				"width":100,
				"height":100,
			}
		},
		"opacity":{
			"value": 0.8,
			"random": true,
			"anim":{
				"enable": true,
				"speed": 2,
				"opacity_min": 0.05,
				"sync":true,
			}
		},
		"size":{
			"value": 20,
			"random":true,//サイズをランダムに
			"anim":{
				"enable": false,
				"speed": 10,
				"size_min": 1,
				"sync":false,
			}
		},
		"line_linked":{
			"enable":false,
		},
		"move":{
			"enable":true,
			"speed":7,//この数値を小さくするとゆっくりな動きになる
			"direction":"bottom",//右下に向かって落ちる
			"random":true,//動きはランダムにしない
			"straight":false,//動きをとどめない
			"out_mode":"out",//画面の外に出るように描写
			"bounce":false,//跳ね返りなし
			"attract":{
				"enable":false,
				"rotateX":600,
				"rotateY":1200,
			}
		}
	},
	"interactivity":{
		"detect_on":"canvas",
		"events":{
			"onhover":{
				"enable":false,
			},
			"onclick":{
				"enable":false,
			},
			"resize":true,
		}
	},
	"retina_detect":false,
});