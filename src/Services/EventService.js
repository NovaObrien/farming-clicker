import { AppState } from '../AppState'
import $ from 'jquery'
import { logger } from '../utils/Logger'

class EventService {
  inherEvent() {
    AppState.event.title = 'An Inheritance'
    AppState.event.greeting = 'Dear ' + AppState.character.name + ','
    AppState.event.text = ' I\'m George Brawn, a Lawyer from NewYork. I am contacting you in regards to a desceased client of mine who died in Australia on the 9th of January. Before his death my client left you a sum of 9,000.00 USD in his will, along with the following message..."Hey there kid, if you\'re reading this before I get to see you again, I just wanted to tell you to follow those dreams you were telling me about.. Start that farm and raise that family you always wanted.. Don\'t let the days pass you by.'
    AppState.event.closing = 'Love, Grandpa"'
    AppState.event.closeDesc = 'He\'s in a better place now'
    $('#eventModal').modal('show')
  }

  bankruptcyEvent() {
    // occurs when the player runs out of assets
    AppState.event.title = 'Bankruptcy'
    AppState.event.greeting = ''
    AppState.event.text = ''
    AppState.event.closing = ''
    AppState.event.closeDesc = 'It was fun while it lasted'
    $('#eventModal').modal('show')
  }

  birthdayEvent() {
    AppState.event.title = 'It\'s Your Birthday!!!'
    AppState.event.greeting = ''
    AppState.event.text = 'From everyone here at Management Co. we wish you another wonderfull year!'
    AppState.event.closing = ''
    AppState.event.closeDesc = 'Another year older...'
    $('#eventModal').modal('show')
  }

  // Uneventfull  20-60
  uneventfull() {
    AppState.event.title = 'Just another month'
    AppState.event.greeting = ''
    AppState.event.text = 'Sometimes nothing happening is okay'
    AppState.event.closing = ''
    AppState.event.closeDesc = 'Okay'
    $('#eventModal').modal('show')
  }

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
      AppState.event.title = 'Devil\'s Own Luck'
      AppState.event.greeting = ''
      AppState.event.text = 'Looks like a tractor broke down this month..'
      AppState.event.closing = ''
      AppState.event.closeDesc = 'Darn shame'
      $('#eventModal').modal('show')
      AppState.tractors--
    }
  }

  brokenArm() {
    logger.log('brokenArm')
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

  }

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
}
export const eventService = new EventService()
