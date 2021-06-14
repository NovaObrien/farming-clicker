import { AppState } from '../AppState'
import { saveState } from '../utils/LocalStorage'

class FruitService {
  setActiveFruit(id) {
    switch (id) {
      case 0:
        AppState.fruits[0].selected = true
        AppState.fruits[1].selected = false
        AppState.fruits[2].selected = false

        break
      case 1:
        AppState.fruits[0].selected = false
        AppState.fruits[1].selected = true
        AppState.fruits[2].selected = false
        break
      case 2:
        AppState.fruits[0].selected = false
        AppState.fruits[1].selected = false
        AppState.fruits[2].selected = true
        break
      default:
        break
    }
  }

  plantFruit(id, selectedFruit) {
    if (selectedFruit !== 'Emphty') {
      AppState.plantedFruit[id].title = selectedFruit
      saveState()
    }
  }

  checkFruitTreeLayout() {
    // how to solve a Linear Ordinary Differential Equations
    const plantedFruit = AppState.plantedFruit
    let appleBushelBonus = 0
    let peachBushelBonus = 0
    let cherryBushelBonus = 0
    let varitySave = 8

    let apples = 0
    let peaches = 0
    let cherries = 0
    if (plantedFruit[0].title === plantedFruit[1].title) {
      if (plantedFruit[0].title === 'Apple') {
        appleBushelBonus++
        apples++
      } else if (plantedFruit[0].title === 'Peach') {
        peachBushelBonus++
        peaches++
      } else {
        cherryBushelBonus++
        cherries++
      }
      varitySave--
    }
    if (plantedFruit[0].title === plantedFruit[3].title) {
      if (plantedFruit[0].title === 'Apple') {
        appleBushelBonus++
        apples++
      } else if (plantedFruit[0].title === 'Peach') {
        peachBushelBonus++
        peaches++
      } else {
        cherryBushelBonus++
        cherries++
      }
      varitySave--
    }
    if (plantedFruit[2].title === plantedFruit[1].title) {
      if (plantedFruit[2].title === 'Apple') {
        appleBushelBonus++
        apples++
      } else if (plantedFruit[2].title === 'Peach') {
        peachBushelBonus++
        peaches++
      } else {
        cherryBushelBonus++
        cherries++
      }
      varitySave--
    }
    if (plantedFruit[2].title === plantedFruit[4].title) {
      if (plantedFruit[2].title === 'Apple') {
        appleBushelBonus++
        apples++
      } else if (plantedFruit[2].title === 'Peach') {
        peachBushelBonus++
        peaches++
      } else {
        cherryBushelBonus++
        cherries++
      }
      varitySave--
    }

    if (plantedFruit[5].title === plantedFruit[3].title) {
      if (plantedFruit[5].title === 'Apple') {
        appleBushelBonus++
        apples++
      } else if (plantedFruit[5].title === 'Peach') {
        peachBushelBonus++
        peaches++
      } else {
        cherryBushelBonus++
        cherries++
      }
      varitySave--
    }
    if (plantedFruit[5].title === plantedFruit[6].title) {
      if (plantedFruit[5].title === 'Apple') {
        appleBushelBonus++
        apples++
      } else if (plantedFruit[5].title === 'Peach') {
        peachBushelBonus++
        peaches++
      } else {
        cherryBushelBonus++
        cherries++
      }
      varitySave--
    }
    if (plantedFruit[7].title === plantedFruit[4].title) {
      if (plantedFruit[7].title === 'Apple') {
        appleBushelBonus++
        apples++
      } else if (plantedFruit[7].title === 'Peach') {
        peachBushelBonus++
        peaches++
      } else {
        cherryBushelBonus++
        cherries++
      }
      varitySave--
    }
    if (plantedFruit[7].title === plantedFruit[6].title) {
      if (plantedFruit[7].title === 'Apple') {
        appleBushelBonus++
        apples++
      } else if (plantedFruit[7].title === 'Peach') {
        peachBushelBonus++
        peaches++
      } else {
        cherryBushelBonus++
        cherries++
      }
      varitySave--
    }

    AppState.fruitBonuses.appleBushelBonus = appleBushelBonus
    AppState.fruitBonuses.peachBushelBonus = peachBushelBonus
    AppState.fruitBonuses.cherryBushelBonus = cherryBushelBonus
    AppState.fruitBonuses.varitySave = varitySave

    AppState.curentlyPlantedFruit.apples = apples
    AppState.curentlyPlantedFruit.peaches = peaches
    AppState.curentlyPlantedFruit.cherries = cherries
  }

  harvestFruit(owned) {
    const month = AppState.time.month
    const numFruits = AppState.curentlyPlantedFruit
    if (month === 'June' || month === 'July') {
      if (AppState.fruits[2].harvested !== true) {
        AppState.character.currency += numFruits.cherries * AppState.fruitBonuses.appleBushelBonus * owned.quality

        AppState.fruits[2].harvested = true
      }
    }

    if (month === 'July' || month === 'August') {
      if (AppState.fruits[1].harvested !== true) {
        AppState.character.currency += numFruits.peaches * AppState.fruitBonuses.peachBushelBonus * owned.quality

        AppState.fruits[1].harvested = true
      }
    }

    if (month === 'June' || month === 'July') {
      if (AppState.fruits[2].harvested !== true) {
        AppState.character.currency += numFruits.cherries * AppState.fruitBonuses.cherryBushelBonus * owned.quality

        AppState.fruits[2].harvested = true
      }
    }
  }
}
export const fruitService = new FruitService()
