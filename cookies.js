var Store = function(location, minCustomers, maxCustomers) {
    this.Location = location;
    this.Min.Customers = minCustomers;
    this.Max.Customers = maxCustomers;
}
var locationName = this.location.length;
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

var s