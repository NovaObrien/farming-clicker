import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

class OptionToBuyService {
  addNewOtb() {

  }

  replaceOtb() {

  }

  purchaseLand(option) {
    const money = AppState.character.currency
    const yearCost = AppState.currentyearCost
    const cost = option.acers * yearCost + option.beds * 2000
    if (money < cost) {
      logger.log('not enough money')
    } else {
      AppState.character.currency -= cost
    }
  }
}
export const optionToBuyService = new OptionToBuyService()
