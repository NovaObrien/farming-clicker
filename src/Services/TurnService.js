import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

class TurnService {
  endTurn() {
    // Here we are going to do some probability depending on the turn
    // One if crops weren't harvested than they will perish
    // Two if crops werent' sold than they can perish
    // Three New Option to buys can enter the Market
    // Four a farmers fate like event can happen
    // Five or an uneventfull event may appear
    // Six or a good fortune event may appear
    // at the end of the year send in event showing a recolection of the past year
    // We will also pay bills for our house/ farms
    // this.updateOTBs()
    this.drawEvent()
    this.payBills()
  }

  payBills() {
    const ownedLands = AppState.ownedLands
    let cost = 0
    for (let i = 0; i < ownedLands.length; i++) {
      cost = cost + ownedLands[i].acers * 25 + ownedLands[i].beds * 100
    }
    logger.log(cost)
    const bills = 400 + cost
    if (bills > AppState.character.currency) {
      logger.log('cant afford')
    } else {
      AppState.character.currency -= bills
    }
  }

  updateOTBs() {
    logger.log()
  }

  drawEvent() {
    const min = Math.ceil(1)
    const max = Math.floor(100)
    const draw = Math.floor(Math.random() * (max - min + 1) + min)

    logger.log('draw is ' + draw)
    // 20 % chance of DOL..
    // 40 % chance of uneventfull
    // 40 % chance of goodFortune
    if (draw <= 20) {
      this.devilsOwnLuck()
    } else if (draw <= 60) {
      this.uneventfull()
    } else {
      this.goodFortune()
    }
  }

  // Card Draws Below
  devilsOwnLuck() {
    logger.log('DOL')
  }

  uneventfull() {
    logger.log('uneventfull')
  }

  goodFortune() {
    logger.log('Good Fortune')
  }
}
export const turnService = new TurnService()
