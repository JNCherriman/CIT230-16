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
        if (cities[i].name == 'Placerton')
            i++;
        var myA = document.createElement('a');
        myA.setAttribute('href',cities[i].name.toLowerCase() + '.html')
        var mySection = document.createElement('section');
        mySection.setAttribute('class','bodyGenerated');
        var myH3 = document.createElement('h3');
        var mySpan1 = document.createElement('span');
        mySpan1.setAttribute('class','cityInfo');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var mySpan2 = document.createElement('span');
        mySpan2.setAttribute('class','imgWrapper');
        var myImg1 = document.createElement('img');

        myH3.textContent = cities[i].name;
        myPara1.textContent = 'Town Motto: ' + cities[i].motto;
        myPara2.textContent = 'Year Founded: ' + cities[i].yearFounded;
        myPara3.textContent = 'Population: ' + cities[i].currentPopulation.toLocaleString('en');
        myPara4.textContent = 'Annual Rainfall: ' + cities[i].averageRainfall + ' inches';
        myImg1.setAttribute('src','../../images/' + cities[i].name.toLowerCase() +'hmpg.jpg');
        myImg1.setAttribute('alt','Come vist' + cities[i].name);

        mySpan1.appendChild(myH3);
        mySpan1.appendChild(myPara1);
        mySpan1.appendChild(myPara2);
        mySpan1.appendChild(myPara3);
        mySpan1.appendChild(myPara4);
        mySpan2.appendChild(myImg1);

        mySection.appendChild(mySpan1);
        mySection.appendChild(mySpan2);

        myA.appendChild(mySection);

        output.appendChild(myA);
    }
}

//var towninfo = request.response;
// document.getElementById('townsummaries').innerHTML = output;
