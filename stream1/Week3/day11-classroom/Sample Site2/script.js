$(document).ready(function() {
 $("button").on("mouseenter", function(){
    $("button").removeClass("makered").addClass("makeborder");
  })
    $("button").on("mouseleave", function(){
    $("button").addClass("makered").removeClass("makeborder");
  })
 $("button").on("click", function(){
  $("para1"),slideToggle("1000");
 })

}); 
