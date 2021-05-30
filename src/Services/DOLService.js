import $ from 'jquery'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

class DOLService {
// Devils Own Luck Cards 1-20

  // decent chance
  tractorBroke() {
    if (AppState.tractors === 0) {
      AppState.event.title = 'Strange Feeling'
      AppState.event.greeting = ''
      AppState.event.text = 'You have an odd feeling that something wrong should\'ve happpened but didn\'t'
      AppState.event.closing = ''
      AppState.event.closeDesc = 'Strange'
      $('#eventModal').modal('show')
    } else {
      AppState.event.title = 'Tractor Breakdown'
      AppState.event.greeting = ''
      AppState.event.text = 'Looks like a tractor broke down this month..'
      AppState.event.closing = ''
      AppState.event.closeDesc = 'Darn shame'
      $('#eventModal').modal('show')
      AppState.tractors--
    }
  }

  brokenArm() {
    AppState.event.title = 'Broken Arm'
    AppState.event.greeting = ''
    AppState.event.text = 'It\'ll heal, but medical bills are never any fun.'
    AppState.event.closing = ''
    AppState.event.closeDesc = 'Ouch'
    $('#eventModal').modal('show')
    AppState.character.currency -= 150
  }

  sick() {
    AppState.event.title = 'Sickness'
    AppState.event.greeting = ''
    AppState.event.text = 'Weather its the common cold or ammonia, getting sick is costly.'
    AppState.event.closing = ''
    AppState.event.closeDesc = 'Yuck'
    $('#eventModal').modal('show')
    AppState.character.currency -= 100
  }

  childSick() {
    AppState.event.title = 'A sick child'
    AppState.event.greeting = ''
    AppState.event.text = 'It\'s one thing when you get sick but seeing a loved one sick is all that much harder.'
    AppState.event.closing = ''
    AppState.event.closeDesc = 'Thank god for medicine'
    $('#eventModal').modal('show')
    AppState.character.currency -= 100
  }

  costlyInvestment() {
    AppState.event.title = 'Bad Investment'
    AppState.event.greeting = ''
    AppState.event.text = 'Sometimes you win some, this time you loss.'
    AppState.event.closing = ''
    AppState.event.closeDesc = 'Can\'t win them all'
    $('#eventModal').modal('show')
    AppState.character.currency -= 500
  }

  childPassing() {
    AppState.event.title = 'Death of a Child'
    AppState.event.greeting = ''
    AppState.event.text = 'No one ever wants to see their child pass before them.. Sometimes it\'s just unavoidable.. Condolences..'
    AppState.event.closing = ''
    AppState.event.closeDesc = 'Life will never be the same...'
    $('#eventModal').modal('show')
    AppState.character.children--
  }

  killPlayer() {
    AppState.event.title = 'Game Over'
    AppState.event.greeting = ''
    AppState.event.text = 'You\'ve come along way in the game of life, but every begining has to have an end.. Thanks for Playing!'
    AppState.event.closing = ''
    AppState.event.closeDesc = 'Goodbye World'
    $('#eventModal').modal('show')
    // TODO add a way to show player stats, and a way to reset restart the game.
  }

  cropFailure() {
    logger.log('cropFailure')
  }

  badWeather() {
    logger.log('badWeather')
  }
}
export const dolService = new DOLService()
