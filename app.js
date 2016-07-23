var jsonSource = "quotes.json";
var sourceObj;
var colours = ["#ffcdd2",
		"#f8bbd0",
		"#e1bee7",
		"#ede7f6",
		"#e8eaf6",
		"#bbdefb",
		"#8c9eff",
		"#82b1ff",
		"#b2dfdb",
		"#80cbc4",
		"#64ffda",
		"#1de9b6",
		"#e6ee9c",
		"#81c784",
		"#ff5722",
		"#6d4c41",
		"#ff6f00",
		"#00e676",
		"#00e5ff",
		"#004d40",
		"#ad1457",
		"#ff8a80",
		"#ff1744",
		"#7986cb",
		"#0277bd"
];

$(document).ready(function(){
	getQuote(jsonSource);
	$("#nextQuoteBtn").on('click', function(){
		getQuote(jsonSource);
	});
	$("#tweetQuote").on('click', function(){
		$(this).attr("href",tweetQuote());
	});
}); 


var getRandomNumberQuote = function(size){
	return Math.floor(Math.random()*size);
};

var getQuote = function(source) {
	$.getJSON(source, function(json) {
			var quoteObj = "";  
			var authorObj = "";
			json = json[getRandomNumberQuote(json.length)];
			sourceObj = json;

			quoteObj += "<p>" + json.quote + "<p>";
			authorObj += "<span>" + "- " + json.author + "<span>";
			$(".message").html(quoteObj);
			$("#author").html(authorObj);
      });
	changeColour();
};

var tweetQuote = function(){
	var href = "https://twitter.com/intent/tweet?hashtags=quotes&text=";
	var tweet = sourceObj.quote + " - " + sourceObj.author;
	href+=encodeURIComponent(tweet);
	return href;
};

var changeColour = function(){
	index = getRandomNumberQuote(colours.length);
	$('body').css('background',colours[index]);
};