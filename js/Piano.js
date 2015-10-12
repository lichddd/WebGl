








var fixcontiner="#continer4";
var fixp="4";
$().ready(function () {
	
	
	
createjs.Sound.registerSound("sound/c3.ogg", 'c3');
createjs.Sound.registerSound("sound/c3m.ogg", 'cm3');
createjs.Sound.registerSound("sound/d3.ogg", 'd3');
createjs.Sound.registerSound("sound/d3m.ogg", 'dm3');
createjs.Sound.registerSound("sound/e3.ogg", 'e3');
createjs.Sound.registerSound("sound/f3.ogg", 'f3');
createjs.Sound.registerSound("sound/f3m.ogg", 'fm3');
createjs.Sound.registerSound("sound/g3.ogg", 'g3');
createjs.Sound.registerSound("sound/g3m.ogg", 'gm3');
createjs.Sound.registerSound("sound/a3.ogg", 'a3');
createjs.Sound.registerSound("sound/a3m.ogg", 'am3');
createjs.Sound.registerSound("sound/b3.ogg", 'b3');

createjs.Sound.registerSound("sound/c4.ogg", 'c4');
createjs.Sound.registerSound("sound/c4m.ogg", 'cm4');
createjs.Sound.registerSound("sound/d4.ogg", 'd4');
createjs.Sound.registerSound("sound/d4m.ogg", 'dm4');
createjs.Sound.registerSound("sound/e4.ogg", 'e4');
createjs.Sound.registerSound("sound/f4.ogg", 'f4');
createjs.Sound.registerSound("sound/f4m.ogg", 'fm4');
createjs.Sound.registerSound("sound/g4.ogg", 'g4');
createjs.Sound.registerSound("sound/g4m.ogg", 'gm4');
createjs.Sound.registerSound("sound/a4.ogg", 'a4');
createjs.Sound.registerSound("sound/a4m.ogg", 'am4');
createjs.Sound.registerSound("sound/b4.ogg", 'b4');

createjs.Sound.registerSound("sound/c5.ogg", 'c5');
createjs.Sound.registerSound("sound/c5m.ogg", 'cm5');
createjs.Sound.registerSound("sound/d5.ogg", 'd5');
createjs.Sound.registerSound("sound/d5m.ogg", 'dm5');
createjs.Sound.registerSound("sound/e5.ogg", 'e5');
createjs.Sound.registerSound("sound/f5.ogg", 'f5');
createjs.Sound.registerSound("sound/f5m.ogg", 'fm5');
createjs.Sound.registerSound("sound/g5.ogg", 'g5');
createjs.Sound.registerSound("sound/g5m.ogg", 'gm5');
createjs.Sound.registerSound("sound/a5.ogg", 'a5');
createjs.Sound.registerSound("sound/a5m.ogg", 'am5');
createjs.Sound.registerSound("sound/b5.ogg", 'b5');

$(document).keyup(function (event) {
	if (48<event.keyCode&&event.keyCode<56) {
		fixcontiner="#continer4";
		fixp="4";
	}
});
$(document).keydown(function (event) {
	console.log(event.keyCode);
	if (48<event.keyCode&&event.keyCode<56) {
		fixcontiner="#continer"+String.fromCharCode(event.keyCode);
		fixp=String.fromCharCode(event.keyCode);
	}
});
$(document).keypress(function(event) {
	if (48<event.keyCode&&event.keyCode<56) {
	return;	
	}
		switch (String.fromCharCode(event.keyCode)){
			case 'd':
				var fixcontinerx =fixcontiner;
				$(fixcontinerx+' '+'#c').addClass('stokeactive');
				setTimeout(function () {
					$(fixcontinerx+' '+'#c').removeClass('stokeactive');
				},100)
				playsound('c'+fixp);
				break;
			case 'r':
							var fixcontinerx =fixcontiner;
				$(fixcontinerx+' '+'#cm').addClass('stokexactive');
				setTimeout(function () {
					$(fixcontinerx+' '+'#cm').removeClass('stokexactive');
				},100)
				playsound('cm'+fixp);
				break;
			case 'f':
							var fixcontinerx =fixcontiner;
				$(fixcontinerx+' '+'#d').addClass('stokeactive');
				setTimeout(function () {
					$(fixcontinerx+' '+'#d').removeClass('stokeactive');
				},100)
				playsound('d'+fixp);
				break;
			case 't':
							var fixcontinerx =fixcontiner;
				$(fixcontinerx+' '+'#dm').addClass('stokexactive');
				setTimeout(function () {
					$(fixcontinerx+' '+'#dm').removeClass('stokexactive');
				},100)
				playsound('dm'+fixp);
				break;
			case 'g':
							var fixcontinerx =fixcontiner;
							$(fixcontinerx+' '+'#e').addClass('stokeactive');
				setTimeout(function () {
					$(fixcontinerx+' '+'#e').removeClass('stokeactive');
				},100)
				playsound('e'+fixp);
				break;

			case 'h':
							var fixcontinerx =fixcontiner;
							$(fixcontinerx+' '+'#f').addClass('stokeactive');
				setTimeout(function () {
					$(fixcontinerx+' '+'#f').removeClass('stokeactive');
				},100)
				playsound('f'+fixp);
				break;
			case 'u':
							var fixcontinerx =fixcontiner;
							$(fixcontinerx+' '+'#fm').addClass('stokexactive');
				setTimeout(function () {
					$(fixcontinerx+' '+'#fm').removeClass('stokexactive');
				},100)
				playsound('fm'+fixp);
				break;
			case 'j':
							var fixcontinerx =fixcontiner;
							$(fixcontinerx+' '+'#g').addClass('stokeactive');
				setTimeout(function () {
					$(fixcontinerx+' '+'#g').removeClass('stokeactive');
				},100)
				playsound('g'+fixp);
				break;
			case 'i':
							var fixcontinerx =fixcontiner;
							$(fixcontinerx+' '+'#gm').addClass('stokexactive');
				setTimeout(function () {
					$(fixcontinerx+' '+'#gm').removeClass('stokexactive');
				},100)
				playsound('gm'+fixp);
				break;
			case 'k':
							var fixcontinerx =fixcontiner;
							$(fixcontinerx+' '+'#a').addClass('stokeactive');
				setTimeout(function () {
					$(fixcontinerx+' '+'#a').removeClass('stokeactive');
				},100)
				playsound('a'+fixp);
				break;
						case 'o':
										var fixcontinerx =fixcontiner;
							$(fixcontinerx+' '+'#am').addClass('stokexactive');
				setTimeout(function () {
					$(fixcontinerx+' '+'#am').removeClass('stokexactive');
				},100)
				playsound('am'+fixp);
				break;
			
			case 'l':
							var fixcontinerx =fixcontiner;
							$(fixcontinerx+' '+'#b').addClass('stokeactive');
				setTimeout(function () {
					$(fixcontinerx+' '+'#b').removeClass('stokeactive');
				},100)
				playsound('b'+fixp);
				break;
			default:
				break;
		}
});


var key=["d","f","g","h","j","k","l"];
$('.continer').each(function (index,ele) {
$(ele).find('.stoke').each(function (index,ele) {

	
	
	
	$(ele).html('<div class="top"></div><div class="side1"><p class="key">'+key[index]+'</p><p class="keygen">'+$(ele).attr("id").toUpperCase()+'</p></div><div class="side2"></div><div class="side3"></div><div class="side4"></div><div class="bottom"></div>');
	

	
	
});
})
var mkey=["r","t","u","i","o"];
$('.continer').each(function (index,ele) {
$(ele).find('.stokex').each(function (index,ele) {

	
	
	
	$(ele).html('<div class="top"></div><div class="side1"><p class="key">'+mkey[index]+'</p></div><div class="side2"></div><div class="side3"></div><div class="side4"></div><div class="bottom"></div>');
	

	
	
});
});



});



function playsound (code,time) {
	if (!time) {
		time=400;
	}
	else
	{
//		time=time;
	}
	createjs.Sound.play(code,{duration:time});
	
	
	
	
	setstokelen(arrindex(code));
}

function arrindex (code) {
	
	for (var i = 0; i < nelist.length; i++) {
		
		
		if (nelist[i]==code) {
			return i;
		}
		
	}
	return -1;
}
function setstokelen (index) {
	
	var trueindex=Math.floor((index/nelist.length)*$('.threeDstoke').length);
	
	$($('.threeDstoke')[trueindex-4]).stokeNobi(20);
	$($('.threeDstoke')[trueindex-3]).stokeNobi(40);
	$($('.threeDstoke')[trueindex-2]).stokeNobi(60);
	$($('.threeDstoke')[trueindex-1]).stokeNobi(80);
		$($('.threeDstoke')[trueindex]).stokeNobi(100);
	$($('.threeDstoke')[trueindex+1]).stokeNobi(80);
	$($('.threeDstoke')[trueindex+2]).stokeNobi(60);
	$($('.threeDstoke')[trueindex+3]).stokeNobi(40);
	$($('.threeDstoke')[trueindex+4]).stokeNobi(20);

	
}

var nelist=["c3","cm3","d3","dm3","e3","f3","fm3","g3","gm3","a3","am3","b3",
"c4","cm4","d4","dm4","e4","f4","fm4","g4","gm4","a4","am4","b4",
"c5","cm5","d5","dm5","e5","f5","fm5","g5","gm5","a5","am5","b5"
];



function autoplay () {
	var pp=$('#pinput').val();
	var pplist=pp.replace('\n','').split(' ');
	console.log(pplist)
	playpplist(pplist);
	
	
}

function changetoObj (str) {
	str=str.replace('\n','').replace(' ','');
	var obj={};
	obj.ne=str.split('*')[0];
	obj.time=str.split('*')[1]*100;
	
	
	return obj;
}

function playpplist (pplist) {
	var p=pplist.shift();
	var pO=changetoObj(p);
	try{
		playsound(pO.ne,pO.time);
	}catch(e){
		//TODO handle the exception
	}
	
	setTimeout(function () {
		
		
		
		
		
		if (pplist.length>0) {
			playpplist(pplist);
		}
		
		
	},pO.time)
}
