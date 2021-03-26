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
    AppState.event.title = 'You had a child!'
    AppState.event.greeting = ''
    AppState.event.text = 'Congrats! Parenthood can feel like alot but it\'s always worth it in the end.'
    AppState.event.closing = ''
    AppState.event.closeDesc = 'Okay'
    $('#eventModal').modal('show')
    AppState.character.children++
  }

  investmentPaidOff() {
    AppState.event.title = 'An investment paid off'
    AppState.event.greeting = ''
    AppState.event.text = 'Looks like a past invesment you made finnaly showed some fruit. Don\'t spend it all in one place!'
    AppState.event.closing = ''
    AppState.event.closeDesc = 'Wonderfull'
    $('#eventModal').modal('show')
    AppState.character.currency += 1000
  }
}
export const goodFortuneService = new GoodFortuneService()
