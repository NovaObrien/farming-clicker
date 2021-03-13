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
    year: 1980,
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
  optionsToBuy: {},
  farmerFate: {},
  tractors: {},
  names: ['Lexi', 'Gwenda', 'Charly', 'Leianna', 'Jonie', 'Kreig', 'Kenzie', 'Marita', 'Lauren', 'Mitch', 'Ansel', 'Mike', 'Yale', 'Mason', 'Joe', 'Alan', 'Tom', 'Boby'],
  // TODO Need to update information about acres ect
  smallFarms: [{ name: 'Birch Wood Farm', acers: 10, type: 'Hay', beds: 2 }, { name: 'River Banks Farm', acers: 8, type: 'Hay', beds: 2 }, { name: 'CreekBend Cottage', acers: 20, type: 'Hay', beds: 2 }, { name: 'Oak Acres', acers: 10, type: 'Hay', beds: 2 }, { name: 'Old Homestead', acers: 10, type: 'Hay', beds: 2 }],

  mediumFarms: [{ name: 'Apple Way', acers: 10, type: 'Hay', beds: 2 }, { name: 'Rocky Creek Cottage', acers: 10, type: 'Hay', beds: 2 }, { name: 'Rustic Homestead', acers: 10, type: 'Hay', beds: 2 }, { name: 'Whispering Pines', acers: 10, type: 'Hay', beds: 2 }, { name: 'Old Grove', acers: 10, type: 'Hay', beds: 2 }, { name: 'Ridge Farms', acers: 10, type: 'Hay', beds: 2 }],

  largeFarms: [{ name: 'Cattle Co.', acers: 10, type: 'Hay', beds: 2 }, { name: 'Old North Ranch', acers: 10, type: 'Hay', beds: 2 }, { name: 'Oakdale Ranch', acers: 10, type: 'Hay', beds: 2 }, { name: 'Sunrise Cottage', acers: 10, type: 'Hay', beds: 2 }, { name: 'Lunar Creek Homestead', acers: 10, type: 'Hay', beds: 2 }]

})
