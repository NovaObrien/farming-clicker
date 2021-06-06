import { AppState } from '../AppState'
import { saveState } from '../utils/LocalStorage'

class FarmService {
  setTractor(owned) {
    const index = AppState.ownedLands.findIndex(o => o.id === owned.id)
    const bool = AppState.ownedLands[index].tractorActive

    if (AppState.tractors > 0 && bool === false) {
      AppState.ownedLands[index].tractorActive = true
      AppState.tractors--
      saveState()
    } else if (bool === true) {
      AppState.ownedLands[index].tractorActive = false
      AppState.tractors++
      saveState()
    }
  }

  // happens when you sell tractor
  returnTractor(owned) {
    const index = AppState.ownedLands.findIndex(o => o.id === owned.id)
    const bool = AppState.ownedLands[index].tractorActive
    if (bool === true) {
      AppState.ownedLands[index].tractorActive = false
      AppState.tractors++
    }
  }

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
    AppState.plantedFruit[id].title = selectedFruit
    saveState()
  }

  checkFruitTreeLayout() {
    debugger
    const plantedFruit = AppState.plantedFruit
    let bushelBonus = 0
    let varityBonus = 8
    if (plantedFruit[0].title === plantedFruit[1].title) {
      bushelBonus++
      varityBonus--
    }
    if (plantedFruit[0].title === plantedFruit[3].title) {
      bushelBonus++
      varityBonus--
    }
    if (plantedFruit[2].title === plantedFruit[1].title) {
      bushelBonus++
      varityBonus--
    }
    if (plantedFruit[2].title === plantedFruit[4].title) {
      bushelBonus++
      varityBonus--
    }

    if (plantedFruit[5].title === plantedFruit[3].title) {
      bushelBonus++
      varityBonus--
    }
    if (plantedFruit[5].title === plantedFruit[6].title) {
      bushelBonus++
      varityBonus--
    }
    if (plantedFruit[7].title === plantedFruit[4].title) {
      bushelBonus++
      varityBonus--
    }
    if (plantedFruit[7].title === plantedFruit[6].title) {
      bushelBonus++
      varityBonus--
    }

    AppState.fruitBonuses.bushelBonus = bushelBonus
    AppState.fruitBonuses.varityBonus = varityBonus

    // how to solve a Linear Ordinary Differential Equations
    let apples = 0
    let peaches = 0
    let cherries = 0

    for (let i = 0; i < 8; i++) {
      if (plantedFruit[i].title === 'Apple') {
        apples++
      } else if (plantedFruit[i].title === 'Peach') {
        peaches++
      } else {
        cherries++
      }
    }

    AppState.curentlyPlantedFruit.apples = apples
    AppState.curentlyPlantedFruit.peaches = peaches
    AppState.curentlyPlantedFruit.cherries = cherries
  }

  harvestFruit(owned) {
    const month = AppState.time.month
    const numFruits = AppState.curentlyPlantedFruit
    if (month === 'June' || month === 'July') {
      if (AppState.fruits[2].harvested !== true) {
        AppState.character.currency += numFruits.cherries * AppState.fruitBonuses.bushelBonus * owned.quality

        AppState.fruits[2].harvested = true
      }
    }

    if (month === 'July' || month === 'August') {
      if (AppState.fruits[1].harvested !== true) {
        AppState.character.currency += numFruits.peaches * AppState.fruitBonuses.bushelBonus * owned.quality

        AppState.fruits[1].harvested = true
      }
    }

    if (month === 'June' || month === 'July') {
      if (AppState.fruits[2].harvested !== true) {
        AppState.character.currency += numFruits.cherries * AppState.fruitBonuses.bushelBonus * owned.quality

        AppState.fruits[2].harvested = true
      }
    }
  }

  tend(owned) {
    if (owned.tended < owned.acers) {
      const index = AppState.ownedLands.findIndex(o => o.id === owned.id)
      let tended = AppState.ownedLands[index].tended
      tended += AppState.character.children + 1

      if (tended > owned.acers) {
        AppState.ownedLands[index].tended = owned.acers
        saveState()
      } else {
        AppState.ownedLands[index].tended = tended

        const mod = tended % 10
        if (mod === 0 || mod === 5) {
          saveState()
        }
      }
    }
  }

  checkTend() {
    for (let i = 0; i < AppState.ownedLands.length; i++) {
      if (AppState.ownedLands[i].tended === AppState.ownedLands[i].acers) {
        AppState.ownedLands[i].quality++
      } else {
        AppState.ownedLands[i].quality -= 1
      }
      AppState.ownedLands[i].tended = 0
    }
  }
}
export const farmService = new FarmService()
