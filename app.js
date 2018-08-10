function getRandomInt(min, max) {
    var mathMin = Math.ceil(min)
    var mathMax = Math.floor(max)
    return Math.floor(Math.random() * (mathMax - mathMin)) + mathMin;
}

var storeHours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

function salesPerHour() {
    
}
// var calcAvgCookies = [2.1, 6.1]
        // var maxCookies = 6.1,
        // var getAvgCookies = arr => arr.reduce((minCookies, maxCookies) => minCookies + maxCookies, 0) /arr.length;
        // var randomAvgCookies = getRandomInt(this.minAvgCookies, this.maxAvgCookies);


    

/////////////Store/////////////////////
var pioneer = {
    location: 'Pioneer Square',
    minCustomers: 17,
    maxCustomers: 88,
    avgSale: 5.2,
    randomizeCustomers: function() {
        var randomCustomer = getRandomInt(this.minCustomers, this.maxCustomers);
        return randomCustomer;
    },
    toHTML: function() {
        return '<li>' + 'Location: ' + this.location + '<li>' + ' Min Customers: ' + this.minCustomers + '<li>' + ' Max Customers: ' + this.maxCustomers + '<li>' + ' Avg. Cookies/Customer: ' + this.avgSale + '</li><hr>';
    }
}
var pioneerRandoms = pioneer.randomizeCustomers();
console.log('Pioneer random customers: ' + pioneerRandoms);
// console.log(pioneer);



/////////////Store/////////////////////
var airport = {
    location: 'Portland Airport',
    minCustomers: 6,
    maxCustomers: 24,
    avgSale: 1.2,
    randomizeCustomers: function() {
        var randomCustomer = getRandomInt(this.minCustomers, this.maxCustomers);
        return randomCustomer;
    },
    toHTML: function() {
        return '<li>' + 'Location: ' + this.location + '<li>' + ' Min Customers: ' + this.minCustomers + '<li>' + ' Max Customers: ' + this.maxCustomers + '<li>' + ' Avg. Cookies/Customer: ' + this.avgSale + '</li><hr>';
    }
}
var airportRandoms = airport.randomizeCustomers();
// console.log('Airport random customers' + airportRandoms);
// console.log(airport);



/////////////Store/////////////////////
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
        return '<li>' + 'Location: ' + this.location + ' Min Customers: ' + this.minCustomers + ' Max Customers: ' + this.maxCustomers + ' Avg. Cookies/Customer: ' + this.avgSale +'</li>';
    }
}
// console.log(washingtonSquare);



/////////////Store/////////////////////
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
// console.log(sellwood);

/////////////Store/////////////////////
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
// console.log(pearlDistrict);


var stores = [
    pioneer,
    airport,
    washingtonSquare,
    sellwood,
    pearlDistrict
]

function renderStores() {
    var storeList = document.getElementById("salmon-table");
    for (var index = 0; index < stores.length; index++) {
        var store = stores[index];
        // console.log('store at index ' + index, store);
        storeList.innerHTML += store.toHTML();
    }
}

renderStores();