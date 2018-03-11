var output = document.querySelector('#townsummaries');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var jsondata = request.response;
    var cities = jsondata['towns'];

    for (var i = 0; i < cities.length; i++) {
        var mySection = document.createElement('section');
        mySection.setAttribute('class','bodyStandard');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');

        myH3.textContent = cities[i].name;
        myPara1.textContent = 'Town Motto: ' + cities[i].motto;
        myPara2.textContent = 'Year Founded: ' + cities[i].yearFounded;
        myPara3.textContent = 'Population: ' + cities[i].currentPopulation;
        myPara4.textContent = 'Annual Rainfall: ' + cities[i].averageRainfall;

        mySection.appendChild(myH3);
        mySection.appendChild(myPara1);
        mySection.appendChild(myPara2);
        mySection.appendChild(myPara3);
        mySection.appendChild(myPara4);

        output.appendChild(mySection);
    }
}

//var towninfo = request.response;
// document.getElementById('townsummaries').innerHTML = output;
