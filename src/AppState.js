import { reactive } from 'vue'

export const AppState = reactive({
  character: {
    name: '',
    age: 28,
    children: 0,
    currency: 900000

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
  // Tractors var isn't total tractor count but available or not in use
  tractors: 0,
  hay: 0,
  vegtables: {
    legumes: 0,
    nightshades: 0,
    chicories: 0,
    alliums: 0,
    umbels: 0
  },
  fruits: [
    { id: 0, title: 'Apple', selected: false, harvested: false },
    { id: 1, title: 'Peach', selected: false, harvested: false },
    { id: 2, title: 'Cherry', selected: false, harvested: false }
  ],
  // for next years settings
  plantedFruit: [
    { id: 0, title: 'Apple' },
    { id: 1, title: 'Apple' },
    { id: 2, title: 'Apple' },
    { id: 3, title: 'Apple' },
    { id: 4, title: 'Apple' },
    { id: 5, title: 'Apple' },
    { id: 6, title: 'Apple' },
    { id: 7, title: 'Apple' }],

  // this years settings
  curentlyPlantedFruit: {
    apples: 8,
    peaches: 0,
    cherries: 0

  },

  fruitBonuses: {
    // varitySave: reduces the effect of quality reduciton in crop diseases or bug cards +1 for each tree next to each other that are different
    varitySave: 0,
    // bushel bonus effects the amount gathered from trees +1 for each tree next to each other
    appleBushelBonus: 8,
    peachBushelBonus: 0,
    cherryBushelBonus: 0
  },

  cattle: {},
  // farmerFate: {},

  // Acer Costs for the year increase by 78 per year && bed costs increase by 1,100 update happens in timeService
  currentYearCost: {
    acerCost: 196,
    bedCost: 5000
  },
  monthlyCosts: 150,

  ownedLands: [],

  optionsToBuy: {
    smallFarms: [{ id: 2, name: 'River Banks Farm', acers: 8, type: 'Hay', beds: 2, tractorActive: false, tended: 0, quality: 50 }],
    mediumFarms: [{ id: 6, name: 'Apple Way', acers: 70, type: 'Fruit', beds: 3, tractorActive: false, tended: 0, quality: 50 }],
    largeFarms: [{ id: 12, name: 'Cattle Co.', acers: 900, type: 'Cattle', beds: 5, tractorActive: false, tended: 0, quality: 50 }]
  },

  // TODO Need to update information about acres ect | Acers Updated to fit farm type |

  // Farm Types sm <= 10 || md <= 100 || lg > 100

  smallFarms: [{ id: 1, name: 'Birch Wood Farm', acers: 10, type: 'Hay', beds: 2, tractorActive: false, tended: 0, quality: 50 }, { id: 3, name: 'Cold Creek Cottage', acers: 10, type: 'Hay', beds: 2, tractorActive: false, tended: 0, quality: 50 }, { id: 4, name: 'Oak Acres', acers: 10, type: 'Hay', beds: 3, tractorActive: false, tended: 0, quality: 50 }, { id: 5, name: 'Old Homestead', acers: 8, type: 'Hay', beds: 3, tractorActive: false, tended: 0, quality: 50 }],

  mediumFarms: [{ id: 7, name: 'Rocky Creek Cottage', acers: 20, type: 'Hay', beds: 2, tractorActive: false, tended: 0, quality: 50 }, { id: 8, name: 'Rustic Homestead', acers: 25, type: 'Hay', beds: 2, tractorActive: false, tended: 0, quality: 50 }, { id: 9, name: 'Whispering Pines', acers: 55, type: 'Hay', beds: 2, tractorActive: false, tended: 0, quality: 50 }, { id: 10, name: 'Old Grove', acers: 75, type: 'Hay', beds: 2, tractorActive: false, tended: 0, quality: 50 }, { id: 11, name: 'Ridge Farms', acers: 100, type: 'Hay', beds: 2, tractorActive: false, tended: 0, quality: 50 }],

  largeFarms: [{ id: 13, name: 'Old North Ranch', acers: 110, type: 'Hay', beds: 2, tractorActive: false, tended: 0, quality: 50 }, { id: 14, name: 'Oakdale Ranch', acers: 220, type: 'Hay', beds: 2, tractorActive: false, tended: 0, quality: 50 }, { id: 15, name: 'Sunrise Cottage', acers: 250, type: 'Hay', beds: 2, tractorActive: false, tended: 0, quality: 50 }, { id: 16, name: 'Lunar Creek Homestead', acers: 520, type: 'Hay', beds: 2, tractorActive: false, tended: 0, quality: 50 }],

  names: ['Lexi', 'Gwenda', 'Charly', 'Leianna', 'Jonie', 'Kreig', 'Kenzie', 'Marita', 'Lauren', 'Mitch', 'Ansel', 'Mike', 'Yale', 'Mason', 'Joe', 'Alan', 'Tom', 'Boby']
})
