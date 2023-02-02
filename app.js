'use strict';

let cityTableBody = document.querySelector('tbody');
let cityTableHead = document.querySelector('thead');
let cityTableFoot = document.querySelector('tfoot');

let hour = ['', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Daily Location Total'];

let cityArrays = [];

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

    for (let i=1; i<hour.length-1; i++){
      let td = document.createElement('td');
      td.textContent = this.cookiesSold();
      tr.appendChild(td);
      this.arr.push(parseInt(td.textContent));
    }
    let dayTotal = 0;
    for (let i=1; i<this.arr.length; i++){
      dayTotal+=this.arr[i];
    }
    let td = document.createElement('td');
    td.textContent = dayTotal;
    tr.appendChild(td);
    this.arr.push(dayTotal);
    cityArrays.push(this.arr);
  };
}

function fillTableTotals(){
  console.log('in table totals');
  let tr = document.createElement('tr');
  cityTableFoot.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = 'Totals:';
  tr.appendChild(th);
  //console.log(th.textContent);
  console.log(cityArrays);
  for(let i=1; i<hour.length; i++){
    let t = document.createElement('td');
    let total = 0;
    for(let j=0; j<cityArrays.length;j++){
      total+=cityArrays[j][i];
      console.log(cityArrays[j][i], total);
    }
    //console.log('in fill table totals first loop')
    t.textContent = total;
    tr.appendChild(t);
  }
}

let seattle = new City('Seattle', 23, 65, 6.3);
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



let cityForm = document.querySelector('form');
``
let handleSubmit = function(event){
  event.preventDefault();
  console.log('inHandleSubmit');
  let cityName = event.target.cityName.value;
  let min = event.target.min.value;
  let max = event.target.max.value;
  let avg = event.target.avg.value;

  let newCity = new City(cityName, min, max, avg);
  cityTableFoot.lastChild.remove();
  newCity.fillTable();
  fillTableTotals();
};

cityForm.addEventListener('submit', handleSubmit);
