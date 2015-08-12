$(document).ready(function() {
  	$('#btn1').click(function(){
		$('.cushion').empty();
  		squareNo();
		colorChange();
    });	
});


function squareNo(){
num = prompt("How many squares do you want in the grid?", "0 - 256");
	if(num < 257 && num > 0){
		squareGrid(num);
	}
	else{
		while ((num > 256 || num < 0) || (isNaN(num))) {
			num= prompt("How many squares do you want in the grid?", "0 - 256");
			if(num < 257 && num > 0){
				squareGrid(num);
			}
		}
	}	
};



function squareGrid(num){
	//num = Math.pow(num,2);
for(i = 0; i < num; i++){
  $('.cushion').append('<div class = "square"></>');
    };
}; 

function colorChange(){
	$('.square').hover(function(){
			$(this).css("backgroundColor", "#007FFF");
	});
}; 

