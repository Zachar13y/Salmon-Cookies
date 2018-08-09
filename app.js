function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInt(20, 100));
console.log(getRandomInt(4, 15));

var pioneer = {
    location: 'Pioneer Square',
    minCustomers: 17,
    maxCustomers: 88,
    avgSale: 5.2,
    calculateAvg: function() {
        getRandomInt(this.minCustomers, this.maxCustomers);
        return this.calculateAvg;
    }
}
console.log(pioneer);

var airport = {
    location: 'Portland Airport',
    minCustomers: 6,
    maxCustomers: 24,
    avgSale: 1.2
}
console.log(airport);

var washingtonSquare = {
    location: 'Washington Square',
    minCustomers: 11,
    maxCustomers: 38,
    avgSale: 1.9
}
console.log(washingtonSquare);

var sellwood = {
    location: 'Sellwood',
    minCustomers: 20,
    maxCustomers: 48,
    avgSale: 3.3
}
console.log(sellwood);

var pearlDistrict = {
    location: 'Pearl District',
    minCustomers: 3,
    maxCustomers: 24,
    avgSale: 2.6
}
console.log(pearlDistrict);