function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInt(20, 100));
console.log(getRandomInt(4, 15));

var store = {
    location: 'Pioneer Square',
    minCustomers: 17,
    maxCustomers: 88,
    avgSale: 5.2,
    calculateAvg: function() {
        getRandomInt(this.minCustomers, this.maxCustomers);
    },
}
console.log(store);