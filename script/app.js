
//creating construction object and converting individual object literals to a blueprint object
function Shop(location, minCust, maxCust, avgCookie, timePeriod, salesPerHour) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.timePeriod = timePeriod;
    this.salesPerHour = salesPerHour;
    this.cookiesEachHour = this.getCookiesEachHour();
}

Shop.prototype.getCookiesEachHour = function () {
    for (var i = 0; i < 13; i++) {
        var range = this.maxCust - this.minCust;
        console.log(this.maxCust);
        var randNumWithinRange = Math.floor(Math.random() * range + this.minCust);
        var salesAnHour = randNumWithinRange * Math.ceil(this.avgCookie);
        this.salesPerHour.push(salesAnHour);
    }
}


var time = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm']

var seattleShop = new Shop('Seattle', 23, 65, 6.3, time, []);
var tokyoShop = new Shop('Tokyo', 3, 24, 1.2, time, []);
var dubaiShop = new Shop('Dubai', 11, 38, 3.7, time, []);
var parisShop = new Shop('Paris', 11, 38, 3.7, time, []);
var limaShop = new Shop('Lima', 2, 16, 4.6, time, []);

// function makeElements(shop) {
//     var container = document.getElementById(shop.location);
//     var h2Element = document.createElement('h2');
//     h2Element.textContent = shop.location;
//     container.appendChild(h2Element);
//     var ulElement = document.createElement('ul');
//     container.appendChild(ulElement);

//     //create li elemet and add time and no. of cookies
//     for (var i = 0; i < shop.timePeriod.length; i++) {
//         var liElement = document.createElement('li');
//         ulElement.appendChild(liElement);
//         shop.getCookiesEachHour();
//         liElement.textContent = shop.timePeriod[i] + ': ' + shop.salesPerHour[i] + ' cookies';

//     }

//     // adding total count of cookies
//     liElement.textContent = 'total: ' + (function () {
//         var total = 0;
//         for (var i = 0; i < 13; i++) {
//             // debugger;
//             total += shop.salesPerHour[i];
//         }
//         return total;
//     })() + ' cookies';
// }


// makeElements(seattleShop);
// makeElements(tokyoShop);
// makeElements(dubaiShop);
// makeElements(parisShop);
// makeElements(limaShop);

//create tables

var tableContainer = document.getElementById('tableContainer');
var tableElement = addElement('table', tableContainer);
var headerRowElement = addElement('tr', tableElement);
var locRowElement = addElement('tr', tableElement);
addElement('th', headerRowElement)

for (var i = 0; i < time.length; i++) {
    addElement('th', headerRowElement, time[i]);
}

addElement('th', headerRowElement, 'Daily Location Total');

//
function getCookiesList(shop) {
    var locationRowElement = addElement('tr', tableElement)
    addElement('th', locationRowElement, shop.location);
    for (var j = 0; j < time.length; j++) {
        addElement('td', locationRowElement, shop.salesPerHour[j]);
    }
    //create total cookies for each location
    var totalcookies = (function () {
        var total = 0;
        for (var i = 0; i < 13; i++) {
            // debugger;
            total += shop.salesPerHour[i];
        }
        return total;
    })();
    //add total cookies to each element
    addElement('td',locationRowElement, totalcookies);
    console.log('total',totalcookies)
}


getCookiesList(seattleShop);
getCookiesList(tokyoShop);
getCookiesList(dubaiShop);
getCookiesList(parisShop);
getCookiesList(limaShop);

//function to add element
function addElement(tag, container, text) {
    var element = document.createElement(tag);
    container.appendChild(element);
    element.textContent = text;
    return element;
}








//////////////////////////////////////////////////////

// creating individual object literals


    // var shop1 = {
    //     location: 'Seattle',
    //     minCust: 23,
    //     maxCust: 65,
    //     avgCookie: 6.3,
    //     timePeriod: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    //     salesPerHour: [],
    //     cookiesEachHour: function () {
    //         for (var i = 0; i < 13; i++) {
    //             var range = this.maxCust - this.minCust;
    //             var randNumWithinRange = Math.floor(Math.random() * range + this.minCust);
    //             var salesAnHour = randNumWithinRange * Math.ceil(this.avgCookie);
    //             this.salesPerHour.push(salesAnHour);
    //         }
    //     }
    // }


    // function makeElements(shop) {
    //     var container = document.getElementById(shop.location);
    //     var h2Element = document.createElement('h2');
    //     h2Element.textContent = shop.location;
    //     container.appendChild(h2Element);
    //     var ulElement = document.createElement('ul');
    //     container.appendChild(ulElement);

    //     //create li elemet and add time and no. of cookies
    //     for (var i = 0; i < shop.timePeriod.length; i++) {
    //         var liElement = document.createElement('li');
    //         ulElement.appendChild(liElement);
    //         shop.cookiesEachHour();
    //         liElement.textContent = shop.timePeriod[i] + ': ' + shop.salesPerHour[i] + ' cookies';

    //     }

    //     // adding total count of cookies
    //     liElement.textContent = 'total: ' + (function () {
    //         var total = 0;
    //         for (var i = 0; i < 13; i++) {
    //             // debugger;
    //             total += shop1.salesPerHour[i];
    //         }
    //         return total;
    //     })() + ' cookies';

    // }

    // ///////////////////////////////////////
    // // creating object 2
    // var shop2 = {
    //     location: 'Tokyo',
    //     minCust: 3,
    //     maxCust: 24,
    //     avgCookie: 1.2,
    //     timePeriod: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    //     salesPerHour: [],
    //     cookiesEachHour: function () {
    //         for (var i = 0; i < 13; i++) {
    //             var range = this.maxCust - this.minCust;
    //             var randNumWithinRange = Math.floor(Math.random() * range + this.minCust);
    //             var salesAnHour = randNumWithinRange * Math.ceil(this.avgCookie);
    //             this.salesPerHour.push(salesAnHour);
    //         }
    //     }
    // }

    // ////////////////////////////////
    // //creating object 3
    // var shop3 = {
    //     location: 'Dubai',
    //     minCust: 11,
    //     maxCust: 38,
    //     avgCookie: 3.7,
    //     timePeriod: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    //     salesPerHour: [],
    //     cookiesEachHour: function () {
    //         for (var i = 0; i < 13; i++) {
    //             var range = this.maxCust - this.minCust;
    //             var randNumWithinRange = Math.floor(Math.random() * range + this.minCust);
    //             var salesAnHour = randNumWithinRange * Math.ceil(this.avgCookie);
    //             this.salesPerHour.push(salesAnHour);
    //         }
    //     }
    // }

    // ///////////////////////////////////
    // //creating object 4

    // var shop4 = {
    //     location: 'Paris',
    //     minCust: 20,
    //     maxCust: 38,
    //     avgCookie: 2.3,
    //     timePeriod: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    //     salesPerHour: [],
    //     cookiesEachHour: function () {
    //         for (var i = 0; i < 13; i++) {
    //             var range = this.maxCust - this.minCust;
    //             var randNumWithinRange = Math.floor(Math.random() * range + this.minCust);
    //             var salesAnHour = randNumWithinRange * Math.ceil(this.avgCookie);
    //             this.salesPerHour.push(salesAnHour);
    //         }
    //     }
    // }

    // ///////////////////////////////////
    // //creating object 5

    // var shop5 = {
    //     location: 'Lima',
    //     minCust: 2,
    //     maxCust: 16,
    //     avgCookie: 4.6,
    //     timePeriod: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    //     salesPerHour: [],
    //     cookiesEachHour: function () {
    //         for (var i = 0; i < 13; i++) {
    //             var range = this.maxCust - this.minCust;
    //             var randNumWithinRange = Math.floor(Math.random() * range + this.minCust);
    //             var salesAnHour = randNumWithinRange * Math.ceil(this.avgCookie);
    //             this.salesPerHour.push(salesAnHour);
    //         }
    //     }
    // }

    // makeElements(shop1);
    // makeElements(shop2);
    // makeElements(shop3);
    // makeElements(shop4);
    // makeElements(shop5);




