let answer;
let streakCount = 0;
let input;


//add quote when page loads
$(document).ready(function(){
  getQuote();

  $("#new-guess").click(function(){
    submitFunction();
  });

  
});  

function getQuote(){
  $('#streak-count').html(streakCount);
  $.ajax({url: "https://serve-lol-quotes-andrewclark.glitch.me/random", success: function(result){
      $("#text").text(`"` + result["quoteText"] + `"`);
      answer = result["quoteAuthor"];
      console.log(answer);
    }});
}

function submitFunction(){
  input = $("#exampleFormControlSelect1").val();
  console.log("input: " + input + " answer: " + answer);
  sleep(10000);

  //if guess is correct
  if(input == answer) {
    console.log("input equals answer");
    streakCount++;
    $('#streak-count').html(streakCount);
    console.log(streakCount);
    sleep(10000);
  }
  else{
    console.log("guess was wrong");
    streakCount = 0;
    sleep(10000);
    getQuote();
  }
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}