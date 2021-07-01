import { AppState } from '../AppState'
import { saveState } from '../utils/LocalStorage'
import { logger } from '../utils/Logger'
import { fruitService } from './FruitService'
import { hayService } from './HayService'

class FarmService {
  hireHelpingHands(owned) {
    let helpingHands = owned.active.workers
    helpingHands === false ? helpingHands = true : helpingHands = false
    const index = AppState.ownedLands.findIndex(o => o.id === owned.id)
    AppState.ownedLands[index].active.workers = helpingHands
    AppState.ownedLands[index].active.home = false
  }

  setHome(owned) {
    const familySize = AppState.character.children + 1
    if (owned.beds > familySize) { return }
    this.deactivateOldHome()
    const index = AppState.ownedLands.findIndex(o => o.id === owned.id)
    AppState.ownedLands[index].active.home = true
    AppState.ownedLands[index].active.workers = false
    // After setting Active Home Makes sure to deactivate any previous homes
  }

  deactivateOldHome() {
    for (let i = 0; i < AppState.ownedLands.length; i++) {
      if (AppState.ownedLands[i].active.home === true) {
        AppState.ownedLands[i].active.home = false
        return
      }
    }
  }

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

  harvest(owned) {
    if (owned.type === 'Hay') {
      hayService.harvestHay(owned)
    } else if (owned.type === 'Fruit') {
      fruitService.harvestFruit(owned)
    } else {
      logger.log('harvest not implemented for type')
    }
  }

  tend(owned) {
    if (owned.active.home === false && owned.active.workers === false) { return }
    const index = AppState.ownedLands.findIndex(o => o.id === owned.id)
    if (owned.active.home !== false) {
      if (owned.tended < owned.acers) {
        let tended = AppState.ownedLands[index].tended
        tended += AppState.character.children + 1

        if (tended >= owned.acers) {
          AppState.ownedLands[index].tended = owned.acers
          saveState()
        } else {
          AppState.ownedLands[index].tended = tended

          // Makes Save happen not every click
          const mod = tended % 10
          if (mod === 0 || mod === 5) {
            saveState()
          }
        }
      }
    } else {
      AppState.ownedLands[index].tended = owned.acers
      saveState()
    }
  }

  checkTend() {
    const qualityDecrease = 1
    const resetValue = 0
    for (let i = 0; i < AppState.ownedLands.length; i++) {
      if (AppState.ownedLands[i].tended >= AppState.ownedLands[i].acers) {
        AppState.ownedLands[i].quality++
      } else {
        AppState.ownedLands[i].quality -= qualityDecrease
      }
      AppState.ownedLands[i].tended = resetValue
    }
  }

  updateFruit() {
    fruitService.checkFruitTreeLayout()
    if (AppState.fruitBonuses.fruitPlanChanged === true) {
      fruitService.countFruitBonuses()
      fruitService.countPlantedTrees()
      AppState.fruitBonuses.fruitPlanChanged = false
    } else {
      fruitService.incYearlyFruitQuality()
    }
    fruitService.resetFruitHarvest()
    saveState()
  }
}
export const farmService = new FarmService()
