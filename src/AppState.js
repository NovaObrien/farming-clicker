import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  character: {
    name: '',
    age: 28,
    children: 0

  },
  time: {
    turn: 3,
    year: 1984,
    month: 'March',
    season: 'Spring'
  },
  hay: 0,
  vegtables: {},
  fruits: {},
  cattle: {},
  money: {},
  ownedLand: [],
  otb: {},
  farmerFate: {},
  tractors: {},
  names: ['Lexi', 'Gwenda', 'Charly', 'Leianna', 'Jonie', 'Kreig', 'Kenzie', 'Marita', 'Lauren', 'Mitch', 'Ansel', 'Mike', 'Yale', 'Mason', 'Joe', 'Alan', 'Tom', 'Boby']
})
