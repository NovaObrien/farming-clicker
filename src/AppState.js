import { reactive } from 'vue'

export const AppState = reactive({
  character: {
    name: '',
    age: 28,
    children: 0,
    currency: 900000,
    tractors: 0

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
  farmerFate: {},

  // Acer Costs for the year increase by 78 per year
  currentYearCost: 196,
  monthlyCosts: 150,
  ownedLands: [],

  optionsToBuy: {
    smallFarms: [{ id: 2, name: 'River Banks Farm', acers: 8, type: 'Hay', beds: 2 }],
    mediumFarms: [{ id: 6, name: 'Apple Way', acers: 70, type: 'Fruit', beds: 3 }],
    largeFarms: [{ id: 12, name: 'Cattle Co.', acers: 900, type: 'Cattle', beds: 5 }]
  },

  names: ['Lexi', 'Gwenda', 'Charly', 'Leianna', 'Jonie', 'Kreig', 'Kenzie', 'Marita', 'Lauren', 'Mitch', 'Ansel', 'Mike', 'Yale', 'Mason', 'Joe', 'Alan', 'Tom', 'Boby'],

  // TODO Need to update information about acres ect | Acers Updated to fit farm type |

  // Farm Types sm <= 10 || md <= 100 || lg > 100

  smallFarms: [{ id: 1, name: 'Birch Wood Farm', acers: 10, type: 'Hay', beds: 2 }, { id: 3, name: 'Cold Creek Cottage', acers: 10, type: 'Hay', beds: 2 }, { id: 4, name: 'Oak Acres', acers: 10, type: 'Hay', beds: 3 }, { id: 5, name: 'Old Homestead', acers: 8, type: 'Hay', beds: 3 }],

  mediumFarms: [{ id: 7, name: 'Rocky Creek Cottage', acers: 20, type: 'Hay', beds: 2 }, { id: 8, name: 'Rustic Homestead', acers: 25, type: 'Hay', beds: 2 }, { id: 9, name: 'Whispering Pines', acers: 55, type: 'Hay', beds: 2 }, { id: 10, name: 'Old Grove', acers: 75, type: 'Hay', beds: 2 }, { id: 11, name: 'Ridge Farms', acers: 100, type: 'Hay', beds: 2 }],

  largeFarms: [{ id: 13, name: 'Old North Ranch', acers: 110, type: 'Hay', beds: 2 }, { id: 14, name: 'Oakdale Ranch', acers: 220, type: 'Hay', beds: 2 }, { id: 15, name: 'Sunrise Cottage', acers: 250, type: 'Hay', beds: 2 }, { id: 16, name: 'Lunar Creek Homestead', acers: 520, type: 'Hay', beds: 2 }]
})
