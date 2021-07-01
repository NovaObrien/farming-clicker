import Swal from 'sweetalert2'
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
    if (selectedFruit === 'Emphty') {
      return
    }
    AppState.plantedFruit[id].title = selectedFruit
    saveState()
  }

  checkFruitTreeLayout() {
    // how to solve a Linear Ordinary Differential Equations
    const plantedFruit = AppState.plantedFruit
    const oldPlantedFruit = AppState.oldPlantedFruit

    for (let i = 0; i < plantedFruit.length; i++) {
      if (plantedFruit[i].title !== oldPlantedFruit[i].title) {
        AppState.fruitBonuses.fruitPlanChanged = true
        AppState.oldPlantedFruit = plantedFruit
      }
    }
  }

  countFruitBonuses() {
    const plantedFruit = AppState.plantedFruit
    const startingFruitBonusValue = 0
    const startingVarritySaveValue = 8

    AppState.fruitBonuses.appleBushelBonus = startingFruitBonusValue
    AppState.fruitBonuses.peachBushelBonus = startingFruitBonusValue
    AppState.fruitBonuses.cherryBushelBonus = startingFruitBonusValue
    AppState.fruitBonuses.varitySave = startingVarritySaveValue
    const plotArr = [0, 0, 2, 2, 5, 5, 7, 7]
    const checkedArr = [1, 3, 1, 4, 3, 6, 4, 6]

    for (let i = 0; i < plotArr.length; i++) {
      if (plantedFruit[plotArr[i]].title === plantedFruit[checkedArr[i]].title) {
        if (plantedFruit[plotArr[i]].title === 'Apple') {
          AppState.fruitBonuses.appleBushelBonus++
        } else if (plantedFruit[plotArr[i]].title === 'Peach') {
          AppState.fruitBonuses.peachBushelBonus++
        } else {
          AppState.fruitBonuses.cherryBushelBonus++
        }
        AppState.fruitBonuses.varitySave--
      }
    }
  }

  countPlantedTrees() {
    let apples = 0
    let peaches = 0
    let cherries = 0
    const fruit = AppState.plantedFruit
    for (let i = 0; i < fruit.length; i++) {
      if (fruit[i].title === 'Apple') {
        apples++
      } else if (fruit[i].title === 'Peach') {
        peaches++
      } else {
        cherries++
      }
    }
    AppState.currentlyPlantedFruit.apples = apples
    AppState.currentlyPlantedFruit.peaches = peaches
    AppState.currentlyPlantedFruit.cherries = cherries
  }

  harvestFruit(owned) {
    // debugger
    const season = AppState.time.season
    const numFruits = AppState.currentlyPlantedFruit
    if (season === 'Spring') {
      if (owned.harvestables.cherries !== true && AppState.currentlyPlantedFruit.cherries !== 0) {
        const total = numFruits.cherries * AppState.fruitBonuses.cherryBushelBonus * owned.quality
        Swal.fire({
          title: 'Harvest',
          text: 'Your Cherries Sold for ' + (total).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          })
        })
        AppState.character.currency += total

        owned.harvestables.cherries = true
        saveState()
      }
    } else if (season === 'Summer') {
      if (owned.harvestables.peaches !== true && AppState.currentlyPlantedFruit.peaches !== 0) {
        const total = numFruits.peaches * AppState.fruitBonuses.peachBushelBonus * owned.quality
        Swal.fire({
          title: 'Harvest',
          text: 'Your Peaches Sold for ' + (total).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          })
        })
        AppState.character.currency += total

        owned.harvestables.peaches = true
        saveState()
      }
    } else if (season === 'Fall') {
      if (owned.harvestables.apples !== true && AppState.currentlyPlantedFruit.apples !== 0) {
        const total = numFruits.apples * AppState.fruitBonuses.appleBushelBonus * owned.quality
        Swal.fire({
          title: 'Harvest',
          text: 'Your Apples Sold for ' + (total).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          })
        })
        AppState.character.currency += total

        owned.harvestables.apples = true
        saveState()
      }
    }
  }

  resetFruitHarvest() {
    const ownedLand = AppState.ownedLands
    for (let i = 0; i < ownedLand.length; i++) {
      if (ownedLand[i].type === 'Fruit') {
        ownedLand[i].harvestables.cherries = false
        ownedLand[i].harvestables.peaches = false
        ownedLand[i].harvestables.apples = false
      }
    }
    AppState.ownedLands = ownedLand
  }
}
export const fruitService = new FruitService()
