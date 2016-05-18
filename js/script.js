" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello";
}
function oneToTen(){
	for(var i = 1;i<11;i++){
		display.innerHTML += i+"<br />";
	}
}
function oddNumbers(){
	for (var j =0;j<20;j++){
		if(j%2){
			display.innerHTML += j+"<br />";
		}
	}
}
function squareNums(){
	for(var k=1;k<11;k++){
		display.innerHTML +=Math.pow(k,2)+"<br />";
	}
}
function randNum(){
	for(var l=0;l<4;l++){
		display.innerHTML += Math.floor((Math.random() * 100)+1)+"<br />";
	}
}
function evenNum(){
	var num = parseInt(prompt("Even numbers up to what number?"));
	for(var m=0;m<num;m++){
		if(m%2==0){
			display.innerHTML += m+"<br />";
		}
	}
}
function powersOf2(){
	var num1 = parseInt(prompt("2 to what n?"));
	for(var n=1;n<num1;n++){	
		display.innerHTML += Math.pow(2,n)+"<br />";		
	}
}
function areWeThereYet(){
	var response ="";
	while(response!="Yes"){
		display.innerHTML+="Arewethereyet?"+"<br />";
		response = prompt("?");
		display.innerHTML+=response+"<br />";
	}
	display.innerHTML+="Good!";
}
function triangle(){
	var space = "";
	for(var o =1;o<6;o++){
		for(var p =0;p<o;p++){
			display.innerHTML+="*";
		}
		display.innerHTML+="<br />";
	}
}
function tablesquare4(){
	for(var q =1;q<5;q++){
		for(var r=1;r<5;r++){
			var var1 = (q*r);
			if(var1.toString().length<2){
				var1 = " " + var1;
			}
			display.innerHTML+=""+"|"+var1;
		}
		display.innerHTML+="| <br />";	
	}
}
function tablesquareN(){
	var n = parseInt(prompt("How large a table NxN?"));
	for(var q =1;q<n+1;q++){
		for(var r=1;r<n+1;r++){
			var maxLen = (n*r);
			maxLen = maxLen.toString().length;
			var var1 = (q*r);
			while(true){
				if(var1.toString().length<maxLen){
					var1 = " " + var1;
				}
				else{
					break;
				}
			}
			display.innerHTML+=""+"|"+var1;
		}
		display.innerHTML+="| <br />";	
	}
}
