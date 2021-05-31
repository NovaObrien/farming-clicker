import { AppState } from '../AppState'
import { saveState } from '../utils/LocalStorage'
import { logger } from '../utils/Logger'

class OptionToBuyService {
  checkCase(res) {
    // the general idea for the next three functions is to add or replace a otb depending on how many objects are in an array
    // my thought process on this is to have it happen randomly after a turn to a maxium of 3-4.
    // so this function will count the total than randomly decide to either add or replace a otb or even remove an otb.
    // addNewOtb will fail when the slots are too full
    // replace will randomly replace one of the slots
    // and remove will remove a random one as well
    // when a new otb is added it must be removed from the smallFarm/MedFarm/LargeFarms as in order to not duplicate any farms
    // on how to decide the type of farm I think it will be a chance thing where large farms will be lower percentage small will be higher.. Making large farm purchases more valuable when they appear

    switch (res) {
      case 1:
      case 8:
      case 9:
        logger.log('remove sm farm')
        break
      case 2:
      case 10:
        logger.log('remove med farm')
        break
      case 3:
        logger.log('remove lg farm')
        break
      case 4:
      case 11:
      case 12:
        logger.log('add sm farm')
        break
      case 5:
      case 13:
        logger.log('ad md farm')
        break
      case 6:
        logger.log('add lg farm')
        break
      case 7:
      case 14:
      case 15:
        logger.log('nothing changes')
        break

      default:
        break
    }
  }

  addNewOtb() {

  }

  replaceOtb() {

  }

  removeOtb() {

  }

  purchaseLand(option) {
    const money = AppState.character.currency
    const yearCost = AppState.currentYearCost
    const cost = option.acers * yearCost + option.beds * 2000
    if (money >= cost) {
      AppState.character.currency -= cost
      // removes property and adds to owned list
      const index = AppState.optionsToBuy.findIndex(o => o.id === option.id)
      AppState.optionsToBuy.splice(index, 1)
      AppState.ownedLands.unshift(option)
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
