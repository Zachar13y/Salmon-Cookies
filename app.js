function getRandomInt(min, max) {
    var mathMin = Math.ceil(min)
    var mathMax = Math.floor(max)
    return Math.floor(Math.random() * (mathMax - mathMin)) + mathMin;
}

function renderStores() {
    var storeList = document.getElementById("salmon-table");
    for (var index = 0; index < stores.length; index++) {
        var store = stores[index];
        storeList.innerHTML += store.toHTML();
    }
}
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
        return '<li>' + 'Location: ' + this.location + '<li>' + ' Min Customers: ' + this.minCustomers + '<li>' + ' Max Customers: ' + this.maxCustomers + '<li>' + ' Avg. Cookies/Customer: ' + this.avgSale + '</li><hr>';
    },
    calculateHourlyCookies: function() {
        for (i = 0; i < storeHours.length; i++) {
            var cookiesPerHour = pioneer.calculateCookieSales();
            var content = '<li>' + storeHours[i] + ': ' + (Math.round(cookiesPerHour)) + ' cookies/hr' + '</li>';
            var hourList = document.getElementById("cookies-hr");
            hourList.innerHTML += content
            console.log(Math.round(cookiesPerHour) + ' cookies/hr');
        }
    }
}
    pioneer.calculateHourlyCookies();
    console.log(pioneer.calculateCookieSales());
var pioneerRandoms = pioneer.randomizeCustomers();
console.log('Pioneer random customers: ' + pioneerRandoms);


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



renderStores();