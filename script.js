$(document).ready(function(){
   $("button").click(function(){
       var word = "hsfirox";
       var input = $("#secret").val();
       if(input === word){
            $("#result").html("Correct!");
            $("#result").css("color","blue");
       }
       else{
            $("#result").html("Incorrect! Please try again.");
            $("#result").css("color","purple");
       }
   });
});