let answer;
let streakCount = 0;
let input;
let highscore = 0;

//add quote when page loads
$(document).ready(function(){
  getQuote();

  $("#new-guess").click(submitFunction);

});  

function getQuote(){
  $('#streak-count').html("Streak: " + streakCount);
  $.ajax({url: "https://serve-lol-quotes-andrewclark.glitch.me/random", success: function(result){
      $("#text").text(`"` + result["quoteText"] + `"`);
      answer = result["quoteAuthor"];
      console.log(answer);
    }});
}

function submitFunction(event){
  event.preventDefault();
  input = $("#exampleFormControlSelect1").val();
  answer = answer.replace(/\s/g,'').toLowerCase();
  input = input.toLowerCase();
  console.log("input: " + input + " answer: " + answer);

  //if guess is correct
  if(input == answer) {
    console.log("input equals answer");
    streakCount++;
    $('#streak-count').html("Streak: "+ streakCount);
    console.log(streakCount);
    getQuote();
  }
  else{
    console.log("guess was wrong");
    if(streakCount>highscore){
      highscore = streakCount;
      $('#highscore-count').html("High Score: "+ highscore);
    }
    streakCount = 0;
    getQuote();
  }
}