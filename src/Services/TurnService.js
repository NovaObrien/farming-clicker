import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { dolService } from './DOLService'
import { goodFortuneService } from './GoodFortuneService'
import { optionToBuyService } from './OptionToBuyService'
import $ from 'jquery'

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
    // const draw = 1
    if (draw <= 20) {
      dolService.drawFate(draw)
    } else if (draw <= 60) {
      // Uneventfull  20-60
      AppState.event.title = 'Just another month'
      AppState.event.greeting = ''
      AppState.event.text = 'Sometimes nothing happening is okay'
      AppState.event.closing = ''
      AppState.event.closeDesc = 'Okay'
      $('#eventModal').modal('show')
    } else {
      goodFortuneService.drawFate(draw)
    }
  }
}
export const turnService = new TurnService()
