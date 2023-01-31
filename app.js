'use strict';

let cityTableBody = document.querySelector('tbody');
let cityTableHead = document.querySelector('thead');
let cityTableFoot = document.querySelector('tfoot');

let hour = ['', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

function fillCityTableHeadings(){
  for(let i=0; i<hour.length; i++){
    let th = document.createElement('th');
    th.textContent = hour[i];
    cityTableHead.appendChild(th);
  }
}
fillCityTableHeadings();

function City (name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesSold = function(){
    return Math.floor((Math.random() * (this.max - this.min + 1) + this.min)*this.avg);
  };
  this.arr = [];
  this.fillTable = function(){
    let tr = document.createElement('tr');
    cityTableBody.appendChild(tr);

    let th = document.createElement('th');
    th.textContent = this.name;
    tr.appendChild(th);
    this.arr.push(this.name);

    for (let i=1; i<hour.length; i++){
      let td = document.createElement('td');
      td.textContent = this.cookiesSold();
      tr.appendChild(td);
      this.arr.push(parseInt(td.textContent));
    }
  };
}

function fillTableTotals(){
  let th = document.createElement('th');
  th.textContent = 'Totals:';
  cityTableFoot.appendChild(th);
  for(let i=1; i<hour.length; i++){
    let total = document.createElement('td');
    total.textContent = seattle.arr[i]+tokyo.arr[i]+dubai.arr[i]+paris.arr[i]+lima.arr[i];
    // console.log(total.textContent);
    cityTableFoot.appendChild(total);
  }
}

let seattle = new City('Seattle', 23, 65, 6.3);``
seattle.fillTable();

let tokyo = new City('Tokyo', 3, 24, 1.2);
tokyo.fillTable();

let dubai = new City('Dubai', 11, 38, 3.7);
dubai.fillTable();

let paris = new City('Paris', 20, 38, 2.3);
paris.fillTable();

let lima = new City('Lima', 2, 16, 4.6);
lima.fillTable();

fillTableTotals();
