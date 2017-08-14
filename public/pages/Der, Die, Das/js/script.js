// functions for setting and getting and reading cookies

// sets cookies
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

// gets cookies
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

var cookieIndex = 0;
function cookieIndexFinder() {
	if(getCookie('index')){
		return getCookie('index');
	} else {
		return cookieIndex;
	}
}
var cookieIndex = cookieIndexFinder();

var cookieStatus = true;

// 
function checkCookie(value) {
    var newCookie = getCookie(value);
    if (newCookie != "") {
        return newCookie;
    } else {
    	cookieStatus = false;
    }
}


// Overlay explaing the game, disappears when clicked
var $overlay = $('<div id="overlay"></div>');
var $overText = $('<p><span class="der">Der!</span> <span class="die">Die!</span> <span class="das">Das!</span><br>Is a fun way to practice the German articles. You can now even add new words and save them thanks to the magic of cookies!<br>Click anywhere to begin!</p>');
$overlay.append($overText);
$('body').append($overlay);

// Click handler to hide the overlay
$overlay.click(function() {
	$overlay.hide();
});

// Object prototype for Der, Die, Das words
function dddWord(word, correct){
	this.word = word;
	this.correct = correct;
}

// Array to hold the word objects
var wordArray = [];


// Function to load new words in the word array
var wordLoader = function (word, article) {
	wordArray.push(word = new dddWord(word, article));
};

var cookieLoader = function() {
	if (cookieIndex > 0) {
		for (var i = 0; i < cookieIndex; i++) {
			wordLoader(checkCookie('cookieWord' + i), checkCookie('cookieArticle' + i));
		}
	
	} 
};

cookieLoader();

// Practice words to test functionality of game

wordLoader('Mann', 'der');
wordLoader('Welt', 'die');
wordLoader('Zimmer', 'das');
wordLoader('Auto', 'das');
wordLoader('Bahn', 'die');
wordLoader('Stadt', 'die');
wordLoader('Wohnung', 'die');
wordLoader('Garten', 'der');
wordLoader('Park', 'die');
wordLoader('Wald', 'der');
wordLoader('Frau', 'die');
wordLoader('Tasse','die');
wordLoader('Glas', 'das');
wordLoader('Tabu','das');
wordLoader('Reise','die');
wordLoader('Mittel','das');
wordLoader('Haus','das');
wordLoader('Ausland','das');
wordLoader('Tier','das');
wordLoader('Wort','das');
wordLoader('Kommunikation','die');
wordLoader('Flug', 'der');
wordLoader('Zug', 'der');
wordLoader('Essen', 'das');
wordLoader('Strafe', 'die');


// The currently loaded word object
var currentWord;

// Right and wrong counters and streak counter
var right = 0;
var wrong = 0;
var streak = 0;


// Click handler for give me another 
$('#another').click(function(event) {
		// clear previous word
	$('.word').empty();
		// prevents default browser action
	event.preventDefault();
	$('.word').css('background', 'white');
		// chooses random word
	var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
		// ensures words arent randomly repeated
	while (randomWord === currentWord) {
		randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
	}
	// sets random word as the 'current' word
	currentWord = randomWord;
		// appends the word to the game box
	$('.word').append('<p>' + randomWord.word + '</p>');
});

// click handlers for der, die, and das buttons
	// der
$('#der').click(function(event) {
		//prevent default click action
	event.preventDefault();
		// checks if der is the correct article
	if(currentWord.correct === 'der') {
			// if correct clears the word adds "richtig" and green background
			// and adds a 'right' point, clears the 'right' counter and adds the new counter
			// also adds a point to the streak meter and appends the new counter
		$('.word').empty();
		$('.word').append('<p>Richtig!</p>');
		$('.word').css('background', 'lightgreen');
		right++;
		streak++;
		$('#right').empty();
		$('#right').append('<p>Richtig: ' + right + '</p>');
		$('#streak').empty();
		$('#streak').append('<p>Streak: ' + streak + '</p>');
	}
		// action if der is not the correct article
	 else { 
	 		// if wrong clears the word adds "falsch" and red background
	 		// and adds a 'wrong' point, clears the 'wrong' counter and adds the new counter
	 		// resets streak meter to zero when a answer is wrong
		$('.word').empty();
		$('.word').append('<p>Falsch!</p>');
		$('.word').css('background', 'crimson');
		wrong++;
		streak = 0;
		$('#wrong').empty();
		$('#wrong').append('<p>Falsch: ' + wrong + '</p>');
		$('#streak').empty();
		$('#streak').append('<p>Streak: ' + streak + '</p>');
	}
});
	//die
	// functionality is the same as 'der'
$('#die').click(function(event) {
	event.preventDefault();
	if(currentWord.correct === 'die') {
		$('.word').empty();
		$('.word').append('<p>Richtig!</p>');
		$('.word').css('background', 'lightgreen');
		right++;
		streak++;
		$('#right').empty();
		$('#right').append('<p>Richtig: ' + right + '</p>');
		$('#streak').empty();
		$('#streak').append('<p>Streak: ' + streak + '</p>');
	} else {
		$('.word').empty();
		$('.word').append('<p>Falsch!</p>');
		$('.word').css('background', 'crimson');
		wrong++;
		streak = 0;
		$('#wrong').empty();
		$('#wrong').append('<p>Falsch: ' + wrong + '</p>');
		$('#streak').empty();
		$('#streak').append('<p>Streak: ' + streak + '</p>');
	}
});
	//das
	// functionality is the same as 'der' and 'die'
$('#das').click(function(event) {
	event.preventDefault();
	if(currentWord.correct === 'das') {
		$('.word').empty();
		$('.word').append('<p>Richtig!</p>');
		$('.word').css('background', 'lightgreen');
		right++;
		streak++;
		$('#right').empty();
		$('#right').append('<p>Richtig: ' + right + '</p>');
		$('#streak').empty();
		$('#streak').append('<p>Streak: ' + streak + '</p>');
	} else {
		$('.word').empty();
		$('.word').append('<p>Falsch!</p>');
		$('.word').css('background', 'crimson');
		wrong++;
		streak = 0;
		$('#wrong').empty();
		$('#wrong').append('<p>Falsch: ' + wrong + '</p>');
		$('#streak').empty();
		$('#streak').append('<p>Streak: ' + streak + '</p>');
	}
});


// toggle the add a word panel
$('#addButtonToggle').click(function(event) {
	event.preventDefault();

	// creates the add a new word overlay
	var $overlayAdd = $(
		'<div id="overlayAdd">' +
			'<p>Artikel</p>' +
			'<select id="newArtikel">' +
			'<option value ="der">Der</option>' +
			'<option value ="die">Die</option>' +
			'<option value ="das">Das</option>' +
			'</select>'+
			'<p>Word</p>' +
			'<input type="text" id="newWort"><br>' +
			'<button id="addWort">Add Word</button><br>' +
			'<button id="closeButton">Close</button></div>');
	$('body').append($overlayAdd);

	//click handler for the add word button
	$('#addWort').click(function() {
		// clears previous message
		$('.word').empty();
		// gets the values of the form elements
		$newArtikel = $('#newArtikel').val();
		$newWort = $('#newWort').val();
		wordLoader($newWort, $newArtikel);

		// sends message that the word was added
		$('.word').append('<p>Word Added!</p>');
		// sets cookies to store new word 
		setCookie("cookieArticle" + cookieIndex, $newArtikel, 10000);
		setCookie("cookieWord" + cookieIndex, $newWort, 10000);
		// updates the cookie index
		cookieIndex++;
		setCookie("index", cookieIndex, 10000);
		// removes the add overlay
		$overlayAdd.remove();
	});

	// closes the add word overlay
	$('#closeButton').click(function() {
		$overlayAdd.remove();
	});
});



