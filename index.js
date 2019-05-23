//add quote when page loads
$(document).ready(function(){
  getQuote();
  //change quote when button is clicked
  $("#new-quote").click(function(){
    getQuote();
  });
});  

function getQuote(){
  $.ajax({url: "https://serve-lol-quotes-andrewclark.glitch.me/random", success: function(result){
      $("#text").text(result["quoteText"]);
      $("#author").text(result["quoteAuthor"]);
      $("#tweet-quote").html(`<a href= "https://twitter.com/intent/tweet?text=` + `${result.quoteText} -${result.quoteAuthor}"target="_blank">` + "<i class='fab fa-twitter fa-3x'></i></a>");
    }});
}

  // data contains an object like the one below
      /*{quoteText: "As we express our gratitude, we must never forget …ation is not to utter words, but to live by them.", 
        quoteAuthor: "John F. Kennedy"}*/
