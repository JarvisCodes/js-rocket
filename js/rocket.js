
var timer = null;
var currentCountDown=10;

var changeState = function (state){

	document.body.className = 'body-state'
	+state;
 
    clearInterval(timer);
    currentCountDown=10;
    document.getElementById('countdown')
 		.innerHTML = currentCountDown;

 	if (state==2) {

 		CurrentCountDown=10;
 		timer= setInterval( function () {

 			currentCountDown= currentCountDown-1;
 		document.getElementById('countdown')
 		.innerHTML = currentCountDown;

 		

 		if (currentCountDown <=0) {changeState(3);clearInterval(timer);}
 
 		},500)  ;

 	}else if (state==3) {

 		var success = setTimeout(function() {
 			var randomNum= Math.round(Math.random()*10);

 			console.log('random num:',randomNum);

 			if (randomNum >5) {changeState(4);}
 				else{changeState(5);}
 		}, 2000);
 	}
 	
}
