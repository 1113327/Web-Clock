(function() {
  var days = [ '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
	function getTime() {
		var date = new Date(),
    second = date.getSeconds(),
    minute = date.getMinutes(),
    hour = date.getHours(),
    day = date.getDay(),
    time = date.toLocaleString('zh-TW', {timeZone: 'Asia/Taipei', hour12: true});
    
		deltaSec = second * -6,
		deltaMin = minute * -6,
		deltaHr = hour * -30;//每秒轉6度，60秒即為一圈，且為順時針轉，所以是負的
    
		$('.second').css('transform', 'rotate(' + deltaSec + 'deg)');
    $('.minute').css('transform', 'rotate(' + deltaMin + 'deg)');
    $('.hour').css('transform', 'rotate(' + deltaHr + 'deg)');
    
    document.getElementById("time").innerHTML = time;
    document.getElementById("day").innerHTML =days[day];
	}
  
  function dailer( selector , size){
     for(var i = 0; i < 60 ; i++){
      $(selector).append('<span style="transform: rotate('+ 6 * i +'deg) translateX('+ size +'px)">'+i+'</span>')
    }
  }
  
  dailer( '.second' , 220);
  dailer( '.minute' , 170);

  for(var i = 1; i < 13 ; i++){
      $('.hour').append('<span style="transform: rotate('+ 30 * i +'deg) translateX(100px)">'+i+'</span>')
    }
  
  setInterval(getTime, 1000);
  getTime();
} ());
/*
$() 和 document.getElementById() 的差異。

這兩個都是 JavaScript 方法，用於取得 HTML 元素。$() 是使用 jQuery 的 JavaScript 庫的方法，而 document.getElementById() 是 JavaScript 的標準方法。

主要區別在於，$() 可以一次取得多個元素並將它們群組在一起，或輕鬆地設定元素的動畫和事件。document.getElementById() 可以取得個別的元素，但沒有其他功能。

使用哪個方法取決於您的項目。如果使用 jQuery，可以使用$()，否則需要使用 document.getElementById()。
*/