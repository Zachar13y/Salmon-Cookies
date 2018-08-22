var Store = function(location, minCustomers, maxCustomers, avgCookies) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;

    ////////////////////////////
    // var locationName = this.location.length;
    // var min = this.minCustomers.length;

    this.addToTable = function(table) {
        var row = document.createElement('tr');
        var cell = document.createElement('td');
        cell.innerText = this.location;
        row.appendChild(cell);
        cell = document.createElement('td');
        cell.innerText = this.minCustomers;
        row.appendChild(cell);
        cell = document.createElement('td');
        cell.innerText = this.maxCustomers;
        row.appendChild(cell);
        table.appendChild(row);
        cell = document.createElement('td');
        cell.innerText = this.avgCookies
        row.appendChild(cell);
        table.appendChild(row);
    }
}

var stores = [];
stores.push(new Store('Pioneer Square', '17', '88'));
stores.push(new Store('Portland Airport', '6', '24'));
stores.push(new Store('Washington Square', '11', '38'));
stores.push(new Store('Sellwood', '20', '48'));
stores.push(new Store('Pearl District', '3', '24'));

var referenceTable = document.getElementById('salmon-table').firstElementChild;
for (var i=0; i < stores.length; i++) {
    stores[i].addToTable(referenceTable);
}

var Time = function(hour, cookies) {
    this.hour = hour;
    this.cookies = cookies;

    this.addToTable = function(table) {
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    cell.innerText = this.hour;
    row.appendChild(cell);
    cell = document.createElement('tr');
    cell.innerText = this.cookies;
    row.appendChild(cell);
    cell = document.createElement('td');
    table.appendChild(row);
    }
}


var hours = [];
hours.push(new Time('10am', 'hypothetical cookie'));
hours.push(new Time('11am', 'hypothetical cookie'));
hours.push(new Time('12pm'));
hours.push(new Time('1pm'));
hours.push(new Time('2pm'));
hours.push(new Time('3pm'));
hours.push(new Time('4pm'));
hours.push(new Time('5pm'));


var referenceTime = document.getElementById('time-table').firstElementChild;
for (var i=0; i < hours.length; i++) {
    hours[i].addToTable(referenceTime);
}



