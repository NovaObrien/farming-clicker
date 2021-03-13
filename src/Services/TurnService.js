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

  drawEvent() {
    const min = Math.ceil(1)
    const max = Math.floor(3)
    const draw = Math.floor(Math.random() * (max - min + 1) + min)

    logger.log('draw is ' + draw)
  }

  payBills() {
    const bills = 400
    AppState.character.currency -= bills
  }

  updateOTBs() {
    logger.log()
  }
}
export const turnService = new TurnService()
