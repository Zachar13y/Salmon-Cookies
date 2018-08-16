function goDown() {
    console.log('user clicked')
    document.getElementById("drop-box").classList.toggle('show');
}

function getRandomInt(min, max) {
    var mathMin = Math.ceil(min)
    var mathMax = Math.floor(max)
    return Math.floor(Math.random() * (mathMax - mathMin)) + mathMin;
}

function renderStores(id, store) {
    var storeList = document.getElementById(id);
    storeList.innerHTML += store.toHTML();
}

// function buildTable() {
//     var container = document.getElementById('table-container');
//     var table = document.createElement('table');
//     pioneer.header(table)

// }

// for (i=0; i < store.length; i++) {
//     var store = store[i];
//     store.buildTable();}

var storeHours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];


var pioneer = {
    location: 'Pioneer Square',
    minCustomers: 17,
    maxCustomers: 88,
    avgSale: 5.2,
    randomizeCustomers: function() {
        var randomCustomer = getRandomInt(this.minCustomers, this.maxCustomers);
        return randomCustomer;
    },
    calculateCookieSales: function() {
        var hourlyCookieSales = this.randomizeCustomers() * this.avgSale;
        return hourlyCookieSales;
    },
    toHTML: function() {
        return '<li>' + ' <b> Location: </b>' + this.location + '<li>' + ' <b> Min Customers: </b>' + this.minCustomers + '<li>' + '<b> Max Customers: </b>' + this.maxCustomers + '<li>' + '<b> Avg. Cookies/Customer: </b>' + this.avgSale + '</li>';
    },
    calculateHourlyCookies: function() {
        for (i = 0; i < storeHours.length; i++) {
            var cookiesPerHour = pioneer.calculateCookieSales();
            var content = '<li>' + storeHours[i] + ': ' + (Math.round(cookiesPerHour)) + ' cookies/hr' + '</li>';
            var hourList = document.getElementById("pioneer-cookies");
            hourList.innerHTML += content
            console.log(Math.round(cookiesPerHour) + ' cookies/hr');
        }
    }
}
renderStores('pioneer-info', pioneer);
pioneer.calculateHourlyCookies();
var pioneerRandoms = pioneer.randomizeCustomers();



var airport = {
    location: 'Portland Airport',
    minCustomers: 6,
    maxCustomers: 24,
    avgSale: 1.2,
    randomizeCustomers: function() {
        var randomCustomer = getRandomInt(this.minCustomers, this.maxCustomers);
        return randomCustomer;
    },
    // myFunction: function() {
    //     var str = 'Location';
    //     var result = str.bold();
        // document.getElementById("demo").innerHTML = result;
    // },
    toHTML: function() {
        return '<li>' + 'Location: ' + this.location + '<li>' + ' Min Customers: ' + this.minCustomers + '<li>' + ' Max Customers: ' + this.maxCustomers + '<li>' + ' Avg. Cookies/Customer: ' + this.avgSale + '</li>';
        // var str = 'Location';
        // var result = str.bold();
        // result;
    },
    calculateHourlyCookies: function() {
        for (i = 0; i < storeHours.length; i++) {
            var cookiesPerHour = pioneer.calculateCookieSales();
            var content = '<li>' + storeHours[i] + ': ' + (Math.round(cookiesPerHour)) + ' cookies/hr' + '</li>';
            var hourList = document.getElementById("airport-cookies");
            hourList.innerHTML += content
            console.log(Math.round(cookiesPerHour) + ' cookies/hr');
        }
    }
}
renderStores('airport-info', airport);
airport.calculateHourlyCookies();
var airportRandoms = airport.randomizeCustomers();



var washingtonSquare = {
    location: 'Washington Square',
    minCustomers: 11,
    maxCustomers: 38,
    avgSale: 1.9,
    randomizeCustomers: function() {
        var randomCustomer = getRandomInt(this.minCustomers, this.maxCustomers);
        return randomCustomer;
    },
    toHTML: function() {
        return '<li>' + 'Location: ' + this.location + '<li>' + ' Min Customers: ' + this.minCustomers + '<li>' + ' Max Customers: ' + this.maxCustomers + '<li>' + ' Avg. Cookies/Customer: ' + this.avgSale +'</li>';
    },
    calculateHourlyCookies: function() {
        for (i = 0; i < storeHours.length; i++) {
            var cookiesPerHour = pioneer.calculateCookieSales();
            var content = '<li>' + storeHours[i] + ': ' + (Math.round(cookiesPerHour)) + ' cookies/hr' + '</li>';
            var hourList = document.getElementById("washington-cookies");
            hourList.innerHTML += content
            console.log(Math.round(cookiesPerHour) + ' cookies/hr');
        }
    }
}
renderStores('washington-info', washingtonSquare);
washingtonSquare.calculateHourlyCookies();
var pioneerRandoms = washingtonSquare.randomizeCustomers();


var sellwood = {
    location: 'Sellwood',
    minCustomers: 20,
    maxCustomers: 48,
    avgSale: 3.3,
    randomizeCustomers: function() {
        var randomCustomer = getRandomInt(this.minCustomers, this.maxCustomers);
        return randomCustomer;
    },
    toHTML: function() {
        return '<li>' + 'Location: ' + this.location + ' Min Customers: ' + this.minCustomers + ' Max Customers: ' + this.maxCustomers + ' Avg. Cookies/Customer: ' + this.avgSale + '</li>';
    }
}


var pearlDistrict = {
    location: 'Pearl District',
    minCustomers: 3,
    maxCustomers: 24,
    avgSale: 2.6,
    randomizeCustomers: function() {
        var randomCustomer = getRandomInt(this.minCustomers, this.maxCustomers);
        return randomCustomer;
    },
    toHTML: function() {
        return '<li>' + 'Location: ' + this.location + 'Min Customers: ' + this.minCustomers + 'Max Customers: ' + this.maxCustomers + 'Avg. Cookies/Customer: ' + this.avgSale + '</li>';
    }
}


var stores = [
    pioneer,
    airport,
    washingtonSquare,
    sellwood,
    pearlDistrict
]


// var Person = function(PersonName) {
//     this.name = PersonName;
//     this.sayGreeting = function() {
//         alert("Hello biatch!");
//     }

//     this.addToTable = function(table) {
//         var row = document.createElement('tr');
//         var cell = document.createElement('td');
//         cell.innerText = this.name;
//         row.appendChild(cell);
//         cell = document.createElement('td');

//     }
// }