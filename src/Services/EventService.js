import { AppState } from '../AppState'
import $ from 'jquery'

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

  // Devils Own Luck Cards

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

  wonLottery() {

  }
}
export const eventService = new EventService()
