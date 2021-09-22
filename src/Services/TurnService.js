import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { dolService } from './DOLService'
import { goodFortuneService } from './GoodFortuneService'
import { optionToBuyService } from './OptionToBuyService'
import $ from 'jquery'
import { farmService } from './FarmService'

class TurnService {
  endTurn() {
    if (AppState.time.turn !== 3) {
      this.drawEvent()
    }
    this.payBills()
    this.updateOTBs()

    farmService.checkTend()
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
