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
    logger.log('sick')
  }

  childSick() {
    logger.log('childSick')
  }

  childPassing() {
    logger.log('childPassing')
  }

  killPlayer() {
    logger.log('killPlayer')
    // math.random based on age
  }

  miscarriage() {
    logger.log('misscarriage')
  }

  wifePassing() {
    logger.log('wifePassing')
  }

  cropFailure() {
    logger.log('cropFailure')
  }

  badWeather() {
    logger.log('badWeather')
  }
}
export const dolService = new DOLService()
