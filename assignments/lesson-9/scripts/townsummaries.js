var output = document.querySelector('section');

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
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');

        myH2.textContent = cities[i].name;
        myPara1.textContent = 'Town Motto: ' + cities[i].motto;
        myPara2.textContent = 'Year Founded: ' + cities[i].yearFounded;
        myPara3.textContent = 'Population: ' + cities[i].currentPopulation;
        myPara4.textContent = 'Annual Rainfall: ' + cities[i].averageRainfall;

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);

        output.appendChild(mySection);
    }
}

var towninfo = request.response;
document.getElementById('townsummaries').innerHTML = output;
