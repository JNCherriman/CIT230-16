// var output = document.querySelector('#townsummaries');

var requestURL = 'https://api.wunderground.com/api/62c9f84e4efe3237/conditions/q/MN/Franklin.json';

var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', requestURL, true);
// weatherObject.responseType = 'json';
weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('feelsLike').innerHTML = weatherInfo.current_observation.feelslike_f;
    document.getElementById('weather').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url.replace("http", "https");
    document.getElementById('precipAmt').innerHTML = weatherInfo.current_observation.precip_today_string;
    document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('windDir').innerHTML = weatherInfo.current_observation.wind_dir;
    document.getElementById('windchill').innerHTML = weatherInfo.current_observation.windchill_f;
}
