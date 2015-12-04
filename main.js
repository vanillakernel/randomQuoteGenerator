//Let's make a JSON array of id:quote, then just grab the right quote
//by Id and return it. We can do that all here.



function getQuote(){
var quotes=[
{"id": "1", "text":"When work feels overwhelming, remember that you're going to die."},
{"id": "2", "text":"If the world didn't suck we'd all fly into space."},
{"id": "3", "text":"Trying is the first step towards failure."},
{"id": "4", "text":"Eagles may soar, but weasels aren't sucked into jet engines."},
{"id": "5", "text":"If you disappeared while you were hiking, I'd stay with the search team until it started raining."},
{"id": "6", "text":"When life gives you lemons, 5 foot step and full attack for 1d4 damage."},
{"id": "7", "text":"Just because you're necessary doesn't mean you're important."},
{"id": "8", "text":"Success consists of going from failure to failure without loss of enthusiasm."},
{"id": "9", "text":" However beautiful the strategy, you should occasionally look at the results."},
{"id": "10", "text":"I am prepared to meet my Maker. Whether my Maker is prepared for the great ordeal of meeting me is another matter."},
];

// Now that the quote variable is created, let's make a function that will 
// 1: Generate a number between one and 10 at random
// 2: Use that to grab a quote by ID
// 3: Return the value for the 'text' key.

var length = quotes.length;
var quoteID = Math.floor(Math.random() * 10) + 1 

for (var i=0 ; i<length ; i++) {
  if (quotes[i].id == quoteID) {
  //alert(quotes[i].text); //if you want to be super annoying;
   document.getElementById("quoteDiv").innerHTML= quotes[i].text;
   break;			        }
}

return (true);
}

function postQuote(){
var content = document.getElementById("quoteDiv").innerHTML;
content = encodeURIComponent(content);
var url = "https://twitter.com/intent/tweet?text=" + content;
return (url);

}
