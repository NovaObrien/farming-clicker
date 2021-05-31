import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { dolService } from './DOLService'
import { eventService } from './EventService'
import { goodFortuneService } from './GoodFortuneService'
import { optionToBuyService } from './OptionToBuyService'

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
    if (AppState.time.turn !== 3) { this.drawEvent() }
    this.payBills()
    this.updateOTBs()
  }

  payBills() {
    const bills = AppState.monthlyCosts
    if (bills > AppState.character.currency) {
      logger.log('cant afford')
    } else {
      AppState.character.currency -= bills
    }
  }

  updateOTBs() {
    const min = Math.ceil(1)
    const max = Math.floor(20)
    const res = Math.floor(Math.random() * (max - min + 1) + min)
    logger.log('otb res = ' + res)
    optionToBuyService.checkCase(res)
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
      this.devilsOwnLuck(draw)
    } else if (draw <= 60) {
      this.uneventfull()
    } else {
      this.goodFortune(draw)
    }
  }

  // Card Draws Below
  devilsOwnLuck(draw) {
    dolService.drawFate(draw)
  }

  uneventfull() {
    eventService.uneventfull()
  }

  goodFortune(draw) {
    goodFortuneService.drawFate(draw)
  }
}
export const turnService = new TurnService()
