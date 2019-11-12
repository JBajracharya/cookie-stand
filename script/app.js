//creating object 1

var shop1 = {
    location: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    timePeriod: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    salesPerHour: [],
    cookiesEachHour: function () {
        for (var i = 0; i < 13; i++) {
            var range = this.maxCust - this.minCust;
            var randNumWithinRange = Math.floor(Math.random() * range + this.minCust);
            var salesAnHour = randNumWithinRange * Math.ceil(this.avgCookie);
            this.salesPerHour.push(salesAnHour);
        }
    }
}
var container = document.getElementById('shop1');

var h2Element = document.createElement('h2');
h2Element.textContent = 'Seattle';
container.appendChild(h2Element);

var ulElement = document.createElement('ul');
container.appendChild(ulElement);

//create li elemet and add time and no. of cookies
for (var i = 0; i < shop1.timePeriod.length; i++) {
    var liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    shop1.cookiesEachHour();
    liElement.textContent = shop1.timePeriod[i] + ': ' + shop1.salesPerHour[i] + ' cookies';

}

// adding total count of cookies
liElement.textContent = 'total: ' + (function () {
    var total = 0;
    for (var i = 0; i < 13; i++) {
        // debugger;
        total += shop1.salesPerHour[i];
    }
    return total;
})() + ' cookies';

///////////////////////////////////////
// creating object 2
var shop2 = {
    name: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    timePeriod: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    salesPerHour: [],
    cookiesEachHour: function () {
        for (var i = 0; i < 13; i++) {
            var range = this.maxCust - this.minCust;
            var randNumWithinRange = Math.floor(Math.random() * range + this.minCust);
            var salesAnHour = randNumWithinRange * Math.ceil(this.avgCookie);
            this.salesPerHour.push(salesAnHour);
        }
    }
}
var container = document.getElementById('shop2');

var h2Element = document.createElement('h2');
h2Element.textContent = 'Tokyo';
container.appendChild(h2Element);

var ulElement = document.createElement('ul');
container.appendChild(ulElement);

//create li elemet and add time and no. of cookies
for (var i = 0; i < shop2.timePeriod.length; i++) {
    var liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    shop2.cookiesEachHour();
    liElement.textContent = shop2.timePeriod[i] + ': ' + shop2.salesPerHour[i] + ' cookies';

}

// adding total count of cookies
liElement.textContent = 'total: ' + (function () {
    var total = 0;
    for (var i = 0; i < 13; i++) {
        total += shop2.salesPerHour[i];
    }
    return total;
})() + ' cookies';

var tokyo = {
    name: 'Salmon Cookie',
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    salesPerHour: [],
    cookiesEachHour: function () {
        for (var i = 0; i < 13; i++) {
            var range = this.maxCust - this.minCust;
            var randNumWithinRange = Math.floor(Math.random() * range + this.minCust);
            var salesAnHour = randNumWithinRange * Math.ceil(this.avgCookie) +
                this.salesPerHour.push(salesAnHour);
        }
    }
}

////////////////////////////////
//creating object 3
var shop3 = {
    location: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    timePeriod: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    salesPerHour: [],
    cookiesEachHour: function () {
        for (var i = 0; i < 13; i++) {
            var range = this.maxCust - this.minCust;
            var randNumWithinRange = Math.floor(Math.random() * range + this.minCust);
            var salesAnHour = randNumWithinRange * Math.ceil(this.avgCookie);
            this.salesPerHour.push(salesAnHour);
        }
    }
}
var container = document.getElementById('shop3');

var h2Element = document.createElement('h2');
h2Element.textContent = shop3.location;
container.appendChild(h2Element);

var ulElement = document.createElement('ul');
container.appendChild(ulElement);

//create li elemet and add time and no. of cookies
for (var i = 0; i < shop3.timePeriod.length; i++) {
    var liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    shop3.cookiesEachHour();
    liElement.textContent = shop3.timePeriod[i] + ': ' + shop3.salesPerHour[i] + 'cookies';

}

// adding total count of cookies
liElement.textContent = 'total: ' + (function () {
    var total = 0;
    for (var i = 0; i < 13; i++) {
        // debugger;
        total += shop3.salesPerHour[i];
    }
    return total;
})() + ' cookies';

///////////////////////////////////
//creating object 4

var shop4 = {
    location: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
    timePeriod: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    salesPerHour: [],
    cookiesEachHour: function () {
        for (var i = 0; i < 13; i++) {
            var range = this.maxCust - this.minCust;
            var randNumWithinRange = Math.floor(Math.random() * range + this.minCust);
            var salesAnHour = randNumWithinRange * Math.ceil(this.avgCookie);
            this.salesPerHour.push(salesAnHour);
        }
    }
}
var container = document.getElementById('shop4');

var h2Element = document.createElement('h2');
h2Element.textContent = shop4.location;
container.appendChild(h2Element);

var ulElement = document.createElement('ul');
container.appendChild(ulElement);

//create li elemet and add time and no. of cookies
for (var i = 0; i < shop4.timePeriod.length; i++) {
    var liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    shop4.cookiesEachHour();
    liElement.textContent = shop4.timePeriod[i] + ': ' + shop4.salesPerHour[i] + 'cookies';

}

// adding total count of cookies
liElement.textContent = 'total: ' + (function () {
    var total = 0;
    for (var i = 0; i < 13; i++) {
        total += shop4.salesPerHour[i];
    }
    return total;
})() + ' cookies';

///////////////////////////////////
//creating object 5

var shop5 = {
    location: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    timePeriod: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    salesPerHour: [],
    cookiesEachHour: function () {
        for (var i = 0; i < 13; i++) {
            var range = this.maxCust - this.minCust;
            var randNumWithinRange = Math.floor(Math.random() * range + this.minCust);
            var salesAnHour = randNumWithinRange * Math.ceil(this.avgCookie);
            this.salesPerHour.push(salesAnHour);
        }
    }
}
var container = document.getElementById('shop1');

var h2Element = document.createElement('h2');
h2Element.textContent = shop5.location;
container.appendChild(h2Element);

var ulElement = document.createElement('ul');
container.appendChild(ulElement);

//create li elemet and add time and no. of cookies
for (var i = 0; i < shop5.timePeriod.length; i++) {
    var liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    shop5.cookiesEachHour();
    liElement.textContent = shop5.timePeriod[i] + ': ' + shop5.salesPerHour[i] + 'cookies';

}

// adding total count of cookies
liElement.textContent = 'total: ' + (function () {
    var total = 0;
    for (var i = 0; i < 13; i++) {
        // debugger;
        total += shop5.salesPerHour[i];
    }
    return total;
})() + ' cookies';



