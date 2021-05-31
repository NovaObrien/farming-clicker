import { AppState } from '../AppState'
import { saveState } from '../utils/LocalStorage'
import { logger } from '../utils/Logger'

class OptionToBuyService {
  checkCase(res) {
    switch (res) {
      case 1:
      case 8:
      case 9:
        this.removeSmallFarm()
        break
      case 2:
      case 10:
        this.removeMediumFarm()
        break
      case 3:
        this.removeLargeFarm()
        break
      case 4:
      case 11:
      case 12:
        this.addSmallFarm()
        break
      case 5:
      case 13:
        this.addMediumFarm()
        break
      case 6:
        this.addLargeFarm()
        break

      default:
        logger.log('nothing changes in market')
        // this.removeLargeFarm()
        break
    }
  }

  removeSmallFarm() {
    const smallFarms = AppState.optionsToBuy.smallFarms

    if (smallFarms.length !== 0) {
      const index = Math.floor(Math.random() * smallFarms.length)
      const farm = AppState.optionsToBuy.smallFarms[index]
      AppState.smallFarms.unshift(farm)
      AppState.optionsToBuy.smallFarms.splice(index, 1)
    } else {
      logger.log('No Small Farms To Remove')
    }
  }

  removeMediumFarm() {
    const mediumFarms = AppState.optionsToBuy.mediumFarms

    if (mediumFarms.length !== 0) {
      const index = Math.floor(Math.random() * mediumFarms.length)
      const farm = AppState.optionsToBuy.mediumFarms[index]
      AppState.mediumFarms.unshift(farm)
      AppState.optionsToBuy.mediumFarms.splice(index, 1)
    } else {
      logger.log('No Medium Farms To Remove')
    }
  }

  removeLargeFarm() {
    const largeFarms = AppState.optionsToBuy.largeFarms

    if (largeFarms.length !== 0) {
      const index = Math.floor(Math.random() * largeFarms.length)
      const farm = AppState.optionsToBuy.largeFarms[index]
      AppState.largeFarms.unshift(farm)
      AppState.optionsToBuy.largeFarms.splice(index, 1)
    } else {
      logger.log('No Large Farms To Remove')
    }
  }

  addSmallFarm() {
    const otbSmallFarms = AppState.optionsToBuy.smallFarms
    const smallFarms = AppState.smallFarms

    if (otbSmallFarms.length < 3 && smallFarms.length !== 0) {
      const index = Math.floor(Math.random() * smallFarms.length)

      const farm = AppState.smallFarms[index]

      AppState.optionsToBuy.smallFarms.unshift(farm)
      AppState.smallFarms.splice(index, 1)
    } else {
      logger.log('No Small Farms To Add')
    }
  }

  addMediumFarm() {
    const otbMediumFarms = AppState.optionsToBuy.mediumFarms
    const mediumFarms = AppState.mediumFarms

    if (otbMediumFarms.length < 3 && mediumFarms.length !== 0) {
      const index = Math.floor(Math.random() * mediumFarms.length)

      const farm = AppState.mediumFarms[index]

      AppState.optionsToBuy.mediumFarms.unshift(farm)
      AppState.mediumFarms.splice(index, 1)
    } else {
      logger.log('No Medium Farms To Add')
    }
  }

  addLargeFarm() {
    const otbLargeFarms = AppState.optionsToBuy.largeFarms
    const largeFarms = AppState.largeFarms

    if (otbLargeFarms.length < 3 && largeFarms.length !== 0) {
      const index = Math.floor(Math.random() * largeFarms.length)

      const farm = AppState.largeFarms[index]

      AppState.optionsToBuy.largeFarms.unshift(farm)
      AppState.largeFarms.splice(index, 1)
    } else {
      logger.log('No Large Farms To Add')
    }
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
      this.updateMonthlyCosts()
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
    } else if (owned.acers <= 100) {
      AppState.mediumFarms.unshift(owned)
    } else {
      AppState.largeFarms.unshift(owned)
    }
    this.updateMonthlyCosts()
    saveState()
  }

  updateMonthlyCosts() {
    const ownedLands = AppState.ownedLands
    let total = 0
    for (let i = 0; i < ownedLands.length; i++) {
      total = total + ownedLands[i].acers * 20 + ownedLands[i].beds * 100
    }
    AppState.monthlyCosts = total + 150
  }
}
export const optionToBuyService = new OptionToBuyService()
