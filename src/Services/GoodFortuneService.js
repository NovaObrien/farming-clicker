import $ from 'jquery'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

class GoodFortuneService {
// GoodFortunes 61-100
  drawFate(draw) {
    switch (draw) {
      case 61:
      case 70:
      case 71:
      case 72:
      case 73:
        this.foundMoney()
        break
      case 62:
      case 74:
      case 75:
        this.wonLottery()
        break
      case 63:
        this.wonBigLottery()
        break
      case 64:
      case 76:
      case 77:
      case 78:
        this.childBorn()
        break
      case 65:
      case 79:
      case 80:
        this.investmentPaidOff()
        break
      case 66:
      case 81:
      case 82:
        this.cryptoTakeOff()
        break
      case 67:
      case 83:
      case 84:
      case 85:
        this.wonChiliFest()
        break
      case 68:
        this.foundMoney()
        break
      case 69:
        this.foundMoney()
        break
      default:
        logger.log('case fail')
        break
    }
  }

  foundMoney() {
    AppState.event.title = 'Free Change'
    AppState.event.greeting = ''
    AppState.event.text = 'You found five bucks laying in the dirt! Every bit helps! ($5 added to your account)'
    AppState.event.closing = ''
    AppState.event.closeDesc = 'Nice'
    $('#eventModal').modal('show')
    AppState.character.currency += 100
  }

  wonLottery() {
    AppState.event.title = 'Lottery Ticket Winner'
    AppState.event.greeting = ''
    AppState.event.text = 'Looks like one of your lottery tickets paid off. ($100 has been transfered into your account)'
    AppState.event.closing = ''
    AppState.event.closeDesc = 'Nice'
    $('#eventModal').modal('show')
    AppState.character.currency += 100
  }

  wonBigLottery() {
    AppState.event.title = 'Won Big!'
    AppState.event.greeting = ''
    AppState.event.text = 'CONGRATULATIONS, it\'s your lucky day! You won big! ($' + AppState.currentYearCost.acerCost * 100 + ' has been added to your account)'
    AppState.event.closing = ''
    AppState.event.closeDesc = 'Nice!'
    $('#eventModal').modal('show')
    AppState.character.currency += AppState.currentYearCost * 100
  }

  childBorn() {
    AppState.event.title = 'Parenthood'
    AppState.event.greeting = ''
    AppState.event.text = 'Congrats! Weather it\'s adoption or childbirth, Parenthood can feel like alot but at least they can help you out with some chores!'
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

  cryptoTakeOff() {
    if (AppState.time.year > 2009) {
      AppState.event.title = 'Crypto Goes to the Moon'
      AppState.event.greeting = ''
      AppState.event.text = 'Your investement in the crypto currency Big Chungus has paid off!'
      AppState.event.closing = ''
      AppState.event.closeDesc = 'Wonderfull'
      $('#eventModal').modal('show')
      AppState.character.currency += 1000000
    } else {
      AppState.event.title = 'Future Luck'
      AppState.event.greeting = ''
      AppState.event.text = 'You can feel the winds of luck blowing your way, you feel a fruitfull future headed your way! Probably..'
      AppState.event.closing = ''
      AppState.event.closeDesc = 'Ahh Lucky Wind..'
      $('#eventModal').modal('show')
    }
  }

  wonChiliFest() {
    AppState.event.title = 'Chili Contest Winner!'
    AppState.event.greeting = ''
    AppState.event.text = 'Looks like the judges loved your chili! Enjoy the sweet trophy! ($150 has been added to your account)'
    AppState.event.closing = ''
    AppState.event.closeDesc = 'Wonderfull'
    $('#eventModal').modal('show')
    AppState.character.currency += 150
  }
}

export const goodFortuneService = new GoodFortuneService()
