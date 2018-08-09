function getRandomInt(min, max) {
    console.log('Get Random int min: ' + min);
    var mathMin = Math.ceil(min)
    var mathMax = Math.floor(max)
    return Math.floor(Math.random() * (mathMax - mathMin)) + mathMin;
}

var pioneer = {
    location: 'Pioneer Square',
    minCustomers: 17,
    maxCustomers: 88,
    avgSale: 5.2,
    randomizeCustomers: function() {
       var randomCustomer = getRandomInt(this.minCustomers, this.maxCustomers);
        return randomCustomer;
    }
}
var pioneerRandoms = pioneer.randomizeCustomers();
console.log('Pioneer random customers: ' + pioneerRandoms);
console.log(pioneer);

var airport = {
    location: 'Portland Airport',
    minCustomers: 6,
    maxCustomers: 24,
    avgSale: 1.2,
    randomizeCustomers: function() {
        var randomCustomer = getRandomInt(this.minCustomers, this.maxCustomers);
        return randomCustomer;
    }
}
var airportRandoms = airport.randomizeCustomers();
console.log('Airport random customers' + airportRandoms);
console.log(airport);

var washingtonSquare = {
    location: 'Washington Square',
    minCustomers: 11,
    maxCustomers: 38,
    avgSale: 1.9,
    randomizeCustomers: function() {
        var randomCustomer = getRandomInt(this.minCustomers, this.maxCustomers);
        return randomCustomer;
    }
}
console.log(washingtonSquare);

var sellwood = {
    location: 'Sellwood',
    minCustomers: 20,
    maxCustomers: 48,
    avgSale: 3.3,
    randomizeCustomers: function() {
        var randomCustomer = getRandomInt(this.minCustomers, this.maxCustomers);
        return randomCustomer;
    }
}
console.log(sellwood);

var pearlDistrict = {
    location: 'Pearl District',
    minCustomers: 3,
    maxCustomers: 24,
    avgSale: 2.6,
    randomizeCustomers: function() {
        var randomCustomer = getRandomInt(this.minCustomers, this.maxCustomers);
        return randomCustomer;
    }
}
console.log(pearlDistrict);