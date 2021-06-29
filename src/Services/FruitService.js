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
    if (selectedFruit !== 'Emphty') {
      if (AppState.plantedFruit[id].title !== selectedFruit) {
        AppState.plantedFruit[id].title = selectedFruit
        AppState.fruitBonuses.fruitPlanChanged = true
        saveState()
      }
    }
  }

  checkFruitTreeLayout() {
    // how to solve a Linear Ordinary Differential Equations
    const plantedFruit = AppState.plantedFruit
    let appleBushelBonus = 0
    let peachBushelBonus = 0
    let cherryBushelBonus = 0
    let varitySave = 8

    if (plantedFruit[0].title === plantedFruit[1].title) {
      if (plantedFruit[0].title === 'Apple') {
        appleBushelBonus++
      } else if (plantedFruit[0].title === 'Peach') {
        peachBushelBonus++
      } else {
        cherryBushelBonus++
      }
      varitySave--
    }
    if (plantedFruit[0].title === plantedFruit[3].title) {
      if (plantedFruit[0].title === 'Apple') {
        appleBushelBonus++
      } else if (plantedFruit[0].title === 'Peach') {
        peachBushelBonus++
      } else {
        cherryBushelBonus++
      }
      varitySave--
    }
    if (plantedFruit[2].title === plantedFruit[1].title) {
      if (plantedFruit[2].title === 'Apple') {
        appleBushelBonus++
      } else if (plantedFruit[2].title === 'Peach') {
        peachBushelBonus++
      } else {
        cherryBushelBonus++
      }
      varitySave--
    }
    if (plantedFruit[2].title === plantedFruit[4].title) {
      if (plantedFruit[2].title === 'Apple') {
        appleBushelBonus++
      } else if (plantedFruit[2].title === 'Peach') {
        peachBushelBonus++
      } else {
        cherryBushelBonus++
      }
      varitySave--
    }

    if (plantedFruit[5].title === plantedFruit[3].title) {
      if (plantedFruit[5].title === 'Apple') {
        appleBushelBonus++
      } else if (plantedFruit[5].title === 'Peach') {
        peachBushelBonus++
      } else {
        cherryBushelBonus++
      }
      varitySave--
    }
    if (plantedFruit[5].title === plantedFruit[6].title) {
      if (plantedFruit[5].title === 'Apple') {
        appleBushelBonus++
      } else if (plantedFruit[5].title === 'Peach') {
        peachBushelBonus++
      } else {
        cherryBushelBonus++
      }
      varitySave--
    }
    if (plantedFruit[7].title === plantedFruit[4].title) {
      if (plantedFruit[7].title === 'Apple') {
        appleBushelBonus++
      } else if (plantedFruit[7].title === 'Peach') {
        peachBushelBonus++
      } else {
        cherryBushelBonus++
      }
      varitySave--
    }
    if (plantedFruit[7].title === plantedFruit[6].title) {
      if (plantedFruit[7].title === 'Apple') {
        appleBushelBonus++
      } else if (plantedFruit[7].title === 'Peach') {
        peachBushelBonus++
      } else {
        cherryBushelBonus++
      }
      varitySave--
    }

    AppState.fruitBonuses.appleBushelBonus = appleBushelBonus
    AppState.fruitBonuses.peachBushelBonus = peachBushelBonus
    AppState.fruitBonuses.cherryBushelBonus = cherryBushelBonus
    AppState.fruitBonuses.varitySave = varitySave

    AppState.fruitBonuses.fruitPlanChanged = false

    // update currently planted Fruit
    this.countPlantedTrees()
    saveState()
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
