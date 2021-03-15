import { AppState } from '../AppState'
import { saveState } from '../utils/LocalStorage'

class OptionToBuyService {
  checkMarketSlots() {
    // the general idea for the next three functions is to add or replace a otb depending on how many objects are in an array
    // my thought process on this is to have it happen randomly after a turn to a maxium of 3-4.
    // so this function will count the total than randomly decide to either add or replace a otb or even remove an otb.
    // addNewOtb will fail when the slots are too full
    // replace will randomly replace one of the slots
    // and remove will remove a random one as well
    // when a new otb is added it must be removed from the smallFarm/MedFarm/LargeFarms as in order to not duplicate any farms
    // on how to decide the type of farm I think it will be a chance thing where large farms will be lower percentage small will be higher.. Making large farm purchases more valuable when they appear

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
}
export const optionToBuyService = new OptionToBuyService()
