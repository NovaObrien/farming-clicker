import { AppState } from '../AppState'
import { saveState } from '../utils/LocalStorage'
import { logger } from '../utils/Logger'
import { fruitService } from './FruitService'
import { hayService } from './HayService'

class FarmService {
  setHome(owned) {
    // debugger
    const index = AppState.ownedLands.findIndex(o => o.id === owned.id)
    AppState.ownedLands[index].active.home = true
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
    if (owned.active.home !== false) {
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
    // else if (owned.active.workers !== false) {

    // }
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

  updateFruit() {
    if (AppState.fruitBonuses.fruitPlanChanged === true) {
      fruitService.checkFruitTreeLayout()
    } else {
      for (let i = 0; i < AppState.ownedLands.length; i++) {
        if (AppState.ownedLands[i].type === 'Fruit') {
          AppState.ownedLands[i].quality += 10
        }
      }
    }
    fruitService.resetFruitHarvest()
  }
}
export const farmService = new FarmService()
