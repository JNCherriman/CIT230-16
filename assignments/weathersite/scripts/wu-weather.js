let url = document.location.href.split('/');
// get the last portion of the href
let page = url[url.length-1];
console.log(page);

if(page == 'franklin.html')
    var requestURL = 'https://api.wunderground.com/api/62c9f84e4efe3237/conditions/q/MN/Franklin.json';
else if (page == 'greenville.html')
    var requestURL = 'https://api.wunderground.com/api/62c9f84e4efe3237/conditions/q/MI/Greenville.json';
else if(page == 'springfield.html')
    var requestURL = 'https://api.wunderground.com/api/62c9f84e4efe3237/conditions/q/IL/Springfield.json';

var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', requestURL, true);
weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('feelsLike').innerHTML = weatherInfo.current_observation.feelslike_f;
    document.getElementById('weather').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url.replace("http", "https");
    document.getElementById('precipAmt').innerHTML = weatherInfo.current_observation.precip_today_string;
    document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('windDir').innerHTML = weatherInfo.current_observation.wind_dir;
    document.getElementById('windchill').innerHTML = weatherInfo.current_observation.windchill_f;
}
