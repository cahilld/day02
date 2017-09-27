$(document).ready(function() {
    $("#stream1_btn").on("click", function(){
        $(".card").css("background-color", "white");
        $(".stream1").css("background-color", "red");
    })
    $("#stream2_btn").on("click", function(){
        $(".card").css("background-color", "white");
        $(".stream2").css("background-color", "red");
    })
    $("#stream3_btn").on("click", function(){
        $(".card").css("background-color", "white");
        $(".stream3").css("background-color", "red");
    })
    $(".card").on("click", function(){
        $("card").css("background-color", "pink");
        // $("this").children("p").css("background-color", "pink");
    })
    // $("p a").css("background-color", "yellow");
    $("p").on("click", function(){
        // if ($(this).children().css("background-color" == "white"));
        $(this).children("a").css("background-color", "yellow");
        // else ($("a").css("background-color", "white");
    })
})

//or create and toggle class attribute highlight using add remove

