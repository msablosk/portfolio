//  Variables
// location
var $loc = $('#loc');
// temperature
var $temp = $('#temp');
// current conditions
var $cond = $('#cond');
// condtition description 
var $desc = $('#desc')

// latitude and longitude variables
var latitude;
var longitude;

// function for converting day number to weekday
function convertDate(intTime) {
  switch(intTime) {
    case 0:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
  }
}

// function for successful retrieval of geolocation coordinates
function success(position) {
	$loc.empty();
    latitude  = position.coords.latitude;
    longitude = position.coords.longitude;
    var url = 'https://api.openweathermap.org/data/2.5/forecast/daily?APPID=2481942b0446ca6e3b7e9552eff03880&lat=' + latitude + '&lon=' + longitude + '&cnt=4&units=metric&callback=?';
    addWeather(url);
}

// function for errors retrieving geolocation coordinates
function error() {
    $loc.append('<p>Unable to retrieve your location</p>');
  }

// on document load attempts to attrieve location
$("#myLocation").click(function(event) {
  $('.where').css('display', 'none');
  $('.moment').css('display', 'block');
	if ("geolocation" in navigator) {
	  navigator.geolocation.getCurrentPosition(success, error);
	} else {
	  $loc.text("There was an error retrieving your location");
	}
});

$("#go").click(function(event) {
  var $local = $('#uLocal').val();
  console.log($local);
  $('.where').css('display', 'none');
  $('.moment').css('display', 'block');
  var clickUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?APPID=2481942b0446ca6e3b7e9552eff03880&q=' + $local + '&cnt=4&units=metric&callback=?';
  addWeather(clickUrl);
});


// AJAX function to make call on OpenWeather API and load into DOM
function addWeather(url){
    
  $.getJSON (
    url,
    
    function(result){

      $('.moment').css('display', 'none');
      $('.today').css('display', 'block');
      $('.future').css('display', 'block');

      
      JSONWeather = result;
      // adds gps clarified location
      $loc.empty();
      $loc.text(JSONWeather.city.name + "," + JSONWeather.city.country);
      // adds temperatures display
      $temp.empty();
      $temp.text(JSONWeather.list[0].temp.day + "C / " + ((Math.round((JSONWeather.list[0].temp.day * 9)/5)+32)) + "F");
      // adds simple conditions description
      $cond.empty();
      $cond.text(JSONWeather.list[0].weather[0].main);
      $('#icon').attr('src', 'http://openweathermap.org/img/w/' + JSONWeather.list[0].weather[0].icon + '.png');

      // adds detailed weather conditions description and uses string methods to capitalize the first letter of the sentence
      var descriptionText = JSONWeather.list[0].weather[0].description;
      var firstLetterUppercase =  descriptionText.substring(0, 1).toUpperCase();
      descriptionText = firstLetterUppercase + descriptionText.substring(1);
      $desc.empty();
      $desc.text(descriptionText);

      // 3 day forecast block

        // Time object
        var dayOneDate = new Date(JSONWeather.list[1].dt* 1000);
        var dayTwoDate = new Date(JSONWeather.list[2].dt* 1000);
        var dayThreeDate = new Date(JSONWeather.list[3].dt* 1000);
        $('#dayOneHeader').text(convertDate(dayOneDate.getDay()));
        $('#dayTwoHeader').text(convertDate(dayTwoDate.getDay()));
        $('#dayThreeHeader').text(convertDate(dayThreeDate.getDay()));

        // temperatures
        $('#dayOneTemp').empty();
        $('#dayOneTemp').text(JSONWeather.list[1].temp.day + "C / " + (Math.round(((JSONWeather.list[1].temp.day * 9)/5)+32)) + "F");
        $('#dayOneCond').text(JSONWeather.list[1].weather[0].main);
        $('#iconOne').attr('src', 'http://openweathermap.org/img/w/' + JSONWeather.list[1].weather[0].icon + '.png');

        $('#dayTwoTemp').empty();
        $('#dayTwoTemp').text(JSONWeather.list[2].temp.day + "C / " + (Math.round(((JSONWeather.list[2].temp.day * 9)/5)+32)) + "F");
        $('#dayTwoCond').text(JSONWeather.list[2].weather[0].main);
        $('#iconTwo').attr('src', 'http://openweathermap.org/img/w/' + JSONWeather.list[2].weather[0].icon + '.png');

        $('#dayThreeTemp').empty();
        $('#dayThreeTemp').text(JSONWeather.list[3].temp.day + "C / " + (Math.round(((JSONWeather.list[3].temp.day * 9)/5)+32)) + "F");
        $('#dayThreeCond').text(JSONWeather.list[3].weather[0].main);
        $('#iconThree').attr('src', 'http://openweathermap.org/img/w/' + JSONWeather.list[3].weather[0].icon + '.png');

        // tomorrow mobile
        $('#tomorrowTemp').empty();
        $('#tomorrowTemp').text(JSONWeather.list[1].temp.day + "C / " + (Math.round(((JSONWeather.list[1].temp.day * 9)/5)+32)) + "F");
        $('#tomorrowCond').text(JSONWeather.list[1].weather[0].main);



    

    });


}