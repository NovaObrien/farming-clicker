import { AppState } from '../AppState'
import { saveState } from '../utils/LocalStorage'
import { logger } from '../utils/Logger'

class OptionToBuyService {
  checkCase(res) {
    switch (res) {
      // case 1:
      // case 8:
      // case 9:
      //   logger.log('remove sm farm')
      //   break
      // case 2:
      // case 10:
      //   logger.log('remove med farm')
      //   break
      // case 3:
      //   logger.log('remove lg farm')
      //   break
      // case 4:
      // case 11:
      // case 12:
      //   logger.log('add sm farm')
      //   break
      // case 5:
      // case 13:
      //   logger.log('add md farm')
      //   break
      // case 6:
      //   logger.log('add lg farm')
      //   break

      // case 7:
      // case 14:
      // case 15:
      //   logger.log('nothing changes')
      //   break

      default:
        // logger.log('nothing changes in market')
        this.addSmallFarm()
        break
    }
  }

  removeSmallFarm() {
    const smallFarms = AppState.optionsToBuy.smallFarms

    if (smallFarms.length !== 0) {
      const index = Math.floor(Math.random() * (smallFarms.length) - 1)
      logger.log(index)
      AppState.optionsToBuy.smallFarms.splice(index, 1)
    } else {
      logger.log('No Small Farms To Remove')
    }
  }

  removeMediumFarm() {
    logger.log('medRem')
  }

  removeLargeFarm() {
    logger.log('lgRem')
  }

  addSmallFarm() {
    const otbSmallFarms = AppState.optionsToBuy.smallFarms
    const smallFarms = AppState.smallFarms

    if (otbSmallFarms.length < 3 && smallFarms.length !== 0) {
      const index = Math.floor(Math.random() * smallFarms.length)

      logger.log('index: ' + index)

      const farm = AppState.smallFarms[index]

      AppState.optionsToBuy.smallFarms.unshift(farm)
      AppState.smallFarms.splice(index, 1)
    } else {
      logger.log('No Small Farms To Add')
    }
  }

  addMediumFarm() {
    logger.log('medAdd')
  }

  addLargeFarm() {
    logger.log('lgAdd')
  }

  // =================================
  // ========== End Case =============
  // =================================

  purchaseLand(option) {
    const money = AppState.character.currency
    const yearCost = AppState.currentYearCost
    const cost = option.acers * yearCost + option.beds * 2000
    if (money >= cost) {
      AppState.character.currency -= cost
      // removes property and adds to owned list
      if (option.acers <= 10) {
        const index = AppState.optionsToBuy.smallFarms.findIndex(o => o.id === option.id)
        AppState.optionsToBuy.smallFarms.splice(index, 1)
        AppState.ownedLands.unshift(option)
      } else if (option.acers <= 100) {
        const index = AppState.optionsToBuy.mediumFarms.findIndex(o => o.id === option.id)
        AppState.optionsToBuy.mediumFarms.splice(index, 1)
        AppState.ownedLands.unshift(option)
      } else {
        const index = AppState.optionsToBuy.largeFarms.findIndex(o => o.id === option.id)
        AppState.optionsToBuy.largeFarms.splice(index, 1)
        AppState.ownedLands.unshift(option)
      }
      saveState()
    }
  }

  sellLand(owned) {
    const yearCost = AppState.currentYearCost
    AppState.character.currency += ((owned.acers * yearCost + owned.beds * 2000) * 0.8)

    const index = AppState.ownedLands.findIndex(o => o.id === owned.id)
    AppState.ownedLands.splice(index, 1)

    if (owned.acers <= 10) {
      AppState.smallFarms.unshift(owned)
    } else if (owned.acers <= 40) {
      AppState.mediumFarms.unshift(owned)
    } else {
      AppState.largeFarms.unshift(owned)
    }
    saveState()
  }
}
export const optionToBuyService = new OptionToBuyService()
