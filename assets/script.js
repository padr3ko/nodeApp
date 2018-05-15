//Author: Patrick Furbert
//Date: 

$(document).ready(function(){

//insert jQuery stuff here...
$(".nav-content").hide();


$("#hamburger").on("click",()=>{
	$(".nav-content").slideDown("fast");
	}
);

$(".nav-content").hover(()=>{
	$(".nav-content").css("display", "block");
	}, 
	()=>{
	$(".nav-content").slideUp("fast");} 
	
);

$(".content").on("click",()=>{
	$(".nav-content").slideUp("fast");});



});