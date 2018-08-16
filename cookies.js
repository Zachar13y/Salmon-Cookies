var Store = function(location, minCustomers, maxCustomers) {
    this.Location = location;
    this.MinCustomers = minCustomers;
    this.MaxCustomers = maxCustomers;

    ////////////Takes user input to add to the table
//     var locationName = this.location.length;
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
        table.appendChild(row);
    }
}
//////////////////////////////

var stores = [];
stores.push(new Store('Pioneer Square', 'Min. Customers: 17', 'Max. Customers: 88'));
stores.push(new Store('Portland Airport', 'Min. Customers: 6', 'Max. Customers: 24'));
stores.push(new Store('Washington Square', 'Min. Customers: 11', 'Max. Customers: 38'));
stores.push(new Store('Sellwood', 'Min. Customers: 20', 'Max. Customers: 48'));
stores.push(new Store('Pearl District', 'Min. Customers: 3', 'Max. Customers: 24'));

var referenceTable = document.getElementById('salmon-table').firstElementChild;
for (var i=0; i < stores.length; i++) {
    stores[i].addToTable(referenceTable);
}
