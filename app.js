"use strict";
var sourceObj;
var colours = [
"#ffcdd2",
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

var storeQuotes = function() {
	$.ajax({
		headers: {
			"X-Mashape-Key": "xKLRwcj89HmshVwnd2mKr2BPS2p3p1LYQiCjsnn7gBvwperwmw",
			Accept: "application/json",
			"Content-Type": "application/json"
		},
		url: 'https://eowino-quotes-v1.p.mashape.com/quotes.json',
		success: function(response) {
			sourceObj = response[getRandomNumberQuote(response.length)];
			$(".message").html("<p>" + sourceObj.quote + "<p>");
			$("#author").html("<span>" + sourceObj.author + "<span>");
			changeColour();	
		}
	});
};

var getRandomNumberQuote = function(size){
	return Math.floor(Math.random()*size);
};

var tweetQuote = function(){
	var href = "https://twitter.com/intent/tweet?hashtags=quotes&text=";
	var tweet = sourceObj.quote + " - " + sourceObj.author;
	href+=encodeURIComponent(tweet);
	return href;
};

var changeColour = function(){
	var index = getRandomNumberQuote(colours.length);
	$('body').css('background',colours[index]);
};

$(document).ready(function(){
	storeQuotes();
	$("#nextQuoteBtn").on('click', function(){
		storeQuotes();
	});
	$("#tweetQuote").on('click', function(){
		$(this).attr("href",tweetQuote());
	});
}); 