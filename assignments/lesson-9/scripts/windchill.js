function windChill(avgTemp, windSpeed) {
    return parseInt(35.74 + (0.6215 * avgTemp) - (35.75 * Math.pow(windSpeed, 0.16)) + 0.4275 * (avgTemp * Math.pow(windSpeed, 0.16)));
}

var h = parseFloat(document.getElementById("dayHigh").innerHTML);
var l = parseFloat(document.getElementById("dayLow").innerHTML);
var t = (h + l) / 2;
var s = parseFloat(document.getElementById("windSpeed").innerHTML);
var wc = windChill(t, s);
document.getElementById('windchill').innerHTML = wc;

