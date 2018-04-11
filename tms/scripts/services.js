var output = document.querySelector('#servicesoffered');

var requestURL = '../data/servicedata.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var jsondata = request.response;
    var services = jsondata['services'];

    var myTHead = document.createElement('thead');
    var myTHeadTR = document.createElement('tr');
    var myTHeadTH = document.createElement('th');
    myTHeadTH.setAttribute('colspan','3');
    myTHeadTH.textContent = 'Featured Services';

    myTHeadTR.appendChild(myTHeadTH);
    myTHead.appendChild(myTHeadTR);

    var myTbody = document.createElement('tbody');

    var myHR = document.createElement('tr');
    var myHRTH1 = document.createElement('th');
    myHRTH1.textContent = 'Name';
    var myHRTH2 = document.createElement('th');
    myHRTH2.textContent = 'Price';
    var myHRTH3 = document.createElement('th');
    myHRTH3.textContent = 'Description';

    myHR.appendChild(myHRTH1);
    myHR.appendChild(myHRTH2);
    myHR.appendChild(myHRTH3);
    myTbody.appendChild(myHR);

    for (var i = 0; i < services.length; i++) {
        var myTR = document.createElement('tr');
        var myTH1 = document.createElement('th');
        var myTH2 = document.createElement('th');
        var myTH3 = document.createElement('th');

        myTH1.textContent = services[i].name;
        myTH2.textContent = '$' + services[i].price;
        myTH3.textContent = services[i].description;

        myTR.appendChild(myTH1);
        myTR.appendChild(myTH2);
        myTR.appendChild(myTH3);

        myTbody.appendChild(myTR);
    }

    output.appendChild(myTHead);
    output.appendChild(myTbody);

}
