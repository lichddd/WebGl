












$().ready(function () {


var len=$('.threeDstoke').length;
var gradient1 = new gradientColor('#E50743','#F9870F',len);
var gradient2 = new gradientColor('#F9870F','#E8ED30',len);
var gradient3 = new gradientColor('#E8ED30','#3FA62E',len);
var gradient4 = new gradientColor('#3FA62E','#3BB4D7',len);
var gradient5 = new gradientColor('#3BB4D7','#2F4D9E',len);
var gradient6 = new gradientColor('#2F4D9E','#71378A',len);
var gradients= gradient1.concat(gradient2).concat(gradient3).concat(gradient4).concat(gradient5).concat(gradient6);



$('.threeDstoke').each(function (index,ele) {

	
	
	
	$(ele).html('<div class="top"></div><div class="side1"></div><div class="side2"></div><div class="side3"></div><div class="side4"></div><div class="bottom"></div>');
	
	
//	setTimeout(function () {
		
		$(ele).find('div').css('background-color',gradients[Math.floor(gradients.length*index/len)]);
		$(ele).find('div').css('border','solid 1px '+(gradients[Math.floor(gradients.length*index/len)]).replace(',0.1)',',1)'));
		
//	},10);
	
	
	
	
})
//resetstoke();





})
   function gradientColor(startColor,endColor,step){
       startRGB = this.colorRgb(startColor);//转换为rgb数组模式
       startR = startRGB[0];
       startG = startRGB[1];
       startB = startRGB[2];

       endRGB = this.colorRgb(endColor);
       endR = endRGB[0];
       endG = endRGB[1];
       endB = endRGB[2];

       sR = (endR-startR)/step;//总差值
       sG = (endG-startG)/step;
       sB = (endB-startB)/step;

       var colorArr = [];
       for(var i=0;i<step;i++){
		   //计算每一步的hex值 
           var hex = this.colorHex('rgba('+parseInt((sR*i+startR))+','+parseInt((sG*i+startG))+','+parseInt((sB*i+startB))+',0.1)');
           colorArr.push(hex);
       }
       return colorArr;
   }

   // 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
   gradientColor.prototype.colorRgb = function(sColor){
       var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
       var sColor = sColor.toLowerCase();
       if(sColor && reg.test(sColor)){
           if(sColor.length === 4){
               var sColorNew = "#";
               for(var i=1; i<4; i+=1){
                   sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));
               }
               sColor = sColorNew;
           }
           //处理六位的颜色值
           var sColorChange = [];
           for(var i=1; i<7; i+=2){
               sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));
           }
           return sColorChange;
       }else{
           return sColor;
       }
   };
   
 gradientColor.prototype.colorHex = function(rgb){
       var _this = rgb;
       var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
       if(/^(rgb|RGB)/.test(_this)){
           var aColor = _this.replace(/(?:(|)|rgb|RGB)*/g,"").split(",");
           var strHex = "#";
           for(var i=0; i<aColor.length; i++){
               var hex = Number(aColor[i]).toString(16);
               hex = hex<10 ? 0+''+hex :hex;// 保证每个rgb的值为2位
               if(hex === "0"){
                   hex += hex;
               }
               strHex += hex;
           }
           if(strHex.length !== 7){
               strHex = _this;
           }
           return strHex;
       }else if(reg.test(_this)){
           var aNum = _this.replace(/#/,"").split("");
           if(aNum.length === 6){
               return _this;
           }else if(aNum.length === 3){
               var numHex = "#";
               for(var i=0; i<aNum.length; i+=1){
                   numHex += (aNum[i]+aNum[i]);
               }
               return numHex;
           }
       }else{
           return _this;
       }
   }
 
 
 
 
 
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); 
+(function ($) {
	
	
	
	
	
  var StokeNobi   = function (len) {
  	
  		var newlen=$(this).find(".side1,.side2,.side3,.side4").css('height').replace('px','');
  		newlen=Math.floor(newlen);
  		newlen+=len;
		if (newlen>=200) {
					newlen=200;
		}
//		$(this).find(".side1,.side2,.side3,.side4").css('height',(len+10)+'px');
//		$(this).find(".bottom").css('transform','translateY('+(len+5)+'px) rotateX(90deg)');
		$(this).find(".side1,.side2,.side3,.side4").css('height',(newlen+10)+'px');
		$(this).find(".bottom").css('transform','translateY('+(newlen+5)+'px) rotateX(90deg)');
		
		
		
		var data  = $(this).data('progress');
		if (!data) 
		{
			resetstoke($(this));
		}


	}
  
 function resetstoke(self)
{
	var data  = self.data('progress');
	if (!data) 
	{
		self.data('progress', 'true');
	}

	setTimeout(function () {

	
				var newlen=self.find(".side1,.side2,.side3,.side4").css('height').replace('px','');
				newlen-=50;
//				newlen=0;
				if (newlen<=0) {
					newlen=0;
					self.find(".side1,.side2,.side3,.side4").css('height',(newlen+10)+'px');
					self.find(".bottom").css('transform','translateY('+(newlen+5)+'px) rotateX(90deg)');
					self.data('progress', null);
				}
				else
				{
					self.find(".side1,.side2,.side3,.side4").css('height',(newlen+10)+'px');
					self.find(".bottom").css('transform','translateY('+(newlen+5)+'px) rotateX(90deg)');
					resetstoke(self);
				}

		
	
	},400)
}
	
	$.fn.stokeNobi=StokeNobi;
//	$.fn.stokeNobi.Constructor=StokeNobi;
	
	
	
	
	
})(jQuery)