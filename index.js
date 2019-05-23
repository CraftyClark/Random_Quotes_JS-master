const newQuote = document.querySelector("#new-quote");
const quote = document.querySelector("#text");
const author = document.querySelector("#author");
const twitter = document.querySelector("#tweet-quote");

let quoteObject;

//add quote when page loads
// window.onload = getQuote;
$(document).ready(function(){
  let textAndAuthor;
  //change quote when button is clicked
  getQuote();
  //getQuote();
  //newQuote.addEventListener("click", getQuote);
  $("#new-quote").click(function(){
    getQuote();
  });

});  

function getQuote(){
  $.ajax({url: "https://quota.glitch.me/random", success: function(result){
      $("#text").text(result["quoteText"]);
      $("#author").text(result["quoteAuthor"]);
      //`${result.quoteText} -${result.quoteAuthor}`
      //encodeURIComponent(
      textAndAuthor = "https://twitter.com/intent/tweet?text=" + `${result.quoteText} -${result.quoteAuthor}`;
      $("#tweet_quote").attr("href", textAndAuthor);
      // $("#tweet-quote").html(function() {
      //     let textAndAuthor = $(result["quoteText"]) + " - " + $(result["quoteAuthor"]);
      //     return "<a href= https://twitter.com/intent/tweet?text=" + textAndAuthor + "<i class='fab fa-twitter fa-3x'></i></a>";
      // })
      // $("#tweet_quote").html("<a href= https://twitter.com/intent/tweet?text=  $("#text") - $("#author") </a>")
    }});
}
  
  // function getQuote(){
  //   //fetch the data
  //     fetch('https://quota.glitch.me/random')
  //     .then(res => res.json())//response type
  //     .then(data => {
  //       quoteObject = data;   // assign data to quoteObject
  //       //display quote
  //       quote.textContent = quoteObject["quoteText"];
  //       //display author
  //       author.innerHTML = `...<i class='fas fa-pencil-alt'></i> ${quoteObject['quoteAuthor']}`;
  //       //share the quote on twitter  
  //       twitter.setAttribute("href", `https://twitter.com/intent/tweet?text= ${quoteObject['quoteText']} - ${quoteObject['quoteAuthor']}`); 
  //     }); 
  // }

  // data contains an object like the one below
      /*{quoteText: "As we express our gratitude, we must never forget …ation is not to utter words, but to live by them.", 
        quoteAuthor: "John F. Kennedy"}*/
