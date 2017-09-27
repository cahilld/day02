$(document).ready(function() {
 

 //	$("#stream1_btn").on("click", function() {
 //		$(".stream1").removeClass('highlight_stream');
	// 	$(".stream2").removeClass('highlight_stream');
	// 	$(".stream3").removeClass('highlight_stream');
	//   	$(".stream1").addClass('highlight_stream');
	// });
	// $("#stream2_btn").on("click", function() {
	// 	$(".stream1").removeClass('highlight_stream');
	// 	$(".stream2").removeClass('highlight_stream');
	// 	$(".stream3").removeClass('highlight_stream');
	//   	$(".stream2").addClass('highlight_stream');
	// });
	// $("#stream3_btn").on("click", function() {
	// 	$(".stream1").removeClass('highlight_stream');
	// 	$(".stream2").removeClass('highlight_stream');
	// 	$(".stream3").removeClass('highlight_stream');
	//   	$(".stream3").addClass('highlight_stream');
	// });
	
	$("p").on("click", function(){
		$("p").css("background-color", "red");
	})
	$("h2").on("mouseenter", function(){
		$(this).css("font-size", "1.5em");
	})
	$("h2").on("mouseleave", function(){
		$(this).css("font-size", "1em");
	})
	$("p").on("mouseenter", function(){
		$("body").css("background-color", "black");
	})
	$("p").on("mouseleave", function(){
		$("body").css("background-color", "#eee");
	})
	$("button").on("click", function(){
		$("#htmlp").fadeToggle("3000");
	})
	// $("button").on("mouseEnter", function(){
	// 	$("#htmlbtn").fadeTo(50%);
	// })
	// $("button").on("mouseEnter", function(){
	// 	$("#htmlbtn").fadeTo(opaque);
	// })
}); 

