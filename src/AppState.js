import { reactive } from 'vue'

export const AppState = reactive({
  character: {
    name: '',
    age: 28,
    children: 0,
    currency: 9000

  },
  time: {
    turn: 3,
    year: 1970,
    month: 'March',
    season: 'Spring'
  },
  event: {
    title: '',
    greeting: '',
    text: '',
    closing: '',
    closeDesc: ''
  },
  hay: 0,
  vegtables: {},
  fruits: {},
  cattle: {},
  ownedLand: [],
  farmerFate: {},
  tractors: {},

  // farm cost: year cost * acer + beds * 2000
  // bills is 5% of cost lets say... 500 *12 =6000 so lets say 20k for a year survival rate
  currentyearCost: 196,

  optionsToBuy: [{ id: 2, name: 'River Banks Farm', acers: 8, type: 'Hay', beds: 2 }, { id: 6, name: 'Apple Way', acers: 70, type: 'Fruit', beds: 3 }, { id: 12, name: 'Cattle Co.', acers: 500, type: 'Cattle', beds: 5 }],

  names: ['Lexi', 'Gwenda', 'Charly', 'Leianna', 'Jonie', 'Kreig', 'Kenzie', 'Marita', 'Lauren', 'Mitch', 'Ansel', 'Mike', 'Yale', 'Mason', 'Joe', 'Alan', 'Tom', 'Boby'],

  // TODO Need to update information about acres ect
  smallFarms: [{ id: 1, name: 'Birch Wood Farm', acers: 10, type: 'Hay', beds: 2 }, { id: 2, name: 'River Banks Farm', acers: 8, type: 'Hay', beds: 2 }, { id: 3, name: 'CreekBend Cottage', acers: 20, type: 'Hay', beds: 2 }, { id: 4, name: 'Oak Acres', acers: 30, type: 'Hay', beds: 3 }, { id: 5, name: 'Old Homestead', acers: 15, type: 'Hay', beds: 3 }],

  mediumFarms: [{ id: 6, name: 'Apple Way', acers: 70, type: 'Fruit', beds: 3 }, { id: 7, name: 'Rocky Creek Cottage', acers: 10, type: 'Hay', beds: 2 }, { id: 8, name: 'Rustic Homestead', acers: 10, type: 'Hay', beds: 2 }, { id: 9, name: 'Whispering Pines', acers: 10, type: 'Hay', beds: 2 }, { id: 10, name: 'Old Grove', acers: 10, type: 'Hay', beds: 2 }, { id: 11, name: 'Ridge Farms', acers: 10, type: 'Hay', beds: 2 }],

  largeFarms: [{ id: 12, name: 'Cattle Co.', acers: 500, type: 'Cattle', beds: 5 }, { id: 13, name: 'Old North Ranch', acers: 10, type: 'Hay', beds: 2 }, { id: 14, name: 'Oakdale Ranch', acers: 10, type: 'Hay', beds: 2 }, { id: 15, name: 'Sunrise Cottage', acers: 10, type: 'Hay', beds: 2 }, { id: 16, name: 'Lunar Creek Homestead', acers: 10, type: 'Hay', beds: 2 }]

})
