

var output = document.querySelector('#franklindata');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var jsondata = request.response;
    var cities = jsondata['towns'];

    for (var i = 0; i < cities.length; i++) {
        if (cities[i].name != 'Franklin')
            break;
        var myList = document.createElement('ul');
        myList.setAttribute('class','townDataList');
        var myLi1 = document.createElement('li');
        var myLi2 = document.createElement('li');
        var myLi3 = document.createElement('li');
        var myLi4 = document.createElement('li');
        var myLi5 = document.createElement('li');

        myLi1.textContent = 'Town Motto: ' + cities[i].motto;
        myLi2.textContent = 'Year Founded: ' + cities[i].yearFounded;
        myLi3.textContent = 'Population: ' + cities[i].currentPopulation;
        myLi4.textContent = 'Annual Rainfall: ' + cities[i].averageRainfall;
        myLi5.textContent = 'Annual Events: ';

        myList.appendChild(myLi1);
        myList.appendChild(myLi2);
        myList.appendChild(myLi3);
        myList.appendChild(myLi4);
        myList.appendChild(myLi5);

        var myEventsList = document.createElement('ul')
        var townEvents = cities[i].events;
        for (var j = 0; j < townEvents.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = townEvents[j];
            myEventsList.appendChild(listItem);}

        myList.appendChild(myEventsList);

        output.appendChild(myList);

    }
}

//var towninfo = request.response;
// document.getElementById('townsummaries').innerHTML = output;
