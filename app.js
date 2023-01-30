'use strict';


let cities = document.getElementById('cities');
console.log(cities);

let hour = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ',];

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  getRandomCustmersByAvgCookies: function() {
    return Math.floor(((Math.random() * (this.max - this.min) + this.min))*this.avg);
  },
  arr: [],
  fillArr: function() {
    for (let i=0; i<hour.length; i++){
      this.arr.push(`${hour[i]} ${this.getRandomCustmersByAvgCookies()} cookies`);
    }
  },
  printCity: function() {
    let citySection = document.createElement('section');
    cities.appendChild(citySection);

    let cityHeading = document.createElement('h3');
    cityHeading.textContent = `${this.name}`;
    citySection.appendChild(cityHeading);

    let cookiesByHour = document.createElement('ul');
    citySection.appendChild(cookiesByHour);

    for (let i=0; i<this.arr.length; i++){
      let time = document.createElement('li');
      time.textContent = `${this.arr[i]}`;
      cookiesByHour.appendChild(time);
    }
  }
};
seattle.fillArr();

let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  getRandomCustmersByAvgCookies: function() {
    return Math.floor(((Math.random() * (this.max - this.min) + this.min))*this.avg);
  },
  arr: [],
  fillArr: function() {
    for (let i=0; i<hour.length; i++){
      this.arr.push(`${hour[i]} ${this.getRandomCustmersByAvgCookies()} cookies`);
    }
  },
  printCity: function() {
    let citySection = document.createElement('section');
    cities.appendChild(citySection);

    let cityHeading = document.createElement('h3');
    cityHeading.textContent = `${this.name}`;
    citySection.appendChild(cityHeading);

    let cookiesByHour = document.createElement('ul');
    citySection.appendChild(cookiesByHour);

    for (let i=0; i<this.arr.length; i++){
      let time = document.createElement('li');
      time.textContent = `${this.arr[i]}`;
      cookiesByHour.appendChild(time);
    }
  }
};
tokyo.fillArr();

let dubai = {
  name: 'Dubai',
  min:11,
  max: 38,
  avg: 3.7,
  getRandomCustmersByAvgCookies: function() {
    return Math.floor(((Math.random() * (this.max - this.min) + this.min))*this.avg);
  },
  arr: [],
  fillArr: function() {
    for (let i=0; i<hour.length; i++){
      this.arr.push(`${hour[i]} ${this.getRandomCustmersByAvgCookies()} cookies`);
    }
  },
  printCity: function() {
    let citySection = document.createElement('section');
    cities.appendChild(citySection);

    let cityHeading = document.createElement('h3');
    cityHeading.textContent = `${this.name}`;
    citySection.appendChild(cityHeading);

    let cookiesByHour = document.createElement('ul');
    citySection.appendChild(cookiesByHour);

    for (let i=0; i<this.arr.length; i++){
      let time = document.createElement('li');
      time.textContent = `${this.arr[i]}`;
      cookiesByHour.appendChild(time);
    }
  }
};
dubai.fillArr();

let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  getRandomCustmersByAvgCookies: function() {
    return Math.floor(((Math.random() * (this.max - this.min) + this.min))*this.avg);
  },
  arr: [],
  fillArr: function() {
    for (let i=0; i<hour.length; i++){
      this.arr.push(`${hour[i]} ${this.getRandomCustmersByAvgCookies()} cookies`);
    }
  },
  printCity: function() {
    let citySection = document.createElement('section');
    cities.appendChild(citySection);

    let cityHeading = document.createElement('h3');
    cityHeading.textContent = `${this.name}`;
    citySection.appendChild(cityHeading);

    let cookiesByHour = document.createElement('ul');
    citySection.appendChild(cookiesByHour);

    for (let i=0; i<this.arr.length; i++){
      let time = document.createElement('li');
      time.textContent = `${this.arr[i]}`;
      cookiesByHour.appendChild(time);
    }
  }
};
paris.fillArr();

let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  getRandomCustmersByAvgCookies: function() {
    return Math.floor(((Math.random() * (this.max - this.min) + this.min))*this.avg);
  },
  arr: [],
  fillArr: function() {
    for (let i=0; i<hour.length; i++){
      this.arr.push(`${hour[i]} ${this.getRandomCustmersByAvgCookies()} cookies`);
    }
  },
  printCity: function() {
    let citySection = document.createElement('section');
    cities.appendChild(citySection);

    let cityHeading = document.createElement('h3');
    cityHeading.textContent = `${this.name}`;
    citySection.appendChild(cityHeading);

    let cookiesByHour = document.createElement('ul');
    citySection.appendChild(cookiesByHour);

    for (let i=0; i<this.arr.length; i++){
      let time = document.createElement('li');
      time.textContent = `${this.arr[i]}`;
      cookiesByHour.appendChild(time);
    }
  }
};
lima.fillArr();

seattle.printCity();
tokyo.printCity();
dubai.printCity();
paris.printCity();
lima.printCity();
