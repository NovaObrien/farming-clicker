import $ from 'jquery'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

class GoodFortuneService {
// GoodFortunes 60-100

  foundMoney() {
    logger.log('foundMoney')
  }

  wonLottery() {
    AppState.event.title = 'Lottery Ticket Winner'
    AppState.event.greeting = ''
    AppState.event.text = 'Looks like one of your lottery tickets paid off. $100 has been transfered into your account'
    AppState.event.closing = ''
    AppState.event.closeDesc = 'Nice'
    $('#eventModal').modal('show')
    AppState.character.currency += 100
  }

  wonBigLottery() {
    AppState.event.title = 'Won Big!'
    AppState.event.greeting = ''
    AppState.event.text = 'CONGRATULATIONS, it\'s your lucky day! You won big! ' + AppState.currentYearCost * 100
    AppState.event.closing = ''
    AppState.event.closeDesc = 'Nice!'
    $('#eventModal').modal('show')
    AppState.character.currency += AppState.currentYearCost * 100
  }

  childBorn() {
    logger.log('childBorn')
  }

  investmentPaidOff() {
    logger.log('investmentPaidOff')
  }
}
export const goodFortuneService = new GoodFortuneService()
